import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import common_style from "./common-style"

@customElement("markdown-editor")
export class MarkdownEditor extends LitElement {
	static styles = [
		common_style,
		css`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				flex: 1;
				overflow: hidden;
			}

			fluent-textarea {
				height: 100%;

				&::part(root) {
					height: 100%;
				}

				&::part(control) {
					height: 100%;
				}
			}
		`,
	]

	@property() value = ""
	_observer = null as FileSystemObserver | null

	private _handleTextareaInput(e: Event) {
		e.stopPropagation()
		const textarea = e.target as HTMLTextAreaElement
		this.value = textarea.value
		this._scheduleEmit()
	}

	private _handleTextareaChange(e: Event) {
		e.stopPropagation()
	}

	private _onHandleFileChange(records: any[]) {
		const handle = records[0].changedHandle
		this._applyFileContent(handle)
	}

	private async _sync() {
		const [handle] = await showOpenFilePicker({
			types: [
				{
					description: "Markdown files",
					accept: {
						"text/markdown": [".md"],
					},
				},
			],
			multiple: false,
		})

		if (!handle) return

		if (!this._observer) {
			this._observer = new FileSystemObserver(this._onHandleFileChange.bind(this))
		}

		this._observer.disconnect()
		await this._observer.observe(handle)

		this._applyFileContent(handle)
	}

	private async _applyFileContent(handle: FileSystemFileHandle) {
		const file = await handle.getFile()
		const text = await file.text()
		this.value = text
		this._scheduleEmit()
	}

	private _emit_timer = {
		timer: null as number | null,
		start: null as number | null,
	}

	private _scheduleEmit() {
		const now = Date.now()
		const max_span = 3000
		const timeout = 1200

		clearTimeout(this._emit_timer.timer!)
		const emit = () => {
			this._emit_timer.start = null
			this.dispatchEvent(
				new CustomEvent("change", {
					detail: { value: this.value },
					bubbles: true,
					composed: true,
				}),
			)
		}

		if (this._emit_timer.start == null) {
			this._emit_timer.start = now
		} else if (now - this._emit_timer.start > max_span) {
			emit()
			return
		}

		this._emit_timer.timer = setTimeout(emit, timeout)
	}

	render() {
		return html`
			<header class="pane-header">
				<h1>Markdown</h1>
				<fluent-button @click=${this._sync}>Open file & Sync</fluent-button>
			</header>
			<div class="container">
				<fluent-textarea
					appearance="filled-lighter"
					block
					.value=${this.value}
					@input=${this._handleTextareaInput}
					@change=${this._handleTextareaChange}
				></fluent-textarea>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"markdown-editor": MarkdownEditor
	}
}
