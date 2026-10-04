import { defineConfig } from "vite"
import tsrxReact from "@tsrx/vite-plugin-react"

export default defineConfig({
	plugins: [tsrxReact()],
	server: {
		port: 3000,
		host: true,
	},
	base: "",
	build: {
		outDir: "_pages_",
	},
})
