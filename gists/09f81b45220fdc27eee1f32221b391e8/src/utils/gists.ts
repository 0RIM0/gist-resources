import type { Endpoints } from "@octokit/types"
import { marked } from "./markdown"

type GistResponse = Endpoints["GET /gists/{gist_id}"]["response"]["data"]

export const getGists = async (hash: string) => {
	const response = await fetch(`https://api.github.com/gists/${hash}`)
	const data: GistResponse = await response.json()

	const promises = Object.values(data.files ?? {}).map(async (file) => {
		if (!file) return []

		// YYYY-MM.md or YYYY-MM-title.md のみ対象
		const matched = file.filename!.match(/^(\d{4}-\d{2})(?:-(.+))?\.md$/)
		if (!matched) return []
		const [, group, title] = matched

		let content = ""
		if (file.truncated!) {
			const response = await fetch(file.raw_url!)
			content = await response.text()
		} else {
			content = file.content!
		}

		const html = await marked.parse(content)
		const group_name = group!.replace("-", "/")

		if (title) {
			// title ありなら単体でそのまま
			return [
				{
					group_name,
					title,
					body: html,
				},
			]
		} else {
			// title なしならまとめなので hr で分割
			return html
				.split("<hr>")
				.map((body) => {
					return {
						group_name,
						title: null,
						body: body.trim(),
					}
				})
				.filter((article) => article.body)
		}
	})

	const articles = (await Promise.all(promises)).flat()
	const groups = Object.groupBy(articles, (article) => article.group_name)

	return Object.values(groups)
		.map((group) => {
			return {
				group: group![0]!.group_name,
				articles: group!
					.toSorted((a, b) => (a.title ?? "").localeCompare(b.title ?? ""))
					.map(({ title, body }) => ({ title, body })),
			}
		})
		.toSorted((a, b) => b.group.localeCompare(a.group))
}

export type Gists = Awaited<ReturnType<typeof getGists>>
