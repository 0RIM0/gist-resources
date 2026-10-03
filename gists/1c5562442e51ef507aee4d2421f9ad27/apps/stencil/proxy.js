const httpProxy = require("http-proxy")
const proxy = httpProxy.createProxyServer()

const proxies = {
	"/common.css": "http://localhost:3000/",
	"/sw.js": "http://localhost:3000/",
}

module.exports = (req, res, next) => {
	for (const path of Object.keys(proxies)) {
		if (req.url === path) {
			const target = proxies[path]
			return proxy.web(req, res, { target })
		}
	}
	next()
}
