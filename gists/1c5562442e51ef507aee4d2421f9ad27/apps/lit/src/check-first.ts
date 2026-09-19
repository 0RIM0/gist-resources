import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { getOptions, add, remove, type State } from "shared"

@customElement("check-first")
export class CheckFirst extends LitElement {
	// Shadow DOM を無効化
	protected createRenderRoot() {
		return this
	}

	@property({ attribute: false })
	state!: State

	private onChange(event: Event) {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				this.dispatchEvent(
					new CustomEvent("state-change", {
						detail: {
							checks: add(this.state.checks, value),
							radio: this.state.radio == null ? value : this.state.radio,
						},
						bubbles: true,
					}),
				)
			} else {
				this.dispatchEvent(
					new CustomEvent("state-change", {
						detail: {
							checks: remove(this.state.checks, value),
							radio: this.state.radio === value ? null : this.state.radio,
						},
						bubbles: true,
					}),
				)
			}
		} else {
			this.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						...this.state,
						radio: value,
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
							<input type="checkbox" .checked=${checked} .value=${item.id} />
							<input
								type="radio"
								.checked=${radio}
								.disabled=${!checked}
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
		"check-first": CheckFirst
	}
}
