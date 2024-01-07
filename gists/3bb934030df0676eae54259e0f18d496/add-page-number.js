import fs from "node:fs"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

const addPageNumber = async ({ src, dest, color, size, x, y, format, halign }) => {
	const buf = await fs.promises.readFile(src)
	const doc = await PDFDocument.load(buf)
	const font = await doc.embedFont(StandardFonts.Helvetica)
	const rgb_color = rgb(...color)

	const pages = doc.getPages()
	for (const [index, page] of pages.entries()) {
		const { width, height } = page.getSize()

		const pos = {
			x: x < 0 ? width + x : x,
			y: y < 0 ? height + y : y,
		}

		const text = format.replace(/\{(page|total)\}/g, (_, key) => {
			if (key === "page") return index + 1
			if (key === "total") return pages.length
		})
		const text_width = font.widthOfTextAtSize(text, size)

		if (halign === "right") {
			pos.x = pos.x - text_width
		} else if (halign === "center") {
			pos.x = pos.x - (text_width / 2)
		}

		page.drawText(text, {
			x: pos.x,
			y: pos.y,
			size,
			color: rgb_color,
			font,
		})
	}

	await fs.promises.writeFile(dest, await doc.save())
}

export default addPageNumber
