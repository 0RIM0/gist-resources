import { type Component, type Renderable } from "ripple"

const ValuePassing = () => @{
	<ValuePassingChild value="VALUE" />
}

const ValuePassingChild = ({ value }: { value: string }) => @{
	<p>{value}</p>
}

const EventHandling = () => @{
	<EventHandlingChild onClick={() => alert("clicked")} />
}

const EventHandlingChild = ({ onClick }: { onClick: () => void }) => @{
	<button onClick={onClick}>click me</button>
}

const ElementPassing = () => @{
	<ElementPassingChild element={<p>ELEMENT</p>} />
}

const ElementPassingChild = ({ element }: { element: Renderable }) => @{
	<div>{element}</div>
}

const RenderFunctionPassing = () => @{
	<RenderFunctionPassingChild render={(message) => <p>{message}</p>} />
}

const RenderFunctionPassingChild = ({
	render,
}: {
	render: (message: string) => Renderable
}) => @{
	<div>{render("RENDER")}</div>
}

const ComponentPassing = () => @{
	<ComponentPassingChild component={ComponentChild} />
}

const ComponentPassingChild = ({ component }: { component: Component }) => @{
	<div>
		<{component} />
	</div>
}

const ComponentChild = () => @{
	<p>COMPONENT</p>
}

const App = () => @{
	<>
		<ValuePassing />
		<EventHandling />
		<ElementPassing />
		<RenderFunctionPassing />
		<ComponentPassing />
	</>
}

export default App
