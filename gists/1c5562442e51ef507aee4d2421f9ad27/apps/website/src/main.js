import { getOptions } from "shared"

const $ = (tag, props, children) => {
	const el = Object.assign(document.createElement(tag), props)
	el.append(...children)
	return el
}

document.body.append(
	$(
		"ul",
		null,
		getOptions().map((item) => $("li", null, [$("a", { href: item.id }, item.label)])),
	),
)
