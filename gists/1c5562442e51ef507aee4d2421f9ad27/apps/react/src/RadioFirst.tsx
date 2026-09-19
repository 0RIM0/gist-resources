import { getOptions, add, remove, type State } from "shared"

const RadioFirst = ({ state, onChange }: { state: State; onChange: (state: State) => void }) => {
	const list = getOptions()

	const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { type, value, checked } = event.target

		if (type === "radio") {
			onChange({
				radio: value,
				checks: add(state.checks, value),
			})
		} else {
			onChange({
				...state,
				checks: checked ? add(state.checks, value) : remove(state.checks, value),
			})
		}
	}

	return (
		<section onChange={_onChange}>
			{list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return (
					<div className="row" key={item.id}>
						<input type="radio" checked={radio} value={item.id} />
						<input type="checkbox" checked={checked} disabled={radio} value={item.id} />
						<label>{item.label}</label>
					</div>
				)
			})}
		</section>
	)
}

export default RadioFirst
