import { UpdateElement } from "#lib/update-element.js"
import "./link-list.js"
import css from "./page-top.css?inline"

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

customElements.define(
	"page-top",
	class extends UpdateElement {
		templateHTML() {
			return `
				<div>
					<h1>page top</h1>
					<link-list></link-list>
					<div class="get-text">
						<div>
							<button id="b1">get1</button>
							<button id="b2">get2</button>
						</div>
						<div>
							<textarea readonly></textarea>
						</div>
					</div>
				</div>
			`
		}

		styleSheets() {
			return [sheet]
		}

		update(values) {
			const message = values.message
			switch (message.type) {
				case "routing":
					{
						const text = values.get("text")
						if (text) {
							this.$("textarea").value = text
						}
						this.$("#b1").addEventListener("click", () => {
							this.action("get-text", { text: "text1" })
						})
						this.$("#b2").addEventListener("click", () => {
							this.action("get-text", { text: "text2" })
						})
					}
					break
				case "get-text":
					{
						this.$("textarea").value = message.text
					}
					break
			}
		}
	},
)
