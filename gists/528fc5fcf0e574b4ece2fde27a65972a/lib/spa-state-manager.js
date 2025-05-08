import { BaseStateManager } from "./base-state-manager.js"

export class SpaStateManager extends BaseStateManager {
	init() {
		super.init()

		// router レベルのリロード
		this.on("route-reload", () => {
			this.notify({ type: "route-reload" })
		})

		// router を使ったページ遷移
		this.on("route-navigate", (url) => {
			this.notify({ type: "route-navigate", url })
		})

		// router を使ったページ遷移(replace)
		this.on("route-replace", (url) => {
			this.notify({ type: "route-replace", url })
		})

		// router に routing 処理を実行させる
		this.on("routing", () => {
			this.notify({ type: "routing" })
		})
	}
}
