import { Component, input, TemplateRef } from "@angular/core"
import { NgTemplateOutlet } from "@angular/common"

@Component({
	selector: "render-function-passing-child",
	templateUrl: "./render-function-passing-child.html",
	imports: [NgTemplateOutlet],
})
export class RenderFunctionPassingChild {
	template = input.required<TemplateRef<{ message: string }>>()
}
