import { customElement } from "aurelia"
import { prepareSW, load, save, type State } from "shared"

@customElement("app-root")
export class App {
	private state: State

	attached() {
		prepareSW("../sw.js")
			.then(async () => {
				this.state = await load("../api")
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

	private async onClear() {
		await this.updateState({
			checks: [],
			radio: null,
		})
	}
}
