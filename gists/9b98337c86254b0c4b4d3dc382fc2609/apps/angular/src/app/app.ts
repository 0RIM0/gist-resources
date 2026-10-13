import { Component } from "@angular/core"
import { ValuePassing } from "../value-passing/value-passing"
import { EventHandling } from "../event-handling/event-handling"
import { ElementPassing } from "../element-passing/element-passing"
import { RenderFunctionPassing } from "../render-function-passing/render-function-passing"
import { ComponentPassing } from "../component-passing/component-passing"

@Component({
	selector: "app-root",
	imports: [
		ValuePassing,
		EventHandling,
		ElementPassing,
		RenderFunctionPassing,
		ComponentPassing,
	],
	templateUrl: "./app.html",
})
export class App {}
