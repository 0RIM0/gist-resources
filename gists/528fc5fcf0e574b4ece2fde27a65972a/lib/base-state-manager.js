export class BaseStateManager {
	_event_target = null
	data = null

	constructor() {
		this.init()
	}

	get(targets) {
		if (!targets) {
			return { ...this.data }
		}
		if (Array.isArray(targets)) {
			return targets.map(target => this.data[target])
		} else {
			return this.data[targets]
		}
	}

	init() {
		this._event_target = new EventTarget()
		this.data = {}

		// 初回起動時のイベント
		this.on("boot", async () => {
			await this.loadData()
			this.notify({ type: "boot" })
		})

		// app に通知して app が state manager ごと再作成
		// このインスタンスは破棄される
		this.on("reboot", async () => {
			this.notify({ type: "reboot" })
		})

		// ページをリロード
		this.on("reload", () => {
			this.notify({ type: "reload" })
		})

		// 新しいタブで開く
		this.on("open", (url) => {
			this.notify({ type: "open", url })
		})

		// ドキュメントを読み込む通常のページ遷移
		this.on("navigate", (url) => {
			this.notify({ type: "navigate", url })
		})

		// data をダウンロード
		this.on("download", ({ data, filename }) => {
			this.notify({ type: "download", data, filename })
		})
	}

	async loadData() {}

	on(type, handler) {
		const fn = (event) => {
			handler(event.detail)
		}
		this._event_target.addEventListener(type, fn)
		return () => this._event_target.removeEventListener(type, fn)
	}

	dispatch(type, detail) {
		this._event_target.dispatchEvent(new CustomEvent(type, { detail }))
	}

	notify(detail) {
		this.dispatch("update", detail)
	}
}
