import React from "react"
import "./Item.css"

const formatter = Intl.DateTimeFormat("ja-JP", { dateStyle: "short" })

const Item = React.memo(({ item }) => {
	const body = item.body.reduce((acc, value, index) => {
		// 文字列を↓のように分割したものが入ってる
		// [マッチしない部分, マッチする部分, マッチしない部分, ...]
		const elem = index % 2 === 0 ? value : <mark key={index}>{value}</mark>
		return [...acc, elem]
	}, [])

	const url = `https://gist.github.com/${item.gist_id}`

	return (
		<a href={url} target="_blank" className="component--root component-item">
			<div className="head">
				<span className="gist-id">{item.gist_id}</span>
				<span className="filename">{item.filename}</span>
				<span className="created-at">{formatter.format(new Date(item.created_at))}</span>
			</div>
			<div className="body">
				{body}
			</div>
		</a>
	)
})

export default Item
