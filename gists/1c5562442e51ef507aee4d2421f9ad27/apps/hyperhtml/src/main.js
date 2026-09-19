import { bind, wire } from "hyperhtml"
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

	return wire(list, ":check-first")`
		<section onchange=${_onChange}>
			${list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return wire(item, ":check-first-row")`
					<div class="row">
						<input type="checkbox" checked=${checked} value=${item.id} />
						<input type="radio" checked=${radio} disabled=${!checked} value=${item.id} />
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

	return wire(list, ":radio-first")`
		<section onchange=${_onChange}>
			${list.map((item) => {
				const checked = state.checks.includes(item.id)
				const radio = state.radio === item.id
				return wire(item, ":radio-first-row")`
					<div class="row">
						<input type="radio" checked=${radio} value=${item.id} />
						<input type="checkbox" checked=${checked} disabled=${radio} value=${item.id} />
						<label>${item.label}</label>
					</div>
				`
			})}
		</section>
	`
}

const App = ({ update, state }) => {
	if (!state) {
		return wire(App, ":app-loading")`<div>Loading...</div>`
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

	return wire(App, ":app")`
		<div>
			<header>
				<h1>hyperHTML</h1>
				<button onclick=${onClear}>クリア</button>
			</header>
			<main>
				${CheckFirst({ state, onChange })}
				${RadioFirst({ state, onChange })}
			</main>
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

	const render = bind(document.getElementById("app"))

	const update = (state) => {
		setTimeout(() => render`${App({ update, state })}`)
	}

	update(null)
}

main()
