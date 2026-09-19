const root = new URL("./", self.location.href)

const state = {
	data: {
		checks: [],
		radio: null,
	},
}

self.addEventListener("install", (event) => {
	event.waitUntil(self.skipWaiting())
})

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim())
})

const makeJSONResponse = (data = {}, status = 200) => {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	})
}

const validate = (data) => {
	return {
		checks: data.checks.map((x) => String(x)),
		radio: data.radio == null ? null : String(data.radio),
	}
}

self.addEventListener("fetch", (event) => {
	const url = new URL(event.request.url)

	// /api へのアクセス以外は通常の処理としてスルーする
	if (root.pathname + "api" !== url.pathname) {
		return
	}

	if (event.request.method === "GET") {
		event.respondWith(makeJSONResponse(state.data))
		return
	}

	if (event.request.method === "POST") {
		event.respondWith(
			Promise.try(async () => {
				try {
					state.data = validate(await event.request.json())
					return makeJSONResponse()
				} catch (err) {
					return makeJSONResponse({ error: err.message }, 400)
				}
			}),
		)
		return
	}
})
