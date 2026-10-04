import { Signal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import styles from "./List.module.css"

export function List({ items }: { items: Signal<string[]> }) @{
	useSignals()
	console.log("List RENDER")

	<ul className={styles.list}>
		@for (const item of items.value; key item) {
			<li>{item}</li>
		}
	</ul>
}
