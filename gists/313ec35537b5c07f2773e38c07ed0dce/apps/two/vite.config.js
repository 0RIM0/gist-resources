import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import { defineConfig } from "vite-plus"
import { lazyPlugins } from "vite-plus"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/two/" : "",
		server: {
			port: 3002,
			proxy: {
				"/style.css": "http://localhost:3000",
				"/sw.js": "http://localhost:3000",
			},
		},
		lint: {
			plugins: ["react", "oxc"],
			rules: {
				"react/rules-of-hooks": "error",
				"react/only-export-components": [
					"warn",
					{
						allowConstantExport: true,
					},
				],
				"vite-plus/prefer-vite-plus-imports": "error",
			},
			options: {
				typeAware: true,
				typeCheck: true,
			},
			jsPlugins: [
				{
					name: "vite-plus",
					specifier: "vite-plus/oxlint-plugin",
				},
			],
		},
		plugins: lazyPlugins(() => [react(), babel({ presets: [reactCompilerPreset()] })]),
	}
})
