import { defineConfig } from "vite-plus"
import aurelia from "@aurelia/vite-plugin"

export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/aurelia/" : "",
		server: {
			port: 3011,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
		plugins: [
			aurelia({
				useDev: true,
			}),
		],
		lint: {
			rules: {
				"no-useless-default-assignment": "off",
			},
		},
	}
})
