import { track, effect, type Tracked } from "ripple"

const App = () => @{
	const flag = track(false)
	const items = track([
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "cherry" },
	])

	const toLast = (idx: number) => {
		items.value = items.value.toSpliced(idx, 1).concat([items.value[idx]])
	}

	<div>
		<p>
			flag is{" "}
			@if (flag.value) {
				<span class="on">on</span>
			} @else {
				<span class="off">off</span>
			}
		</p>
		<button onClick={() => (flag.value = !flag.value)}>toggle</button>
		<hr />
		<ul>
			@for (const item of items.value; index idx; key item.id) {
				<li>
					<span>{item.name}</span>
					<button onClick={() => toLast(idx)}>last</button>
				</li>
			}
		</ul>
		<style>
			.on {
				color: #388e3c;
			}

			.off {
				color: #d32f2f;
			}

			hr {
				border: 0;
				height: 2px;
				background-color: #bbb;
				margin: 16px 0;
			}

			li {
				margin: 8px 0;
			}

			button {
				font-size: inherit;
				padding: 3px 16px;
				color: #fafafa;
				background: #2196f3;
				border: solid 1px #0002;
				border-radius: 4px;
				box-shadow:
					rgba(255, 255, 255, 0.2) 0px 1px 1px 0 inset,
					rgba(0, 0, 0, 0.3) 0px 1px 1px 0;
				text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
				cursor: pointer;
			}

			li button {
				margin-left: 20px;
			}
		</style>
	</div>
}

export default App
