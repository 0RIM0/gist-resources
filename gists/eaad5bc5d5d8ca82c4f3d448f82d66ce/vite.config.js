import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["@bokuweb/zstd-wasm"],
	},
	base: "",
	build: {
		outDir: "_pages_",
	},
})
