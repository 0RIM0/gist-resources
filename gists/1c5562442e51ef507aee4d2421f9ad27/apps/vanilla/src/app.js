import { prepareSW, load, save } from "shared"
import checkFirst from "./check-first.js"
import radioFirst from "./radio-first.js"

export default (host) => {
	host.innerHTML = `<div>Loading...</div>`

	const init = (data) => {
		let state = data

		host.innerHTML = `
			<div>
				<header>
					<h1>Vanilla</h1>
					<button id="clear-button">クリア</button>
				</header>
				<main id="main">
					<section id="check-first"></section>
					<section id="radio-first"></section>
				</main>
			</div>
		`

		const updateState = (data) => {
			state = data
			void save("../api", state)
			check_first.update({ state })
			radio_first.update({ state })
		}

		host.querySelector("#clear-button").addEventListener("click", () => {
			updateState({
				checks: [],
				radio: null,
			})
		})

		host.querySelector("#main").addEventListener("state-change", (event) => {
			updateState(event.detail)
		})

		const check_first = checkFirst(host.querySelector("#check-first"), { state })
		const radio_first = radioFirst(host.querySelector("#radio-first"), { state })
	}

	prepareSW("../sw.js")
		.then(async () => {
			const data = await load("../api")
			init(data)
		})
		.catch((err) => {
			console.error(err)
			alert("エラーが発生しました")
		})
}
