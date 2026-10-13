import { Component } from "@angular/core"
import { RenderFunctionPassingChild } from "../render-function-passing-child/render-function-passing-child"

@Component({
	selector: "render-function-passing",
	templateUrl: "./render-function-passing.html",
	imports: [RenderFunctionPassingChild],
})
export class RenderFunctionPassing {}
