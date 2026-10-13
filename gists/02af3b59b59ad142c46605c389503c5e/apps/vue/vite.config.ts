import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite-plus"
import { lazyPlugins } from "vite-plus"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
	base: "",
	server: {
		port: 3000,
		host: true,
	},
	plugins: lazyPlugins(() => [vue()]),
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
