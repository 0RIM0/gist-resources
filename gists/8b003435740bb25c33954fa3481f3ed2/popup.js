import css from "./popup.css" with { type: "css" }
import { html, render, useEffect, useState, useReducer, useMemo } from "./lib/htm-3.1.1-preact-standalone.module.js"

document.adoptedStyleSheets = [css]

const formatter = new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium", timeStyle: "medium" })
const formatDateTime = (ms) => formatter.format(new Date(ms))

const createItem = () => {
	return {
		enabled: true,
		url: "",
		interval_minutes: "60",
		last_access: null,
		status: null,
		new: true,
	}
}

const toForm = (data) => {
	return {
		interval_min: String(data.interval_min),
		interval_max: String(data.interval_max),
		items: data.items.map(item => {
			return {
				enabled: item.enabled,
				url: item.url,
				interval_minutes: String(item.interval_minutes),
				last_access: item.last_access,
				status: item.status,
				new: false,
			}
		}),
	}
}

const fromForm = (form) => {
	return {
		interval_min: +form.interval_min,
		interval_max: +form.interval_max,
		items: form.items.map(item => {
			return {
				enabled: item.enabled,
				url: item.url,
				interval_minutes: +item.interval_minutes,
				last_access: item.last_access,
				status: item.status,
			}
		}),
	}
}

const validateForm = (form) => {
	const isIntString = (n) => {
		return n === String(~~n)
	}
	let valid = true
	valid &&= isIntString(form.interval_min) && ~~form.interval_min > 0
	valid &&= isIntString(form.interval_max) && ~~form.interval_min > 0
	valid &&= form.items.every(item => {
		let valid = true
		valid &&= isIntString(item.interval_minutes) && ~~item.interval_minutes > 0
		valid &&= item.url !== ""
		return valid
	})
	return valid
}

const getInputValue = (input) => {
	if (input.type === "checkbox" || input.type === "radio") {
		return input.checked
	} else {
		return input.value
	}
}

const reducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case "clear":
			return null
		case "init":
			return action.data
		case "add-item":
			return {
				...state,
				items: [...state.items, createItem()],
			}
		case "change-item":
			return {
				...state,
				items: state.items.with(action.index, {
					...state.items[action.index],
					[action.name]: action.value,
				}),
			}
		case "remove-item":
			return {
				...state,
				items: state.items.toSpliced(action.index, 1)
			}
		case "toggle-all":
			return {
				...state,
				items: state.items.map(item => {
					return {
						...item,
						enabled: action.checked,
					}
				})
			}
		case "change":
			return {
				...state,
				[action.name]: action.value,
			}
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, null)

	useEffect(() => {
		chrome.storage.local.get(["interval_min", "interval_max", "items"])
			.then((data) => {
				dispatch({ type: "init", data: toForm(data) })
			})
		return () => dispatch({ type: "clear" })
	}, [])

	if (!state) {
		return html`<div className="loading">...</div>`
	}

	const valid = useMemo(() => validateForm(state), [state])

	const add = () => {
		dispatch({ type: "add-item" })
	}

	const onChange = (event) => {
		const name = event.target.name
		const value = getInputValue(event.target)
		dispatch({ type: "change", name, value })
	}

	const onToggleAll = (event) => {
		const checked = event.target.checked
		dispatch({ type: "toggle-all", checked })
	}

	const save = async () => {
		await chrome.storage.local.set(fromForm(state))
	}

	const check_all = state.items.every(item => item.enabled)

	return html`
		<div className="container">
			<div className="flex-both-side">
				<div className="flex-row">
					<div className="range" onChange=${onChange}>
						<div className="flex-row">
							<input name="interval_min" value=${state.interval_min} />
							分
						</div>
						～
						<div className="flex-row">
							<input name="interval_max" value=${state.interval_max} />
							分
						</div>
					</div>
					<${ScheduledTime} />
				</div>
				<div>
					<button disabled=${!valid} onClick=${save}>保存</button>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th className="text-center"><input type="checkbox" onChange=${onToggleAll} checked=${check_all} /></th>
						<th>URL</th>
						<th>間隔(分)</th>
						<th>最終アクセス</th>
						<th>ステータス</th>
						<th className="text-center"><button onClick=${add}>追加</button></th>
					</tr>
				</thead>
				<tbody>
					${state.items.map((item, index) => {
						const onChange = (event) => {
							const name = event.target.name
							const value = getInputValue(event.target)
							dispatch({ type: "change-item", index, name, value: value })
						}
						const onRemove = () => {
							dispatch({ type: "remove-item", index })
						}
						return html`
							<${Item}
								value=${item}
								onChange=${onChange}
								onRemove=${onRemove}
							/>
						`
					})}
				</tbody>
			</table>
		</div>
	`
}

const ScheduledTime = () => {
	const [state, setState] = useState({ type: "loading" })

	useEffect(() => {
		chrome.alarms.get("timer").then(timer => {
			if (timer) {
				setState({ type: "loaded", time: formatDateTime(timer.scheduledTime) })
			} else {
				setState({ type: "none" })
			}
		})
		return () => setState({ type: "unmounted" })
	}, [])

	return html`
		<div className="scheduled-time">
			Next:${" "}
			${state.type === "none" ? (
				"設定されていません"
			) : state.type === "loaded" ? (
				state.time
			) : "..."}
		</div>
	`
}

const Item = ({ value, onChange, onRemove }) => {
	const error = value.status >= 400

	return html`
		<tr className=${`item ${error ? "error" : ""}`} onChange=${onChange}>
			<td className="text-center"><input type="checkbox" name="enabled" checked=${value.enabled} /></td>
			<td><input className="url" name="url" value=${value.url} disabled=${!value.new} /></td>
			<td><input className="interval-minutes" name="interval_minutes" value=${value.interval_minutes} /></td>
			<td className="text-center">${value.last_access ? formatDateTime(value.last_access) : null}</td>
			<td className="text-center">${value.status}</td>
			<td className="text-center"><button onClick=${onRemove}>✕</button></td>
		</tr>
	`
}

render(html`<${App} />`, document.getElementById("root"))
