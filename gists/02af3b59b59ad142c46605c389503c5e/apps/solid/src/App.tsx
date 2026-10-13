import { createSignal, Show, For } from "solid-js"

const App = () => {
	const [flag, setFlag] = createSignal(false)
	const [items, setItems] = createSignal([
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "cherry" },
	])

	const toLast = (idx: number) => {
		setItems((items) => items.toSpliced(idx, 1).concat([items[idx]]))
	}

	return (
		<div>
			<p>
				flag is{" "}
				<Show when={flag()} fallback={<span class="off">off</span>}>
					<span class="on">on</span>
				</Show>
			</p>
			<button onClick={() => setFlag(!flag())}>toggle</button>
			<hr />
			<ul>
				<For each={items()} keyed={(item) => item.id}>
					{(item, idx) => (
						<li>
							<span>{item().name}</span>
							<button onClick={() => toLast(idx())}>last</button>
						</li>
					)}
				</For>
			</ul>
			<style>{`
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
					box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 1px 0 inset, rgba(0, 0, 0, 0.3) 0px 1px 1px 0;
					text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
					cursor: pointer;
				}

				li button {
					margin-left: 20px;
				}
			`}</style>
		</div>
	)
}

export default App
