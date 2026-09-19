import { Alpine } from "alpinejs"
import { prepareSW, load, save } from "shared"
import { BaseElement } from "./base-element"
import "./check-first.js"
import "./radio-first.js"

customElements.define(
	"app-element",
	class extends BaseElement {
		static {
			Alpine.data("app_element", () => {
				return {
					state: null,
					init() {
						prepareSW("../sw.js")
							.then(async () => {
								this.state = await load("../api")
							})
							.catch((err) => {
								console.error(err)
								alert("エラーが発生しました")
							})
					},
					async onStateChange(state) {
						this.state = state
						await save("../api", state)
					},
					async onClear() {
						await this.onStateChange({
							checks: [],
							radio: null,
						})
					},
				}
			})
		}

		template() {
			return `
				<template x-if="!state">
					<div>Loading...</div>
				</template>
				<template x-if="state">
					<div>
						<header>
							<h1>Alpine</h1>
							<button @click="onClear()">クリア</button>
						</header>
						<main @state-change="onStateChange($event.detail)">
							<check-first x-model="state" x-modelable="st"></check-first>
							<radio-first x-model="state" x-modelable="st"></radio-first>
						</main>
					</div>
				</template>
			`
		}
	},
)
