import { LitElement, css, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import common_style from "./common-style"
import { getGist, updateGist, resolveFilename, getMyUser, type FilenameType, mergeContents } from "./gist"
import "./markdown-editor"
import "./markdown-preview"
import "./confirm-dialog"
import { ConfirmDialog } from "./confirm-dialog"
import dayjs from "dayjs"

@customElement("gist-append")
export class GistAppend extends LitElement {
	static styles = [
		common_style,
		css`
			.layout {
				display: flex;
				flex-direction: column;
				gap: 20px;
				width: 100%;
				height: 100%;
				padding: 20px 40px;
				box-sizing: border-box;
			}

			.top {
				padding: 24px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 40px;
			}

			.settings {
				display: flex;
				gap: 40px;
				overflow: auto;

				.column {
					display: flex;
					flex-flow: column;
					gap: 16px;
				}

				fluent-text-input {
					width: 300px;
				}

				.custom-row {
					display: flex;
					align-items: center;
					gap: 16px;

					fluent-input {
						width: 200px;
					}
				}
			}

			.buttons {
				display: flex;
				gap: 8px;

				fluent-button {
					width: 160px;
					height: 80px;
					font-size: 20px;
					margin: 0 10px;
				}
			}

			.bottom {
				display: flex;
				flex-direction: row;
				flex: 1;
				gap: 40px;
				min-height: 0;
			}

			.pane {
				flex: 1;

				markdown-editor,
				markdown-preview {
					height: 100%;
				}
			}
		`,
	]

	@state() private _markdown = ""
	@state() private _token = localStorage.getItem("token") || ""
	@state() private _gist_id = localStorage.getItem("gist_id") || ""
	@state() private _filename_type: FilenameType = "month-group"
	@state() private _filename_rule = ""
	@state() private _separator = true

	private _handleMarkdownChange(e: CustomEvent<{ value: string }>) {
		this._markdown = e.detail.value
	}

	private _handleInputChange(e: Event) {
		const target = e.target as HTMLInputElement
		const name = target.name || target.getAttribute("name")

		switch (name) {
			case "token":
				this._token = target.value
				break
			case "gist-id":
				this._gist_id = target.value
				break
			case "filename-type":
				this._filename_type = target.value as FilenameType
				break
			case "filename-rule":
				this._filename_rule = target.value
				break
			case "separator":
				this._separator = target.checked
				break
		}
	}

	private _cancelEvent(e: Event) {
		e.stopPropagation()
	}

	private async _handlePost() {
		try {
			localStorage.setItem("token", this._token)
			localStorage.setItem("gist_id", this._gist_id)

			const me = await getMyUser(this._token)
			const gist = await getGist(this._gist_id)

			if (gist.status !== 200 || me.status !== 200) {
				throw new Error("Gist の取得に失敗しました", { cause: { gist, me } })
			}

			if (me.body.login !== gist.body.owner.login) {
				throw new Error(
					`Token のユーザーと Gist のユーザーが異なります "${me.body.login}" and "${gist.body.owner.login}"`,
					{ cause: { gist, me } },
				)
			}

			const filenames = Object.keys(gist.body.files)
			const filename = resolveFilename(this._filename_type, this._filename_rule, filenames)
			const file = gist.body.files[filename]

			if (file?.truncated) {
				throw new Error(`ファイルが省略されています ${filename}`, { cause: file })
			}

			const is_continue = await ConfirmDialog.openConfirm(
				html`
					<p>
						<b>${filename}</b> の Gist を更新しますか？<br />
						セパレーター<b>${this._separator ? "あり" : "なし"}</b><br />
						既存ファイル<b>${file ? "あり" : "なし"}</b><br />
						最終更新: <b>${dayjs(gist.body.updated_at).format("YYYY/MM/DD HH:mm:ss")}</b>
					</p>
				`,
				"確認",
			)
			if (!is_continue) {
				return
			}

			const content = mergeContents(filenames.includes(filename) ? file.content : "", this._markdown, this._separator)
			const result = await updateGist(this._token, this._gist_id, filename, content)

			if (result.status !== 200) {
				throw new Error(`更新に失敗しました (${result.status})`, { cause: result })
			}

			await ConfirmDialog.openAlert(
				html`
					<p>更新しました</p>
					<p><a href="${gist.body.html_url}" target="_blank">${gist.body.html_url}</a></p>
				`,
				"成功",
			)
		} catch (err) {
			const error = err as Error
			console.error(error, error.cause)
			await ConfirmDialog.openAlert(
				html`
					<p>エラーが発生しました</p>
					<fluent-textarea appearance="filled-darker" .value=${error.message} block readonly></fluent-textarea>
				`,
				"エラー",
			)
		}
	}

	render() {
		return html`
			<div class="layout">
				<section class="container top">
					<div class="settings">
						<div class="column">
							<fluent-text-input name="token" value=${this._token} @input=${this._handleInputChange}>
								Token
							</fluent-text-input>
							<fluent-text-input name="gist-id" value=${this._gist_id} @input=${this._handleInputChange}>
								Gist ID
							</fluent-text-input>
						</div>
						<fluent-field label-position="above">
							<label slot="label">Filename type</label>
							<fluent-radio-group
								slot="input"
								orientation="vertical"
								name="filename-type"
								value=${this._filename_type}
								@change=${this._handleInputChange}
							>
								<fluent-field label-position="after">
									<label slot="label">YYYY-MM.md</label>
									<fluent-radio slot="input" name="filename-type" value="month-group"></fluent-radio>
								</fluent-field>
								<fluent-field label-position="after">
									<label slot="label">YYYY-MM-NNN.md</label>
									<fluent-radio slot="input" name="filename-type" value="month-single"></fluent-radio>
								</fluent-field>
								<div class="custom-row">
									<fluent-field label-position="after">
										<label slot="label">Custom</label>
										<fluent-radio slot="input" name="filename-type" value="custom"></fluent-radio>
									</fluent-field>
									<fluent-text-input
										id="filename-rule-custom"
										name="filename-rule"
										placeholder="{YYYY}-{MM}-title.md"
										.value=${this._filename_rule}
										@input=${this._handleInputChange}
										@change=${this._cancelEvent}
										?disabled=${this._filename_type !== "custom"}
									></fluent-text-input>
									<fluent-tooltip anchor="filename-rule-custom" positioning="below-start" delay="700">
										{YYYY} のような形式で dayjs のフォーマットが使えます<br />
										{NNN} は自動連番になります<br />
										N の数がパッディングする桁数です
									</fluent-tooltip>
								</div>
							</fluent-radio-group>
						</fluent-field>
						<div class="column">
							<fluent-field label-position="after">
								<label slot="label">Separator</label>
								<fluent-checkbox
									name="separator"
									.checked=${this._separator}
									@change=${this._handleInputChange}
									slot="input"
								></fluent-checkbox>
							</fluent-field>
						</div>
					</div>
					<div class="buttons">
						<fluent-button shape="circular" appearance="primary" size="large" @click=${this._handlePost}>
							POST
						</fluent-button>
					</div>
				</section>

				<div class="bottom">
					<div class="pane">
						<markdown-editor .value=${this._markdown} @change=${this._handleMarkdownChange}></markdown-editor>
					</div>
					<div class="pane">
						<markdown-preview .value=${this._markdown}></markdown-preview>
					</div>
				</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"gist-append": GistAppend
	}
}
