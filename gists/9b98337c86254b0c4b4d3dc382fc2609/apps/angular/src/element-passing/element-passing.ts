import { Component } from "@angular/core"
import { ElementPassingChild } from "../element-passing-child/element-passing-child"
import { ElementPassingChild2 } from "../element-passing-child2/element-passing-child2"

@Component({
	selector: "element-passing",
	templateUrl: "./element-passing.html",
	imports: [ElementPassingChild, ElementPassingChild2],
})
export class ElementPassing {}
