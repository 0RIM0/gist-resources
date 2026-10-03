import { Event, Component, EventEmitter, Host, Prop, h } from "@stencil/core"
import { getOptions, add, remove, type State } from "shared"

@Component({
	tag: "check-first",
})
export class CheckFirst {
	@Prop() state!: State
	@Event() changeState!: EventEmitter<State>

	private onChange = (event: Event) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "checkbox") {
			if (checked) {
				this.changeState.emit({
					checks: add(this.state.checks, value),
					radio: this.state.radio == null ? value : this.state.radio,
				})
			} else {
				this.changeState.emit({
					checks: remove(this.state.checks, value),
					radio: this.state.radio === value ? null : this.state.radio,
				})
			}
		} else {
			this.changeState.emit({
				...this.state,
				radio: value,
			})
		}
	}

	render() {
		const list = getOptions()

		return (
			<Host>
				<section onChange={this.onChange}>
					{list.map((item) => {
						const checked = this.state.checks.includes(item.id)
						const radio = this.state.radio === item.id
						return (
							<div class="row">
								<input type="checkbox" checked={checked} value={item.id} />
								<input
									type="radio"
									checked={radio}
									disabled={!checked}
									value={item.id}
								/>
								<label>{item.label}</label>
							</div>
						)
					})}
				</section>
			</Host>
		)
	}
}
