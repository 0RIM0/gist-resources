import { defineConfig } from "vite-plus"

export default defineConfig({
	base: "",
	server: {
		port: 3000,
		proxy: {
			"/one/": "http://localhost:3001",
			"/two/": "http://localhost:3002",
		},
	},
})
