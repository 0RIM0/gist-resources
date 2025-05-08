import "#lib/spa-router.js"
import "#lib/spa-route.js"
import { SpaApp } from "#lib/spa-app.js"
import "./page-top.js"
import "./page-one.js"
import "./link-list.js"
import "./page-params.js"
import { StateManager } from "./state-manager.js"

customElements.define(
	"my-app",
	class extends SpaApp {
		stateManager() {
			return new StateManager()
		}

		templateHTML() {
			return `
				<spa-router>
					<spa-route path="/" element="page-top"></spa-route>
					<spa-route path="/page1" element="page-one"></spa-route>
					<spa-route path="/redirect" redirect="/page1"></spa-route>
					<spa-route path="/page2">
						<template>
							<h1>page2</h1>
							<link-list></link-list>
						</template>
					</spa-route>
					<spa-route path="/params/:name" element="page-params"></spa-route>
				</spa-router>
			`
		}

		update(values) {
			console.debug(values.message)
			super.update(values)
		}
	},
)
