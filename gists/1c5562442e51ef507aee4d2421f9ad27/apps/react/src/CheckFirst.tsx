import { add, getOptions, remove, type State } from "shared"

const CheckFirst = ({ state, onChange }: { state: State; onChange: (state: State) => void }) => {
	const list = getOptions()

	const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { type, value, checked } = event.target

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.checks, value),
					radio: state.radio == null ? value : state.radio,
				})
			} else {
				onChange({
					checks: remove(state.checks, value),
					radio: state.radio === value ? null : state.radio,
				})
			}
		} else {
			onChange({ ...state, radio: value })
		}
	}

	return (
		<section onChange={_onChange}>
			{list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return (
					<div className="row" key={item.id}>
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
