import { getOptions, add, remove } from "shared"

export default (host, { state }) => {
	const list = getOptions()

	for (const item of list) {
		const div = document.createElement("div")
		div.classList.add("row")
		div.innerHTML = `
			<input type="radio">
			<input type="checkbox">
			<label></label>
		`
		const checked = state.checks.includes(item.id)
		const radio = state.radio === item.id
		Object.assign(div.querySelector("[type=radio]"), {
			checked: radio,
			value: item.id,
		})
		Object.assign(div.querySelector("[type=checkbox]"), {
			checked: checked,
			disabled: radio,
			value: item.id,
		})
		div.querySelector("label").textContent = item.label
		host.appendChild(div)
	}

	const update = (data) => {
		state = data.state

		for (const [index, row] of host.querySelectorAll(".row").entries()) {
			const checkbox = row.querySelector("[type=checkbox]")
			const radio = row.querySelector("[type=radio]")
			const item = list[index]
			radio.checked = state.radio === item.id
			checkbox.checked = state.checks.includes(item.id)
			checkbox.disabled = radio.checked
		}
	}

	host.addEventListener("change", (event) => {
		const { type, value, checked } = event.target

		if (type === "radio") {
			host.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						radio: value,
						checks: add(state.checks, value),
					},
					bubbles: true,
				}),
			)
		} else {
			host.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						...state,
						checks: checked ? add(state.checks, value) : remove(state.checks, value),
					},
					bubbles: true,
				}),
			)
		}
	})

	return { update }
}
