import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { unsafeHTML } from "lit/directives/unsafe-html.js"
import MarkdownIt from "markdown-it"
import common_style from "./common-style"

const md = new MarkdownIt({ html: true, linkify: true })

@customElement("markdown-preview")
export class MarkdownPreview extends LitElement {
	static styles = [
		common_style,
		css`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				flex: 1;
				overflow: auto;
			}

			.preview {
				padding: 16px 24px;
				line-height: 1.7;
				overflow-wrap: break-word;
				font-size: 14px;

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					margin: 1em 0;
					border-bottom: 1px solid #e1dfdd;
					padding-bottom: 0.3em;
				}

				h1 {
					font-size: 20px;
				}

				h2 {
					font-size: 18px;
				}

				h3 {
					font-size: 16px;
				}

				h4 {
					font-size: 15px;
				}

				h5 {
					font-size: 14px;
				}

				h6 {
					font-size: 13px;
				}

				p {
					margin: 0.5em 0;
					line-height: 1.4;
				}

				code {
					background: #f3f2f1;
					padding: 0.2em 0.4em;
					border-radius: 4px;
					font-size: 0.9em;
				}

				pre code {
					background: none;
					padding: 0;
				}

				pre {
					background: #f3f2f1;
					padding: 12px 16px;
					border-radius: 6px;
					overflow-x: auto;
				}

				blockquote {
					border-left: 4px solid #e1dfdd;
					margin: 0;
					padding-left: 16px;
					color: #605e5c;
				}

				a {
					color: #0078d4;
				}

				img {
					max-width: 100%;
				}

				table {
					border-collapse: collapse;
					width: 100%;

					th,
					td {
						border: 1px solid #e1dfdd;
						padding: 6px 12px;
					}

					th {
						background: #f3f2f1;
					}
				}
			}
		`,
	]

	@property() value = ""

	render() {
		const rendered_html = md.render(this.value)
		return html`
			<header class="pane-header">
				<h1>Preview</h1>
			</header>
			<div class="container">
				<div class="preview">${unsafeHTML(rendered_html)}</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"markdown-preview": MarkdownPreview
	}
}
