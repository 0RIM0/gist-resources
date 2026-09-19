import { useEffect, useState } from "react"
import CheckFirst from "./CheckFirst.tsx"
import RadioFirst from "./RadioFirst.tsx"
import { prepareSW, load, save, type State } from "shared"

const App = () => {
	const [state, setState] = useState<State>()

	useEffect(() => {
		prepareSW("../sw.js")
			.then(async () => {
				const data = await load("../api")
				setState(data)
			})
			.catch((err) => {
				console.error(err)
				alert("エラーが発生しました")
			})
	}, [])

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

	if (state == null) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<header>
				<h1>React</h1>
				<button onClick={onClear}>クリア</button>
			</header>
			<main>
				<CheckFirst state={state} onChange={onChange} />
				<RadioFirst state={state} onChange={onChange} />
			</main>
		</div>
	)
}

export default App
