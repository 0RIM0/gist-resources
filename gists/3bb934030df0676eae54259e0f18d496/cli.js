import { parseArgs } from "node:util"
import addPageNumber from "./add-page-number.js"

const { values, positionals } = parseArgs({
	options: {
		x: { type: "string", default: "5" },
		y: { type: "string", default: "5" },
		size: { type: "string", default: "10" },
		color: { type: "string", default: "0,0,0" },
		halign: { type: "string", default: "left" },
		format: { type: "string", default: "{page} / {total}" },
	},
	strict: false,
})

const errorExit = (msg) => {
	console.error(msg)
	console.error(values)
	console.error("usage: node cli.js src.pdf dest.pdf")
	process.exit(1)
}

const x = +values.x
if (isNaN(x)) errorExit("x is not number")

const y = +values.y
if (isNaN(y)) errorExit("y is not number")

const size = +values.size
if (isNaN(size)) errorExit("size is not number")

const color = values.color.split(",").map(x => +x.trim())
if (color.length !== 3 || color.some(x => isNaN(x))) errorExit("color is not valid")

const halign = values.halign
if (!["left", "center", "right"].includes(halign)) errorExit("halign is not valid")

const format = values.format

const [src, dest] = positionals
if (!src || !dest) errorExit("src and dest are required")

addPageNumber({
	src,
	dest,
	x,
	y,
	size,
	color,
	halign,
	format,
})
