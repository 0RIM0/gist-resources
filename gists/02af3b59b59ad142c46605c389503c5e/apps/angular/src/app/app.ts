import { Component, signal } from "@angular/core"

@Component({
	selector: "app-root",
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly flag = signal(false)
	protected readonly items = signal([
		{
			id: 1,
			name: "apple",
		},
		{
			id: 2,
			name: "banana",
		},
		{
			id: 3,
			name: "cherry",
		},
	])

	protected toggle() {
		this.flag.update((prev) => !prev)
	}

	protected toLast(idx: number) {
		this.items.update((prev) => prev.toSpliced(idx, 1).concat([prev[idx]]))
	}
}
