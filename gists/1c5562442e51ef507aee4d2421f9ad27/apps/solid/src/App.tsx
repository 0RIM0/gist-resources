import { createSignal, onSettled, Show } from "solid-js"
import { prepareSW, load, save, type State } from "shared"
import CheckFirst from "./CheckFirst"
import RadioFirst from "./RadioFirst"

const App = () => {
	const [state, setState] = createSignal<State>()

	onSettled(() => {
		prepareSW("../sw.js")
			.then(async () => {
				const data = await load("../api")
				setState(data)
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	})

	const onChange = async (state: State) => {
		setState(state)
		await save("../api", state)
	}

	const onClear = async () => {
		await onChange({
			checks: [],
			radio: null,
		})
	}

	return (
		<Show when={state()} fallback={<div>Loading...</div>}>
			<div>
				<header>
					<h1>Solid</h1>
					<button onClick={onClear}>クリア</button>
				</header>
				<main>
					<CheckFirst state={state()!} onChange={onChange} />
					<RadioFirst state={state()!} onChange={onChange} />
				</main>
			</div>
		</Show>
	)
}

export default App
