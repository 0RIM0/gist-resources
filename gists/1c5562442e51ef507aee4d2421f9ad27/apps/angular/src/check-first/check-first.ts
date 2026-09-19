import { Component, input, output } from "@angular/core"
import { getOptions, add, remove, type State } from "shared"

@Component({
	selector: "check-first",
	templateUrl: "./check-first.html",
})
export class CheckFirst {
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

		if (type === "checkbox") {
			if (checked) {
				this.state_change.emit({
					checks: add(this.state().checks, value),
					radio: this.state().radio == null ? value : this.state().radio,
				})
			} else {
				this.state_change.emit({
					checks: remove(this.state().checks, value),
					radio: this.state().radio === value ? null : this.state().radio,
				})
			}
		} else {
			this.state_change.emit({
				...this.state(),
				radio: value,
			})
		}
	}
}
