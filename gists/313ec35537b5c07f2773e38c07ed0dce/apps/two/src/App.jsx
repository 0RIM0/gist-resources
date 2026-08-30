import { useEffect, useState } from "react"

const App = () => {
	const [count, setCount] = useState(null)

	useEffect(() => {
		Promise.try(async () => {
			const res = await fetch("../data")
			const { count } = await res.json()
			setCount(count)
		})
	}, [])

	const _onClick = async () => {
		const next = count - 1
		setCount(next)

		const res = await fetch("../data", {
			method: "POST",
			body: JSON.stringify({ count: next }),
		})
		if (!res.ok) {
			console.error(await res.json())
		}
	}

	return (
		<div className="container">
			<p>Down</p>
			<button onClick={_onClick} disabled={count === null}>
				{count}
			</button>
		</div>
	)
}

export default App
