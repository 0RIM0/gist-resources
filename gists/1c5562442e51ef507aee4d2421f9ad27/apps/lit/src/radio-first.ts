import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { getOptions, add, remove, type State } from "shared"

@customElement("radio-first")
export class RadioFirst extends LitElement {
	// Shadow DOM を無効化
	protected createRenderRoot() {
		return this
	}

	@property({ attribute: false })
	state!: State

	private onChange(event: Event) {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			this.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						radio: value,
						checks: add(this.state.checks, value),
					},
					bubbles: true,
				}),
			)
		} else {
			this.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						...this.state,
						checks: checked
							? add(this.state.checks, value)
							: remove(this.state.checks, value),
					},
					bubbles: true,
				}),
			)
		}
	}

	render() {
		const list = getOptions()

		return html`
			<section @change=${this.onChange}>
				${list.map((item) => {
					const checked = this.state.checks.includes(item.id)
					const radio = this.state.radio === item.id
					return html`
						<div class="row">
							<input type="radio" .checked=${radio} .value=${item.id} />
							<input
								type="checkbox"
								.checked=${checked}
								.disabled=${radio}
								.value=${item.id}
							/>
							<label>${item.label}</label>
						</div>
					`
				})}
			</section>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"radio-first": RadioFirst
	}
}
