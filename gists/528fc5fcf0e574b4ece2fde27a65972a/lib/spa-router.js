import { UpdateElement } from "./update-element.js"
import "./spa-route.js"

export class SpaRouter extends UpdateElement {
	update(values) {
		const message = values.message
		switch (message.type) {
			case "routing":
				{
					const { route, params } = this.findRoute(location.pathname) ?? {}
					if (route?.redirect) {
						this.action("route-replace", route.redirect)
						return
					}
					this.renderRoute(route)
					this.notifyInternals([...this.shadowRoot.children], {
						...values,
						message: {
							...message,
							params,
						},
					})
				}
				break
			default:
				{
					this.notifyInternals([...this.shadowRoot.children], values)
				}
				break
		}
	}

	findRoute(path) {
		for (const route of this.querySelectorAll("spa-route")) {
			const matched = new URLPattern(route.path, location.origin).exec(path, location.origin)
			if (matched) {
				return { route, params: matched.pathname.groups }
			}
		}
	}

	renderRoute(route) {
		if (route) {
			if (route.element) {
				const element = document.createElement(route.element)
				this.shadowRoot.replaceChildren(element)
				return
			}
			if (route.template) {
				const fragment = route.template.content.cloneNode(true)
				this.shadowRoot.replaceChildren(fragment)
				return
			}
		}
		this.shadowRoot.replaceChildren()
	}
}

customElements.define("spa-router", SpaRouter)
