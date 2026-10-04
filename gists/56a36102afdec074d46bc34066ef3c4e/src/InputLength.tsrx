import { useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import styles from "./InputLength.module.css"

export function InputLength() @{
	console.log("InputLength RENDER")
	const len = useSignal(0)

	<div className={styles.row}>
		<input onChange={(event) => (len.value = event.target.value.length)} />
		<span>{len}</span>
	</div>
}
