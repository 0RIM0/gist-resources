import { useEffect } from "react"
import "./Search.css"
import { data_url, ready, search, setCallback, state } from "./search.js"

const Search = ({ onChange }) => {
	setCallback(onChange)

	// マウント時の初期状態で更新
	// 以降は setCallback で設定した関数がイベント時に呼び出される
	useEffect(() => {
		if (!data_url) {
			onChange({ error: "データ URL を指定してください" })
			return
		}
		if (ready) {
			onChange(state)
		} else {
			onChange({ error: "データ読込中" })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const _onChange = (event) => {
		const value = event.target.value
		if (value.startsWith("/") && value.endsWith("/")) {
			try {
				new RegExp(`(${value.slice(1, -1)})`)
			} catch {
				onChange({ error: "不正な正規表現です" })
				return
			}
		}
		search(value)
	}

	return (
		<div className="component-search component-root">
			<input autoFocus onChange={_onChange} />
		</div>
	)
}

export default Search
