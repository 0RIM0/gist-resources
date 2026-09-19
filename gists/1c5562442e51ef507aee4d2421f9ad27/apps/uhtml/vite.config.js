import { defineConfig } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/uhtml/" : "",
		server: {
			port: 3009,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
	}
})
