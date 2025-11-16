// Gist データの作成
// {
//   timestamp: "timestamp string",
//   gists: [
//     [id, filename, created_at, text],
//     ...
//   ]
// }
// の json データを出力
// 別途圧縮
//   zstd gist-data.json -o gist-data.zst

import fs from "node:fs"
import path from "node:path"
import { parseArgs } from "node:util"

import { Window } from "happy-dom"
import markdownit from "markdown-it"

const md = markdownit()
const window = new Window({ url: "https://localhost:8080" })

const getGists = async function*(user) {
	let url = `https://api.github.com/users/${user}/gists?per_page=100&page=1`

	while (url) {
		const res = await fetch(url)
		const urls = parseLink(res.headers.get("link") || "")
		url = urls.next
		const result = await res.json()

		yield result
	}
}

const getMarkdownFile = async (url) => {
	const res = await fetch(url)
	const body = await res.text()
	const html = md.render(body)

	const document = window.document
	document.body.innerHTML = html
	return document.body.innerText.replace(/\s+/g, " ")
}

const parseLink = (link_header) => {
	const matches = [...link_header.matchAll(/<(https:\/\/.+?)>; rel="(.+?)"/g)]
	return Object.fromEntries(
		matches.map(([_, url, rel]) => {
			return [rel, new URL(url)]
		}),
	)
}

const createCache = (directory) => {
	return directory
		? async (key, register) => {
			const cache_file = path.join(directory, key)
			let text
			if (fs.existsSync(cache_file)) {
				const buf = await fs.promises.readFile(cache_file)
				text = buf.toString()
			} else {
				text = await register()
				await fs.promises.mkdir(path.dirname(cache_file), { recursive: true })
				await fs.promises.writeFile(cache_file, text)
			}
			return text
		}
		: (key, register) => register()
}

const validateOptions = ({ values }) => {
	const errors = []
	const options = {}

	if (!values.user) {
		errors.push("user is required")
	} else {
		options.user = values.user
	}

	const min_date = new Date(values["min-date"])
	if (isNaN(min_date)) {
		errors.push("min-date is invalid date")
	} else {
		options.min_date = min_date
	}

	const max_date = new Date(values["max-date"])
	if (isNaN(max_date)) {
		errors.push("max-date is invalid date")
	} else {
		options.max_date = max_date
	}

	if (isNaN(values["min-text-length"])) {
		errors.push("min-text-length is invalid number")
	} else {
		options.min_text_length = ~~values["min-text-length"]
	}

	options.output = values.output
	options.cache = values.cache

	return [errors, options]
}

const [errors, options] = validateOptions(
	parseArgs({
		options: {
			user: {
				type: "string",
				short: "u",
			},
			"min-date": {
				type: "string",
				default: "2018-01-01",
			},
			"max-date": {
				type: "string",
				default: "2099-12-31",
			},
			"min-text-length": {
				type: "string",
				default: "50",
			},
			output: {
				type: "string",
				short: "o",
				default: "gist-data.json",
			},
			cache: {
				type: "string",
				short: "c",
			},
		},
	}),
)

if (errors.length) {
	console.log("log:")
	console.log(errors.map(x => "  - " + x).join("\n"))
	console.log("Usage:")
	console.log("  node generate.js -u <GITHUB_USERNAME> -o <OUTPUT_PATH> -c <CACHE_DIR_PATH>")
	process.exit(1)
}

console.log("options:", options)

const getGistFiles = async function*(options) {
	const processed = new Set()
	const cache = createCache(options.cache)

	for await (const gists of getGists(options.user)) {
		for (const { id, files, description, created_at, updated_at } of gists) {
			const date_created_at = new Date(created_at)
			if (date_created_at < options.min_date || options.max_date < date_created_at) continue

			// 自身のを取得するときは通常ないはずだけど途中で Gist が追加されると
			// 次のページに重複が出る可能性があるので一応重複判定とスキップ
			if (processed.has(id)) continue
			processed.add(id)

			const timestamp = updated_at.replace(/[-\/_:]/g, "")

			for (const { filename, type, raw_url } of Object.values(files)) {
				if (type === "text/markdown") {
					const key = `${id}_${timestamp}/${filename}`
					let text = await cache(key, () => getMarkdownFile(raw_url))

					// gist の description も本文に含める
					// 1 gist に複数の markdown ファイルがあると全てに含めることになるけど
					// 基本は 1 ファイルだけなので気にしない
					if (!text.startsWith(description)) {
						text = description + " " + text
					}
					if (text.length < options.min_text_length) continue

					yield { id, filename, created_at, text }
					process.stdout.write(".")
				}
			}
			process.stdout.write(":")
		}
	}
}

// json format: { timestamp: "2025-01-01T00:00:00Z", gists: [] }
const file = fs.createWriteStream(options.output)
file.write(`{"timestamp":"${new Date().toJSON()}","gists":[`)

let first = true

for await (const { id, filename, created_at, text } of getGistFiles(options)) {
	if (!first) {
		file.write(",")
	}
	first = false

	file.write(JSON.stringify([id, filename, created_at, text]))
}

file.write(`]}`)
file.close()

console.log("done")
