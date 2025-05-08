import { BaseStateManager } from "./base-state-manager.js"
import { UpdateElement } from "./update-element.js"
import { download } from "./utils.js"

export class BaseApp extends UpdateElement {
	// boot 後にリスナ解除用の関数を入れる
	_unlisten = () => {}

	stateManager() {
		return new BaseStateManager()
	}

	onFirstConnect() {
		super.onFirstConnect()
		this.boot()
	}

	action = (type, detail) => {
		if (!this.manager) {
			throw new Error("state manager が見つかりません")
		}
		this.manager.dispatch(type, detail)
	}

	get = (target) => {
		if (!this.manager) {
			throw new Error("state manager が見つかりません")
		}
		return this.manager.get(target)
	}

	boot() {
		this._unlisten()
		this.manager = this.stateManager()
		this._unlisten = this.manager.on("update", (message) => {
			this.notify({ message, action: this.action, get: this.get })
		})
		this.action("boot")
	}

	update(values) {
		const message = values.message
		switch (message.type) {
			case "reboot":
				{
					// この update のまとまりが終わってから
					setTimeout(() => this.boot(), 5)
				}
				return
			case "reload":
				{
					window.location.reload()
				}
				return
			case "open":
				{
					window.open(message.url)
				}
				break
			case "navigate":
				{
					window.location = message.url
				}
				return
			case "download":
				{
					download(message.data, message.filename)
				}
				break
		}
	}
}
