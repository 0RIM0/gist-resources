const root = new URL("./", self.location.href)

let count = 0

console.log("SW Init")

self.addEventListener("install", (event) => {
	event.waitUntil(self.skipWaiting())
})

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim())
})

self.addEventListener("fetch", (event) => {
	const url = new URL(event.request.url)
	console.log("SW request", url.href)

	const makeJSONResponse = (status, data) => {
		return new Response(JSON.stringify(data), {
			status,
			headers: { "Content-Type": "application/json" },
		})
	}

	if (root.pathname + "data" === url.pathname) {
		if (event.request.method === "GET") {
			event.respondWith(makeJSONResponse(200, { count }))
		} else if (event.request.method === "POST") {
			event.respondWith(
				Promise.try(async () => {
					try {
						const data = await event.request.json()
						count = ~~data.count
						return makeJSONResponse(200, {})
					} catch (err) {
						console.error(err)
						return makeJSONResponse(400, { error: err.message })
					}
				}),
			)
		}
	}
})
