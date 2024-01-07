import addPageNumber from "./add-page-number.js"

addPageNumber({
	src: "./doc.pdf",
	dest: "./doc-with-number.pdf",
	x: -5,
	y: 5,
	size: 10,
	color: [0, 0, 0],
	halign: "right",
	format: "{page} / {total}"
})
