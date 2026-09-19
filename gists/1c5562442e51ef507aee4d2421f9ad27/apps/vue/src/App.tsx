import { onMounted, ref, type Ref } from "vue"
import { prepareSW, load, save, type State } from "shared"
import CheckFirst from "./CheckFirst.tsx"
import RadioFirst from "./RadioFirst.tsx"

const App = () => {
	const state = ref<State>()

	onMounted(() => {
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

	return (
		<>
			{state.value == null ? (
				<div>Loading...</div>
			) : (
				<div>
					<header>
						<h1>Vue</h1>
						<button onClick={onClear}>クリア</button>
					</header>
					<main>
						<CheckFirst state={state as Ref<State>} onStateChange={onChange} />
						<RadioFirst state={state as Ref<State>} onStateChange={onChange} />
					</main>
				</div>
			)}
		</>
	)
}

export default App
