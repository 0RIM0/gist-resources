import { useSignal, useComputed } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import { OddEven } from "./OddEven.tsrx"
import { OddEven2 } from "./OddEven2.tsrx"
import { InputLength } from "./InputLength.tsrx"
import { List } from "./List.tsrx"
import { Calendar } from "./Calendar.tsrx"
import styles from "./App.module.css"

export function App() @{
	console.log("App RENDER")
	const count = useSignal(0)
	const items = useComputed(() => {
		return Array(Math.max(0, count.value))
			.keys()
			.map((i) => {
				return String(i + 1).padStart(3, "0")
			})
			.toArray()
	})

	<div className={styles.app}>
		<div className={styles.row}>
			<button onClick={() => count.value--}>-</button>
			<span>{count}</span>
			<button onClick={() => count.value++}>+</button>
			<OddEven count={count} />
			<OddEven2 count={count} />
		</div>
		<List items={items} />
		<InputLength />
		<Calendar />
	</div>
}
