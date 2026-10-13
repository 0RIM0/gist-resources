import { type Component } from "solid-js"
import { dynamic, JSX } from "@solidjs/web"

const ValuePassing = () => {
	return <ValuePassingChild value="VALUE" />
}

const ValuePassingChild = (props: { value: string }) => {
	return <p>{props.value}</p>
}

const EventHandling = () => {
	return <EventHandlingChild onClick={() => alert("clicked")} />
}

const EventHandlingChild = (props: { onClick: () => void }) => {
	return <button onClick={props.onClick}>click me</button>
}

const ElementPassing = () => {
	return <ElementPassingChild element={<p>ELEMENT</p>} />
}

const ElementPassingChild = (props: { element: JSX.Element }) => {
	return <div>{props.element}</div>
}

const RenderFunctionPassing = () => {
	return <RenderFunctionPassingChild render={(message) => <p>{message}</p>} />
}

const RenderFunctionPassingChild = (props: { render: (message: string) => JSX.Element }) => {
	return <div>{props.render("RENDER")}</div>
}

const ComponentPassing = () => {
	return <ComponentPassingChild component={ComponentChild} />
}

const ComponentPassingChild = (props: { component: Component }) => {
	const DynamicComponent = dynamic(() => props.component)
	return (
		<div>
			<DynamicComponent />
		</div>
	)
}

const ComponentChild = () => {
	return <p>COMPONENT</p>
}

const App = () => {
	return (
		<>
			<ValuePassing />
			<EventHandling />
			<ElementPassing />
			<RenderFunctionPassing />
			<ComponentPassing />
		</>
	)
}

export default App
