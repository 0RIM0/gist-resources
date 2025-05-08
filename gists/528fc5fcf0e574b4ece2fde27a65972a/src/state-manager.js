import { SpaStateManager } from "#lib/spa-state-manager.js"

export class StateManager extends SpaStateManager {
	init() {
		super.init()

		Object.assign(this.data, {
			text: "",
		})

		this.on("get-text", async (detail) => {
			const url = {
				text1: "text1.txt",
				text2: "text2.txt",
			}[detail.text]
			const text = await fetch(url).then(res => res.text())
			this.data.text = text
			this.notify({ type: "get-text", text })
		})
	}
}
