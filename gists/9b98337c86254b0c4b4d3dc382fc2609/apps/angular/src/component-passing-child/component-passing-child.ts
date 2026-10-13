import { NgComponentOutlet } from "@angular/common"
import { Component, input, Type } from "@angular/core"

@Component({
	selector: "component-passing-child",
	templateUrl: "./component-passing-child.html",
	imports: [NgComponentOutlet],
})
export class ComponentPassingChild {
	component = input.required<Type<any>>()
}
