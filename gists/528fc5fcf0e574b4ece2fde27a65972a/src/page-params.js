import { UpdateElement } from "#lib/update-element.js"
import "./link-list.js"

customElements.define(
	"page-params",
	class extends UpdateElement {
		templateHTML() {
			return `
				<div>
					<h1 id="title">page ???</h1>
					<link-list></link-list>
				</div>
			`
		}

		update(values) {
			const message = values.message
			switch (message.type) {
				case "routing":
					{
						this.$("#title").textContent = `page ${message.params.name}`
					}
					break
			}
		}
	},
)
