import { defineConfig } from "vite-plus"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/lit/" : "",
		server: {
			port: 3006,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
		lint: {
			rules: {
				"typescript/unbound-method": "off",
			},
		},
	}
})
