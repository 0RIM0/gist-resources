export class BaseElement extends HTMLElement {
	connectedCallback() {
		this.setAttribute("x-data", this.tagName.toLowerCase().replaceAll("-", "_"))
		this.innerHTML = this.template()
	}

	template() {
		return ""
	}
}
