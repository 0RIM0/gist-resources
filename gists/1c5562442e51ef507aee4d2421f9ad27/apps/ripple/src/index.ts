import { mount } from "ripple"
// @ts-ignore: vp check のエラー回避
import { App } from "./App.tsrx"

mount(App, {
	target: document.getElementById("root")!,
})
