import { track, type Tracked, type Ripple } from "ripple"
import { add, getOptions, remove, type State } from "shared"

export function CheckFirst({
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

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.value.checks, value),
					radio:
						state.value.radio == null ? value : state.value.radio,
				})
			} else {
				onChange({
					checks: remove(state.value.checks, value),
					radio:
						state.value.radio === value ? null : state.value.radio,
				})
			}
		} else {
			onChange({ ...state.value, radio: value })
		}
	}

	<section onChange={_onChange}>
		@for (const item of list; key item.id) {
			const checked = track(() => state.value.checks.includes(item.id))
			const radio = track(() => state.value.radio === item.id)

			<div class="row">
				<input
					type="checkbox"
					checked={checked.value}
					value={item.id}
				/>
				<input
					type="radio"
					checked={radio.value}
					disabled={!checked.value}
					value={item.id}
				/>
				<label>{item.label}</label>
			</div>
		}
	</section>
}
