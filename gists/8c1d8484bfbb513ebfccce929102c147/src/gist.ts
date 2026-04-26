import dayjs from "dayjs"

const getMyUser = async (token: string) => {
	const url = `https://api.github.com/user`
	const response = await fetch(url, {
		method: "GET",
		cache: "no-store",
		headers: {
			Accept: "application/vnd.github.v3+json",
			Authorization: `Bearer ${token}`,
		},
	})
	return {
		status: response.status,
		headers: response.headers,
		body: await response.json(),
	}
}

const getGist = async (gist_id: string) => {
	const url = `https://api.github.com/gists/${gist_id}`
	const response = await fetch(url, {
		method: "GET",
		cache: "no-store",
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
	})
	return {
		status: response.status,
		headers: response.headers,
		body: await response.json(),
	}
}

const updateGist = async (token: string, gist_id: string, filename: string, content: string) => {
	const url = `https://api.github.com/gists/${gist_id}`
	const response = await fetch(url, {
		method: "PATCH",
		headers: {
			Accept: "application/vnd.github.v3+json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			files: {
				[filename]: { content },
			},
		}),
	})
	return {
		status: response.status,
		headers: response.headers,
		body: await response.json(),
	}
}

type FilenameType = "month-group" | "month-single" | "custom"

const resolveFilename = (filename_type: FilenameType, filename_rule: string | null, filenames: string[]) => {
	const getMaxN = (pattern: RegExp) => {
		const ns = filenames
			.map((filename) => {
				const matched = filename.match(pattern)
				if (matched) {
					return ~~matched[1]!
				} else {
					return null
				}
			})
			.filter((x) => x != null) as number[]

		const max = ns.length === 0 ? 0 : Math.max(...ns)
		return max
	}

	if (filename_type === "month-group") {
		return dayjs().format("YYYY-MM") + ".md"
	} else if (filename_type === "month-single") {
		// YYYY-MM-NNN の NNN を見つける
		const yyyymm = dayjs().format("YYYY-MM")
		const pattern = new RegExp(`^${yyyymm}-(\\d+)\\.md$`)

		const max = getMaxN(pattern)
		const nnn = (max + 1).toString().padStart(3, "0")

		return `${yyyymm}-${nnn}.md`
	} else {
		const d = dayjs()

		if (!filename_rule) {
			throw new Error("ファイル名は必須です")
		}

		// 一時的に入れておく代替文字
		const n_alt = "⚡️"
		let n_length = 0
		const filename = filename_rule.replace(/\{([A-Z]+)\}/g, (_, match) => {
			if (match.match(/^N+$/)) {
				n_length = match.length
				return n_alt
			} else {
				return d.format(match)
			}
		})

		const n_alt_count = (filename.match(new RegExp(RegExp.escape(n_alt), "g")) ?? []).length
		if (n_alt_count > 1) {
			throw new Error("N はひとつまでです")
		}

		const pattern = new RegExp(`^${RegExp.escape(filename).replace(n_alt, "(\\d")}$`)

		const max = getMaxN(pattern)
		const nnn = (max + 1).toString().padStart(n_length, "0")

		return filename.replace(n_alt, nnn)
	}
}

const mergeContents = (base: string, addition: string, separator: boolean) => {
	let post = addition.replace(/\n+$/, "") + "\n"

	if (separator) {
		post += "\n---\n"
	}

	const pre = base.replace(/\n+$/, "")

	if (!pre) {
		return post
	} else if (!separator || pre.match(/(^|\n)-{3,}$/)) {
		// separator がすでに pre にあるならつけない
		return pre + "\n\n" + post
	} else {
		return pre + "\n\n---\n\n" + post
	}
}

export { getMyUser, getGist, updateGist, resolveFilename, mergeContents, type FilenameType }
