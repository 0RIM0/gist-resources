import { add, getOptions, remove, type State } from "shared"
import type { Ref } from "vue"
import type { ChangeEvent } from "vue-jsx"

const CheckFirst = ({
	state,
	onStateChange,
}: {
	state: Ref<State>
	onStateChange: (state: State) => void
}) => {
	const list = getOptions()

	const _onChange = (event: ChangeEvent<HTMLElement>) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				onStateChange({
					checks: add(state.value.checks, value),
					radio: state.value.radio == null ? value : state.value.radio,
				})
			} else {
				onStateChange({
					checks: remove(state.value.checks, value),
					radio: state.value.radio === value ? null : state.value.radio,
				})
			}
		} else {
			onStateChange({ ...state.value, radio: value })
		}
	}

	return (
		<section onChange={_onChange}>
			{list.map((item) => {
				const checked = state.value.checks.includes(item.id)
				const radio = state.value.radio === item.id
				return (
					<div class="row" key={item.id}>
						<input type="checkbox" checked={checked} value={item.id} />
						<input type="radio" checked={radio} disabled={!checked} value={item.id} />
						<label>{item.label}</label>
					</div>
				)
			})}
		</section>
	)
}

export default CheckFirst
