import van from "vanjs-core"
import { getOptions, add, remove, prepareSW, load, save } from "shared"

const { h1, button, div, header, main, section, input, label } = van.tags

const list = getOptions()

const CheckFirst = ({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "checkbox") {
			if (checked) {
				onChange({
					checks: add(state.val.checks, value),
					radio: state.val.radio == null ? value : state.val.radio,
				})
			} else {
				onChange({
					checks: remove(state.val.checks, value),
					radio: state.val.radio === value ? null : state.val.radio,
				})
			}
		} else {
			onChange({ ...state.val, radio: value })
		}
	}

	return section(
		{ onchange: _onChange },
		list.map((item) => {
			const checked = van.derive(() => state.val.checks.includes(item.id))
			const radio = van.derive(() => state.val.radio === item.id)
			return div(
				{ class: "row" },
				input({ type: "checkbox", checked, value: item.id }),
				input({
					type: "radio",
					checked: radio,
					disabled: () => !checked.val,
					value: item.id,
				}),
				label(item.label),
			)
		}),
	)
}

const RadioFirst = ({ state, onChange }) => {
	const _onChange = (event) => {
		const { type, value, checked } = event.target

		if (type === "radio") {
			onChange({
				radio: value,
				checks: add(state.val.checks, value),
			})
		} else {
			onChange({
				...state.val,
				checks: checked ? add(state.val.checks, value) : remove(state.val.checks, value),
			})
		}
	}

	return section(
		{ onchange: _onChange },
		list.map((item) => {
			const checked = van.derive(() => state.val.checks.includes(item.id))
			const radio = van.derive(() => state.val.radio === item.id)
			return div(
				{ class: "row" },
				input({ type: "radio", checked: radio, value: item.id }),
				input({ type: "checkbox", checked: checked, disabled: radio, value: item.id }),
				label(item.label),
			)
		}),
	)
}

const App = ({ state }) => {
	const ready = van.derive(() => state.val != null)

	const onChange = async (new_state) => {
		state.val = new_state
		await save("../api", new_state)
	}

	const onClear = async () => {
		await onChange({
			checks: [],
			radio: null,
		})
	}

	return () => {
		if (ready.val) {
			return div(
				header(h1("Van"), button({ onclick: onClear }, "クリア")),
				main(CheckFirst({ state, onChange }), RadioFirst({ state, onChange })),
			)
		} else {
			return div("Loading...")
		}
	}
}

{
	const state = van.state()

	prepareSW("../sw.js")
		.then(async () => {
			state.val = await load("../api")
		})
		.catch((err) => {
			console.error(err)
			alert("エラーが発生しました")
		})

	van.add(document.getElementById("app"), App({ state }))
}
