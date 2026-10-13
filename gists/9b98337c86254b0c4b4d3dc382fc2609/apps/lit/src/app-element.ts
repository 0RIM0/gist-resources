import { LitElement, html, type TemplateResult } from "lit"
import { customElement, property } from "lit/decorators.js"
import { html as staticHtml, literal, type StaticValue } from "lit/static-html.js"

@customElement("value-passing")
class ValuePassing extends LitElement {
	render() {
		return html`<value-passing-child .value=${"VALUE"}></value-passing-child>`
	}
}

@customElement("value-passing-child")
class ValuePassingChild extends LitElement {
	@property({ type: String })
	value = ""

	render() {
		return html`<p>${this.value}</p>`
	}
}

@customElement("event-handling")
class EventHandling extends LitElement {
	private onClk() {
		alert("clicked")
	}

	render() {
		return html`<event-handling-child @clk=${this.onClk}></event-handling-child>`
	}
}

@customElement("event-handling-child")
class EventHandlingChild extends LitElement {
	private onClick() {
		this.dispatchEvent(new Event("clk"))
	}

	render() {
		return html`<button @click=${this.onClick}>click me</button>`
	}
}

@customElement("element-passing")
class ElementPassing extends LitElement {
	render() {
		return html`
			<element-passing-child>
				<p>ELEMENT</p>
			</element-passing-child>
			<element-passing-child2 .element=${html`<p>ELEMENT2</p>`}></element-passing-child2>
		`
	}
}

@customElement("element-passing-child")
class ElementPassingChild extends LitElement {
	render() {
		return html`<div><slot></slot></div>`
	}
}

@customElement("element-passing-child2")
class ElementPassingChild2 extends LitElement {
	@property({ attribute: false })
	element!: TemplateResult

	render() {
		return html`<div>${this.element}</div>`
	}
}

@customElement("render-function-passing")
class RenderFunctionPassing extends LitElement {
	renderChild = (message: string) => {
		return html`<p>${message}</p>`
	}

	render() {
		return html`
			<render-function-passing-child
				.renderFn=${this.renderChild}
			></render-function-passing-child>
		`
	}
}

@customElement("render-function-passing-child")
class RenderFunctionPassingChild extends LitElement {
	@property({ attribute: false })
	renderFn!: (message: string) => TemplateResult

	render() {
		return html`<div>${this.renderFn("RENDER")}</div>`
	}
}

@customElement("component-passing")
class ComponentPassing extends LitElement {
	render() {
		return html`<component-passing-child
			.component=${literal`component-child`}
		></component-passing-child>`
	}
}

@customElement("component-passing-child")
class ComponentPassingChild extends LitElement {
	@property({ attribute: false })
	component!: StaticValue

	render() {
		return staticHtml`<div><${this.component}></${this.component}></div>`
	}
}

@customElement("component-child")
class ComponentChild extends LitElement {
	render() {
		return html`<p>COMPONENT</p>`
	}
}

@customElement("app-element")
class AppElement extends LitElement {
	render() {
		return html`
			<value-passing></value-passing>
			<event-handling></event-handling>
			<element-passing></element-passing>
			<render-function-passing></render-function-passing>
			<component-passing></component-passing>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"app-element": AppElement
		"value-passing": ValuePassing
		"value-passing-child": ValuePassingChild
		"event-handling": EventHandling
		"event-handling-child": EventHandlingChild
		"element-passing": ElementPassing
		"element-passing-child": ElementPassingChild
		"element-passing-child2": ElementPassingChild2
		"render-function-passing": RenderFunctionPassing
		"render-function-passing-child": RenderFunctionPassingChild
		"component-passing": ComponentPassing
		"component-passing-child": ComponentPassingChild
		"component-child": ComponentChild
	}
}
