import { defineConfig } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/alpine/" : "",
		server: {
			port: 3007,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
	}
})
