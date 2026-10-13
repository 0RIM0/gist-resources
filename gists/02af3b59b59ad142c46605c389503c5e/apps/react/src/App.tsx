import { useState } from "react"
import styles from "./App.module.css"

const App = () => {
	const [flag, setFlag] = useState(false)
	const [items, setItems] = useState([
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "cherry" },
	])

	const toLast = (idx: number) => {
		setItems((items) => items.toSpliced(idx, 1).concat([items[idx]]))
	}

	return (
		<div>
			<p>
				flag is{" "}
				{flag ? (
					<span className={styles.on}>on</span>
				) : (
					<span className={styles.off}>off</span>
				)}
			</p>
			<button onClick={() => setFlag(!flag)}>toggle</button>
			<hr />
			<ul>
				{items.map((item, idx) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => toLast(idx)}>last</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
