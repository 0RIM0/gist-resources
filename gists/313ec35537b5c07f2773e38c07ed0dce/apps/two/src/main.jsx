import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"

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
		createRoot(document.getElementById("root")).render(
			<StrictMode>
				<App />
			</StrictMode>,
		)
	})
	.catch(() => {})
