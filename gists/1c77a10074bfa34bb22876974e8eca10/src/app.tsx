import "./app.css"
import { T, setLang } from "./translate"
import translation from "@translation"

const { SampleText, Foo } = translation

export function App() {
	return (
		<>
			<main>
				<p>{T(SampleText)}</p>
				<p>{T(Foo.Bar)}</p>
			</main>
			<aside>
				<ul>
					<li onClick={() => setLang("ja")}>ja</li>
					<li onClick={() => setLang("en")}>en</li>
				</ul>
			</aside>
		</>
	)
}
