import { bindable } from "aurelia"
import { getOptions, add, remove, type State } from "shared"

export class CheckFirst {
	@bindable state: State
	@bindable onStateChange: (state: State) => void

	private readonly list = getOptions()

	private onChange(event: Event) {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				this.onStateChange({
					checks: add(this.state.checks, value),
					radio: this.state.radio == null ? value : this.state.radio,
				})
			} else {
				this.onStateChange({
					checks: remove(this.state.checks, value),
					radio: this.state.radio === value ? null : this.state.radio,
				})
			}
		} else {
			this.onStateChange({
				...this.state,
				radio: value,
			})
		}
	}
}
