import { Component, output } from "@angular/core"

@Component({
	selector: "event-handling-child",
	templateUrl: "./event-handling-child.html",
})
export class EventHandlingChild {
	clk = output()
}
