export const toArray = (arr) => {
	return Array.isArray(arr) ? arr : [arr]
}

export const download = async (data, name) => {
	const handle = await window.showSaveFilePicker({ suggestedName: name })
	const writable = await handle.createWritable()
	await writable.write(data).finally(async () => await writable.close())
}

export const mapAttrProp = (element, name) => {
	Object.defineProperty(element, name, {
		get() {
			return this.getAttribute(name)
		},
		set(value) {
			this.setAttribute(name, value)
		},
	})
}
