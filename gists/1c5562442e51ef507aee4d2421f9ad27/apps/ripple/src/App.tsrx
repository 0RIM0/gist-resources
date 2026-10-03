import { track, effect, type Tracked } from "ripple"
import { CheckFirst } from "./CheckFirst.tsrx"
import { RadioFirst } from "./RadioFirst.tsrx"

import { prepareSW, load, save, type State } from "shared"

export function App() @{
	const state = track<State | null>(null)

	effect(() => {
		prepareSW("../sw.js")
			.then(async () => {
				const data = await load("../api")
				state.value = data
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	})

	const onChange = async (new_state: State) => {
		state.value = new_state
		await save("../api", new_state)
	}

	const onClear = async () => {
		await onChange({
			checks: [],
			radio: null,
		})
	}

	<>
		@if (state.value == null) {
			<div>Loading...</div>
		} @else {
			<div>
				<header>
					<h1>Ripple</h1>
					<button onClick={onClear}>クリア</button>
				</header>
				<main>
					<CheckFirst state={state as Tracked<State>} {onChange} />
					<RadioFirst state={state as Tracked<State>} {onChange} />
				</main>
			</div>
		}
	</>
}
