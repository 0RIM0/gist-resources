import { LitElement, css, html, type HTMLTemplateResult } from "lit"
import { customElement, property, query } from "lit/decorators.js"
import common_style from "./common-style"
import type { Dialog as FluentDialog } from "@fluentui/web-components"

@customElement("confirm-dialog")
export class ConfirmDialog extends LitElement {
	static styles = [common_style, css``]

	@property() cancelable = true
	@property() message: string | HTMLTemplateResult = ""

	@query("#dialog") dialog!: FluentDialog

	private static async _open({ cancelable, message }: { cancelable: boolean; message: string | HTMLTemplateResult }) {
		const elem = new this()
		elem.cancelable = cancelable
		elem.message = message
		document.body.append(elem)
		await elem.updateComplete
		elem.show()
		return new Promise<boolean | null>((resolve) => {
			elem.addEventListener("close", (e: Event) => {
				const event = e as CustomEvent<boolean | null>
				resolve(event.detail)
				// アニメーションが終わった頃に削除
				setTimeout(() => {
					elem.remove()
				}, 1500)
			})
		})
	}

	static async openAlert(message: string | HTMLTemplateResult) {
		return this._open({ cancelable: false, message })
	}

	static async openConfirm(message: string | HTMLTemplateResult) {
		return this._open({ cancelable: true, message })
	}

	show() {
		this.dialog.show()
	}

	hide() {
		this.dialog.hide()
	}

	private _handleToggle(e: Event) {
		if ((e as any).detail.newState === "closed") {
			this.dispatchEvent(new CustomEvent("close", { detail: null }))
		}
	}

	private _handleClickOK() {
		this.dispatchEvent(new CustomEvent("close", { detail: true }))
		this.hide()
	}

	private _handleClickCancel() {
		this.dispatchEvent(new CustomEvent("close", { detail: false }))
		this.hide()
	}

	render() {
		return html`
			<fluent-dialog id="dialog" aria-label="Actions" type="alert" @toggle=${this._handleToggle}>
				<fluent-dialog-body>
					<h2 slot="title">Actions</h2>
					<div>${this.message}</div>
					<fluent-button slot="action" appearance="primary" @click=${this._handleClickOK}> OK </fluent-button>
					<fluent-button slot="action" ?hidden=${!this.cancelable} @click=${this._handleClickCancel}>
						キャンセル
					</fluent-button>
				</fluent-dialog-body>
			</fluent-dialog>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"confirm-dialog": ConfirmDialog
	}
}
