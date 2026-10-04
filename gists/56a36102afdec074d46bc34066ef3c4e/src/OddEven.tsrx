import { Signal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export function OddEven({ count }: { count: Signal<number> }) @{
	useSignals()
	console.log("OddEven RENDER")

	<div>
		@if (count.value % 2 === 0) {
			<span>even</span>
		} @else {
			<span>odd</span>
		}
	</div>
}
