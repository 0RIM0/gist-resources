import { add, getOptions, remove, type State } from "shared"
import { For, JSX } from "@solidjs/web"

const RadioFirst = (props: { state: State; onChange: (state: State) => void }) => {
	const list = getOptions()

	const _onChange: JSX.ChangeEventHandler<HTMLElement, Event> = (event) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			props.onChange({
				radio: value,
				checks: add(props.state.checks, value),
			})
		} else {
			props.onChange({
				...props.state,
				checks: checked
					? add(props.state.checks, value)
					: remove(props.state.checks, value),
			})
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
							<input type="radio" checked={radio()} value={item.id} />
							<input
								type="checkbox"
								checked={checked()}
								disabled={radio()}
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

export default RadioFirst
