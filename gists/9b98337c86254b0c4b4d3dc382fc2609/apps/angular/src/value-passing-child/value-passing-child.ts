import { Component, input } from "@angular/core"

@Component({
	selector: "value-passing-child",
	templateUrl: "./value-passing-child.html",
})
export class ValuePassingChild {
	value = input.required<string>()
}
