import { BaseApp } from "./base-app.js"
import { SpaStateManager } from "./spa-state-manager.js"

export class SpaApp extends BaseApp {
	stateManager() {
		return new SpaStateManager()
	}

	onFirstConnect() {
		super.onFirstConnect()
		navigation.addEventListener("navigate", event => {
			event.intercept({
				handler: () => {
					this.action("routing")
				},
			})
		})
	}

	update(values) {
		super.update(values)
		const message = values.message
		switch (message.type) {
			case "boot":
				{
					this.action("routing")
				}
				break
			case "route-navigate":
				{
					navigation.navigate(message.url)
				}
				return
			case "route-replace":
				{
					navigation.navigate(message.url, { history: "replace" })
				}
				return
			case "route-reload":
				{
					navigation.reload()
				}
				return
			default:
				{
					this.notifyInternals("spa-router", values)
				}
				break
		}
	}
}
