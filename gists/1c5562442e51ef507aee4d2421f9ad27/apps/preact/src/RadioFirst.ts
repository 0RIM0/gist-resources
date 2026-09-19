import { getOptions, add, remove, type State } from "shared"
import { computed, type Signal } from "@preact/signals"
import { html } from "./html"

const RadioFirst = ({
	state,
	onChange,
}: {
	state: Signal<State>
	onChange: (state: State) => void
}) => {
	const list = getOptions()

	const _onChange = (event: Event) => {
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

	return html`
		<section onChange=${_onChange}>
			${list.map((item) => {
				// map の中で computed は推奨されないけど、
				// このコンポーネントは再レンダリングされることがないので問題なし
				const checked = computed(() => state.value.checks.includes(item.id))
				const radio = computed(() => state.value.radio === item.id)
				return html`
					<div class="row" key=${item.id}>
						<input type="radio" checked=${radio} value=${item.id} />
						<input
							type="checkbox"
							checked=${checked}
							disabled=${radio}
							value=${item.id}
						/>
						<label>${item.label}</label>
					</div>
				`
			})}
		</section>
	`
}

export default RadioFirst
