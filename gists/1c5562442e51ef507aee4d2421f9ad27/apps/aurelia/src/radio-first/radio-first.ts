import { bindable } from "aurelia"
import { getOptions, add, remove, type State } from "shared"

export class RadioFirst {
	@bindable state: State
	@bindable onStateChange: (state: State) => void

	private readonly list = getOptions()

	private onChange(event: Event) {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			this.onStateChange({
				radio: value,
				checks: add(this.state.checks, value),
			})
		} else {
			this.onStateChange({
				...this.state,
				checks: checked ? add(this.state.checks, value) : remove(this.state.checks, value),
			})
		}
	}
}
