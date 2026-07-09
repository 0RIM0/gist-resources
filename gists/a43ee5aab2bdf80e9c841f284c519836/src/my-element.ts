import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"

@customElement("my-element")
class MyElement extends LitElement {
	@state()
	private accessor _text: string = ""

	_onChange(event: Event) {
		this._text = (event.target as HTMLInputElement).value
	}

	render() {
		return html`
			<div>
				<div>
					Input:
					<input @input=${this._onChange} .value=${this._text}>
				</div>
				<div>Text: ${this._text}</div>
				<sub-element .text=${this._text}></sub-element>
			</div>
		`
	}
}

@customElement("sub-element")
class SubElement extends LitElement {
	@property()
	private accessor text = ""

	render() {
		return html`
			<div>Length: ${this.text.length}</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"my-element": MyElement,
		"sub-element": SubElement,
	}
}
