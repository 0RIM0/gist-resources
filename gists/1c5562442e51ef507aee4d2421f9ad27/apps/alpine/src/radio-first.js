import { Alpine } from "alpinejs"
import { add, remove, getOptions } from "shared"
import { BaseElement } from "./base-element"

customElements.define(
	"radio-first",
	class extends BaseElement {
		static {
			Alpine.data("radio_first", () => {
				return {
					// 親と同じプロパティ名だと境界での受け渡しがうまくいかないので st にする
					st: null,
					list: getOptions(),
					onChange(event, $dispatch) {
						const { type, value, checked } = event.target

						if (type === "radio") {
							$dispatch("state-change", {
								radio: value,
								checks: add(this.st.checks, value),
							})
						} else {
							$dispatch("state-change", {
								...this.st,
								checks: checked
									? add(this.st.checks, value)
									: remove(this.st.checks, value),
							})
						}
					},
					calcChecked(item) {
						return this.st.checks.includes(item.id)
					},
					calcRadio(item) {
						return this.st.radio === item.id
					},
				}
			})
		}

		template() {
			return `
				<template x-if="st != null">
					<section @change="onChange($event, $dispatch)">
						<template x-for="item in list" :key="item.id">
							<div class="row">
								<input type="radio" :checked="calcRadio(item)" :value="item.id" />
								<input
									type="checkbox"
									:checked="calcChecked(item)"
									:disabled="calcRadio(item)"
									:value="item.id"
								/>
								<label x-text="item.label"></label>
							</div>
						</template>
					</section>
				</template>
			`
		}
	},
)
