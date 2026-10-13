import { defineConfig } from "vite-plus"
import solid from "@solidjs/vite-plugin"
import { lazyPlugins } from "vite-plus"

export default defineConfig({
	base: "",
	server: {
		port: 3000,
		host: true,
	},
	plugins: lazyPlugins(() => [solid()]),
})
