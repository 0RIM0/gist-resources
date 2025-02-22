// Gist データの作成
// [
//   [id, filename, created_at, text],
//   ...
// ]
// の json データを出力
// 別途圧縮
//   zstd gist-data.json -o gist-data.zst

// 多くなってくると取得量が多いので繰り返し実行するようならキャッシュさせたい
// ローカルファイルに変換済み md を保存しておいて updated_at が更新されてたら再取得
// json はローカルファイルから構築
// 取得できるのは固定で created_at の降順で後から更新したのが先頭に来ない
// API からの取得は全件行って updated_at を見る

import { Window } from "happy-dom"
import markdownit from "markdown-it"
import fs from "node:fs"

const md = markdownit()
const window = new Window({ url: "https://localhost:8080" })

const getGists = async function*() {
	let url = `https://api.github.com/users/${user}/gists?per_page=100&page=1`

	while (url) {
		const res = await fetch(url)
		const urls = parseLink(res.headers.get("link") || "")
		url = urls.next
		const result = await res.json()

		yield result
	}
}

const getTextFile = async (url) => {
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

const [user] = process.argv.slice(2)
const min_date = new Date("2018-01-01")
const max_date = new Date("2099-01-01")
const min_text_length = 50

if (!user) {
	console.log("user is empty")
	process.exit(1)
}

const file = fs.createWriteStream("gist-data.json")
file.write("[")
let first = true

const processed = new Set()

for await (const gists of getGists()) {
	for (const { id, files, created_at } of gists) {
		const date_created_at = new Date(created_at)
		if (date_created_at < min_date || max_date < date_created_at) continue

		// 自身のを取得するときは通常ないはずだけど途中で Gist が追加されると
		// 次のページに重複が出る可能性があるので一応重複判定とスキップ
		if (processed.has(id)) continue
		processed.add(id)

		for (const { filename, type, raw_url } of Object.values(files)) {
			if (type === "text/markdown") {
				const text = await getTextFile(raw_url)
				if (text.length < min_text_length) continue
				if (!first) {
					file.write(",")
				}
				file.write(JSON.stringify([id, filename, created_at, text]))
				process.stdout.write(".")
				first = false
			}
		}
		process.stdout.write(":")
	}
}

file.write("]")
file.close()

console.log("done")
