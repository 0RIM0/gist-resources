var y=Object.defineProperty;var w=(n,t,e)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>w(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class p extends HTMLElement{constructor(){super(...arguments);r(this,"_use_shadow",!0)}render(e){e.innerHTML=this.templateHTML()}templateHTML(){return""}styleSheets(){return[]}connectedCallback(){this._init_||(this._init_=!0,this._use_shadow&&(this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=this.styleSheets(),this.render(this.shadowRoot)),this.onFirstConnect()),this.onConnect()}disconnectedCallback(){this.onDisconnect()}connectedMoveCallback(){}onConnect(){}onFirstConnect(){}onDisconnect(){}$(e){return(this.shadowRoot??this).querySelector(e)}$$(e){return[...(this.shadowRoot??this).querySelectorAll(e)]}dispatch(e,a){this.dispatchEvent(new CustomEvent(e,a))}on(...e){const a=this.shadowRoot??this;return a.addEventListener(...e),()=>a.removeEventListener(...e)}off(...e){(this.shadowRoot??this).removeEventListener(...e)}}const x=n=>Array.isArray(n)?n:[n],b=async(n,t)=>{const a=await(await window.showSaveFilePicker({suggestedName:t})).createWritable();await a.write(n).finally(async()=>await a.close())},h=(n,t)=>{Object.defineProperty(n,t,{get(){return this.getAttribute(t)},set(e){this.setAttribute(t,e)}})};class l extends p{constructor(){super(...arguments);r(this,"action",()=>{throw new Error("初期化前に呼び出されました")});r(this,"get",()=>{throw new Error("初期化前に呼び出されました")})}notifyInternals(e,a){var s;for(const i of x(e))typeof i=="string"?this.notifyInternals(this.$$(i),a):(s=i==null?void 0:i.notify)==null||s.call(i,a)}notify(e){this.action=e.action,this.get=e.get,this.update(e)}update(){}}const o=class o extends HTMLElement{get template(){return this.querySelector("template")}set template(t){t&&t.localName==="template"?this.replaceChildren(t):this.replaceChildren()}};h(o.prototype,"path"),h(o.prototype,"element"),h(o.prototype,"redirect");let d=o;customElements.define("spa-route",d);class v extends l{update(t){const e=t.message;switch(e.type){case"routing":{const{route:a,params:s}=this.findRoute(location.pathname)??{};if(a!=null&&a.redirect){this.action("route-replace",a.redirect);return}this.renderRoute(a),this.notifyInternals([...this.shadowRoot.children],{...t,message:{...e,params:s}})}break;default:this.notifyInternals([...this.shadowRoot.children],t);break}}findRoute(t){for(const e of this.querySelectorAll("spa-route")){const a=new URLPattern(e.path,location.origin).exec(t,location.origin);if(a)return{route:e,params:a.pathname.groups}}}renderRoute(t){if(t){if(t.element){const e=document.createElement(t.element);this.shadowRoot.replaceChildren(e);return}if(t.template){const e=t.template.content.cloneNode(!0);this.shadowRoot.replaceChildren(e);return}}this.shadowRoot.replaceChildren()}}customElements.define("spa-router",v);class u{constructor(){r(this,"_event_target",null);r(this,"data",null);this.init()}get(t){return t?Array.isArray(t)?t.map(e=>this.data[e]):this.data[t]:{...this.data}}init(){this._event_target=new EventTarget,this.data={},this.on("boot",async()=>{await this.loadData(),this.notify({type:"boot"})}),this.on("reboot",async()=>{this.notify({type:"reboot"})}),this.on("reload",()=>{this.notify({type:"reload"})}),this.on("open",t=>{this.notify({type:"open",url:t})}),this.on("navigate",t=>{this.notify({type:"navigate",url:t})}),this.on("download",({data:t,filename:e})=>{this.notify({type:"download",data:t,filename:e})})}async loadData(){}on(t,e){const a=s=>{e(s.detail)};return this._event_target.addEventListener(t,a),()=>this._event_target.removeEventListener(t,a)}dispatch(t,e){this._event_target.dispatchEvent(new CustomEvent(t,{detail:e}))}notify(t){this.dispatch("update",t)}}class E extends l{constructor(){super(...arguments);r(this,"_unlisten",()=>{});r(this,"action",(e,a)=>{if(!this.manager)throw new Error("state manager が見つかりません");this.manager.dispatch(e,a)});r(this,"get",e=>{if(!this.manager)throw new Error("state manager が見つかりません");return this.manager.get(e)})}stateManager(){return new u}onFirstConnect(){super.onFirstConnect(),this.boot()}boot(){this._unlisten(),this.manager=this.stateManager(),this._unlisten=this.manager.on("update",e=>{this.notify({message:e,action:this.action,get:this.get})}),this.action("boot")}update(e){const a=e.message;switch(a.type){case"reboot":setTimeout(()=>this.boot(),5);return;case"reload":window.location.reload();return;case"open":window.open(a.url);break;case"navigate":window.location=a.url;return;case"download":b(a.data,a.filename);break}}}class g extends u{init(){super.init(),this.on("route-reload",()=>{this.notify({type:"route-reload"})}),this.on("route-navigate",t=>{this.notify({type:"route-navigate",url:t})}),this.on("route-replace",t=>{this.notify({type:"route-replace",url:t})}),this.on("routing",()=>{this.notify({type:"routing"})})}}class k extends E{stateManager(){return new g}onFirstConnect(){super.onFirstConnect(),navigation.addEventListener("navigate",t=>{t.intercept({handler:()=>{this.action("routing")}})})}update(t){super.update(t);const e=t.message;switch(e.type){case"boot":this.action("routing");break;case"route-navigate":navigation.navigate(e.url);return;case"route-replace":navigation.navigate(e.url,{history:"replace"});return;case"route-reload":navigation.reload();return;default:this.notifyInternals("spa-router",t);break}}}const S=".link-list{display:flex;gap:10px;border:1px solid skyblue}",m=new CSSStyleSheet;m.replaceSync(S);customElements.define("link-list",class extends p{templateHTML(){return`
				<div class="link-list">
					<div>
						<p>navigate</p>
						<ul>
							<li><a href="/">/</a></li>
							<li><a href="/page1">/page1</a></li>
							<li><a href="/redirect">/redirect</a></li>
							<li><a href="/page2">/page2</a></li>
							<li><a href="/params/foo">/params/foo</a></li>
						</ul>
					</div>
					<div>
						<p>open</p>
						<ul>
							<li><a href="/" target="_blank">/</a></li>
							<li><a href="/page1" target="_blank">/page1</a></li>
							<li><a href="/redirect" target="_blank">/redirect</a></li>
							<li><a href="/page2" target="_blank">/page2</a></li>
							<li><a href="/params/bar" target="_blank">/params/bar</a></li>
						</ul>
					</div>
				</div>
			`}styleSheets(){return[m]}});const L=".get-text{margin-top:10px}.get-text textarea{width:400px;height:300px}",f=new CSSStyleSheet;f.replaceSync(L);customElements.define("page-top",class extends l{templateHTML(){return`
				<div>
					<h1>page top</h1>
					<link-list></link-list>
					<div class="get-text">
						<div>
							<button id="b1">get1</button>
							<button id="b2">get2</button>
						</div>
						<div>
							<textarea readonly></textarea>
						</div>
					</div>
				</div>
			`}styleSheets(){return[f]}update(n){const t=n.message;switch(t.type){case"routing":{const e=n.get("text");e&&(this.$("textarea").value=e),this.$("#b1").addEventListener("click",()=>{this.action("get-text",{text:"text1"})}),this.$("#b2").addEventListener("click",()=>{this.action("get-text",{text:"text2"})})}break;case"get-text":this.$("textarea").value=t.text;break}}});customElements.define("page-one",class extends l{templateHTML(){return`
				<div>
					<h1>page1</h1>
					<link-list></link-list>
				</div>
			`}});customElements.define("page-params",class extends l{templateHTML(){return`
				<div>
					<h1 id="title">page ???</h1>
					<link-list></link-list>
				</div>
			`}update(n){const t=n.message;switch(t.type){case"routing":this.$("#title").textContent=`page ${t.params.name}`;break}}});class _ extends g{init(){super.init(),Object.assign(this.data,{text:""}),this.on("get-text",async t=>{const e={text1:"/text1.txt",text2:"/text2.txt"}[t.text],a=await fetch(e).then(s=>s.text());this.data.text=a,this.notify({type:"get-text",text:a})})}}customElements.define("my-app",class extends k{stateManager(){return new _}templateHTML(){return`
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
			`}update(n){console.debug(n.message),super.update(n)}});
