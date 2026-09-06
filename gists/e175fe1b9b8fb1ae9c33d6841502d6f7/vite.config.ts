import { defineConfig } from "vite-plus"
import app1config from "./apps/app1/vite.config.ts"
import app2config from "./apps/app2/vite.config.ts"

export default defineConfig({
  fmt: {
    semi: false,
    overrides: [
      {
        files: ["apps/app2/**"],
        options: {
          ...app2config.fmt,
        },
      },
    ],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
    overrides: [
      {
        files: ["apps/app1/**"],
        ...app1config.lint,
      },
    ],
  },
  run: {
    cache: true,
  },
})
