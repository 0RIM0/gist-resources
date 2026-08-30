const setup = (count) => {
	const button = document.querySelector("button")
	button.disabled = false
	button.textContent = count
	button.onclick = async () => {
		button.textContent = ++count
		await save(count)
	}
}

const load = async () => {
	const res = await fetch("../data")
	const { count } = await res.json()
	return count
}

const save = async (count) => {
	const res = await fetch("../data", {
		method: "POST",
		body: JSON.stringify({ count }),
	})
	if (!res.ok) {
		console.error(await res.json())
	}
}

const prepareSW = async () => {
	return navigator.serviceWorker
		.register("../sw.js")
		.then(async (registration) => {
			console.log("SW Registered:", registration)
			await navigator.serviceWorker.ready
			console.log("SW Ready")

			// ready 状態でも controller が準備できてないケースがあるので待機
			if (!navigator.serviceWorker.controller) {
				await new Promise((resolve) => {
					navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true })
				})
				console.log("SW Controller Ready")
			}
		})
		.catch((error) => {
			console.error("SW Failed:", error)
			throw error
		})
}

prepareSW()
	.then(() => {
		load().then(setup).catch(console.error)
	})
	.catch(() => {})
