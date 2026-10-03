import { Config } from "@stencil/core"
import path from "node:path"

// https://stenciljs.com/docs/config

export const config: Config = {
	globalStyle: "src/global/app.css",
	globalScript: "src/global/app.ts",
	taskQueue: "async",
	outputTargets: [
		{
			type: "www",
			dir: "dist",
			buildDir: "assets",
			serviceWorker: false,
		},
	],
	devServer: {
		port: 3012,
		basePath: "/stencil/",
		// カレントディレクトリが node_modules 内になってるので
		// このファイルを基準に絶対パスを取得して指定
		requestListenerPath: path.join(__dirname, "proxy.js"),
	},
}
