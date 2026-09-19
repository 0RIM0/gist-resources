import { add, getOptions, remove, type State } from "shared"
import { For, JSX } from "@solidjs/web"

const CheckFirst = (props: { state: State; onChange: (state: State) => void }) => {
	const list = getOptions()

	const _onChange: JSX.ChangeEventHandler<HTMLElement, Event> = (event) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				props.onChange({
					checks: add(props.state.checks, value),
					radio: props.state.radio == null ? value : props.state.radio,
				})
			} else {
				props.onChange({
					checks: remove(props.state.checks, value),
					radio: props.state.radio === value ? null : props.state.radio,
				})
			}
		} else {
			props.onChange({ ...props.state, radio: value })
		}
	}

	return (
		<section onChange={_onChange}>
			<For each={list}>
				{(item) => {
					const checked = () => props.state.checks.includes(item.id)
					const radio = () => props.state.radio === item.id
					return (
						<div class="row">
							<input type="checkbox" checked={checked()} value={item.id} />
							<input
								type="radio"
								checked={radio()}
								disabled={!checked()}
								value={item.id}
							/>
							<label>{item.label}</label>
						</div>
					)
				}}
			</For>
		</section>
	)
}

export default CheckFirst
