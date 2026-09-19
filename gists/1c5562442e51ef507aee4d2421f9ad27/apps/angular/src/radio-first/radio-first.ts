import { Component, input, output } from "@angular/core"
import { getOptions, add, remove, type State } from "shared"

@Component({
	selector: "radio-first",
	templateUrl: "./radio-first.html",
})
export class RadioFirst {
	readonly state = input.required<State>()
	readonly state_change = output<State>()

	protected readonly list = getOptions()

	protected isChecked(item: { id: string }): boolean {
		return this.state().checks.includes(item.id)
	}

	protected isRadio(item: { id: string }): boolean {
		return this.state().radio === item.id
	}

	protected onChange(event: Event) {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			this.state_change.emit({
				radio: value,
				checks: add(this.state().checks, value),
			})
		} else {
			this.state_change.emit({
				...this.state(),
				checks: checked
					? add(this.state().checks, value)
					: remove(this.state().checks, value),
			})
		}
	}
}
