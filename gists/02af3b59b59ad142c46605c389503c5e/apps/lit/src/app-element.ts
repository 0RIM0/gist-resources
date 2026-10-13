import { LitElement, html, css } from "lit"
import { customElement, state } from "lit/decorators.js"
import { repeat } from "lit/directives/repeat.js"
import { when } from "lit/directives/when.js"

@customElement("app-element")
export class AppElement extends LitElement {
	static styles = css`
		.on {
			color: #388e3c;
		}

		.off {
			color: #d32f2f;
		}

		hr {
			border: 0;
			height: 2px;
			background-color: #bbb;
			margin: 16px 0;
		}

		li {
			margin: 8px 0;
		}

		button {
			font-size: inherit;
			padding: 3px 16px;
			color: #fafafa;
			background: #2196f3;
			border: solid 1px #0002;
			border-radius: 4px;
			box-shadow:
				rgba(255, 255, 255, 0.2) 0px 1px 1px 0 inset,
				rgba(0, 0, 0, 0.3) 0px 1px 1px 0;
			text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
			cursor: pointer;
		}

		li button {
			margin-left: 20px;
		}
	`

	@state()
	private flag = false

	@state()
	private items = [
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "cherry" },
	]

	private toLast(idx: number) {
		this.items = this.items.toSpliced(idx, 1).concat([this.items[idx]])
	}

	render() {
		return html`
			<div>
				<p>
					flag is
					${when(
						this.flag,
						() => html`<span class="on">on</span>`,
						() => html`<span class="off">off</span>`,
					)}
				</p>
				<button @click=${() => (this.flag = !this.flag)}>toggle</button>
				<hr />
				<ul>
					${repeat(
						this.items,
						(item) => item.id,
						(item, idx) => html`
							<li>
								<span>${item.name}</span>
								<button @click=${() => this.toLast(idx)}>last</button>
							</li>
						`,
					)}
				</ul>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-element": AppElement
	}
}
