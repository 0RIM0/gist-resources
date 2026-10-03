import { Component, Host, State, h } from "@stencil/core"
import { prepareSW, load, save, type State as AppState } from "shared"

@Component({
	tag: "app-root",
})
export class AppRoot {
	@State() state: AppState | null = null

	componentWillLoad() {
		prepareSW("../sw.js")
			.then(async () => {
				this.state = await load("../api")
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	}

	private async updateState(state: AppState) {
		this.state = state
		await save("../api", state)
	}

	private onChange = async (event: CustomEvent<AppState>) => {
		await this.updateState(event.detail)
	}

	private onClear = async () => {
		await this.updateState({
			checks: [],
			radio: null,
		})
	}

	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}

		return (
			<Host>
				<div>
					<header>
						<h1>Stencil</h1>
						<button onClick={this.onClear}>クリア</button>
					</header>
					<main>
						<check-first state={this.state} onChangeState={this.onChange} />
						<radio-first state={this.state} onChangeState={this.onChange} />
					</main>
				</div>
			</Host>
		)
	}
}
