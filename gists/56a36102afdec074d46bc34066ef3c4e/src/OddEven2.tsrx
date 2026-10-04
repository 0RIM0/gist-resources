import { Signal, useComputed } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export function OddEven2({ count }: { count: Signal<number> }) @{
	console.log("OddEven2 RENDER")
	const odd_even = useComputed(() => @{
		@if (count.value % 2 === 0) {
			<span>even</span>
		} @else {
			<span>odd</span>
		}
	})

	<div>{odd_even}</div>
}
