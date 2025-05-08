export class BaseElement extends HTMLElement {
	_use_shadow = true

	// override this
	render(root) {
		root.innerHTML = this.templateHTML()
	}

	// override this
	templateHTML() {
		return ``
	}

	// override this
	styleSheets() {
		return []
	}

	connectedCallback() {
		if (!this._init_) {
			this._init_ = true
			if (this._use_shadow) {
				this.attachShadow({ mode: "open" })
				this.shadowRoot.adoptedStyleSheets = this.styleSheets()
				this.render(this.shadowRoot)
			}
			this.onFirstConnect()
		}
		this.onConnect()
	}

	disconnectedCallback() {
		this.onDisconnect()
	}

	connectedMoveCallback() {
	}

	// override this
	onConnect() {}

	// override this
	onFirstConnect() {}

	// override this
	onDisconnect() {}

	$(selector) {
		const root = this.shadowRoot ?? this
		return root.querySelector(selector)
	}

	$$(selector) {
		const root = this.shadowRoot ?? this
		return [...root.querySelectorAll(selector)]
	}

	dispatch(type, options) {
		this.dispatchEvent(new CustomEvent(type, options))
	}

	on(...args) {
		const root = this.shadowRoot ?? this
		root.addEventListener(...args)
		return () => root.removeEventListener(...args)
	}

	off(...args) {
		const root = this.shadowRoot ?? this
		root.removeEventListener(...args)
	}
}
