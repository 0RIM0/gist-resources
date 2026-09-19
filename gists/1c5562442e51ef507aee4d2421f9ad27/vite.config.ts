import { defineConfig } from "vite-plus"

import aurelia_config from "./apps/aurelia/vite.config.ts"
import react_config from "./apps/react/vite.config.ts"
import lit_config from "./apps/lit/vite.config.ts"

export default defineConfig((env) => {
	return {
		fmt: {
			semi: false,
			useTabs: true,
			tabWidth: 4,
			singleQuote: false,
			ignorePatterns: [
				"dist/**",
				"_pages_/**",
				"**/angular/**/*.html", // oxfmt が angular の HTML に対応してないので除外
			],
		},
		lint: {
			jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
			rules: { "vite-plus/prefer-vite-plus-imports": "error" },
			options: { typeAware: true, typeCheck: true },
			ignorePatterns: ["dist/**", "_pages_/**"],
			overrides: [
				{
					files: ["apps/aurelia/**"],
					...aurelia_config(env).lint,
				},
				{
					files: ["apps/react/**"],
					...react_config(env).lint,
					options: undefined, // options があるとパースエラーになるので上書きで削除
				},
				{
					files: ["apps/lit/**"],
					...lit_config(env).lint,
				},
			],
		},
		run: {
			cache: true,
		},
	}
})
