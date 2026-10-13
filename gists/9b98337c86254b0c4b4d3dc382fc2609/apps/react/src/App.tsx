const ValuePassing = () => {
	return <ValuePassingChild value="VALUE" />
}

const ValuePassingChild = ({ value }: { value: string }) => {
	return <p>{value}</p>
}

const EventHandling = () => {
	return <EventHandlingChild onClick={() => alert("clicked")} />
}

const EventHandlingChild = ({ onClick }: { onClick: () => void }) => {
	return <button onClick={onClick}>click me</button>
}

const ElementPassing = () => {
	return <ElementPassingChild element={<p>ELEMENT</p>} />
}

const ElementPassingChild = ({ element }: { element: React.ReactNode }) => {
	return <div>{element}</div>
}

const RenderFunctionPassing = () => {
	return <RenderFunctionPassingChild render={(message) => <p>{message}</p>} />
}

const RenderFunctionPassingChild = ({
	render,
}: {
	render: (message: string) => React.ReactNode
}) => {
	return <div>{render("RENDER")}</div>
}

const ComponentPassing = () => {
	return <ComponentPassingChild component={Component} />
}

const ComponentPassingChild = ({ component: Component }: { component: React.ComponentType }) => {
	return (
		<div>
			<Component />
		</div>
	)
}

const Component = () => {
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
