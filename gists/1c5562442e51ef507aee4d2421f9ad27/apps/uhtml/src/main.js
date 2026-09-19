import { render, html } from "uhtml"
import { getOptions, add, remove, prepareSW, load, save } from "shared"

const list = getOptions()

const CheckFirst = ({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.checks, value),
					radio: state.radio == null ? value : state.radio,
				})
			} else {
				onChange({
					checks: remove(state.checks, value),
					radio: state.radio === value ? null : state.radio,
				})
			}
		} else {
			onChange({ ...state, radio: value })
		}
	}

	return html`
		<section @change=${_onChange}>
			${list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return html`
					<div class="row">
						<input type="checkbox" .checked=${checked} .value=${item.id} />
						<input
							type="radio"
							.checked=${radio}
							.disabled=${!checked}
							.value=${item.id}
						/>
						<label>${item.label}</label>
					</div>
				`
			})}
		</section>
	`
}

const RadioFirst = ({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "radio") {
			onChange({
				radio: value,
				checks: add(state.checks, value),
			})
		} else {
			onChange({
				...state,
				checks: checked ? add(state.checks, value) : remove(state.checks, value),
			})
		}
	}

	return html`
		<section @change=${_onChange}>
			${list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return html`
					<div class="row">
						<input type="radio" .checked=${radio} .value=${item.id} />
						<input
							type="checkbox"
							.checked=${checked}
							.disabled=${radio}
							.value=${item.id}
						/>
						<label>${item.label}</label>
					</div>
				`
			})}
		</section>
	`
}

const App = ({ update, state }) => {
	if (!state) {
		return html`<div>Loading...</div>`
	}

	const onChange = async (new_state) => {
		update(new_state)
		await save("../api", new_state)
	}

	const onClear = async () => {
		await onChange({
			checks: [],
			radio: null,
		})
	}

	return html`
		<div>
			<header>
				<h1>uhtml</h1>
				<button @click=${onClear}>クリア</button>
			</header>
			<main>${CheckFirst({ state, onChange })} ${RadioFirst({ state, onChange })}</main>
		</div>
	`
}

const main = () => {
	prepareSW("../sw.js")
		.then(async () => {
			update(await load("../api"))
		})
		.catch((err) => {
			console.error(err)
			alert("エラーが発生しました")
		})

	const elem = document.getElementById("app")

	const update = (state) => {
		setTimeout(() => render(elem, App({ update, state })))
	}

	update(null)
}

main()
