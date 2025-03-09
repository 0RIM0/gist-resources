chrome.runtime.onInstalled.addListener(async (details) => {
	const data = await chrome.storage.local.get(["interval_min", "interval_max", "items"])

	data.interval_min ??= 100
	data.interval_max ??= 200
	data.items ??= []

	await chrome.storage.local.set(data)

	setAlarm()
});

chrome.alarms.onAlarm.addListener(async () => {
	const { items } = await chrome.storage.local.get("items")

	for (const item of items) {
		if (!item.enabled) continue
		if (Date.now() - (item.last_access ?? 0) < 1000 * 60 * item.interval_minutes) continue

		fetch(item.url).then(async (response) => {
			item.last_access = Date.now()
			item.status = response.status
			await chrome.storage.local.set({ items })
		}).catch(console.error)
	}
})

const setAlarm = async () => {
	const { interval_min, interval_max } = await chrome.storage.local.get(["interval_min", "interval_max"])

	// 初回起動時はストレージの初期値登録より先にここに来るので undefined がありえる
	if (
		!interval_min ||
		!interval_max ||
		interval_min < 0 ||
		interval_max < 0
	) {
		return
	}

	const delay = interval_min > interval_max
		? interval_min
		: interval_min + ~~(Math.random() * (interval_max - interval_min + 1))

	await chrome.alarms.create("timer", { delayInMinutes: delay })
}

setAlarm()
