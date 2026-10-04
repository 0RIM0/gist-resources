import { useState } from "react"
import { default as ReactCalendar } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import styles from "./Calendar.module.css"

export function Calendar() @{
	console.log("Calendar RENDER")
	const [state, setState] = useState(new Date())

	<div className={styles.calendar}>
		<ReactCalendar onChange={setState} value={state} />
	</div>
}
