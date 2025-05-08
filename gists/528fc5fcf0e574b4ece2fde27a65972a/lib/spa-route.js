import { mapAttrProp } from "./utils"

export class SpaRoute extends HTMLElement {
	static {
		mapAttrProp(this.prototype, "path")
		mapAttrProp(this.prototype, "element")
		mapAttrProp(this.prototype, "redirect")
	}

	get template() {
		return this.querySelector("template")
	}

	set template(value) {
		if (value && value.localName === "template") {
			this.replaceChildren(value)
		} else {
			this.replaceChildren()
		}
	}
}

customElements.define("spa-route", SpaRoute)
