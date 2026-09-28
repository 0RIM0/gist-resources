import { Ok, Error } from "./gleam.mjs"

export const registerServiceWorker = async (callback) => {
	try {
		await navigator.serviceWorker.register("./sw.js")
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
				return new Promise(() => { })
			}
		}

		callback(new Ok())
	} catch (error) {
		console.error("Service Worker 登録失敗:", error)
		alert("Service Worker エラー")
	}
}

export const alert = (message) => {
	window.alert(message)
}
