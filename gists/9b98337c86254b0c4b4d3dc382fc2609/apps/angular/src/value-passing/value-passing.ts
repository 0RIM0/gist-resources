import { Component } from "@angular/core"
import { ValuePassingChild } from "../value-passing-child/value-passing-child"

@Component({
	selector: "value-passing",
	templateUrl: "./value-passing.html",
	imports: [ValuePassingChild],
})
export class ValuePassing {}
