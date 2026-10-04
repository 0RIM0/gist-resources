import { useState } from "react"

export function Counter() {
	const [state, setState] = useState(0)

	return (
		<div>
			<button onClick={() => setState(state + 1)}>{state}</button>
		</div>
	)
}
