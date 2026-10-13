import { Component } from "@angular/core"
import { EventHandlingChild } from "../event-handling-child/event-handling-child"

@Component({
	selector: "event-handling",
	templateUrl: "./event-handling.html",
	imports: [EventHandlingChild],
})
export class EventHandling {
	onclk() {
		window.alert("clicked")
	}
}
