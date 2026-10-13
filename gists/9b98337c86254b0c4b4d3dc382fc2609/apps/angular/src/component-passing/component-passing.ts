import { Component } from "@angular/core"
import { ComponentPassingChild } from "../component-passing-child/component-passing-child"
import { ComponentChild } from "../component-child/component-child"

@Component({
	selector: "component-passing",
	templateUrl: "./component-passing.html",
	imports: [ComponentPassingChild],
})
export class ComponentPassing {
	component = ComponentChild
}
