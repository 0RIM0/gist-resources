import { defineConfig } from "vite"
import babel from "@rolldown/plugin-babel"

export default defineConfig({
	base: "./",
	build: {
		outDir: "_pages_",
		minify: false,
	},
	plugins: [
		babel({
			presets: [
				{
					preset: () => ({
						plugins: [
							// 標準デコレータ(Stage 3仕様)を古いJSへ変換する設定
							["@babel/plugin-proposal-decorators", { version: "2023-11" }]
						]
					}),
					// Vite 8 (Rolldown) 限定の最適化設定
					// ファイル内に `@` が含まれるソースコードのみBabelを通す
					rolldown: {
						filter: { code: "@" }
					}
				}
			]
		})
	]
})
