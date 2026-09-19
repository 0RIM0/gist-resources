import { Alpine } from "alpinejs"
import { add, remove, getOptions } from "shared"
import { BaseElement } from "./base-element"

customElements.define(
	"check-first",
	class extends BaseElement {
		static {
			Alpine.data("check_first", () => {
				return {
					// 親と同じプロパティ名だと境界での受け渡しがうまくいかないので st にする
					st: null,
					list: getOptions(),
					onChange(event, $dispatch) {
						const { type, value, checked } = event.target

						if (type === "checkbox") {
							if (checked) {
								$dispatch("state-change", {
									checks: add(this.st.checks, value),
									radio: this.st.radio == null ? value : this.st.radio,
								})
							} else {
								$dispatch("state-change", {
									checks: remove(this.st.checks, value),
									radio: this.st.radio === value ? null : this.st.radio,
								})
							}
						} else {
							$dispatch("state-change", {
								...this.st,
								radio: value,
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
								<input type="checkbox" :checked="calcChecked(item)" :value="item.id" />
								<input
									type="radio"
									:checked="calcRadio(item)"
									:disabled="!calcChecked(item)"
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
