import { UpdateElement } from "#lib/update-element.js"
import "./link-list.js"

customElements.define(
	"page-one",
	class extends UpdateElement {
		templateHTML() {
			return `
				<div>
					<h1>page1</h1>
					<link-list></link-list>
				</div>
			`
		}
	},
)
