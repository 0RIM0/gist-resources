import { getOptions, add, remove } from "shared"

export default (host, { state }) => {
	const list = getOptions()

	for (const item of list) {
		const div = document.createElement("div")
		div.classList.add("row")
		div.innerHTML = `
			<input type="checkbox">
			<input type="radio">
			<label></label>
		`
		const checked = state.checks.includes(item.id)
		const radio = state.radio === item.id
		Object.assign(div.querySelector("[type=checkbox]"), {
			checked,
			value: item.id,
		})
		Object.assign(div.querySelector("[type=radio]"), {
			checked: radio,
			disabled: !checked,
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
			checkbox.checked = state.checks.includes(item.id)
			radio.checked = state.radio === item.id
			radio.disabled = !checkbox.checked
		}
	}

	host.addEventListener("change", (event) => {
		const { type, value, checked } = event.target

		if (type === "checkbox") {
			if (checked) {
				host.dispatchEvent(
					new CustomEvent("state-change", {
						detail: {
							checks: add(state.checks, value),
							radio: state.radio == null ? value : state.radio,
						},
						bubbles: true,
					}),
				)
			} else {
				host.dispatchEvent(
					new CustomEvent("state-change", {
						detail: {
							checks: remove(state.checks, value),
							radio: state.radio === value ? null : state.radio,
						},
						bubbles: true,
					}),
				)
			}
		} else {
			host.dispatchEvent(
				new CustomEvent("state-change", {
					detail: {
						...state,
						radio: value,
					},
					bubbles: true,
				}),
			)
		}
	})

	return { update }
}
