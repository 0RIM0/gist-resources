import { defineConfig } from "vite-plus"
import { ripple } from "@ripple-ts/vite-plugin"
import { lazyPlugins } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/ripple/" : "",
		server: {
			port: 3015,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
		build: {
			target: "esnext",
		},
		plugins: lazyPlugins(() => [ripple()]),
	}
})
