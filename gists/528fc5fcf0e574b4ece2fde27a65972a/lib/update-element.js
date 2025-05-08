import { BaseElement } from "./base-element.js"
import { toArray } from "./utils.js"

export class UpdateElement extends BaseElement {
	action = () => {
		throw new Error("初期化前に呼び出されました")
	}

	get = () => {
		throw new Error("初期化前に呼び出されました")
	}

	notifyInternals(targets, values) {
		for (const target of toArray(targets)) {
			if (typeof target === "string") {
				this.notifyInternals(this.$$(target), values)
			} else {
				target?.notify?.(values)
			}
		}
	}

	notify(values) {
		this.action = values.action
		this.get = values.get
		this.update(values)
	}

	// override this
	update() {}
}
