import { Event, Component, EventEmitter, Host, Prop, h } from "@stencil/core"
import { getOptions, add, remove, type State } from "shared"

@Component({
	tag: "radio-first",
})
export class RadioFirst {
	@Prop() state!: State
	@Event() changeState!: EventEmitter<State>

	private onChange = (event: Event) => {
		const { type, value, checked } = event.target as HTMLInputElement

		if (type === "radio") {
			this.changeState.emit({
				radio: value,
				checks: add(this.state.checks, value),
			})
		} else {
			this.changeState.emit({
				...this.state,
				checks: checked ? add(this.state.checks, value) : remove(this.state.checks, value),
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
								<input type="radio" checked={radio} value={item.id} />
								<input
									type="checkbox"
									checked={checked}
									disabled={radio}
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
