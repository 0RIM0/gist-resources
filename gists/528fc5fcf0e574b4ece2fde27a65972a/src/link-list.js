import { BaseElement } from "#lib/base-element.js"
import css from "./link-list.css?inline"

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

customElements.define(
	"link-list",
	class extends BaseElement {
		templateHTML() {
			return `
				<div class="link-list">
					<div>
						<p>navigate</p>
						<ul>
							<li><a href="/">/</a></li>
							<li><a href="/page1">/page1</a></li>
							<li><a href="/redirect">/redirect</a></li>
							<li><a href="/page2">/page2</a></li>
							<li><a href="/params/foo">/params/foo</a></li>
						</ul>
					</div>
					<div>
						<p>open</p>
						<ul>
							<li><a href="/" target="_blank">/</a></li>
							<li><a href="/page1" target="_blank">/page1</a></li>
							<li><a href="/redirect" target="_blank">/redirect</a></li>
							<li><a href="/page2" target="_blank">/page2</a></li>
							<li><a href="/params/bar" target="_blank">/params/bar</a></li>
						</ul>
					</div>
				</div>
			`
		}

		styleSheets() {
			return [sheet]
		}
	},
)
