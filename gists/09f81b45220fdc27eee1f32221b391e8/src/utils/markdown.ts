import { marked } from "marked"
import { createHighlighterCore } from "shiki/core"
import markedShiki from "marked-shiki"
import { createOnigurumaEngine } from "shiki/engine/oniguruma"
import githubLightDefault from "@shikijs/themes/github-light-default"
import githubDarkDefault from "@shikijs/themes/github-dark-default"
import typescript from "@shikijs/langs/typescript"
import javascript from "@shikijs/langs/javascript"
import html from "@shikijs/langs/html"
import css from "@shikijs/langs/css"
import json from "@shikijs/langs/json"
import yaml from "@shikijs/langs/yaml"
import toml from "@shikijs/langs/toml"
import markdown from "@shikijs/langs/markdown"
import tsx from "@shikijs/langs/tsx"
import jsx from "@shikijs/langs/jsx"
import php from "@shikijs/langs/php"
import python from "@shikijs/langs/python"
import xml from "@shikijs/langs/xml"
import sql from "@shikijs/langs/sql"
import powershell from "@shikijs/langs/powershell"
import shellscript from "@shikijs/langs/bash"

const highlighter = await createHighlighterCore({
	themes: [githubLightDefault, githubDarkDefault],
	langs: [
		typescript,
		javascript,
		html,
		css,
		json,
		yaml,
		toml,
		markdown,
		tsx,
		jsx,
		php,
		python,
		xml,
		sql,
		powershell,
		shellscript,
	],
	engine: createOnigurumaEngine(import("shiki/wasm")),
})

marked.use(
	{ gfm: true },
	markedShiki({
		highlight(code, lang) {
			return highlighter.codeToHtml(code, {
				lang,
				themes: { light: "github-light-default", dark: "github-dark-default" },
				defaultColor: false,
			})
		},
	}),
)

export { marked }
