import { getOptions, add, remove, type State } from "shared"
import { computed, type Signal } from "@preact/signals"
import { html } from "./html"

const CheckFirst = ({
	state,
	onChange,
}: {
	state: Signal<State>
	onChange: (state: State) => void
}) => {
	const list = getOptions()

	const _onChange = (event: Event) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.value.checks, value),
					radio: state.value.radio == null ? value : state.value.radio,
				})
			} else {
				onChange({
					checks: remove(state.value.checks, value),
					radio: state.value.radio === value ? null : state.value.radio,
				})
			}
		} else {
			onChange({ ...state.value, radio: value })
		}
	}

	return html`
		<section onChange=${_onChange}>
			${list.map((item) => {
				// map の中で computed は推奨されないけど、
				// このコンポーネントは再レンダリングされることがないので問題なし
				const checked = computed(() => state.value.checks.includes(item.id))
				const not_checked = computed(() => !checked.value)
				const radio = computed(() => state.value.radio === item.id)
				return html`
					<div class="row" key=${item.id}>
						<input type="checkbox" checked=${checked} value=${item.id} />
						<input
							type="radio"
							checked=${radio}
							disabled=${not_checked}
							value=${item.id}
						/>
						<label>${item.label}</label>
					</div>
				`
			})}
		</section>
	`
}

export default CheckFirst
