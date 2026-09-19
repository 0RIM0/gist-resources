import { html } from "./html.ts"
import CheckFirst from "./CheckFirst.ts"
import RadioFirst from "./RadioFirst.ts"
import { prepareSW, load, save, type State } from "shared"
import { useComputed, useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"

const App = () => {
	const state = useSignal<State>()
	const ready = useComputed(() => state.value != null)

	useEffect(() => {
		prepareSW("../sw.js")
			.then(async () => {
				const data = await load("../api")
				state.value = data
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	}, [state])

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

	if (!ready.value) {
		return html`<div>Loading...</div>`
	}

	return html`
		<div>
			<header>
				<h1>Preact+htm</h1>
				<button onClick=${onClear}>クリア</button>
			</header>
			<main>
				<${CheckFirst} state=${state} onChange=${onChange} />
				<${RadioFirst} state=${state} onChange=${onChange} />
			</main>
		</div>
	`
}

export default App
