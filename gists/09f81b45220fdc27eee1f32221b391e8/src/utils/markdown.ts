import { marked } from "marked"
import { createHighlighterCore } from "shiki/core"
import markedShiki from "marked-shiki"
import { createOnigurumaEngine } from "shiki/engine/oniguruma"
import githubLightDefault from "@shikijs/themes/github-light-default"
import githubDarkDefault from "@shikijs/themes/github-dark-default"
import { langs, dynamic_langs } from "./highlight-langs"

const highlighter = await createHighlighterCore({
	themes: [githubLightDefault, githubDarkDefault],
	langs,
	engine: createOnigurumaEngine(import("shiki/wasm")),
})

marked.use(
	{ gfm: true },
	markedShiki({
		async highlight(code, lang) {
			if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
				const lang_module = dynamic_langs[lang]
				if (lang_module) {
					await highlighter.loadLanguage(lang_module)
				} else {
					console.warn(`invalid lang: "${lang}"`)
					lang = "text"
				}
			}

			return highlighter.codeToHtml(code, {
				lang,
				themes: { light: "github-light-default", dark: "github-dark-default" },
				defaultColor: false,
			})
		},
	}),
)

export { marked }
