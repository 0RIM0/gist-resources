import { defineConfig } from "vite-plus"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/preact/" : "",
		server: {
			port: 3002,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
	}
})
