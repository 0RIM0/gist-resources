import { defineConfig } from "vite-plus"
import { ripple } from "@ripple-ts/vite-plugin"
import { lazyPlugins } from "vite-plus"

export default defineConfig({
	base: "",
	server: {
		port: 3000,
		host: true,
	},
	build: {
		target: "esnext",
	},
	plugins: lazyPlugins(() => [ripple()]),
})
