import { defineConfig } from "vite-plus"

import react_config from "./apps/react/vite.config.ts"
import lit_config from "./apps/lit/vite.config.ts"

export default defineConfig({
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
				files: ["apps/react/**"],
				...react_config.lint,
				options: undefined, // options があるとパースエラーになるので上書きで削除
			},
			{
				files: ["apps/lit/**"],
				...lit_config.lint,
			},
		],
	},
	run: {
		cache: true,
	},
})
