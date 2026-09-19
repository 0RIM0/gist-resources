import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite-plus"
import { lazyPlugins } from "vite-plus"
import vueJsx from "vue-jsx/vite"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
	return {
		base: command === "serve" ? "/vue/" : "",
		server: {
			port: 3003,
			host: true,
			proxy: {
				"/common.css": "http://localhost:3000/",
				"/sw.js": "http://localhost:3000/",
			},
		},
		plugins: lazyPlugins(() => [vueJsx({ vapor: true })]),
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	}
})
