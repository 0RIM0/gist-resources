window.addEventListener("click", async (event) => {
	if (event.target.localName === "button") {
		const action = event.target.dataset.action
		const type = event.target.closest("[data-type]").dataset.type

		const tabs = await chrome.tabs.query({ currentWindow: true })

		const text = format[type](tabs)

		if (action === "copy") {
			await navigator.clipboard.writeText(text)
		} else if (action === "save") {
			const filename = "tabs." + type
			download(filename, new Blob([text]))
		}
	}
})

const download = (filename, blob) => {
	const url = URL.createObjectURL(blob)
	const a = document.createElement("a")
	a.href = url
	a.download = filename
	a.click()
	URL.revokeObjectURL(url)
}

const format = {
	txt: (tabs) => {
		return tabs.map(tab => {
			return tab.title + "\n" + tab.url + "\n"
		}).join("\n")
	},
	csv: (tabs) => {
		return tabs.map(tab => {
			return [tab.url, tab.title].map(cell => {
				return '"' + cell.replaceAll('"', '""') + '"'
			}).join(",")
		}).join("\n")
	},
	tsv: (tabs) => {
		return tabs.map(tab => {
			return [tab.url, tab.title].map(cell => {
				return '"' + cell.replaceAll('"', '""') + '"'
			}).join("\t")
		}).join("\n")
	},
	json: (tabs) => {
		const value = tabs.map(tab => {
			return { url: tab.url, title: tab.title }
		})
		return JSON.stringify(value, null, "  ")
	},
	html: (tabs) => {
		const container = document.createElement("div")
		for (const tab of tabs) {
			const a = document.createElement("a")
			a.href = tab.url
			a.textContent = tab.title
			const p = document.createElement("p")
			p.append(a)
			container.append(p)
		}
		return `<!doctype html>\n<meta charset="utf-8"/>\n<div>${container.innerHTML}</div>`
	},
}
