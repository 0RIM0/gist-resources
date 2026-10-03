import { track, type Tracked, type Ripple } from "ripple"
import { getOptions, add, remove, type State } from "shared"

export function RadioFirst({
	state,
	onChange,
}: {
	state: Tracked<State>
	onChange: (state: State) => void
}) @{
	const list = getOptions()

	const _onChange: Ripple.ElementEventHandler<HTMLElement, "change"> = (
		event,
	) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			onChange({
				radio: value,
				checks: add(state.value.checks, value),
			})
		} else {
			onChange({
				...state.value,
				checks: checked
					? add(state.value.checks, value)
					: remove(state.value.checks, value),
			})
		}
	}

	<section onChange={_onChange}>
		@for (const item of list; key item.id) {
			const checked = track(() => state.value.checks.includes(item.id))
			const radio = track(() => state.value.radio === item.id)

			<div class="row">
				<input type="radio" checked={radio.value} value={item.id} />
				<input
					type="checkbox"
					checked={checked.value}
					disabled={radio.value}
					value={item.id}
				/>
				<label>{item.label}</label>
			</div>
		}
	</section>
}
