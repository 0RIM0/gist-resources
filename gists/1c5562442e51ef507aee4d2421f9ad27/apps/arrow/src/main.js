import { html, component, reactive } from "@arrow-js/core"
import { getOptions, add, remove, prepareSW, load, save } from "shared"

const list = getOptions()

const CheckFirst = component(({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.value.checks, value),
					radio: state.value.radio == null ? value : state.value.radio,
				})
			} else {
				onChange({
					checks: remove(state.value.checks, value),
					radio: state.value.radio === value ? null : state.value.radio,
				})
			}
		} else {
			onChange({ ...state.value, radio: value })
		}
	}

	return html`
		<section @change="${_onChange}">
			${list.map((item) => {
				const checked = () => state.value.checks.includes(item.id)
				const radio = () => state.value.radio === item.id
				return html`
					<div class="row">
						<input type="checkbox" checked="${() => checked()}" value="${item.id}" />
						<input
							type="radio"
							checked="${() => radio()}"
							disabled="${() => !checked()}"
							value="${item.id}"
						/>
						<label>${item.label}</label>
					</div>
				`.key(item.id)
			})}
		</section>
	`
})

const RadioFirst = component(({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "radio") {
			onChange({
				radio: value,
				checks: add(state.value.checks, value),
			})
		} else {
			onChange({
				...state.value,
				checks: checked
					? add(state.value.checks, value)
					: remove(state.value.checks, value),
			})
		}
	}

	return html`
		<section @change="${_onChange}">
			${list.map((item) => {
				const checked = () => state.value.checks.includes(item.id)
				const radio = () => state.value.radio === item.id
				return html`
					<div class="row">
						<input type="radio" checked="${() => radio()}" value="${item.id}" />
						<input
							type="checkbox"
							checked="${() => checked()}"
							disabled="${() => radio()}"
							value="${item.id}"
						/>
						<label>${item.label}</label>
					</div>
				`.key(item.id)
			})}
		</section>
	`
})

const App = component(() => {
	const state = reactive({ value: null })

	prepareSW("../sw.js")
		.then(async () => {
			const data = await load("../api")
			state.value = data
		})
		.catch((err) => {
			console.error(err)
			alert("エラーが発生しました")
		})

	const onChange = async (new_state) => {
		state.value = new_state
		await save("../api", new_state)
	}

	const onClear = async () => {
		await onChange({
			checks: [],
			radio: null,
		})
	}

	return html`${() => {
		if (state.value == null) {
			return html`<div>Loading...</div>`
		} else {
			return html`
				<div>
					<header>
						<h1>Arrow</h1>
						<button @click="${onClear}">クリア</button>
					</header>
					<main>
						${CheckFirst({ state, onChange })} ${RadioFirst({ state, onChange })}
					</main>
				</div>
			`
		}
	}}`
})

html`${App()}`(document.getElementById("app"))
