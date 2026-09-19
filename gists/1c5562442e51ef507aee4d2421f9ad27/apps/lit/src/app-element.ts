import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { prepareSW, load, save, type State } from "shared"
import "./check-first.ts"
import "./radio-first.ts"

@customElement("app-element")
export class AppElement extends LitElement {
	// Shadow DOM を無効化
	protected createRenderRoot() {
		return this
	}

	@state()
	private state: State | null = null

	private initialized = false

	connectedCallback() {
		super.connectedCallback()
		if (this.initialized) return
		this.initialized = true

		prepareSW("../sw.js")
			.then(async () => {
				const data = await load("../api")
				this.state = data
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	}

	private async updateState(state: State) {
		this.state = state
		await save("../api", state)
	}

	private async onChange(event: CustomEvent<State>) {
		await this.updateState(event.detail)
	}

	private async onClear() {
		await this.updateState({
			checks: [],
			radio: null,
		})
	}

	render() {
		if (this.state == null) {
			return html`<div>Loading...</div>`
		}

		return html`
			<div>
				<header>
					<h1>Lit</h1>
					<button @click=${this.onClear}>クリア</button>
				</header>
				<main @state-change=${this.onChange}>
					<check-first .state=${this.state}></check-first>
					<radio-first .state=${this.state}></radio-first>
				</main>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-element": AppElement
	}
}
