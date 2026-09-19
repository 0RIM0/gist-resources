export const getOptions = () => {
	return [
		{ id: "react", label: "React" },
		{ id: "preact", label: "Preact+htm" },
		{ id: "vue", label: "Vue" },
		{ id: "angular", label: "Angular" },
		{ id: "solid", label: "Solid" },
		{ id: "lit", label: "Lit" },
		{ id: "alpine", label: "Alpine" },
		{ id: "hyperhtml", label: "hyperHTML" },
		{ id: "uhtml", label: "uhtml" },
		{ id: "van", label: "Van" },
		{ id: "aurelia", label: "Aurelia" },
		{ id: "stencil", label: "Stencil" },
		{ id: "arrow", label: "Arrow" },
		{ id: "ripple", label: "Ripple" },
		{ id: "vanilla", label: "Vanilla" },
	]
}

export const add = (arr: string[], item: string): string[] => {
	const set = new Set(arr)
	set.add(item)
	return [...set]
}

export const remove = (arr: string[], item: string): string[] => {
	const set = new Set(arr)
	set.delete(item)
	return [...set]
}

export const prepareSW = async (swpath: string) => {
	await navigator.serviceWorker.register(swpath).then(async () => {
		await navigator.serviceWorker.ready

		if (!navigator.serviceWorker.controller) {
			await Promise.race([
				new Promise((resolve) => {
					navigator.serviceWorker.addEventListener("controllerchange", resolve, {
						once: true,
					})
				}),
				new Promise((resolve) => setTimeout(resolve, 500)),
			])
			// タイムアウトしても controller が null の場合はリロード
			// Ctrl+F5 時に発生する
			if (!navigator.serviceWorker.controller) {
				window.location.reload()
				// 解決させない
				return new Promise(() => {})
			}
		}
	})
}

export type State = {
	checks: string[]
	radio: string | null
}

export const load = async (apipath: string): Promise<State> => {
	const res = await fetch(apipath)
	if (!res.ok) {
		throw new Error("Failed to fetch count")
	}
	const data = await res.json()
	return data
}

export const save = async (apipath: string, state: State) => {
	const res = await fetch(apipath, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(state),
	})
	if (!res.ok) {
		throw new Error("Failed to save count")
	}
	const data = await res.json()
	return data
}
