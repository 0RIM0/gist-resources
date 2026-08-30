import { defineConfig } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/one/" : "",
		server: {
			port: 3001,
			proxy: {
				"/style.css": "http://localhost:3000",
				"/sw.js": "http://localhost:3000",
			},
		},
	}
})
