import { defineConfig } from "vite-plus"
import solid from "@solidjs/vite-plugin"
import { lazyPlugins } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/solid/" : "",
		server: {
			port: 3005,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
		plugins: lazyPlugins(() => [solid()]),
	}
})
