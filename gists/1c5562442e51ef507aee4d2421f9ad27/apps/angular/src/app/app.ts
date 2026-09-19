import { Component, OnInit, signal } from "@angular/core"
import { prepareSW, load, save, type State } from "shared"
import { CheckFirst } from "../check-first/check-first"
import { RadioFirst } from "../radio-first/radio-first"

@Component({
	selector: "app-root",
	templateUrl: "./app.html",
	imports: [CheckFirst, RadioFirst],
})
export class App implements OnInit {
	protected readonly state = signal<State | null>(null)

	ngOnInit() {
		void this.init()
	}

	private async init() {
		try {
			await prepareSW("../sw.js")
			const data = await load("../api")
			this.state.set(data)
		} catch (err) {
			console.error(err)
			alert("エラーが発生しました")
		}
	}

	protected async updateState(state: State): Promise<void> {
		this.state.set(state)
		await save("../api", state)
	}

	protected async onClear(): Promise<void> {
		await this.updateState({
			checks: [],
			radio: null,
		})
	}
}
