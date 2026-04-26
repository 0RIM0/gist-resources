var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=Object.freeze({prefix:`fluent`,shadowRootMode:`open`,registry:customElements});function d(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var f,p=`fast-kernel`;try{if(document.currentScript)f=document.currentScript.getAttribute(p);else{let e=document.getElementsByTagName(`script`);f=e[e.length-1].getAttribute(p)}}catch{f=`isolate`}var m;switch(f){case`share`:m=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case`share-v2`:m=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:let e=`-${Math.random().toString(36).substring(2,8)}`;m=Object.freeze({updateQueue:`1.2${e}`,observable:`2.2${e}`,contextEvent:`3.2${e}`,elementRegistry:`4.2${e}`});break}var h;(function(e){e[e.needsArrayObservation=1101]=`needsArrayObservation`,e[e.onlySetDOMPolicyOnce=1201]=`onlySetDOMPolicyOnce`,e[e.bindingInnerHTMLRequiresTrustedTypes=1202]=`bindingInnerHTMLRequiresTrustedTypes`,e[e.twoWayBindingRequiresObservables=1203]=`twoWayBindingRequiresObservables`,e[e.hostBindingWithoutHost=1204]=`hostBindingWithoutHost`,e[e.unsupportedBindingBehavior=1205]=`unsupportedBindingBehavior`,e[e.directCallToHTMLTagNotAllowed=1206]=`directCallToHTMLTagNotAllowed`,e[e.onlySetTemplatePolicyOnce=1207]=`onlySetTemplatePolicyOnce`,e[e.cannotSetTemplatePolicyAfterCompilation=1208]=`cannotSetTemplatePolicyAfterCompilation`,e[e.blockedByDOMPolicy=1209]=`blockedByDOMPolicy`,e[e.missingElementDefinition=1401]=`missingElementDefinition`,e[e.noRegistrationForContext=1501]=`noRegistrationForContext`,e[e.noFactoryForResolver=1502]=`noFactoryForResolver`,e[e.invalidResolverStrategy=1503]=`invalidResolverStrategy`,e[e.cannotAutoregisterDependency=1504]=`cannotAutoregisterDependency`,e[e.cannotResolveKey=1505]=`cannotResolveKey`,e[e.cannotConstructNativeFunction=1506]=`cannotConstructNativeFunction`,e[e.cannotJITRegisterNonConstructor=1507]=`cannotJITRegisterNonConstructor`,e[e.cannotJITRegisterIntrinsic=1508]=`cannotJITRegisterIntrinsic`,e[e.cannotJITRegisterInterface=1509]=`cannotJITRegisterInterface`,e[e.invalidResolver=1510]=`invalidResolver`,e[e.invalidKey=1511]=`invalidKey`,e[e.noDefaultResolver=1512]=`noDefaultResolver`,e[e.cyclicDependency=1513]=`cyclicDependency`,e[e.connectUpdateRequiresController=1514]=`connectUpdateRequiresController`})(h||={});var g=e=>typeof e==`function`,_=e=>typeof e==`string`,v=()=>void 0;(function(){if(!(typeof globalThis<`u`))if(typeof global<`u`)global.globalThis=global;else if(typeof self<`u`)self.globalThis=self;else if(typeof window<`u`)window.globalThis=window;else{let e=Function(`return this`)();e.globalThis=e}})(),(function(){`requestIdleCallback`in globalThis||(globalThis.requestIdleCallback=function(e,t){let n=Date.now();return setTimeout(()=>{e({didTimeout:t?.timeout?Date.now()-n>=t.timeout:!1,timeRemaining:()=>0})},1)},globalThis.cancelIdleCallback=function(e){clearTimeout(e)})})();var y={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,`FAST`,Object.assign({value:Object.create(null)},y));var b=globalThis.FAST;if(b.getById===void 0){let e=Object.create(null);Reflect.defineProperty(b,`getById`,Object.assign({value(t,n){let r=e[t];return r===void 0&&(r=n?e[t]=n():null),r}},y))}b.error===void 0&&Object.assign(b,{warn(){},error(e){return Error(`Error ${e}`)},addMessages(){}});var ee=Object.freeze([]);function te(){let e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)},getForInstance(t){if(t!=null)return e.get(t.constructor)}})}function ne(){let e=new WeakMap;return function(t){let n=e.get(t);if(n===void 0){let r=Reflect.getPrototypeOf(t);for(;n===void 0&&r!==null;)n=e.get(r),r=Reflect.getPrototypeOf(r);n=n===void 0?[]:n.slice(0),e.set(t,n)}return n}}function x(e){e.prototype.toJSON=v}var S=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),re=e=>e,ie=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy(`fast-html`,{createHTML:re}):{createHTML:re},ae=Object.freeze({createHTML(e){return ie.createHTML(e)},protect(e,t,n,r){return r}}),oe=ae,se=Object.freeze({get policy(){return ae},setPolicy(e){if(ae!==oe)throw b.error(h.onlySetDOMPolicyOnce);ae=e},setAttribute(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,``):e.removeAttribute(t)}}),ce=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let n=t.indexOf(e);n!==-1&&t.splice(n,1)}}notify(e){let t=this.spillover,n=this.subject;if(t===void 0){let t=this.sub1,r=this.sub2;t!==void 0&&t.handleChange(n,e),r!==void 0&&r.handleChange(n,e)}else for(let r=0,i=t.length;r<i;++r)t[r].handleChange(n,e)}},le=class{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,n;(t=this.subscribers[e])==null||t.notify(e),(n=this.subjectSubscribers)==null||n.notify(e)}subscribe(e,t){let n;n=t?this.subscribers[t]??(this.subscribers[t]=new ce(this.subject)):this.subjectSubscribers??=new ce(this.subject),n.subscribe(e)}unsubscribe(e,t){var n,r;t?(n=this.subscribers[t])==null||n.unsubscribe(e):(r=this.subjectSubscribers)==null||r.unsubscribe(e)}},ue=b.getById(m.updateQueue,()=>{let e=[],t=[],n=globalThis.requestAnimationFrame,r=!0;function i(){if(t.length)throw t.shift()}function a(n){try{n.call()}catch(n){if(r)t.push(n),setTimeout(i,0);else throw e.length=0,n}}function o(){let t=0;for(;t<e.length;)if(a(e[t]),t++,t>1024){for(let n=0,r=e.length-t;n<r;n++)e[n]=e[n+t];e.length-=t,t=0}e.length=0}function s(t){e.push(t),e.length<2&&(r?n(o):o())}return Object.freeze({enqueue:s,next:()=>new Promise(s),process:o,setMode:e=>r=e})}),de=Object.freeze({unknown:void 0,coupled:1}),C=b.getById(m.observable,()=>{let e=ue.enqueue,t=/(:|&&|\|\||if|\?\.)/,n=new WeakMap,r,i=e=>{throw b.error(h.needsArrayObservation)};function a(e){let t=e.$fastController??n.get(e);return t===void 0&&(Array.isArray(e)?t=i(e):n.set(e,t=new le(e))),t}let o=ne();class s{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return r!==void 0&&r.watch(e,this.name),e[this.field]}setValue(e,t){let n=this.field,r=e[n];if(r!==t){e[n]=t;let i=e[this.callback];g(i)&&i.call(e,r,t),a(e).notify(this.name)}}}class c extends ce{constructor(e,t,n=!1){super(e,t),this.expression=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(e){this.isAsync=this.needsQueue=e}bind(e){this.controller=e;let t=this.observe(e.source,e.context);return!e.isBound&&this.requiresUnbind(e)&&e.onUnbind(this),t}requiresUnbind(e){return e.sourceLifetime!==de.coupled||this.first!==this.last||this.first.propertySource!==e.source}unbind(e){this.dispose()}observe(e,t){this.needsRefresh&&this.last!==null&&this.dispose();let n=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let i;try{i=this.expression(e,t)}finally{r=n}return i}disconnect(){this.dispose()}dispose(){if(this.last!==null){let e=this.first;for(;e!==void 0;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(e,t){let n=this.last,i=a(e),o=n===null?this.first:{};if(o.propertySource=e,o.propertyName=t,o.notifier=i,i.subscribe(this,t),n!==null){if(!this.needsRefresh){let t;r=void 0,t=n.propertySource[n.propertyName],r=this,e===t&&(this.needsRefresh=!0)}n.next=o}this.last=o}handleChange(){this.needsQueue?(this.needsQueue=!1,e(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let e=this.first;for(;e!==void 0;)yield e,e=e.next}}return x(c),Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:a,track(e,t){r&&r.watch(e,t)},trackVolatile(){r&&(r.needsRefresh=!0)},notify(e,t){a(e).notify(t)},defineProperty(e,t){_(t)&&(t=new s(t)),o(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get(){return t.getValue(this)},set(e){t.setValue(this,e)}})},getAccessors:o,binding(e,t,n=this.isVolatileBinding(e)){return new c(e,t,n)},isVolatileBinding(e){return t.test(e.toString())}})});function w(e,t){C.defineProperty(e,t)}var fe=b.getById(m.contextEvent,()=>{let e=null;return{get(){return e},set(t){e=t}}}),pe=Object.freeze({default:{index:0,length:0,get event(){return pe.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return fe.get()},setEvent(e){fe.set(e)}}),me=class{constructor(e,t,n=!1){this.evaluate=e,this.policy=t,this.isVolatile=n}},he=class extends me{createObserver(e){return C.binding(this.evaluate,e,this.isVolatile)}};function ge(e,t,n=C.isVolatileBinding(e)){return new he(e,t,n)}var _e=class extends me{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}};x(_e);function ve(e,t){return new _e(e,t)}var ye=te(),be=Object.freeze({getForInstance:ye.getForInstance,getByType:ye.getByType,define(e){return ye.register({type:e}),e}});function xe(e,t,n){t.source.style.setProperty(e.targetAspect,n.bind(t))}var Se=class{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){let t=e.source;if(!t.$cssBindings){t.$cssBindings=new Map;let e=t.setAttribute;t.setAttribute=(n,r)=>{e.call(t,n,r),n===`style`&&t.$cssBindings.forEach((e,t)=>xe(t,e.controller,e.observer))}}let n=e[this.targetAspect]??(e[this.targetAspect]=this.dataBinding.createObserver(this,this));n.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:n})}connectedCallback(e){xe(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){xe(this,t.controller,t)}};be.define(Se);var Ce;function we(e){return e.map(e=>e instanceof Te?we(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}var Te=class e{get strategy(){return this._strategy===null&&this.withStrategy(Ce),this._strategy}constructor(t){this.styles=t,this.targets=new WeakSet,this._strategy=null,this.behaviors=t.map(t=>t instanceof e?t.behaviors:null).reduce((e,t)=>t===null?e:e===null?t:e.concat(t),null)}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e(we(this.styles)),this}static setDefaultStrategy(e){Ce=e}static normalize(t){return t===void 0?void 0:Array.isArray(t)?new e(t):t instanceof e?t:new e([t])}};Te.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&`replace`in CSSStyleSheet.prototype;var Ee=`${Math.random().toString(36).substring(2,8)}`,De=0,Oe=()=>`--v${Ee}${++De}`;function ke(e,t){let n=[],r=``,i=[],a=e=>{i.push(e)};for(let i=0,o=e.length-1;i<o;++i){r+=e[i];let o=t[i];g(o)?o=new Se(ge(o),Oe()).createCSS(a):o instanceof me?o=new Se(o,Oe()).createCSS(a):be.getForInstance(o)!==void 0&&(o=o.createCSS(a)),o instanceof Te||o instanceof CSSStyleSheet?(r.trim()!==``&&(n.push(r),r=``),n.push(o)):r+=o}return r+=e[e.length-1],r.trim()!==``&&n.push(r),{styles:n,behaviors:i}}var T=((e,...t)=>{let{styles:n,behaviors:r}=ke(e,t),i=new Te(n);return r.length?i.withBehaviors(...r):i}),Ae=class{constructor(e,t){this.behaviors=t,this.css=``;let n=e.reduce((e,t)=>(_(t)?this.css+=t:e.push(t),e),[]);n.length&&(this.styles=new Te(n))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}};be.define(Ae),T.partial=(e,...t)=>{let{styles:n,behaviors:r}=ke(e,t);return new Ae(n,r)};var je=`fast-${Math.random().toString(36).substring(2,8)}`,Me=`${je}{`,Ne=`}${je}`,Pe=Ne.length,Fe=0,Ie=()=>`${je}-${++Fe}`,Le=Object.freeze({interpolation:e=>`${Me}${e}${Ne}`,attribute:e=>`${Ie()}="${Me}${e}${Ne}"`,comment:e=>`<!--${Me}${e}${Ne}-->`}),Re=Object.freeze({parse(e,t){let n=e.split(Me);if(n.length===1)return null;let r=[];for(let e=0,i=n.length;e<i;++e){let i=n[e],a=i.indexOf(Ne),o;if(a===-1)o=i;else{let e=i.substring(0,a);r.push(t[e]),o=i.substring(a+Pe)}o!==``&&r.push(o)}return r}}),ze=te(),Be=Object.freeze({getForInstance:ze.getForInstance,getByType:ze.getByType,define(e,t){return t||={},t.type=e,ze.register(t),e},assignAspect(e,t){if(!t){e.aspectType=S.content;return}switch(e.sourceAspect=t,t[0]){case`:`:e.targetAspect=t.substring(1),e.aspectType=e.targetAspect===`classList`?S.tokenList:S.property;break;case`?`:e.targetAspect=t.substring(1),e.aspectType=S.booleanAttribute;break;case`@`:e.targetAspect=t.substring(1),e.aspectType=S.event;break;default:e.targetAspect=t,e.aspectType=S.attribute;break}}}),Ve=class{constructor(e){this.options=e}createHTML(e){return Le.attribute(e(this))}createBehavior(){return this}};x(Ve);var He=e=>e.nodeType===1,Ue=e=>e?t=>t.nodeType===1&&t.matches(e):He,We=class extends Ve{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){let t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){let t=e.targets[this.targetNodeId];this.updateTarget(e.source,ee),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return`filter`in this.options&&(t=t.filter(this.options.filter)),t}},Ge=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,Ke=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,qe=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,Je=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Ye=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,Xe=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function Ze(e){return e&&e.nodeType===Node.COMMENT_NODE}var E=Object.freeze({attributeMarkerName:`data-fe-b`,compactAttributeMarkerName:`data-fe-c`,attributeBindingSeparator:` `,contentBindingStartMarker(e,t){return`fe-b$$start$$${e}$$${t}$$fe-b`},contentBindingEndMarker(e,t){return`fe-b$$end$$${e}$$${t}$$fe-b`},repeatStartMarker(e){return`fe-repeat$$start$$${e}$$fe-repeat`},repeatEndMarker(e){return`fe-repeat$$end$$${e}$$fe-repeat`},isContentBindingStartMarker(e){return Ge.test(e)},isContentBindingEndMarker(e){return Ke.test(e)},isRepeatViewStartMarker(e){return qe.test(e)},isRepeatViewEndMarker(e){return Je.test(e)},isElementBoundaryStartMarker(e){return Ze(e)&&Ye.test(e.data.trim())},isElementBoundaryEndMarker(e){return Ze(e)&&Xe.test(e.data)},parseAttributeBinding(e){let t=e.getAttribute(this.attributeMarkerName);return t===null?t:t.split(this.attributeBindingSeparator).map(e=>parseInt(e))},parseEnumeratedAttributeBinding(e){let t=[],n=this.attributeMarkerName.length+1,r=`${this.attributeMarkerName}-`;for(let i of e.getAttributeNames())if(i.startsWith(r)){let e=Number(i.slice(n));if(!Number.isNaN(e))t.push(e);else throw b.error(1601,{name:i,expectedFormat:`${r}<number>`})}return t.length===0?null:t},parseCompactAttributeBinding(e){let t=`${this.compactAttributeMarkerName}-`,n=e.getAttributeNames().find(e=>e.startsWith(t));if(!n)return null;let r=n.slice(t.length).split(`-`),i=parseInt(r[0],10),a=parseInt(r[1],10);if(r.length!==2||Number.isNaN(i)||Number.isNaN(a)||i<0||a<1)throw b.error(1604,{name:n,expectedFormat:`${this.compactAttributeMarkerName}-{index}-{count}`});let o=[];for(let e=0;e<a;e++)o.push(i+e);return o},parseContentBindingStartMarker(e){return et(Ge,e)},parseContentBindingEndMarker(e){return et(Ke,e)},parseRepeatStartMarker(e){return Qe(qe,e)},parseRepeatEndMarker(e){return Qe(Je,e)},parseElementBoundaryStartMarker(e){return $e(Ye,e.trim())},parseElementBoundaryEndMarker(e){return $e(Xe,e)}});function Qe(e,t){let n=e.exec(t);return n===null?n:parseInt(n[1])}function $e(e,t){let n=e.exec(t);return n===null?n:n[1]}function et(e,t){let n=e.exec(t);return n===null?n:[parseInt(n[1]),n[2]]}var tt=Symbol.for(`fe-hydration`);function nt(e){return e[tt]===tt}var rt=`defer-hydration`,it=class extends Error{constructor(e,t,n){super(e),this.factories=t,this.node=n}};function at(e){return e.nodeType===Node.COMMENT_NODE}function ot(e){return e.nodeType===Node.TEXT_NODE}function st(e,t){let n=document.createRange();return n.setStart(e,0),n.setEnd(t,at(t)||ot(t)?t.data.length:t.childNodes.length),n}function ct(e){return e instanceof DocumentFragment&&`mode`in e}function lt(e,t,n){let r=st(e,t),i=r.commonAncestorContainer,a=pt(n),o=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(e){return r.comparePoint(e,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),s={},c={},l=o.currentNode=e;for(;l!==null;){switch(l.nodeType){case Node.ELEMENT_NODE:ut(l,n,s,a);break;case Node.COMMENT_NODE:dt(l,o,n,s,c,a);break}l=o.nextNode()}return r.detach(),{targets:s,boundaries:c}}function ut(e,t,n,r){let i=E.parseAttributeBinding(e)??E.parseEnumeratedAttributeBinding(e)??E.parseCompactAttributeBinding(e);if(i!==null){for(let a of i){let i=t[a+r];if(!i)throw new it(`HydrationView was unable to successfully target factory on ${e.nodeName} inside ${e.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,t,e);mt(i,e,n)}e.removeAttribute(E.attributeMarkerName)}}function dt(e,t,n,r,i,a){if(E.isElementBoundaryStartMarker(e)){ft(e,t);return}if(E.isContentBindingStartMarker(e.data)){let o=E.parseContentBindingStartMarker(e.data);if(o===null)return;let[s,c]=o,l=n[s+a],u=[],d=t.nextSibling();e.data=``;let f=d;for(;d!==null;){if(at(d)){let e=E.parseContentBindingEndMarker(d.data);if(e&&e[1]===c)break}u.push(d),d=t.nextSibling()}if(d===null){let t=e.getRootNode();throw Error(`Error hydrating Comment node inside "${ct(t)?t.host.nodeName:t.nodeName}".`)}d.data=``,u.length===1&&ot(u[0])?mt(l,u[0],r):(d!==f&&d.previousSibling!==null&&(i[l.targetNodeId]={first:f,last:d.previousSibling}),mt(l,d.parentNode.insertBefore(document.createTextNode(``),d),r))}}function ft(e,t){let n=E.parseElementBoundaryStartMarker(e.data),r=t.nextSibling();for(;r!==null;){if(at(r)){let e=E.parseElementBoundaryEndMarker(r.data);if(e&&e===n)break}r=t.nextSibling()}}function pt(e){let t=0;for(let n=0,r=e.length;n<r&&e[n].targetNodeId===`h`;++n)t++;return t}function mt(e,t,n){if(e.targetNodeId===void 0)throw Error(`Factory could not be target to the node`);n[e.targetNodeId]=t}var ht;function gt(e,t){let n=e.parentNode,r=e,i;for(;r!==t;){if(i=r.nextSibling,!i)throw Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);n.removeChild(r),r=i}n.removeChild(t)}var _t=class{constructor(){this.index=0,this.length=0}get event(){return pe.getEvent()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}},vt=class extends _t{constructor(e,t,n){super(),this.fragment=e,this.factories=t,this.targets=n,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=de.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let n=e.parentNode,r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,n.insertBefore(r,e),r=i;n.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,n=this.firstChild,r;for(;n!==t;)r=n.nextSibling,e.appendChild(n),n=r;e.appendChild(t)}dispose(){gt(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let n=this.behaviors;if(n===null){this.source=e,this.context=t,this.behaviors=n=Array(this.factories.length);let r=this.factories;for(let e=0,t=r.length;e<t;++e){let t=r[e].createBehavior();t.bind(this),n[e]=t}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let e=0,t=n.length;e<t;++e)n[e].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){let e=this.unbindables;for(let t=0,n=e.length;t<n;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){gt(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}};x(vt),C.defineProperty(vt.prototype,`index`),C.defineProperty(vt.prototype,`length`);var yt={unhydrated:`unhydrated`,hydrating:`hydrating`,hydrated:`hydrated`},bt=class extends Error{constructor(e,t,n,r){super(e),this.factory=t,this.fragment=n,this.templateString=r}},xt=class extends _t{get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}constructor(e,t,n,r){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=n,this.hostBindingTarget=r,this[ht]=tt,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=de.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=yt.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=n.compile().factories}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let n=e.parentNode,r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,n.insertBefore(r,e),r=i;n.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){let e=this.fragment||=document.createDocumentFragment(),t=this.lastChild,n=this.firstChild,r;for(;n!==t;){if(r=n.nextSibling,!r)throw Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(n),n=r}e.appendChild(t)}bind(e,t=this){if(this.hydrationStage!==yt.hydrated&&(this._hydrationStage=yt.hydrating),this.source===e)return;let n=this.behaviors;if(n===null){this.source=e,this.context=t;try{let{targets:e,boundaries:t}=lt(this.firstChild,this.lastChild,this.factories);this._targets=e,this._bindingViewBoundaries=t}catch(e){if(e instanceof it){let t=this.sourceTemplate.html;typeof t!=`string`&&(t=t.innerHTML),e.templateString=t}throw e}this.behaviors=n=Array(this.factories.length);let r=this.factories;for(let e=0,t=r.length;e<t;++e){let t=r[e];if(t.targetNodeId===`h`&&this.hostBindingTarget&&mt(t,this.hostBindingTarget,this._targets),t.targetNodeId in this.targets){let r=t.createBehavior();r.bind(this),n[e]=r}else{let e=this.sourceTemplate.html;typeof e!=`string`&&(e=e.innerHTML);let n=(this.firstChild?.getRootNode()).host?.nodeName||`unknown`,r=t,i=[`HydrationView was unable to successfully target bindings inside "<${n.toLowerCase()}>".`,`
Mismatch Details:`,`  - Expected target node ID: "${t.targetNodeId}"`,`  - Available target IDs: [${Object.keys(this.targets).join(`, `)||`none`}]`];throw t.targetTagName&&i.push(`  - Expected tag name: "${t.targetTagName}"`),r.sourceAspect&&i.push(`  - Source aspect: "${r.sourceAspect}"`),r.aspectType!==void 0&&i.push(`  - Aspect type: ${r.aspectType}`),i.push(`
This usually means:`,`  1. The server-rendered HTML doesn't match the client template`,`  2. The hydration markers are missing or corrupted`,`  3. The DOM structure was modified before hydration`,`\nTemplate: ${e.slice(0,200)}${e.length>200?`...`:``}`),new bt(i.join(`
`),t,st(this.firstChild,this.lastChild).cloneContents(),e)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let e=0,t=n.length;e<t;++e)n[e].bind(this)}this.isBound=!0,this._hydrationStage=yt.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){gt(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){let e=this.unbindables;for(let t=0,n=e.length;t<n;++t)e[t].unbind(this);e.length=0}};ht=tt,x(xt);function St(e){return e.create!==void 0}function Ct(e,t,n,r){if(n??=``,St(n)){e.textContent=``;let t=e.$fastView;if(t===void 0)if(nt(r)&&nt(n)&&r.bindingViewBoundaries[this.targetNodeId]!==void 0&&r.hydrationStage!==yt.hydrated){let e=r.bindingViewBoundaries[this.targetNodeId];t=n.hydrate(e.first,e.last)}else t=n.create();else e.$fastTemplate!==n&&(t.isComposed&&(t.remove(),t.unbind()),t=n.create());t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(r.source,r.context)):(t.isComposed=!0,t.bind(r.source,r.context),t.insertBefore(e),e.$fastView=t,e.$fastTemplate=n)}else{let t=e.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),e.textContent=n}}function wt(e,t,n){let r=`${this.id}-t`,i=e[r]??(e[r]={v:0,cv:Object.create(null)}),a=i.cv,o=i.v,s=e[t];if(n!=null&&n.length){let e=n.split(/\s+/);for(let t=0,n=e.length;t<n;++t){let n=e[t];n!==``&&(a[n]=o,s.add(n))}}if(i.v=o+1,o!==0){--o;for(let e in a)a[e]===o&&s.remove(e)}}var Tt={[S.attribute]:se.setAttribute,[S.booleanAttribute]:se.setBooleanAttribute,[S.property]:(e,t,n)=>e[t]=n,[S.content]:Ct,[S.tokenList]:wt,[S.event]:()=>void 0},Et=class{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=S.content}createHTML(e){return Le.interpolation(e(this))}createBehavior(){if(this.updateTarget===null){let e=Tt[this.aspectType],t=this.dataBinding.policy??this.policy;if(!e)throw b.error(h.unsupportedBindingBehavior);this.data=`${this.id}-d`,this.updateTarget=t.protect(this.targetTagName,this.aspectType,this.targetAspect,e)}return this}bind(e){let t=e.targets[this.targetNodeId],n=nt(e)&&e.hydrationStage&&e.hydrationStage!==yt.hydrated;switch(this.aspectType){case S.event:t[this.data]=e,t.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case S.content:e.onUnbind(this);default:{let r=t[this.data]??(t[this.data]=this.dataBinding.createObserver(this,this));if(r.target=t,r.controller=e,n&&(this.aspectType===S.attribute||this.aspectType===S.booleanAttribute)){r.bind(e);break}this.updateTarget(t,this.targetAspect,r.bind(e),e);break}}}unbind(e){let t=e.targets[this.targetNodeId].$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}handleEvent(e){let t=e.currentTarget[this.data];if(t.isBound){pe.setEvent(e);let n=this.dataBinding.evaluate(t.source,t.context);pe.setEvent(null),n!==!0&&e.preventDefault()}}handleChange(e,t){let n=t.controller;if(!n.isBound)return;let r=t.target;this.updateTarget(r,this.targetAspect,t.bind(n),n)}};Be.define(Et,{aspected:!0});var Dt=(e,t)=>`${e}.${t}`,Ot={},kt={index:0,node:null};function At(e){e.startsWith(`fast-`)||b.warn(h.hostBindingWithoutHost,{name:e})}var jt=new Proxy(document.createElement(`div`),{get(e,t){At(t);let n=Reflect.get(e,t);return g(n)?n.bind(e):n},set(e,t,n){return At(t),Reflect.set(e,t,n)}}),Mt=class{constructor(e,t,n){this.fragment=e,this.directives=t,this.policy=n,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,n,r,i){this.nodeIds.has(n)||(this.nodeIds.add(n),this.addTargetDescriptor(t,n,r)),e.id=e.id??Ie(),e.targetNodeId=n,e.targetTagName=i,e.policy=e.policy??this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,n){let r=this.descriptors;if(t===`r`||t===`h`||r[t])return;if(!r[e]){let t=e.lastIndexOf(`.`),n=e.substring(0,t),r=parseInt(e.substring(t+1),10);this.addTargetDescriptor(n,e,r)}let i=Ot[t];if(!i){let r=`_${t}`;Ot[t]=i={get(){return this[r]??(this[r]=this[e].childNodes[n])}}}r[t]=i}createView(e){let t=this.fragment.cloneNode(!0),n=Object.create(this.proto);n.r=t,n.h=e??jt;for(let e of this.nodeIds)Reflect.get(n,e);return new vt(t,this.factories,n)}};function Nt(e,t,n,r,i,a=!1){let o=n.attributes,s=e.directives;for(let c=0,l=o.length;c<l;++c){let u=o[c],d=u.value,f=Re.parse(d,s),p=null;f===null?a&&(p=new Et(ve(()=>d,e.policy)),Be.assignAspect(p,u.name)):p=zt.aggregate(f,e.policy),p!==null&&(n.removeAttributeNode(u),c--,l--,e.addFactory(p,t,r,i,n.tagName))}}function Pt(e,t,n,r,i){let a=Re.parse(t.textContent,e.directives);if(a===null)return kt.node=t.nextSibling,kt.index=i+1,kt;let o,s=o=t;for(let t=0,c=a.length;t<c;++t){let c=a[t];t!==0&&(i++,r=Dt(n,i),o=s.parentNode.insertBefore(document.createTextNode(``),s.nextSibling)),_(c)?o.textContent=c:(o.textContent=` `,Be.assignAspect(c),e.addFactory(c,n,r,i,null)),s=o}return kt.index=i+1,kt.node=s.nextSibling,kt}function Ft(e,t,n){let r=0,i=t.firstChild;for(;i;){let t=It(e,n,i,r);i=t.node,r=t.index}}function It(e,t,n,r){let i=Dt(t,r);switch(n.nodeType){case 1:Nt(e,t,n,i,r),Ft(e,n,i);break;case 3:return Pt(e,n,t,i,r);case 8:{let a=Re.parse(n.data,e.directives);a!==null&&e.addFactory(zt.aggregate(a),t,i,r,null);break}}return kt.index=r+1,kt.node=n.nextSibling,kt}function Lt(e,t){return e&&e.nodeType===8&&Re.parse(e.data,t)!==null}var Rt=`TEMPLATE`,zt={compile(e,t,n=se.policy){let r;if(_(e)){r=document.createElement(Rt),r.innerHTML=n.createHTML(e);let t=r.content.firstElementChild;t!==null&&t.tagName===Rt&&(r=t)}else r=e;!r.content.firstChild&&!r.content.lastChild&&r.content.appendChild(document.createComment(``));let i=document.adoptNode(r.content),a=new Mt(i,t,n);return Nt(a,``,r,`h`,0,!0),(Lt(i.firstChild,t)||i.childNodes.length===1&&Object.keys(t).length>0)&&i.insertBefore(document.createComment(``),i.firstChild),Ft(a,i,`r`),kt.node=null,a.freeze()},setDefaultStrategy(e){this.compile=e},aggregate(e,t=se.policy){if(e.length===1)return e[0];let n,r=!1,i,a=e.length,o=e.map(e=>_(e)?()=>e:(n=e.sourceAspect||n,r||=e.dataBinding.isVolatile,i||=e.dataBinding.policy,e.dataBinding.evaluate)),s=new Et(ge((e,t)=>{let n=``;for(let r=0;r<a;++r)n+=o[r](e,t);return n},i??t,r));return Be.assignAspect(s,n),s}},Bt=class extends Ve{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}};Be.define(Bt);var Vt=e=>new Bt(e),Ht=`boolean`,Ut=`reflect`,Wt=Object.freeze({locate:ne()}),Gt={toView(e){return e?`true`:`false`},fromView(e){return!(e==null||e===`false`||e===!1||e===0)}};function Kt(e){if(e==null)return null;let t=e*1;return isNaN(t)?null:t}var qt={toView(e){let t=Kt(e);return t&&t.toString()},fromView:Kt},Jt=class e{constructor(e,t,n=t.toLowerCase(),r=Ut,i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=r,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,r===Ht&&i===void 0&&(this.converter=Gt)}setValue(e,t){let n=e[this.fieldName],r=this.converter;r!==void 0&&(t=r.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return C.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,n=this.guards;n.has(e)||t===`fromView`||ue.enqueue(()=>{n.add(e);let r=e[this.fieldName];switch(t){case Ut:let t=this.converter;se.setAttribute(e,this.attribute,t===void 0?r:t.toView(r));break;case Ht:se.setBooleanAttribute(e,this.attribute,r);break}n.delete(e)})}static collect(t,...n){let r=[];n.push(Wt.locate(t));for(let i=0,a=n.length;i<a;++i){let a=n[i];if(a!==void 0)for(let n=0,i=a.length;n<i;++n){let i=a[n];_(i)?r.push(new e(t,i)):r.push(new e(t,i.property,i.attribute,i.mode,i.converter))}}return r}};function D(e,t){let n;function r(e,t){arguments.length>1&&(n.property=t),Wt.locate(e.constructor).push(n)}if(arguments.length>1){n={},r(e,t);return}return n=e===void 0?{}:e,r}var Yt=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},Xt,Zt={mode:`open`},Qt={},$t=new Set,en=b.getById(m.elementRegistry,()=>te()),tn={deferAndHydrate:`defer-and-hydrate`},O=class{get isDefined(){return this.platformDefined}constructor(e,t=e.definition){this.platformDefined=!1,_(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.templateOptions=t.templateOptions,this.registry=t.registry??customElements;let n=e.prototype,r=Jt.collect(e,t.attributes),i=Array(r.length),a={},o={};for(let e=0,t=r.length;e<t;++e){let t=r[e];i[e]=t.attribute,a[t.name]=t,o[t.attribute]=t,C.defineProperty(n,t)}Reflect.defineProperty(e,`observedAttributes`,{value:i,enumerable:!0}),this.attributes=r,this.propertyLookup=a,this.attributeLookup=o,this.shadowOptions=t.shadowOptions===void 0?Zt:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Zt),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Qt:Object.assign(Object.assign({},Qt),t.elementOptions),this.styles=Te.normalize(t.styles),en.register(this),C.defineProperty(Xt.isRegistered,this.name),Xt.isRegistered[this.name]=this.type}define(e=this.registry){var t,n;let r=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,r,this.elementOptions),(n=(t=this.lifecycleCallbacks)?.elementDidDefine)==null||n.call(t,this.name)),this}static compose(e,t){return $t.has(e)||en.getByType(e)?new Xt(class extends e{},t):new Xt(e,t)}static registerBaseType(e){$t.add(e)}static composeAsync(e,t){return new Promise(n=>{($t.has(e)||en.getByType(e))&&n(new Xt(class extends e{},t));let r=new Xt(e,t);C.getNotifier(r).subscribe({handleChange:()=>{var e,t;(t=(e=r.lifecycleCallbacks)?.templateDidUpdate)==null||t.call(e,r.name),n(r)}},`template`)})}};Xt=O,O.isRegistered={},O.getByType=en.getByType,O.getForInstance=en.getForInstance,O.registerAsync=e=>Yt(void 0,void 0,void 0,function*(){return new Promise(t=>{Xt.isRegistered[e]&&t(Xt.isRegistered[e]),C.getNotifier(Xt.isRegistered).subscribe({handleChange:()=>t(Xt.isRegistered[e])},e)})}),C.defineProperty(O.prototype,`template`);var nn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,rn=Object.create(null),an=class{constructor(e,t=rn){this.html=e,this.factories=t}createHTML(e){let t=this.factories;for(let n in t)e(t[n]);return this.html}};an.empty=new an(``),Be.define(an);function on(e,t,n,r=Be.getForInstance(e)){if(r.aspected){let n=nn.exec(t);n!==null&&Be.assignAspect(e,n[2])}return e.createHTML(n)}var sn=class e{constructor(e,t={},n){this.policy=n,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=zt.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new an(_(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw b.error(h.cannotSetTemplatePolicyAfterCompilation);if(this.policy)throw b.error(h.onlySetTemplatePolicyOnce);return this.policy=e,this}render(e,t,n){let r=this.create(n);return r.bind(e),r.appendTo(t),r}static create(t,n,r){let i=``,a=Object.create(null),o=e=>{let t=e.id??=Ie();return a[t]=e,t};for(let e=0,r=t.length-1;e<r;++e){let r=t[e],a=n[e],s;if(i+=r,g(a))a=new Et(ge(a));else if(a instanceof me)a=new Et(a);else if(!(s=Be.getForInstance(a))){let e=a;a=new Et(ve(()=>e))}i+=on(a,r,o,s)}return new e(i+t[t.length-1],a,r)}};x(sn);var k=((e,...t)=>{if(Array.isArray(e)&&Array.isArray(e.raw))return sn.create(e,t);throw b.error(h.directCallToHTMLTagNotAllowed)});k.partial=e=>new an(e);var cn=`slotchange`,ln=class extends We{observe(e){e.addEventListener(cn,this)}disconnect(e){e.removeEventListener(cn,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){let t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}};Be.define(ln);function un(e){return _(e)&&(e={property:e}),new ln(e)}var dn=class extends MutationObserver{constructor(e){function t(e){this.callback.call(null,e.filter(e=>this.observedNodes.has(e.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}};Object.freeze({create(e){let t=[],n={},r=null,i=!1;return{source:e,context:pe.default,targets:n,get isBound(){return i},addBehaviorFactory(e,t){let n=e;n.id=n.id??Ie(),n.targetNodeId=n.targetNodeId??Ie(),n.targetTagName=t.tagName??null,n.policy=n.policy??se.policy,this.addTarget(n.targetNodeId,t),this.addBehavior(n.createBehavior())},addTarget(e,t){n[e]=t},addBehavior(e){t.push(e),i&&e.bind(this)},onUnbind(e){r===null&&(r=[]),r.push(e)},connectedCallback(e){i||(i=!0,t.forEach(e=>e.bind(this)))},disconnectedCallback(e){i&&(i=!1,r!==null&&r.forEach(e=>e.unbind(this)))}}}});var fn={bubbles:!0,composed:!0,cancelable:!0},pn=`isConnected`,mn=new WeakMap;function hn(e){return e.shadowRoot??mn.get(e)??null}var gn,A;(function(e){e[e.connecting=0]=`connecting`,e[e.connected=1]=`connected`,e[e.disconnecting=2]=`disconnecting`,e[e.disconnected=3]=`disconnected`})(A||={});var _n=class e extends le{get isConnected(){return C.track(this,pn),this.stage===A.connected}get context(){return this.view?.context??pe.default}get isBound(){return this.view?.isBound??!1}get sourceLifetime(){return this.view?.sourceLifetime}get template(){if(this._template===null){let e=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():e.template&&(this._template=e.template??null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get shadowOptions(){return this._shadowRootOptions}set shadowOptions(e){if(this._shadowRootOptions===void 0&&e!==void 0){this._shadowRootOptions=e;let t=this.source.shadowRoot;t?this.hasExistingShadowRoot=!0:(t=this.source.attachShadow(e),e.mode===`closed`&&mn.set(this.source,t))}}get mainStyles(){if(this._mainStyles===null){let e=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():e.styles&&(this._mainStyles=e.styles??null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=A.disconnected,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t,this.shadowOptions=t.shadowOptions;let n=C.getAccessors(e);if(n.length>0){let t=this.boundObservables=Object.create(null);for(let r=0,i=n.length;r<i;++r){let i=n[r].name,a=e[i];a!==void 0&&(delete e[i],t[i]=a)}}}onUnbind(e){var t;(t=this.view)==null||t.onUnbind(e)}addBehavior(e){let t=this.behaviors??=new Map,n=t.get(e)??0;n===0?(t.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===A.connected||this.stage===A.connecting)&&e.connectedCallback(this)):t.set(e,n+1)}removeBehavior(e,t=!1){let n=this.behaviors;if(n===null)return;let r=n.get(e);r!==void 0&&(r===1||t?(n.delete(e),e.disconnectedCallback&&this.stage!==A.disconnected&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):n.set(e,r-1))}addStyles(e){if(!e)return;let t=this.source;if(e instanceof HTMLElement)(hn(t)??this.source).append(e);else if(!e.isAttachedTo(t)){let n=e.behaviors;if(e.addStylesTo(t),n!==null)for(let e=0,t=n.length;e<t;++e)this.addBehavior(n[e])}}removeStyles(e){if(!e)return;let t=this.source;if(e instanceof HTMLElement)(hn(t)??t).removeChild(e);else if(e.isAttachedTo(t)){let n=e.behaviors;if(e.removeStylesFrom(t),n!==null)for(let e=0,t=n.length;e<t;++e)this.removeBehavior(n[e])}}connect(){this.stage===A.disconnected&&(this.stage=A.connecting,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=A.connected,C.notify(this,pn))}bindObservables(){if(this.boundObservables!==null){let e=this.source,t=this.boundObservables,n=Object.keys(t);for(let r=0,i=n.length;r<i;++r){let i=n[r];e[i]=t[i]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){let e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(let t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){let e=this.behaviors;if(e!==null)for(let t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===A.connected&&(this.stage=A.disconnecting,C.notify(this,pn),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=A.disconnected)}onAttributeChangedCallback(e,t,n){let r=this.definition.attributeLookup[e];r!==void 0&&r.onAttributeChangedCallback(this.source,n)}emit(e,t,n){return this.stage===A.connected?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},fn),n))):!1}renderTemplate(e){let t=this.source,n=hn(t)??t;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let e=n.firstChild;e!==null;e=n.firstChild)n.removeChild(e)}e&&(this.view=e.render(t,n,t),this.view.sourceLifetime=de.coupled)}static forCustomElement(t,n=!1){let r=t.$fastController;if(r!==void 0&&!n)return r;let i=O.getForInstance(t);if(i===void 0)throw b.error(h.missingElementDefinition);return C.getNotifier(i).subscribe({handleChange:()=>{e.forCustomElement(t,!0),t.$fastController.connect()}},`template`),C.getNotifier(i).subscribe({handleChange:()=>{e.forCustomElement(t,!0),t.$fastController.connect()}},`shadowOptions`),t.$fastController=new gn(t,i)}static setStrategy(e){gn=e}};x(_n),_n.setStrategy(_n);function vn(e){return`adoptedStyleSheets`in e?e:hn(e)??e.getRootNode()}var yn=class e{constructor(t){let n=e.styleSheetCache;this.sheets=t.map(e=>{if(e instanceof CSSStyleSheet)return e;let t=n.get(e);return t===void 0&&(t=new CSSStyleSheet,t.replaceSync(e),n.set(e,t)),t})}addStylesTo(e){wn(vn(e),this.sheets)}removeStylesFrom(e){Tn(vn(e),this.sheets)}};yn.styleSheetCache=new Map;var bn=0,xn=()=>`fast-${++bn}`;function Sn(e){return e===document?document.body:e}var Cn=class{constructor(e){this.styles=e,this.styleClass=xn()}addStylesTo(e){e=Sn(vn(e));let t=this.styles,n=this.styleClass;for(let r=0;r<t.length;r++){let i=document.createElement(`style`);i.innerHTML=t[r],i.className=n,e.append(i)}}removeStylesFrom(e){e=Sn(vn(e));let t=e.querySelectorAll(`.${this.styleClass}`);for(let n=0,r=t.length;n<r;++n)e.removeChild(t[n])}},wn=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Tn=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(Te.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),wn=(e,t)=>{e.adoptedStyleSheets.push(...t)},Tn=(e,t)=>{for(let n of t){let t=e.adoptedStyleSheets.indexOf(n);t!==-1&&e.adoptedStyleSheets.splice(t,1)}}}catch{}Te.setDefaultStrategy(yn)}else Te.setDefaultStrategy(Cn);var En=`needs-hydration`,Dn=class e extends _n{get shadowOptions(){return super.shadowOptions}set shadowOptions(e){super.shadowOptions=e,(this.hasExistingShadowRoot||e!==void 0&&!this.template)&&this.definition.templateOptions===tn.deferAndHydrate&&(this.source.toggleAttribute(rt,!0),this.source.toggleAttribute(En,!0))}addHydratingInstance(){if(!e.hydratingInstances)return;let t=this.definition.name,n=e.hydratingInstances.get(t);n||(n=new Set,e.hydratingInstances.set(t,n)),n.add(this.source)}static config(t){return e.lifecycleCallbacks=t,this}static hydrationObserverHandler(t){for(let n of t)n.target.hasAttribute(`defer-hydration`)||(e.hydrationObserver.unobserve(n.target),n.target.$fastController.connect())}static checkHydrationComplete(t){var n,r;if(t.didTimeout){e.idleCallbackId=requestIdleCallback(e.checkHydrationComplete,{timeout:50});return}if(e.hydratingInstances?.size===0){try{(r=(n=e.lifecycleCallbacks).hydrationComplete)==null||r.call(n)}catch{}_n.setStrategy(_n)}}connect(){var t,n,r,i,a;if(this.needsHydration=this.needsHydration??this.source.hasAttribute(En),this.needsHydration&&this.addHydratingInstance(),this.source.hasAttribute(`defer-hydration`)){this.addHydratingInstance(),e.hydrationObserver.observe(this.source,{attributeFilter:[rt]});return}if(!this.needsHydration){super.connect(),this.removeHydratingInstance();return}if(this.stage===A.disconnected){if(!e.hydrationStarted){e.hydrationStarted=!0;try{(n=(t=e.lifecycleCallbacks).hydrationStarted)==null||n.call(t)}catch{}}try{(i=(r=e.lifecycleCallbacks).elementWillHydrate)==null||i.call(r,this.source)}catch{}if(this.stage=A.connecting,this.bindObservables(),this.connectBehaviors(),this.template)if(nt(this.template)){let e=this.source,t=hn(e)??e,n=t.firstChild,r=t.lastChild;e.shadowRoot===null&&(E.isElementBoundaryStartMarker(n)&&(n.data=``,n=n.nextSibling),E.isElementBoundaryEndMarker(r)&&(r.data=``,r=r.previousSibling)),this.view=this.template.hydrate(n,r,e),(a=this.view)==null||a.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=A.connected,this.source.removeAttribute(En),this.needsInitialization=this.needsHydration=!1,this.removeHydratingInstance(),C.notify(this,pn)}}removeHydratingInstance(){var t,n;if(!e.hydratingInstances)return;try{(n=(t=e.lifecycleCallbacks).elementDidHydrate)==null||n.call(t,this.source)}catch{}let r=this.definition.name,i=e.hydratingInstances.get(r);i&&(i.delete(this.source),i.size||e.hydratingInstances.delete(r),e.idleCallbackId&&cancelIdleCallback(e.idleCallbackId),e.idleCallbackId=requestIdleCallback(e.checkHydrationComplete,{timeout:50}))}disconnect(){super.disconnect(),e.hydrationObserver.unobserve(this.source)}static install(){_n.setStrategy(e)}};Dn.hydrationObserver=new dn(Dn.hydrationObserverHandler),Dn.lifecycleCallbacks={},Dn.hydrationStarted=!1,Dn.idleCallbackId=null,Dn.hydratingInstances=new Map;function On(e){let t=class extends e{constructor(){super(),_n.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}};return O.registerBaseType(t),t}function kn(e,t){return g(e)?O.compose(e,t):O.compose(this,e)}function An(e,t){return g(e)?new Promise(n=>{O.composeAsync(e,t).then(e=>{n(e)})}).then(e=>e.define().type):new Promise(t=>{O.composeAsync(this,e).then(e=>{t(e)})}).then(e=>e.define().type)}function jn(e,t){return g(e)?O.compose(e,t).define().type:O.compose(this,e).define().type}function Mn(e){return On(e)}var Nn=Object.assign(On(HTMLElement),{from:Mn,define:jn,compose:kn,defineAsync:An}),Pn={horizontal:`horizontal`,vertical:`vertical`};function Fn(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}var In;(function(e){e.ltr=`ltr`,e.rtl=`rtl`})(In||={});var Ln=0;function Rn(e=``){return`${e}${Ln++}`}var zn=e=>e.closest(`[dir]`)?.dir===`rtl`?In.rtl:In.ltr;function Bn(e){return t=>t?.nodeType===Node.ELEMENT_NODE?t.tagName.toLowerCase().endsWith(e):!1}function Vn(e){return e?typeof e==`string`?new an(e):`inline`in e?e.inline():e:an.empty}var Hn=e=>e.nodeType!==Node.TEXT_NODE||!!e.nodeValue?.trim().length,Un=`:host([hidden]){display:none}`;function Wn(e){return`${Un}:host{display:${e}}`}var Gn=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){let{query:t}=this,n=this.listenerCache.get(e);n||(n=this.constructListener(e),this.listenerCache.set(e,n)),n.bind(t)(),t.addEventListener(`change`,n)}disconnectedCallback(e){let t=this.listenerCache.get(e);t&&this.query.removeEventListener(`change`,t)}},Kn=class e extends Gn{constructor(e,t){super(e),this.styles=t}static with(t){return n=>new e(t,n)}constructListener(e){let t=!1,n=this.styles;return function(){let{matches:r}=this;r&&!t?(e.addStyles(n),t=r):!r&&t&&(e.removeStyles(n),t=r)}}removedCallback(e){e.removeStyles(this.styles)}},qn=Kn.with(window.matchMedia(`(forced-colors)`));Kn.with(window.matchMedia(`(prefers-color-scheme: dark)`)),Kn.with(window.matchMedia(`(prefers-color-scheme: light)`));var Jn=CSS.supports(`anchor-name: --a`),Yn=`anchor`in HTMLElement.prototype,Xn=CSS.supports(`selector(:state(g))`),Zn=class{};function Qn(e){return k` <slot name="end" ${Vt(`end`)}>${Vn(e.end)}</slot> `.inline()}function $n(e){return k` <slot name="start" ${Vt(`start`)}>${Vn(e.start)}</slot> `.inline()}function er(e,...t){let n=Wt.locate(e);t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(n=>{n!==`constructor`&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}),Wt.locate(t).forEach(e=>n.push(e))})}var tr={submit:`submit`,reset:`reset`,button:`button`},j=class extends Nn{disabledChanged(){this.setTabIndex()}disabledFocusableChanged(e,t){this.elementInternals&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}static{this.formAssociated=!0}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){t!==tr.submit&&(this.formSubmissionFallbackControl?.remove(),this.shadowRoot?.querySelector(`slot[name="internal"]`)?.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`,this.setTabIndex()}constructor(){super(),this.disabledFocusable=!1,this.elementInternals=this.attachInternals(),this.elementInternals.role=`button`}createAndInsertFormSubmissionFallbackControl(){let e=this.formSubmissionFallbackControlSlot??document.createElement(`slot`);e.setAttribute(`name`,`internal`),this.shadowRoot?.appendChild(e),this.formSubmissionFallbackControlSlot=e;let t=this.formSubmissionFallbackControl??document.createElement(`button`);t.style.display=`none`,t.setAttribute(`type`,`submit`),t.setAttribute(`slot`,`internal`),this.formNoValidate&&t.toggleAttribute(`formnovalidate`,!0),this.elementInternals.form?.id&&t.setAttribute(`form`,this.elementInternals.form.id),this.name&&t.setAttribute(`name`,this.name),this.value&&t.setAttribute(`value`,this.value),this.formAction&&t.setAttribute(`formaction`,this.formAction??``),this.formEnctype&&t.setAttribute(`formenctype`,this.formEnctype??``),this.formMethod&&t.setAttribute(`formmethod`,this.formMethod??``),this.formTarget&&t.setAttribute(`formtarget`,this.formTarget??``),this.append(t),this.formSubmissionFallbackControl=t}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===`Enter`||e.key===` `){this.click();return}return!0}press(){switch(this.type){case tr.reset:this.resetForm();break;case tr.submit:this.submitForm();break}}resetForm(){this.elementInternals.form?.reset()}setTabIndex(){if(this.disabled){this.removeAttribute(`tabindex`);return}this.tabIndex=Number(this.getAttribute(`tabindex`)??0)<0?-1:0}submitForm(){if(!(!this.elementInternals.form||this.disabled||this.type!==tr.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.formAttribute&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue(this.value??``),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}};d([D({mode:`boolean`})],j.prototype,`autofocus`,void 0),d([w],j.prototype,`defaultSlottedContent`,void 0),d([D({mode:`boolean`})],j.prototype,`disabled`,void 0),d([D({attribute:`disabled-focusable`,mode:`boolean`})],j.prototype,`disabledFocusable`,void 0),d([D({attribute:`formaction`})],j.prototype,`formAction`,void 0),d([D({attribute:`form`})],j.prototype,`formAttribute`,void 0),d([D({attribute:`formenctype`})],j.prototype,`formEnctype`,void 0),d([D({attribute:`formmethod`})],j.prototype,`formMethod`,void 0),d([D({attribute:`formnovalidate`,mode:`boolean`})],j.prototype,`formNoValidate`,void 0),d([D({attribute:`formtarget`})],j.prototype,`formTarget`,void 0),d([D],j.prototype,`name`,void 0),d([D],j.prototype,`type`,void 0),d([D],j.prototype,`value`,void 0);var nr=class extends j{constructor(){super(...arguments),this.iconOnly=!1}};d([D],nr.prototype,`appearance`,void 0),d([D],nr.prototype,`shape`,void 0),d([D],nr.prototype,`size`,void 0),d([D({attribute:`icon-only`,mode:`boolean`})],nr.prototype,`iconOnly`,void 0),er(nr,Zn);var M=`var(--colorNeutralForeground1)`,rr=`var(--colorNeutralForeground1Hover)`,ir=`var(--colorNeutralForeground1Pressed)`,ar=`var(--colorNeutralForeground2)`,or=`var(--colorNeutralForeground2Hover)`,sr=`var(--colorNeutralForeground2Pressed)`,cr=`var(--colorNeutralForeground2BrandHover)`,lr=`var(--colorNeutralForeground2BrandPressed)`,ur=`var(--colorNeutralForeground3)`,dr=`var(--colorNeutralForeground4)`,fr=`var(--colorNeutralForegroundDisabled)`,pr=`var(--colorNeutralForegroundOnBrand)`,mr=`var(--colorNeutralForegroundInverted)`,hr=`var(--colorNeutralBackground1)`,gr=`var(--colorNeutralBackground1Hover)`,_r=`var(--colorNeutralBackground1Pressed)`,vr=`var(--colorNeutralBackground3)`,yr=`var(--colorNeutralBackgroundInverted)`,br=`var(--colorSubtleBackground)`,xr=`var(--colorSubtleBackgroundHover)`,Sr=`var(--colorSubtleBackgroundPressed)`,Cr=`var(--colorTransparentBackground)`,wr=`var(--colorTransparentBackgroundHover)`,Tr=`var(--colorTransparentBackgroundPressed)`,Er=`var(--colorNeutralBackgroundDisabled)`,Dr=`var(--colorBackgroundOverlay)`,Or=`var(--colorBrandBackground)`,kr=`var(--colorBrandBackgroundHover)`,Ar=`var(--colorBrandBackgroundPressed)`,jr=`var(--colorCompoundBrandBackground)`,Mr=`var(--colorCompoundBrandBackgroundHover)`,Nr=`var(--colorCompoundBrandBackgroundPressed)`,Pr=`var(--colorNeutralStrokeAccessible)`,Fr=`var(--colorNeutralStrokeAccessibleHover)`,Ir=`var(--colorNeutralStrokeAccessiblePressed)`,Lr=`var(--colorNeutralStroke1)`,Rr=`var(--colorNeutralStroke1Hover)`,zr=`var(--colorNeutralStroke1Pressed)`,Br=`var(--colorCompoundBrandStroke)`,Vr=`var(--colorCompoundBrandStrokeHover)`,Hr=`var(--colorCompoundBrandStrokePressed)`,Ur=`var(--colorNeutralStrokeDisabled)`,Wr=`var(--colorTransparentStroke)`,Gr=`var(--colorTransparentStrokeInteractive)`,Kr=`var(--colorStrokeFocus2)`,qr=`var(--colorNeutralShadowAmbient)`,Jr=`var(--colorNeutralShadowKey)`,Yr=`var(--colorPaletteRedBorder2)`,Xr=`var(--colorPaletteRedForeground1)`,Zr=`var(--borderRadiusNone)`,Qr=`var(--borderRadiusSmall)`,N=`var(--borderRadiusMedium)`,$r=`var(--borderRadiusLarge)`,ei=`var(--borderRadiusXLarge)`,ti=`var(--borderRadiusCircular)`,ni=`var(--fontFamilyBase)`,ri=`var(--fontSizeBase200)`,ii=`var(--fontSizeBase300)`,ai=`var(--fontSizeBase400)`,oi=`var(--fontSizeBase500)`,si=`var(--fontSizeBase600)`,ci=`var(--fontWeightRegular)`,li=`var(--fontWeightSemibold)`,ui=`var(--lineHeightBase200)`,di=`var(--lineHeightBase300)`,fi=`var(--lineHeightBase400)`,pi=`var(--lineHeightBase500)`,mi=`var(--shadow2)`,hi=`var(--shadow4)`,gi=`var(--shadow64)`,_i=`var(--strokeWidthThin)`,vi=`var(--strokeWidthThick)`,yi=`var(--spacingHorizontalXXS)`,bi=`var(--spacingHorizontalXS)`,xi=`var(--spacingHorizontalSNudge)`,Si=`var(--spacingHorizontalS)`,Ci=`var(--spacingHorizontalMNudge)`,wi=`var(--spacingHorizontalM)`,Ti=`var(--spacingHorizontalL)`,Ei=`var(--spacingHorizontalXXL)`,Di=`var(--spacingVerticalXXS)`,Oi=`var(--spacingVerticalXS)`,ki=`var(--spacingVerticalSNudge)`,Ai=`var(--spacingVerticalS)`,ji=`var(--spacingVerticalM)`,Mi=`var(--spacingVerticalL)`,Ni=`var(--spacingVerticalXXL)`,Pi=`var(--durationUltraFast)`,Fi=`var(--durationFaster)`,Ii=`var(--durationNormal)`,Li=`var(--durationGentle)`,Ri=`var(--curveAccelerateMid)`,zi=`var(--curveDecelerateMid)`,Bi=`var(--curveEasyEase)`,Vi=`var(--curveLinear)`,Hi=T`
  ${T`
  ${Wn(`inline-flex`)}

  :host {
    --icon-spacing: ${xi};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${hr};
    color: ${M};
    border: ${_i} solid ${Lr};
    padding: 0 ${wi};
    min-width: 96px;
    border-radius: ${N};
    font-size: ${ii};
    font-family: ${ni};
    font-weight: ${li};
    line-height: ${di};
    transition-duration: ${Fi};
    transition-property: background, border, color;
    transition-timing-function: ${Bi};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${gr};
    color: ${rr};
    border-color: ${Rr};
  }

  :host(:hover:active) {
    background-color: ${_r};
    border-color: ${zr};
    color: ${ir};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${Wr};
    outline: ${vi} solid ${Wr};
    box-shadow: ${hi}, 0 0 0 2px ${Kr};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  ::slotted([slot='end']),
  [slot='end'] {
    flex-shrink: 0;
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${bi};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${Si};
    border-radius: ${Qr};
    font-size: ${ri};
    line-height: ${ui};
    font-weight: ${ci};
  }

  :host([size='small'][icon-only]) {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) {
    min-height: 40px;
    border-radius: ${$r};
    padding: 0 ${Ti};
    font-size: ${ai};
    line-height: ${fi};
  }

  :host([size='large'][icon-only]) {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is([shape='circular'], [shape='circular']:focus-visible)) {
    border-radius: ${ti};
  }

  :host(:is([shape='square'], [shape='square']:focus-visible)) {
    border-radius: ${Zr};
  }

  :host([appearance='primary']) {
    background-color: ${Or};
    color: ${pr};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) {
    background-color: ${kr};
  }

  :host([appearance='primary']:is(:hover, :hover:active):not(:focus-visible)) {
    border-color: transparent;
  }

  :host([appearance='primary']:is(:hover, :hover:active)) {
    color: ${pr};
  }

  :host([appearance='primary']:hover:active) {
    background-color: ${Ar};
  }

  :host([appearance='primary']:focus-visible) {
    border-color: ${pr};
    box-shadow: ${mi}, 0 0 0 2px ${Kr};
  }

  :host([appearance='outline']) {
    background-color: ${Cr};
  }

  :host([appearance='outline']:hover) {
    background-color: ${wr};
  }

  :host([appearance='outline']:hover:active) {
    background-color: ${Tr};
  }

  :host([appearance='subtle']) {
    background-color: ${br};
    color: ${ar};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) {
    background-color: ${xr};
    color: ${or};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) {
    background-color: ${Sr};
    color: ${sr};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${cr};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${lr};
  }

  :host([appearance='transparent']) {
    background-color: ${Cr};
    color: ${ar};
  }

  :host([appearance='transparent']:hover) {
    background-color: ${wr};
    color: ${cr};
  }

  :host([appearance='transparent']:hover:active) {
    background-color: ${Tr};
    color: ${lr};
  }

  :host(:is([appearance='transparent'], [appearance='transparent']:is(:hover, :active))) {
    border-color: transparent;
  }
`}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${Er};
    border-color: ${Ur};
    color: ${fr};
    cursor: not-allowed;
  }

  :host([appearance='primary']:is(:disabled, [disabled-focusable])),
  :host([appearance='primary']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host([appearance='outline']:is(:disabled, [disabled-focusable])),
  :host([appearance='outline']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Cr};
  }

  :host([appearance='subtle']:is(:disabled, [disabled-focusable])),
  :host([appearance='subtle']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Cr};
    border-color: transparent;
  }

  :host([appearance='transparent']:is(:disabled, [disabled-focusable])),
  :host([appearance='transparent']:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${Cr};
  }
`.withBehaviors(qn(T`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host([appearance='primary']:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function Ui(e={}){return k`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${$n(e)}
      <span class="content" part="content">
        <slot ${un(`defaultSlottedContent`)}></slot>
      </span>
      ${Qn(e)}
    </template>
  `}var Wi=Ui();nr.compose({name:`${u.prefix}-button`,template:Wi,styles:Hi}).define(u.registry);var Gi={email:`email`,password:`password`,tel:`tel`,text:`text`,url:`url`},Ki=[`date`,`datetime-local`,`email`,`month`,`number`,`password`,`search`,`tel`,`text`,`time`,`url`,`week`],P=class extends Nn{constructor(){super(...arguments),this.type=Gi.text,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}currentValueChanged(e,t){this.value=t}defaultSlottedNodesChanged(e,t){ue.enqueue(()=>{this.controlLabel&&(this.controlLabel.hidden=!t?.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim()))})}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}controlChanged(e,t){ue.enqueue(()=>{this.$fastController.isConnected&&this.setValidity()})}static{this.formAssociated=!0}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return C.track(this,`value`),this.currentValue}set value(e){this.currentValue=e,this.$fastController.isConnected&&(this.control.value=e??``,this.setFormValue(e),this.setValidity(),C.notify(this,`value`))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType===`insertLineBreak`&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit(`change`,e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){return e.target===this&&this.control?.click(),!0}connectedCallback(){super.connectedCallback(),this.tabIndex=Number(this.getAttribute(`tabindex`)??0)<0?-1:0,this.setFormValue(this.value),this.setValidity()}focusinHandler(e){return e.target===this&&this.control?.focus(),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}let e=[...this.elementInternals.form.elements],t=e.find(e=>e.getAttribute(`type`)===`submit`);if(t){t.click();return}e.filter(e=>Ki.includes(e.getAttribute(`type`)??``)).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key===`Enter`&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit(`select`)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e,t,n){if(this.$fastController.isConnected&&this.control){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e??this.control.validity,t??this.validationMessage,n??this.control)}}};d([D],P.prototype,`autocomplete`,void 0),d([D({mode:`boolean`})],P.prototype,`autofocus`,void 0),d([D({attribute:`current-value`})],P.prototype,`currentValue`,void 0),d([w],P.prototype,`defaultSlottedNodes`,void 0),d([D],P.prototype,`dirname`,void 0),d([D({mode:`boolean`})],P.prototype,`disabled`,void 0),d([D({attribute:`form`})],P.prototype,`formAttribute`,void 0),d([D({attribute:`value`,mode:`fromView`})],P.prototype,`initialValue`,void 0),d([D],P.prototype,`list`,void 0),d([D({converter:qt})],P.prototype,`maxlength`,void 0),d([D({converter:qt})],P.prototype,`minlength`,void 0),d([D({mode:`boolean`})],P.prototype,`multiple`,void 0),d([D],P.prototype,`name`,void 0),d([D],P.prototype,`pattern`,void 0),d([D],P.prototype,`placeholder`,void 0),d([D({attribute:`readonly`,mode:`boolean`})],P.prototype,`readOnly`,void 0),d([D({mode:`boolean`})],P.prototype,`required`,void 0),d([D({converter:qt})],P.prototype,`size`,void 0),d([D({converter:{fromView:e=>typeof e==`string`?[`true`,``].includes(e.trim().toLowerCase()):null,toView:e=>e.toString()}})],P.prototype,`spellcheck`,void 0),d([D],P.prototype,`type`,void 0),d([w],P.prototype,`control`,void 0),d([w],P.prototype,`controlLabel`,void 0);var qi=class extends P{};d([D],qi.prototype,`appearance`,void 0),d([D({attribute:`control-size`})],qi.prototype,`controlSize`,void 0),er(qi,Zn);var Ji=T`
  ${Wn(`block`)}

  :host {
    font-family: ${ni};
    font-size: ${ii};
    font-weight: ${ci};
    line-height: ${di};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${M};
    padding-bottom: ${Oi};
    flex-shrink: 0;
    padding-inline-end: ${bi};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${hr};
    border: ${_i} solid ${Lr};
    border-bottom-color: ${Pr};
    border-radius: ${N};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${yi};
    padding: 0 ${Ci};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${Yr};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${N});
    border-radius: 0 0 ${N} ${N};
    border-bottom: 2px solid ${Br};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${Pi};
    transition-delay: ${Ri};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${M};
    border-radius: ${N};
    background: ${Cr};
    font-family: ${ni};
    font-weight: ${ci};
    font-size: ${ii};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${dr};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ur};
    font-size: ${oi};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${yi};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${yi};
    gap: ${bi};
  }
  :host(:hover) .root {
    border-color: ${Rr};
    border-bottom-color: ${Fr};
  }
  :host(:active) .root {
    border-color: ${zr};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Ii};
    transition-delay: ${zi};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${Hr};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${_i} solid ${Lr};
  }
  :host(:focus-within) .control {
    color: ${M};
  }
  :host([disabled]) .root {
    background: ${Cr};
    border: ${_i} solid ${Ur};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${fr};
  }
  ::selection {
    color: ${mr};
    background-color: ${yr};
  }
  :host([control-size='small']) .control {
    font-size: ${ri};
    font-weight: ${ci};
    line-height: ${ui};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${yi};
    padding: 0 ${xi};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${ai};
  }
  :host([control-size='large']) .control {
    font-size: ${ai};
    font-weight: ${ci};
    line-height: ${fi};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${Si};
    padding: 0 ${wi};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${si};
  }
  :host([appearance='underline']) .root {
    background: ${Cr};
    border: 0;
    border-radius: 0;
    border-bottom: ${_i} solid ${Pr};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${Fr};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${Ir};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${Ir};
  }
  :host([appearance='underline'][disabled]) .root {
    border-bottom-color: ${Ur};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${_i} solid ${Wr};
    box-shadow: ${mi};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${hr};
  }
  :host([appearance='filled-darker']) .root {
    background: ${vr};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${Gr};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${Gr};
    background: ${vr};
  }
`;function Yi(e={}){return k`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${Vt(`controlLabel`)}>
        <slot ${un(`defaultSlottedNodes`)}></slot>
      </label>
      <div class="root" part="root">
        ${$n(e)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(e,t)=>e.changeHandler(t.event)}"
          @input="${(e,t)=>e.inputHandler(t.event)}"
          ?autofocus="${e=>e.autofocus}"
          autocomplete="${e=>e.autocomplete}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          ?multiple="${e=>e.multiple}"
          name="${e=>e.name}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          spellcheck="${e=>e.spellcheck}"
          type="${e=>e.type}"
          value="${e=>e.initialValue}"
          ${Vt(`control`)}
        />
        ${Qn(e)}
      </div>
    </template>
  `}var Xi=Yi();qi.compose({name:`${u.prefix}-text-input`,template:Xi,styles:Ji,shadowOptions:{delegatesFocus:!0}}).define(u.registry);var Zi=new Map;function F(e){return Zi.get(e)??Zi.set(e,Xn?`:state(${e})`:`[state--${e}]`).get(e)}function I(e,t,n){if(!(!t||!e)){if(!Xn){e.shadowRoot.host.toggleAttribute(`state--${t}`,n);return}if(n??!e.states.has(t)){e.states.add(t);return}e.states.delete(t)}}var Qi=new WeakMap;function $i(e,t){if(!e||!t)return!1;if(Qi.has(e))return Qi.get(e).has(t);let n=new Set(Object.values(e));return Qi.set(e,n),n.has(t)}function ea(e,t=``,n=``,r,i=``){I(e,`${i}${t}`,!1),(!r||$i(r,n))&&I(e,`${i}${n}`,!0)}var ta=class extends Nn{constructor(){super(...arguments),this.initialValue=`on`,this._keydownPressed=!1,this.dirtyChecked=!1,this.elementInternals=this.attachInternals(),this._validationFallbackMessage=``,this._value=this.initialValue}get checked(){return C.track(this,`checked`),!!this._checked}set checked(e){this._checked=e,this.setFormValue(e?this.value:null),this.setValidity(),this.setAriaChecked(),I(this.elementInternals,`checked`,e),C.notify(this,`checked`)}disabledChanged(e,t){this.disabled?this.removeAttribute(`tabindex`):this.tabIndex=Number(this.getAttribute(`tabindex`)??0)<0?-1:0,this.elementInternals.ariaDisabled=this.disabled?`true`:`false`,I(this.elementInternals,`disabled`,this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t)}initialValueChanged(e,t){this._value=t}requiredChanged(e,t){this.$fastController.isConnected&&(this.setValidity(),this.elementInternals.ariaRequired=this.required?`true`:`false`)}get form(){return this.elementInternals.form}static{this.formAssociated=!0}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){let e=document.createElement(`input`);e.type=`checkbox`,e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return C.track(this,`value`),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity(),C.notify(this,`value`))}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;this.dirtyChecked=!0;let t=this.checked;return this.toggleChecked(),t!==this.checked&&(this.$emit(`change`),this.$emit(`input`)),!0}connectedCallback(){super.connectedCallback(),this.disabled=!!this.disabledAttribute,this.setAriaChecked(),this.setValidity()}inputHandler(e){return this.setFormValue(this.value),this.setValidity(),!0}keydownHandler(e){if(e.key!==` `)return!0;this._keydownPressed=!0}keyupHandler(e){if(!this._keydownPressed||e.key!==` `)return!0;this._keydownPressed=!1,this.click()}formResetCallback(){this.checked=this.initialChecked??!1,this.dirtyChecked=!1,this.setValidity()}reportValidity(){return this.elementInternals.reportValidity()}setAriaChecked(e=this.checked){this.elementInternals.ariaChecked=e?`true`:`false`}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.setValidity()}setValidity(e,t,n){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:!!this.required&&!this.checked,...e},t??this.validationMessage,n)}}toggleChecked(e=!this.checked){this.checked=e}};d([D({mode:`boolean`})],ta.prototype,`autofocus`,void 0),d([w],ta.prototype,`disabled`,void 0),d([D({attribute:`disabled`,mode:`boolean`})],ta.prototype,`disabledAttribute`,void 0),d([D({attribute:`form`})],ta.prototype,`formAttribute`,void 0),d([D({attribute:`checked`,mode:`boolean`})],ta.prototype,`initialChecked`,void 0),d([D({attribute:`value`,mode:`fromView`})],ta.prototype,`initialValue`,void 0),d([D],ta.prototype,`name`,void 0),d([D({mode:`boolean`})],ta.prototype,`required`,void 0);var na=class extends ta{constructor(){super(),this.elementInternals.role=`radio`}disabledChanged(e,t){super.disabledChanged(e,t),this.$emit(`disabled`,t,{bubbles:!0})}requiredChanged(){}setFormValue(){}setValidity(){this.elementInternals.setValidity({})}toggleChecked(e=!0){super.toggleChecked(e)}};F(`active`);var ra=F(`bad-input`),L=F(`checked`),ia=F(`custom-error`);F(`description`);var aa=F(`disabled`);F(`error`),F(`flip-block`);var oa=F(`focus-visible`);F(`has-message`);var sa=F(`indeterminate`);F(`multiple`),F(`open`);var ca=F(`pattern-mismatch`);F(`placeholder-shown`),F(`pressed`);var la=F(`range-overflow`),ua=F(`range-underflow`),da=F(`required`);F(`selected`);var fa=F(`step-mismatch`);F(`submenu`);var pa=F(`too-long`),ma=F(`too-short`),ha=F(`type-mismatch`),ga=F(`user-invalid`),_a=F(`valid`),va=F(`value-missing`),ya=T`
  ${Wn(`inline-flex`)}

  :host {
    --size: 16px;
    aspect-ratio: 1;
    background-color: ${hr};
    border: ${_i} solid ${Pr};
    border-radius: ${ti};
    box-sizing: border-box;
    position: relative;
    width: var(--size);
  }

  :host([size='large']) {
    --size: 20px;
  }

  .checked-indicator {
    aspect-ratio: 1;
    border-radius: ${ti};
    color: ${mr};
    inset: 0;
    margin: auto;
    position: absolute;
    width: calc(var(--size) * 0.625);
  }

  :host(:not([slot='input']))::after {
    content: '' / '';
    position: absolute;
    display: block;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${vi} solid ${Wr};
    border-radius: ${N};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${Kr};
  }

  :host(:hover) {
    border-color: ${Fr};
  }

  :host(${L}) {
    border-color: ${Br};
  }

  :host(${L}) .checked-indicator {
    background-color: ${jr};
  }

  :host(${L}:hover) .checked-indicator {
    background-color: ${Mr};
  }

  :host(:active) {
    border-color: ${Ir};
  }

  :host(${L}:active) .checked-indicator {
    background-color: ${Nr};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(${aa}) {
    background-color: ${Er};
    border-color: ${Ur};
  }

  :host(${L}${aa}) .checked-indicator {
    background-color: ${Ur};
  }
`.withBehaviors(qn(T`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not(${aa}):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .checked-indicator {
      color: HighlightText;
    }

    :host(${L}) .checked-indicator {
      background-color: FieldText;
    }

    :host(${L}:not(${aa}):hover) .checked-indicator {
      background-color: Highlight;
    }

    :host(${aa}) {
      border-color: GrayText;
      color: GrayText;
    }

    :host(${aa}${L}) .checked-indicator {
      background-color: GrayText;
    }
  `)),ba=k.partial(`
    <span part="checked-indicator" class="checked-indicator" role="presentation"></span>
`);function xa(e={}){return k`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${Vn(e.checkedIndicator)}</slot>
    </template>
  `}var Sa=xa({checkedIndicator:ba});na.compose({name:`${u.prefix}-radio`,template:Sa,styles:ya}).define(u.registry);function Ca(e,t=`-radio`){return Bn(t)(e)}function wa(e){let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement:document.activeElement}var Ta=Pn,Ea=class extends Nn{checkedIndexChanged(e,t){this.enabledRadios&&this.checkRadio(t)}disabledChanged(e,t){this.radios&&(this.checkedIndex=-1,this.radios?.forEach(e=>{e.disabled=!!e.disabledAttribute||!!this.disabled}),this.restrictFocus())}initialValueChanged(e,t){this.value=t??``}nameChanged(e,t){this.isConnected&&t&&this.radios?.forEach(e=>{e.name=this.name})}orientationChanged(e,t){this.elementInternals.ariaOrientation=this.orientation??Ta.horizontal}radiosChanged(e,t){let n=t?.length;if(!n)return;!this.name&&t.every(e=>e.name===t[0].name)&&(this.name=t[0].name);let r=Fn(this.enabledRadios,e=>e.initialChecked);t.forEach((e,t)=>{e.ariaPosInSet=`${t+1}`,e.ariaSetSize=`${n}`,this.initialValue&&!this.dirtyState?e.checked=e.value===this.initialValue:e.checked=t===r,e.name=this.name??e.name,e.disabled=!!this.disabled||!!e.disabledAttribute}),!this.dirtyState&&this.initialValue&&(this.value=this.initialValue),(!this.value||this.value&&typeof this.checkedIndex!=`number`&&r>=0)&&(this.checkedIndex=r);let i=t.map(e=>e.id).join(` `).trim();i&&this.setAttribute(`aria-owns`,i),ue.enqueue(()=>{this.restrictFocus()})}requiredChanged(e,t){this.elementInternals.ariaRequired=t?`true`:null,this.setValidity()}slottedRadiosChanged(e,t){this.radios=[...this.querySelectorAll(`*`)].filter(e=>Ca(e))}get enabledRadios(){return this.disabled?[]:this.radios?.filter(e=>!e.disabled)??[]}static{this.formAssociated=!0}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(this.enabledRadios?.[0]?.validationMessage)return this.enabledRadios[0].validationMessage;if(!this._validationFallbackMessage){let e=document.createElement(`input`);e.type=`radio`,e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return C.notify(this,`value`),this.enabledRadios.find(e=>e.checked)?.value??null}set value(e){let t=this.enabledRadios.findIndex(t=>t.value===e);this.checkedIndex=t,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity()),C.track(this,`value`)}changeHandler(e){if(this===e.target)return!0;this.dirtyState=!0;let t=this.enabledRadios.indexOf(e.target);return this.checkRadio(t),this.radios?.filter(e=>e.disabled)?.forEach(e=>{e.checked=!1}),!0}checkRadio(e=this.checkedIndex,t=!1){let n=this.checkedIndex;this.enabledRadios.forEach((r,i)=>{let a=i===e;r.checked=a,a&&(n=i,t&&r.$emit(`change`))}),this.checkedIndex=n,this.setFormValue(this.value),this.setValidity()}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){return this===e.target&&this.enabledRadios[Math.max(0,this.checkedIndex)]?.focus(),!0}constructor(){super(),this.dirtyState=!1,this.elementInternals=this.attachInternals(),this.elementInternals.role=`radiogroup`,this.elementInternals.ariaOrientation=this.orientation??Ta.horizontal}focus(){this.enabledRadios[Math.max(0,this.checkedIndex)]?.focus()}focusinHandler(e){return this.disabled||this.enabledRadios.forEach(e=>{e.tabIndex=0}),!0}focusoutHandler(e){return this.radios?.includes(e.relatedTarget)&&this.radios?.some(e=>e.checked)&&this.restrictFocus(),!0}formResetCallback(){this.dirtyState=!1,this.checkedIndex=-1,this.setFormValue(this.value),this.setValidity()}getEnabledIndexInBounds(e,t=this.enabledRadios.length){return t===0?-1:(e+t)%t}keydownHandler(e){let t=zn(this)===`rtl`,n=this.enabledRadios.findIndex(e=>e===wa(this))??this.checkedIndex,r=0;switch(e.key){case`ArrowLeft`:r=t?1:-1;break;case`ArrowUp`:r=-1;break;case`ArrowRight`:r=t?-1:1;break;case`ArrowDown`:r=1;break;case`Tab`:this.restrictFocus();break;case` `:this.checkRadio();break}if(!r)return!0;let i=n+r;this.checkRadio(this.getEnabledIndexInBounds(i),!0),this.enabledRadios[this.checkedIndex]?.focus()}disabledRadioHandler(e){e.detail===!0&&e.target.checked&&(this.checkedIndex=-1)}reportValidity(){return this.elementInternals.reportValidity()}restrictFocus(){let e=Math.max(this.checkedIndex,0),t=this.enabledRadios.indexOf(wa(this));t!==-1&&(e=t),e=this.getEnabledIndexInBounds(e),this.enabledRadios.forEach((t,n)=>{t.tabIndex=n===e?0:-1})}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e,t,n){if(this.$fastController.isConnected){if(!(this.required&&!this.value&&!this.disabled)){this.enabledRadios?.forEach(e=>{e.elementInternals.setValidity({})});return}let n={valueMissing:!0,...e},r=t??this.validationMessage;this.enabledRadios?.forEach((e,t)=>{t===0?e.elementInternals.setValidity(n,r,e):e.elementInternals.setValidity({})})}}};d([w],Ea.prototype,`checkedIndex`,void 0),d([D({attribute:`disabled`,mode:`boolean`})],Ea.prototype,`disabled`,void 0),d([D({attribute:`value`,mode:`fromView`})],Ea.prototype,`initialValue`,void 0),d([D],Ea.prototype,`name`,void 0),d([D],Ea.prototype,`orientation`,void 0),d([w],Ea.prototype,`radios`,void 0),d([D({mode:`boolean`})],Ea.prototype,`required`,void 0),d([w],Ea.prototype,`slottedRadios`,void 0);var Da=class extends Ea{},Oa=T`
  ${Wn(`flex`)}

  :host {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    gap: ${Mi};
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    justify-content: flex-start;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }

  ::slotted(*) {
    color: ${ur};
  }

  ::slotted(:hover) {
    color: ${ar};
  }

  ::slotted(:active) {
    color: ${M};
  }

  ::slotted(${aa}) {
    color: ${fr};
  }

  ::slotted(${L}) {
    color: ${M};
  }

  :host([slot='input']) {
    margin: ${Ai} ${Si};
  }
`;function ka(){return k`
    <template
      @disabled="${(e,t)=>e.disabledRadioHandler(t.event)}"
      @change="${(e,t)=>e.changeHandler(t.event)}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <slot ${un(`slottedRadios`)}></slot>
    </template>
  `}var Aa=ka();Da.compose({name:`${u.prefix}-radio-group`,template:Aa,styles:Oa}).define(u.registry);var ja={above:`above`,after:`after`,before:`before`},R={badInput:`bad-input`,customError:`custom-error`,patternMismatch:`pattern-mismatch`,rangeOverflow:`range-overflow`,rangeUnderflow:`range-underflow`,stepMismatch:`step-mismatch`,tooLong:`too-long`,tooShort:`too-short`,typeMismatch:`type-mismatch`,valueMissing:`value-missing`,valid:`valid`},Ma=class extends Nn{labelSlotChanged(e,t){t&&this.input&&(this.setLabelProperties(),this.setStates())}messageSlotChanged(e,t){I(this.elementInternals,`has-message`,!!t.length)}slottedInputsChanged(e,t){let n=t?.filter(e=>e.nodeType===Node.ELEMENT_NODE)??[];n?.length&&(this.input=n?.[0])}inputChanged(e,t){t&&(this.setStates(),this.setLabelProperties(),this.slottedInputObserver.observe(this.input,{attributes:!0,attributeFilter:[`disabled`,`required`,`readonly`],subtree:!0}))}changeHandler(e){return this.setStates(),this.setValidationStates(),!0}clickHandler(e){return this===e.target&&this.input.click(),!0}constructor(){super(),this.labelSlot=[],this.elementInternals=this.attachInternals(),this.elementInternals.role=`presentation`}connectedCallback(){super.connectedCallback(),this.addEventListener(`invalid`,this.invalidHandler,{capture:!0}),this.slottedInputObserver=new MutationObserver(()=>{this.setStates()})}disconnectedCallback(){this.slottedInputObserver.disconnect(),this.removeEventListener(`invalid`,this.invalidHandler,{capture:!0}),super.disconnectedCallback()}focusinHandler(e){return this.matches(`:focus-within:has(> :focus-visible)`)&&I(this.elementInternals,`focus-visible`,!0),!0}focusoutHandler(e){return I(this.elementInternals,`focus-visible`,!1),!0}invalidHandler(e){this.messageSlot.length&&e.preventDefault(),this.setValidationStates()}setLabelProperties(){this.$fastController.isConnected&&(this.input.id=this.input.id||Rn(`input`),this.labelSlot?.forEach(e=>{e instanceof HTMLLabelElement&&(e.htmlFor=e.htmlFor||this.input.id,e.id=e.id||`${this.input.id}--label`,this.input.setAttribute(`aria-labelledby`,e.id))}))}setStates(){this.elementInternals&&this.input&&(I(this.elementInternals,`disabled`,!!this.input.disabled),I(this.elementInternals,`readonly`,!!this.input.readOnly),I(this.elementInternals,`required`,!!this.input.required),I(this.elementInternals,`checked`,!!this.input.checked))}setValidationStates(){if(this.input?.validity)for(let[e,t]of Object.entries(R))I(this.elementInternals,t,this.input.validity[e])}};d([w],Ma.prototype,`labelSlot`,void 0),d([w],Ma.prototype,`messageSlot`,void 0),d([w],Ma.prototype,`slottedInputs`,void 0),d([w],Ma.prototype,`input`,void 0);var Na=class extends Ma{constructor(){super(...arguments),this.labelPosition=ja.above}};d([D({attribute:`label-position`})],Na.prototype,`labelPosition`,void 0);var Pa=T`
  ${Wn(`inline-grid`)}

  :host {
    color: ${M};
    align-items: center;
    gap: 0 ${wi};
    justify-items: start;
  }

  :has([slot='message']) {
    color: ${M};
    row-gap: ${Ai};
  }

  :not(::slotted([slot='label'])) {
    gap: 0;
  }

  :host([label-position='before']) {
    grid-template-areas: 'label input' 'label message';
  }

  :host([label-position='after']) {
    gap: 0;
    grid-template-areas: 'input label' 'message message';
    grid-template-columns: auto 1fr;
  }

  :host([label-position='after']) ::slotted([slot='input']) {
    margin-inline-end: ${wi};
  }

  :host([label-position='above']) {
    grid-template-areas: 'label' 'input' 'message';
    row-gap: ${Di};
  }

  :host([label-position='below']) {
    grid-template-areas: 'input' 'label' 'message';
    justify-items: center;
  }

  :host([label-position='below']) ::slotted([slot='label']) {
    margin-block-start: ${ji};
  }

  :host(${da}) ::slotted([slot='label'])::after {
    content: '*' / '';
    color: ${Xr};
    margin-inline-start: ${bi};
  }

  ::slotted([slot='input']) {
    grid-area: input;
  }

  ::slotted([slot='message']) {
    color: ${ur};
    font-family: ${ni};
    font-size: ${ri};
    font-weight: ${ci};
    grid-area: message;
    line-height: ${ui};
    margin-block-start: ${Di};
  }

  :host(${oa}:focus-within) {
    border-radius: ${N};
    outline: ${vi} solid ${Kr};
  }

  ::slotted(label),
  ::slotted([slot='label']) {
    cursor: inherit;
    display: inline-flex;
    font-family: ${ni};
    font-size: ${ii};
    font-weight: ${ci};
    grid-area: label;
    line-height: ${di};
    justify-self: stretch;
    user-select: none;
  }

  :host([size='small']) ::slotted(label) {
    font-size: ${ri};
    line-height: ${ui};
  }

  :host([size='large']) ::slotted(label) {
    font-size: ${ai};
    line-height: ${fi};
  }

  :host([size='large']) ::slotted(label),
  :host([weight='semibold']) ::slotted(label) {
    font-weight: ${li};
  }

  :host(${aa}) {
    cursor: default;
  }

  ::slotted([flag]) {
    display: none;
  }

  :host(${ra}) ::slotted([flag='${R.badInput}']),
  :host(${ia}) ::slotted([flag='${R.customError}']),
  :host(${ca}) ::slotted([flag='${R.patternMismatch}']),
  :host(${la}) ::slotted([flag='${R.rangeOverflow}']),
  :host(${ua}) ::slotted([flag='${R.rangeUnderflow}']),
  :host(${fa}) ::slotted([flag='${R.stepMismatch}']),
  :host(${pa}) ::slotted([flag='${R.tooLong}']),
  :host(${ma}) ::slotted([flag='${R.tooShort}']),
  :host(${ha}) ::slotted([flag='${R.typeMismatch}']),
  :host(${va}) ::slotted([flag='${R.valueMissing}']),
  :host(${_a}) ::slotted([flag='${R.valid}']) {
    display: block;
  }
`,Fa=k`
  <template
    @click="${(e,t)=>e.clickHandler(t.event)}"
    @change="${(e,t)=>e.changeHandler(t.event)}"
    @focusin="${(e,t)=>e.focusinHandler(t.event)}"
    @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
  >
    <slot name="label" part="label" ${un(`labelSlot`)}></slot>
    <slot name="input" part="input" ${un(`slottedInputs`)}></slot>
    <slot name="message" part="message" ${un({property:`messageSlot`,filter:Ue(`[flag]`)})}></slot>
  </template>
`;Na.compose({name:`${u.prefix}-field`,template:Fa,styles:Pa,shadowOptions:{delegatesFocus:!0}}).define(u.registry);var Ia=class extends ta{indeterminateChanged(e,t){this.setAriaChecked(),I(this.elementInternals,`indeterminate`,t)}constructor(){super(),this.elementInternals.role=`checkbox`}setAriaChecked(e=this.checked){if(this.indeterminate){this.elementInternals.ariaChecked=`mixed`;return}super.setAriaChecked(e)}toggleChecked(e=!this.checked){this.indeterminate=!1,super.toggleChecked(e)}};d([w],Ia.prototype,`indeterminate`,void 0),d([D],Ia.prototype,`shape`,void 0),d([D],Ia.prototype,`size`,void 0);var La=T`
  ${Wn(`inline-flex`)}

  :host {
    --size: 16px;
    background-color: ${hr};
    border-radius: ${Qr};
    border: ${_i} solid ${Pr};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    width: var(--size);
  }

  :host,
  .indeterminate-indicator,
  .checked-indicator {
    aspect-ratio: 1;
  }

  :host(:hover) {
    border-color: ${Fr};
  }

  :host(:active) {
    border-color: ${Ir};
  }

  :host(${L}:hover) {
    background-color: ${Mr};
    border-color: ${Vr};
  }

  :host(${L}:active) {
    background-color: ${Nr};
    border-color: ${Hr};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']))::after {
    content: '';
    position: absolute;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${vi} solid ${Wr};
    border-radius: ${N};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${Kr};
  }

  .indeterminate-indicator,
  .checked-indicator {
    color: ${mr};
    inset: 0;
    margin: auto;
    position: absolute;
  }

  ::slotted([slot='checked-indicator']),
  .checked-indicator {
    fill: currentColor;
    display: inline-flex;
    flex: 1 0 auto;
    width: 12px;
  }

  :host(:not(${L})) *:is(::slotted([slot='checked-indicator']), .checked-indicator) {
    display: none;
  }

  :host(${L}),
  :host(${sa}) {
    border-color: ${Br};
  }

  :host(${L}),
  :host(${sa}) .indeterminate-indicator {
    background-color: ${jr};
  }

  :host(${sa}) .indeterminate-indicator {
    border-radius: ${Qr};
    position: absolute;
    width: calc(var(--size) / 2);
    inset: 0;
  }

  :host([size='large']) {
    --size: 20px;
  }

  :host([size='large']) ::slotted([slot='checked-indicator']),
  :host([size='large']) .checked-indicator {
    width: 16px;
  }

  :host([shape='circular']),
  :host([shape='circular']) .indeterminate-indicator {
    border-radius: ${ti};
  }

  :host([disabled]),
  :host([disabled]${L}) {
    background-color: ${Er};
    border-color: ${Ur};
  }

  :host([disabled]) {
    cursor: unset;
  }

  :host([disabled]${sa}) .indeterminate-indicator {
    background-color: ${Ur};
  }

  :host([disabled]${L}) .checked-indicator {
    color: ${Ur};
  }
`.withBehaviors(qn(T`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not([disabled]):hover),
    :host(${L}:not([disabled]):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .indeterminate-indicator,
    .checked-indicator {
      color: HighlightText;
    }

    :host(${L}),
    :host(${sa}) .indeterminate-indicator {
      background-color: FieldText;
    }

    :host(${L}:not([disabled]):hover),
    :host(${sa}:not([disabled]):hover) .indeterminate-indicator {
      background-color: Highlight;
    }

    :host([disabled]) {
      border-color: GrayText;
    }

    :host([disabled]${sa}) .indeterminate-indicator {
      background-color: GrayText;
    }

    :host([disabled]),
    :host([disabled]${L}) .checked-indicator {
      color: GrayText;
    }
  `)),Ra=k.partial(`
    <svg
        fill="currentColor"
        aria-hidden="true"
        class="checked-indicator"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor"></path>
    </svg>
`),za=k.partial(`
    <span class="indeterminate-indicator"></span>
`);function Ba(e={}){return k`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${Vn(e.checkedIndicator)}</slot>
      <slot name="indeterminate-indicator">${Vn(e.indeterminateIndicator)}</slot>
    </template>
  `}var Va=Ba({checkedIndicator:Ra,indeterminateIndicator:za});Ia.compose({name:`${u.prefix}-checkbox`,template:Va,styles:La}).define(u.registry);var Ha={outline:`outline`,filledLighter:`filled-lighter`,filledDarker:`filled-darker`};Ha.filledLighter,Ha.filledDarker;var Ua={none:`none`,both:`both`,horizontal:`horizontal`,vertical:`vertical`},z=class extends Nn{static{this.formAssociated=!0}controlElChanged(){this.controlElAttrObserver=new MutationObserver(()=>{this.setValidity()}),this.controlElAttrObserver.observe(this.controlEl,{attributes:!0,attributeFilter:[`disabled`,`required`,`readonly`,`maxlength`,`minlength`]}),this.controlEl.addEventListener(`input`,()=>this.userInteracted=!0,{once:!0})}defaultSlottedNodesChanged(){let e=this.getContent();this.defaultValue=e,this.value=e}labelSlottedNodesChanged(){this.filteredLabelSlottedNodes=this.labelSlottedNodes.filter(Hn),this.labelEl&&(this.labelEl.hidden=!this.filteredLabelSlottedNodes.length),this.filteredLabelSlottedNodes.forEach(e=>{e.disabled=this.disabled,e.required=this.required})}autoResizeChanged(){this.maybeCreateAutoSizerEl(),I(this.elementInternals,`auto-resize`,this.autoResize)}disabledChanged(){this.setDisabledSideEffect(this.disabled)}get form(){return this.elementInternals.form}get labels(){return this.elementInternals.labels}readOnlyChanged(){this.elementInternals.ariaReadOnly=`${!!this.readOnly}`,this.$fastController.isConnected&&this.setValidity()}requiredChanged(){this.elementInternals.ariaRequired=`${!!this.required}`,this.filteredLabelSlottedNodes?.length&&this.filteredLabelSlottedNodes.forEach(e=>e.required=this.required)}resizeChanged(e,t){ea(this.elementInternals,e,t,Ua,`resize-`),I(this.elementInternals,`resize`,$i(Ua,t)&&t!==Ua.none)}get textLength(){return this.controlEl.textLength}get type(){return`textarea`}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.controlEl.validationMessage}get willValidate(){return this.elementInternals.willValidate}get defaultValue(){return this.controlEl?.defaultValue??this.preConnectControlEl.defaultValue}set defaultValue(e){let t=this.controlEl??this.preConnectControlEl;t.defaultValue=e,this.controlEl&&!this.userInteracted&&(this.controlEl.value=e)}get value(){return this.controlEl?.value??this.preConnectControlEl.value}set value(e){let t=this.controlEl??this.preConnectControlEl;t.value=e,this.setFormValue(e),this.setValidity()}constructor(){super(),this.elementInternals=this.attachInternals(),this.filteredLabelSlottedNodes=[],this.labelSlottedNodes=[],this.userInteracted=!1,this.preConnectControlEl=document.createElement(`textarea`),this.autoResize=!1,this.disabled=!1,this.displayShadow=!1,this.readOnly=!1,this.required=!1,this.resize=Ua.none,this.spellcheck=!1}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{if(!this.$fastController.isConnected)return;let e=this.preConnectControlEl,t=this.getContent();this.defaultValue=t||e?.defaultValue||``,this.value=e?.value||this.defaultValue,this.setFormValue(this.value),this.setValidity(),this.preConnectControlEl=null,this.maybeCreateAutoSizerEl()})}disconnectedCallback(){super.disconnectedCallback(),this.autoSizerObserver?.disconnect(),this.controlElAttrObserver?.disconnect()}formResetCallback(){this.value=this.defaultValue}formDisabledCallback(e){this.setDisabledSideEffect(e),this.setValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.elementInternals.setValidity({customError:!!e},e?e.toString():void 0),this.reportValidity()}setValidity(e,t,n){this.$fastController.isConnected&&(this.disabled||this.readOnly?this.elementInternals.setValidity({}):this.elementInternals.setValidity(e??this.controlEl.validity,t??this.controlEl.validationMessage,n??this.controlEl),this.userInteracted&&this.toggleUserValidityState())}select(){this.controlEl.select()}getContent(){return this.defaultSlottedNodes.map(e=>{switch(e.nodeType){case Node.ELEMENT_NODE:return e.outerHTML;case Node.TEXT_NODE:return e.textContent.trim();default:return``}}).join(``)||``}setDisabledSideEffect(e){this.elementInternals.ariaDisabled=`${e}`,this.controlEl&&(this.controlEl.disabled=e),this.filteredLabelSlottedNodes?.length&&this.filteredLabelSlottedNodes.forEach(e=>e.disabled=this.disabled)}toggleUserValidityState(){I(this.elementInternals,`user-invalid`,!this.validity.valid),I(this.elementInternals,`user-valid`,this.validity.valid)}maybeCreateAutoSizerEl(){if(!CSS.supports(`field-sizing: content`)){if(!this.autoResize){this.autoSizerEl?.remove(),this.autoSizerObserver?.disconnect();return}this.autoSizerEl||(this.autoSizerEl=document.createElement(`div`),this.autoSizerEl.classList.add(`auto-sizer`),this.autoSizerEl.ariaHidden=`true`),this.rootEl?.prepend(this.autoSizerEl),this.autoSizerObserver||=new ResizeObserver((e,t)=>{let n=window.getComputedStyle(this).writingMode.startsWith(`horizontal`)?`height`:`width`;this.style.getPropertyValue(n)!==``&&(this.autoSizerEl?.remove(),t.disconnect())}),this.autoSizerObserver.observe(this)}}handleControlInput(){this.autoResize&&this.autoSizerEl&&(this.autoSizerEl.textContent=this.value+` `),this.setFormValue(this.value),this.setValidity()}handleControlChange(){this.toggleUserValidityState(),this.$emit(`change`)}handleControlSelect(){this.$emit(`select`)}};d([w],z.prototype,`controlEl`,void 0),d([w],z.prototype,`defaultSlottedNodes`,void 0),d([w],z.prototype,`labelSlottedNodes`,void 0),d([D],z.prototype,`autocomplete`,void 0),d([D({attribute:`auto-resize`,mode:`boolean`})],z.prototype,`autoResize`,void 0),d([D({attribute:`dirname`})],z.prototype,`dirName`,void 0),d([D({mode:`boolean`})],z.prototype,`disabled`,void 0),d([D({attribute:`display-shadow`,mode:`boolean`})],z.prototype,`displayShadow`,void 0),d([D({attribute:`form`})],z.prototype,`initialForm`,void 0),d([D({attribute:`maxlength`,converter:qt})],z.prototype,`maxLength`,void 0),d([D({attribute:`minlength`,converter:qt})],z.prototype,`minLength`,void 0),d([D],z.prototype,`name`,void 0),d([D],z.prototype,`placeholder`,void 0),d([D({attribute:`readonly`,mode:`boolean`})],z.prototype,`readOnly`,void 0),d([D({mode:`boolean`})],z.prototype,`required`,void 0),d([D({mode:`fromView`})],z.prototype,`resize`,void 0),d([D({mode:`boolean`})],z.prototype,`spellcheck`,void 0);var Wa=class extends z{constructor(){super(...arguments),this.appearance=Ha.outline,this.block=!1}labelSlottedNodesChanged(){super.labelSlottedNodesChanged(),this.labelSlottedNodes.forEach(e=>{e.size=this.size})}handleChange(e,t){switch(t){case`size`:this.labelSlottedNodes.forEach(e=>{e.size=this.size});break}}connectedCallback(){super.connectedCallback(),C.getNotifier(this).subscribe(this,`size`)}disconnectedCallback(){super.disconnectedCallback(),C.getNotifier(this).unsubscribe(this,`size`)}};d([D({mode:`fromView`})],Wa.prototype,`appearance`,void 0),d([D({mode:`boolean`})],Wa.prototype,`block`,void 0),d([D],Wa.prototype,`size`,void 0);var Ga=T`
  ${Wn(`inline-block`)}

  :host {
    /* typography */
    --font-size: ${ii};
    --line-height: ${di};

    /* layout */
    --padding-inline: ${Ci};
    --padding-block: ${ki};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${_i};
    --control-padding-inline: ${yi};

    /* colors */
    --color: ${M};
    --background-color: ${hr};
    --border-color: ${Lr};
    --border-block-end-color: ${Pr};
    --placeholder-color: ${dr};
    --focus-indicator-color: ${Br};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${ni};
    font-size: var(--font-size);
    font-weight: ${ci};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${Rr};
    --border-block-end-color: ${Fr};
  }

  :host(:active) {
    --border-color: ${zr};
    --border-block-end-color: ${Ir};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host([block]:not([hidden])) {
    display: block;
  }

  :host([size='small']) {
    --font-size: ${ri};
    --line-height: ${ui};
    --min-block-size: 40px;
    --padding-block: ${Oi};
    --padding-inline: ${xi};
    --control-padding-inline: ${yi};
  }

  :host([size='large']) {
    --font-size: ${ai};
    --line-height: ${fi};
    --min-block-size: 64px;
    --padding-block: ${Ai};
    --padding-inline: ${wi};
    --control-padding-inline: ${xi};
  }

  :host([resize='both']:not(:disabled)) {
    --resize: both;
  }

  :host([resize='horizontal']:not(:disabled)) {
    --resize: horizontal;
  }

  :host([resize='vertical']:not(:disabled)) {
    --resize: vertical;
  }

  :host([auto-resize]) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host([appearance='filled-darker']) {
    --background-color: ${vr};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host([appearance='filled-lighter']) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host([appearance='filled-darker'][display-shadow]),
  :host([appearance='filled-lighter'][display-shadow]) {
    --box-shadow: ${mi};
  }

  :host(${ga}) {
    --border-color: ${Yr};
    --border-block-end-color: ${Yr};
  }

  :host(:disabled) {
    --color: ${fr};
    --background-color: ${Cr};
    --border-color: ${Ur};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${fr};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${N};
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    contain: paint layout style var(--contain-size);
    display: grid;
    grid-template: 1fr / 1fr;
    inline-size: var(--inline-size);
    min-block-size: var(--min-block-size);
    block-size: var(--block-size);
    overflow: hidden;
    padding: var(--padding-block) var(--padding-inline);
    position: relative;
    resize: var(--resize);
  }

  :host([block]) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${N} ${N};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${N});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${Ri};
    transition-duration: ${Pi};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Ii};
    transition-delay: ${zi};
  }

  :host([readonly]) .root::after,
  :host(:disabled) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${Oi};
    padding-inline-end: ${bi};
  }

  :host(:empty) label,
  label[hidden] {
    display: none;
  }

  .auto-sizer,
  .control {
    box-sizing: border-box;
    font: inherit;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    letter-space: inherit;
    padding: 0 var(--control-padding-inline);
  }

  .auto-sizer {
    display: none;
    padding-block-end: 2px; /* avoid scroll bar in Firefox */
    pointer-events: none;
    visibility: hidden;
    white-space: pre-wrap;
  }

  :host([auto-resize]) .auto-sizer {
    display: block;
  }

  .control {
    appearance: none;
    background-color: transparent;
    border: 0;
    color: inherit;
    field-sizing: content;
    max-block-size: 100%;
    outline: 0;
    resize: none;
    text-align: inherit;
  }

  .control:disabled {
    cursor: inherit;
  }

  .control::placeholder {
    color: var(--placeholder-color);
  }

  ::selection {
    color: ${mr};
    background-color: ${yr};
  }
`.withBehaviors(qn(T`
    :host {
      --border-color: FieldText;
      --border-block-end-color: FieldText;
      --focus-indicator-color: Highlight;
      --placeholder-color: FieldText;
    }

    :host(:hover),
    :host(:active),
    :host(:focus-within) {
      --border-color: Highlight;
      --border-block-end-color: Highlight;
    }

    :host(:disabled) {
      --color: GrayText;
      --border-color: GrayText;
      --border-block-end-color: GrayText;
      --placeholder-color: GrayText;
    }
  `));function Ka(){return k`
    <template>
      <label ${Vt(`labelEl`)} for="control" part="label">
        <slot name="label" ${un(`labelSlottedNodes`)}></slot>
      </label>
      <div class="root" part="root" ${Vt(`rootEl`)}>
        <textarea
          ${Vt(`controlEl`)}
          id="control"
          class="control"
          part="control"
          ?required="${e=>e.required}"
          ?disabled="${e=>e.disabled}"
          ?readonly="${e=>e.readOnly}"
          ?spellcheck="${e=>e.spellcheck}"
          autocomplete="${e=>e.autocomplete}"
          maxlength="${e=>e.maxLength}"
          minlength="${e=>e.minLength}"
          placeholder="${e=>e.placeholder}"
          @change="${e=>e.handleControlChange()}"
          @select="${e=>e.handleControlSelect()}"
          @input="${e=>e.handleControlInput()}"
        ></textarea>
      </div>
      <div hidden>
        <slot ${un(`defaultSlottedNodes`)}></slot>
      </div>
    </template>
  `}var qa=Ka();Wa.compose({name:`${u.prefix}-textarea`,template:qa,styles:Ga,shadowOptions:{delegatesFocus:!0}}).define(u.registry);var Ja={modal:`modal`,nonModal:`non-modal`,alert:`alert`};function Ya(e,t=`-dialog`){return e?.nodeType===Node.ELEMENT_NODE?e.tagName.toLowerCase().endsWith(t):!1}var Xa=class extends Nn{constructor(){super(...arguments),this.type=Ja.modal,this.emitBeforeToggle=()=>{this.$emit(`beforetoggle`,{oldState:this.dialog.open?`open`:`closed`,newState:this.dialog.open?`closed`:`open`})},this.emitToggle=()=>{this.$emit(`toggle`,{oldState:this.dialog.open?`closed`:`open`,newState:this.dialog.open?`open`:`closed`})}}dialogChanged(){this.updateDialogAttributes()}typeChanged(e,t){this.updateDialogAttributes()}show(){ue.enqueue(()=>{this.emitBeforeToggle(),this.type===Ja.alert||this.type===Ja.modal?this.dialog.showModal():this.type===Ja.nonModal&&this.dialog.show(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return this.dialog.open&&this.type!==Ja.alert&&e.target===this.dialog&&this.hide(),!0}updateDialogAttributes(){this.dialog&&(this.type===Ja.alert?this.dialog.setAttribute(`role`,`alertdialog`):this.dialog.removeAttribute(`role`),this.type===Ja.nonModal?this.dialog.removeAttribute(`aria-modal`):this.dialog.setAttribute(`aria-modal`,`true`))}};d([w],Xa.prototype,`dialog`,void 0),d([D({attribute:`aria-describedby`})],Xa.prototype,`ariaDescribedby`,void 0),d([D({attribute:`aria-labelledby`})],Xa.prototype,`ariaLabelledby`,void 0),d([D({attribute:`aria-label`})],Xa.prototype,`ariaLabel`,void 0),d([D],Xa.prototype,`type`,void 0);var Za=k`
  <dialog
    class="dialog"
    part="dialog"
    aria-describedby="${e=>e.ariaDescribedby}"
    aria-labelledby="${e=>e.ariaLabelledby}"
    aria-label="${e=>e.ariaLabel}"
    @click="${(e,t)=>e.clickHandler(t.event)}"
    @cancel="${e=>e.hide()}"
    ${Vt(`dialog`)}
  >
    <slot></slot>
  </dialog>
`,Qa=T`
  @layer base {
    :host {
      --dialog-backdrop: ${Dr};
      --dialog-starting-scale: 0.85;
    }

    ::backdrop {
      background: var(--dialog-backdrop, rgba(0, 0, 0, 0.4));
    }

    dialog {
      background: ${hr};
      border-radius: ${ei};
      border: none;
      box-shadow: ${gi};
      color: ${M};
      max-height: 100vh;
      padding: 0;
      width: 100%;
      max-width: 600px;
    }

    :host([type='non-modal']) dialog {
      inset: 0;
      position: fixed;
      z-index: 2;
      overflow: auto;
    }

    @supports (max-height: 1dvh) {
      dialog {
        max-height: 100dvh;
      }
    }
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog,
      ::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${Li};
        transition-timing-function: ${zi};
        /* Set opacity to 0 when closed */
        opacity: 0;
      }
      ::backdrop {
        transition-timing-function: ${Vi};
      }

      /* Set opacity to 1 when open */
      [open],
      [open]::backdrop {
        opacity: 1;
      }

      /* Exit styles for dialog */
      dialog:not([open]) {
        /* Make small when leaving */
        scale: var(--dialog-starting-scale);
        /* Faster leaving the stage then entering */
        transition-timing-function: ${Ri};
      }
    }

    @starting-style {
      [open],
      [open]::backdrop {
        opacity: 0;
      }

      dialog {
        scale: var(--dialog-starting-scale);
      }
    }
  }
`.withBehaviors(qn(T`
    @layer base {
      dialog {
        border: ${_i} solid ${Wr};
      }
    }
  `));Xa.compose({name:`${u.prefix}-dialog`,template:Za,styles:Qa}).define(u.registry);var $a=class extends Nn{clickHandler(e){if(!e.defaultPrevented){let e=this.parentElement;Ya(e)&&e.hide()}return!0}},eo=k`
  <template>
    <div class="title" part="title">
      <slot name="title"></slot>
      <slot name="title-action"></slot>
      <slot name="close" @click="${(e,t)=>e.clickHandler(t.event)}"></slot>
    </div>
    <div class="content" part="content"><slot></slot></div>
    <div class="actions" part="actions"><slot name="action"></slot></div>
  </template>
`,to=T`
  ${Wn(`grid`)}

  :host {
    background: ${hr};
    box-sizing: border-box;
    gap: ${Ai};
    padding: ${Ni} ${Ei};
    container: dialog-body / inline-size;
  }

  .title {
    box-sizing: border-box;
    align-items: flex-start;
    background: ${hr};
    color: ${M};
    column-gap: 8px;
    display: flex;
    font-family: ${ni};
    font-size: ${oi};
    font-weight: ${li};
    inset-block-start: 0;
    justify-content: space-between;
    line-height: ${pi};
    margin-block-end: calc(${Ai} * -1);
    margin-block-start: calc(${Ni} * -1);
    padding-block-end: ${Ai};
    padding-block-start: ${Ni};
  }

  .content {
    box-sizing: border-box;
    color: ${M};
    font-family: ${ni};
    font-size: ${ii};
    font-weight: ${ci};
    line-height: ${di};
    min-height: 32px;
  }

  .actions {
    box-sizing: border-box;
    background: ${hr};
    display: flex;
    flex-direction: column;
    gap: ${Ai};
    inset-block-end: 0;
    margin-block-end: calc(${Ni} * -1);
    padding-block-end: ${Ni};
    padding-block-start: ${Mi};
  }

  ::slotted([slot='title-action']) {
    margin-inline-start: auto;
  }

  ::slotted([slot='title']) {
    font: inherit;
    padding: 0;
    margin: 0;
  }

  /* align  title content to the end when there is no title*/
  :not(:has(:is([slot='title'], [slot='title-action']))) .title {
    justify-content: end;
  }

  @container (min-width: 480px) {
    .actions {
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-block-start: calc(${Ai} * -1);
      padding-block-start: ${Ai};
    }
  }

  /* For a11y, set sticky position for title and actions when the viewport is tall enough */
  @media (min-height: 480px) {
    .title {
      position: sticky;
      z-index: 1;
    }
    .actions {
      position: sticky;
      z-index: 2;
    }
`;$a.compose({name:`${u.prefix}-dialog-body`,template:eo,styles:to}).define(u.registry);var no=class extends Nn{positioningChanged(){Jn||this.setFallbackStyles()}get anchorElement(){let e=this.getRootNode();return(e instanceof ShadowRoot?e:document).getElementById(this.anchor??``)}constructor(){super(),this.elementInternals=this.attachInternals(),this.id=Rn(`tooltip-`),this.defaultDelay=250,this.anchor=``,this.anchorPositioningStyleElement=null,this.mouseenterAnchorHandler=()=>this.showTooltip(this.delay),this.mouseleaveAnchorHandler=()=>this.hideTooltip(this.delay),this.focusAnchorHandler=()=>this.showTooltip(0),this.blurAnchorHandler=()=>this.hideTooltip(0),this.elementInternals.role=`tooltip`}connectedCallback(){if(super.connectedCallback(),!this.anchorElement)return;let e=this.anchorElement.style.anchorName||`--${this.anchor}`,t=this.anchorElement.getAttribute(`aria-describedby`);if(this.anchorElement.setAttribute(`aria-describedby`,t?`${t} ${this.id}`:this.id),this.anchorElement.addEventListener(`focus`,this.focusAnchorHandler),this.anchorElement.addEventListener(`blur`,this.blurAnchorHandler),this.anchorElement.addEventListener(`mouseenter`,this.mouseenterAnchorHandler),this.anchorElement.addEventListener(`mouseleave`,this.mouseleaveAnchorHandler),Jn){Yn||(this.anchorElement.style.anchorName=e,this.style.positionAnchor=e);return}ue.enqueue(()=>this.setFallbackStyles())}disconnectedCallback(){super.disconnectedCallback(),this.anchorElement?.removeEventListener(`focus`,this.focusAnchorHandler),this.anchorElement?.removeEventListener(`blur`,this.blurAnchorHandler),this.anchorElement?.removeEventListener(`mouseenter`,this.mouseenterAnchorHandler),this.anchorElement?.removeEventListener(`mouseleave`,this.mouseleaveAnchorHandler)}showTooltip(e=this.defaultDelay){setTimeout(()=>{this.setAttribute(`aria-hidden`,`false`),this.showPopover()},e)}hideTooltip(e=this.defaultDelay){setTimeout(()=>{if(this.matches(`:hover`)||this.anchorElement?.matches(`:hover`)){this.hideTooltip(e);return}this.setAttribute(`aria-hidden`,`true`),this.hidePopover()},e)}setFallbackStyles(){if(!this.anchorElement)return;let e=this.anchorElement.style.anchorName||`--${this.anchor}`;this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement(`style`),document.head.append(this.anchorPositioningStyleElement));let[t,n]=this.positioning?.split(`-`)??[];n||((t===`above`||t===`below`)&&(n=`centerX`),(t===`before`||t===`after`)&&(n=`centerY`));let r={above:`bottom: anchor(top);`,below:`top: anchor(bottom);`,before:`right: anchor(left);`,after:`left: anchor(right);`},i=r[t]??r.above,a={start:`left: anchor(left);`,end:`right: anchor(right);`,top:`top: anchor(top);`,bottom:`bottom: anchor(bottom);`,centerX:`left: anchor(center); translate: -50% 0;`,centerY:`top: anchor(center); translate: 0 -50%;`},o=a[n]??a.centerX;this.anchorPositioningStyleElement.textContent=`
      #${this.anchor} {
        anchor-name: ${e};
      }
      #${this.id} {
        inset: unset;
        position-anchor: ${e};
        position: absolute;
        ${i}
        ${o}
      }
    `,window.CSS_ANCHOR_POLYFILL&&window.CSS_ANCHOR_POLYFILL.call({element:this.anchorPositioningStyleElement})}};d([D],no.prototype,`id`,void 0),d([D({converter:qt})],no.prototype,`delay`,void 0),d([D],no.prototype,`positioning`,void 0),d([D],no.prototype,`anchor`,void 0);var B={"above-start":`block-start span-inline-end`,above:`block-start`,"above-end":`block-start span-inline-start`,"below-start":`block-end span-inline-end`,below:`block-end`,"below-end":`block-end span-inline-start`,"before-top":`inline-start span-block-end`,before:`inline-start`,"before-bottom":`inline-start span-block-start`,"after-top":`inline-end span-block-end`,after:`inline-end`,"after-bottom":`inline-end span-block-start`},ro=T`
  ${Wn(`inline-flex`)}

  :host(:not(:popover-open)) {
    display: none;
  }

  :host {
    --position-area: block-start;
    --position-try-options: flip-block;
    --block-offset: ${Oi};
    --inline-offset: ${bi};
    background: ${hr};
    border-radius: ${N};
    border: 1px solid ${Wr};
    box-sizing: border-box;
    color: ${M};
    display: inline-flex;
    filter: drop-shadow(0 0 2px ${qr}) drop-shadow(0 4px 8px ${Jr});
    font-family: ${ni};
    font-size: ${ri};
    inset: unset;
    line-height: ${ui};
    margin: unset; /* Remove browser default for [popover] */
    max-width: 240px;
    overflow: visible;
    padding: 4px ${Ci} 6px;
    position: absolute;
    position-area: var(--position-area);
    position-try-options: var(--position-try-options);
    width: auto;
    z-index: 1;
  }

  @supports (inset-area: block-start) {
    :host {
      inset-area: var(--position-area);
      position-try-fallbacks: var(--position-try-options);
    }
  }

  :host(:is([positioning^='above'], [positioning^='below'], :not([positioning]))) {
    margin-block: var(--block-offset);
  }

  :host(:is([positioning^='before'], [positioning^='after'])) {
    margin-inline: var(--inline-offset);
    --position-try-options: flip-inline;
  }

  :host([positioning='above-start']) {
    --position-area: ${B[`above-start`]};
  }
  :host([positioning='above']) {
    --position-area: ${B.above};
  }
  :host([positioning='above-end']) {
    --position-area: ${B[`above-end`]};
  }
  :host([positioning='below-start']) {
    --position-area: ${B[`below-start`]};
  }
  :host([positioning='below']) {
    --position-area: ${B.below};
  }
  :host([positioning='below-end']) {
    --position-area: ${B[`below-end`]};
  }
  :host([positioning='before-top']) {
    --position-area: ${B[`before-top`]};
  }
  :host([positioning='before']) {
    --position-area: ${B.before};
  }
  :host([positioning='before-bottom']) {
    --position-area: ${B[`before-bottom`]};
  }
  :host([positioning='after-top']) {
    --position-area: ${B[`after-top`]};
  }
  :host([positioning='after']) {
    --position-area: ${B.after};
  }
  :host([positioning='after-bottom']) {
    --position-area: ${B[`after-bottom`]};
  }
`,io=k`
  <template popover aria-hidden="true">
    <slot></slot>
  </template>
`;no.compose({name:`${u.prefix}-tooltip`,template:io,styles:ro}).define(u.registry);var ao=globalThis,oo=ao.ShadowRoot&&(ao.ShadyCSS===void 0||ao.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,so=Symbol(),co=new WeakMap,lo=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==so)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(oo&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=co.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&co.set(t,e))}return e}toString(){return this.cssText}},uo=e=>new lo(typeof e==`string`?e:e+``,void 0,so),fo=(e,...t)=>new lo(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,so),po=(e,t)=>{if(oo)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ao.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},mo=oo?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return uo(t)})(e):e,{is:ho,defineProperty:go,getOwnPropertyDescriptor:_o,getOwnPropertyNames:vo,getOwnPropertySymbols:yo,getPrototypeOf:bo}=Object,xo=globalThis,So=xo.trustedTypes,Co=So?So.emptyScript:``,wo=xo.reactiveElementPolyfillSupport,To=(e,t)=>e,Eo={toAttribute(e,t){switch(t){case Boolean:e=e?Co:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Do=(e,t)=>!ho(e,t),Oo={attribute:!0,type:String,converter:Eo,reflect:!1,useDefault:!1,hasChanged:Do};Symbol.metadata??=Symbol(`metadata`),xo.litPropertyMetadata??=new WeakMap;var ko=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&go(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=_o(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oo}static _$Ei(){if(this.hasOwnProperty(To(`elementProperties`)))return;let e=bo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(To(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(To(`properties`))){let e=this.properties,t=[...vo(e),...yo(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(mo(e))}else e!==void 0&&t.push(mo(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return po(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Eo:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Eo:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Do)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ko.elementStyles=[],ko.shadowRootOptions={mode:`open`},ko[To(`elementProperties`)]=new Map,ko[To(`finalized`)]=new Map,wo?.({ReactiveElement:ko}),(xo.reactiveElementVersions??=[]).push(`2.1.2`);var Ao=globalThis,jo=e=>e,Mo=Ao.trustedTypes,No=Mo?Mo.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Po=`$lit$`,Fo=`lit$${Math.random().toFixed(9).slice(2)}$`,Io=`?`+Fo,Lo=`<${Io}>`,Ro=document,zo=()=>Ro.createComment(``),Bo=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Vo=Array.isArray,Ho=e=>Vo(e)||typeof e?.[Symbol.iterator]==`function`,Uo=`[ 	
\f\r]`,Wo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Go=/-->/g,Ko=/>/g,qo=RegExp(`>|${Uo}(?:([^\\s"'>=/]+)(${Uo}*=${Uo}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Jo=/'/g,Yo=/"/g,Xo=/^(?:script|style|textarea|title)$/i,Zo=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Qo=Symbol.for(`lit-noChange`),V=Symbol.for(`lit-nothing`),$o=new WeakMap,es=Ro.createTreeWalker(Ro,129);function ts(e,t){if(!Vo(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return No===void 0?t:No.createHTML(t)}var ns=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Wo;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Wo?c[1]===`!--`?o=Go:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=qo):(Xo.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=qo):o=Ko:o===qo?c[0]===`>`?(o=i??Wo,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?qo:c[3]===`"`?Yo:Jo):o===Yo||o===Jo?o=qo:o===Go||o===Ko?o=Wo:(o=qo,i=void 0);let d=o===qo&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Wo?n+Lo:l>=0?(r.push(s),n.slice(0,l)+Po+n.slice(l)+Fo+d):n+Fo+(l===-2?t:d)}return[ts(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},rs=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ns(t,n);if(this.el=e.createElement(l,r),es.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=es.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Po)){let t=u[o++],n=i.getAttribute(e).split(Fo),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?cs:r[1]===`?`?ls:r[1]===`@`?us:ss}),i.removeAttribute(e)}else e.startsWith(Fo)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Xo.test(i.tagName)){let e=i.textContent.split(Fo),t=e.length-1;if(t>0){i.textContent=Mo?Mo.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],zo()),es.nextNode(),c.push({type:2,index:++a});i.append(e[t],zo())}}}else if(i.nodeType===8)if(i.data===Io)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Fo,e+1))!==-1;)c.push({type:7,index:a}),e+=Fo.length-1}a++}}static createElement(e,t){let n=Ro.createElement(`template`);return n.innerHTML=e,n}};function is(e,t,n=e,r){if(t===Qo)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Bo(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=is(e,i._$AS(e,t.values),i,r)),t}var as=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ro).importNode(t,!0);es.currentNode=r;let i=es.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new os(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ds(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=es.nextNode(),a++)}return es.currentNode=Ro,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},os=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=is(this,e,t),Bo(e)?e===V||e==null||e===``?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==Qo&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ho(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&Bo(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ro.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=rs.createElement(ts(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new as(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=$o.get(e.strings);return t===void 0&&$o.set(e.strings,t=new rs(e)),t}k(t){Vo(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(zo()),this.O(zo()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=jo(e).nextSibling;jo(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ss=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=is(this,e,t,0),a=!Bo(e)||e!==this._$AH&&e!==Qo,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=is(this,r[n+o],t,o),s===Qo&&(s=this._$AH[o]),a||=!Bo(s)||s!==this._$AH[o],s===V?e=V:e!==V&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},cs=class extends ss{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}},ls=class extends ss{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}},us=class extends ss{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=is(this,e,t,0)??V)===Qo)return;let n=this._$AH,r=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==V&&(n===V||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ds=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){is(this,e)}},fs=Ao.litHtmlPolyfillSupport;fs?.(rs,os),(Ao.litHtmlVersions??=[]).push(`3.3.2`);var ps=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new os(t.insertBefore(zo(),e),e,void 0,n??{})}return i._$AI(e),i},ms=globalThis,hs=class extends ko{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ps(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qo}};hs._$litElement$=!0,hs.finalized=!0,ms.litElementHydrateSupport?.({LitElement:hs});var gs=ms.litElementPolyfillSupport;gs?.({LitElement:hs}),(ms.litElementVersions??=[]).push(`4.2.2`);var _s=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},vs={attribute:!0,type:String,converter:Eo,reflect:!1,hasChanged:Do},ys=(e=vs,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function bs(e){return(t,n)=>typeof n==`object`?ys(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function xs(e){return bs({...e,state:!0,attribute:!1})}var Ss=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Cs(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ss(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ss(n,r,{get(){return a(this)}})}}var ws=fo`
	.container {
		border: 1px solid #e1dfdd;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.pane-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;

		h1 {
			margin: 0;
			font-size: 20px;
			font-weight: normal;
		}
	}
`,Ts=l(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var ee=`$isDayjsObject`,te=function(e){return e instanceof re||!(!e||!e[ee])},ne=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},x=function(e,t){if(te(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new re(n)},S=v;S.l=ne,S.i=te,S.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var re=function(){function g(e){this.$L=ne(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ee]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return x(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<x(e)},_.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!S.u(t)||t,u=S.p(e),p=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return S.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=S.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[S.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=S.p(u),h=function(e){var t=x(p);return S.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return S.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=S.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return S.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return S.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return S.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return S.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return S.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return S.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return S.s(t.$s,2,`0`);case`SSS`:return S.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=S.p(f),_=x(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return S.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:S.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=ne(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),ie=re.prototype;return x.prototype=ie,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){ie[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||=(e(t,re,x),!0),x},x.locale=ne,x.isDayjs=te,x.unix=function(e){return x(1e3*e)},x.en=b[y],x.Ls=b,x.p={},x}))}))(),1),Es=async e=>{let t=await fetch(`https://api.github.com/user`,{method:`GET`,cache:`no-store`,headers:{Accept:`application/vnd.github.v3+json`,Authorization:`Bearer ${e}`}});return{status:t.status,headers:t.headers,body:await t.json()}},Ds=async e=>{let t=`https://api.github.com/gists/${e}`,n=await fetch(t,{method:`GET`,cache:`no-store`,headers:{Accept:`application/vnd.github.v3+json`}});return{status:n.status,headers:n.headers,body:await n.json()}},Os=async(e,t,n,r)=>{let i=`https://api.github.com/gists/${t}`,a=await fetch(i,{method:`PATCH`,headers:{Accept:`application/vnd.github.v3+json`,Authorization:`Bearer ${e}`},body:JSON.stringify({files:{[n]:{content:r}}})});return{status:a.status,headers:a.headers,body:await a.json()}},ks=(e,t,n)=>{let r=e=>{let t=n.map(t=>{let n=t.match(e);return n?~~n[1]:null}).filter(e=>e!=null);return t.length===0?0:Math.max(...t)};if(e===`month-group`)return(0,Ts.default)().format(`YYYY-MM`)+`.md`;if(e===`month-single`){let e=(0,Ts.default)().format(`YYYY-MM`);return`${e}-${(r(RegExp(`^${e}-(\\d+)\\.md$`))+1).toString().padStart(3,`0`)}.md`}else{let e=(0,Ts.default)();if(!t)throw Error(`ファイル名は必須です`);let n=`⚡️`,i=0,a=t.replace(/\{([A-Z]+)\}/g,(t,r)=>r.match(/^N+$/)?(i=r.length,n):e.format(r));if((a.match(new RegExp(RegExp.escape(n),`g`))??[]).length>1)throw Error(`N はひとつまでです`);let o=(r(RegExp(`^${RegExp.escape(a).replace(n,`(\\d`)}$`))+1).toString().padStart(i,`0`);return a.replace(n,o)}},As=(e,t,n)=>{let r=t.replace(/\n+$/,``)+`
`;n&&(r+=`
---
`);let i=e.replace(/\n+$/,``);return i?!n||i.match(/(^|\n)-{3,}$/)?i+`

`+r:i+`

---

`+r:r};function H(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var js=class extends hs{constructor(...e){super(...e),this.value=``,this._observer=null,this._emit_timer={timer:null,start:null}}static{this.styles=[ws,fo`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				flex: 1;
				overflow: hidden;
			}

			fluent-textarea {
				height: 100%;

				&::part(root) {
					height: 100%;
				}

				&::part(control) {
					height: 100%;
				}
			}
		`]}_handleTextareaInput(e){e.stopPropagation();let t=e.target;this.value=t.value,this._scheduleEmit()}_handleTextareaChange(e){e.stopPropagation()}_onHandleFileChange(e){let t=e[0].changedHandle;this._applyFileContent(t)}async _sync(){let[e]=await showOpenFilePicker({types:[{description:`Markdown files`,accept:{"text/markdown":[`.md`]}}],multiple:!1});e&&(this._observer||=new FileSystemObserver(this._onHandleFileChange.bind(this)),this._observer.disconnect(),await this._observer.observe(e),this._applyFileContent(e))}async _applyFileContent(e){let t=await(await e.getFile()).text();this.value=t,this._scheduleEmit()}_scheduleEmit(){let e=Date.now();clearTimeout(this._emit_timer.timer);let t=()=>{this._emit_timer.start=null,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))};if(this._emit_timer.start==null)this._emit_timer.start=e;else if(e-this._emit_timer.start>3e3){t();return}this._emit_timer.timer=setTimeout(t,1200)}render(){return Zo`
			<header class="pane-header">
				<h1>Markdown</h1>
				<fluent-button @click=${this._sync}>Open file & Sync</fluent-button>
			</header>
			<div class="container">
				<fluent-textarea
					appearance="filled-lighter"
					block
					.value=${this.value}
					@input=${this._handleTextareaInput}
					@change=${this._handleTextareaChange}
				></fluent-textarea>
			</div>
		`}};H([bs()],js.prototype,`value`,void 0),js=H([_s(`markdown-editor`)],js);var Ms={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ns=e=>(...t)=>({_$litDirective$:e,values:t}),Ps=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Fs=class extends Ps{constructor(e){if(super(e),this.it=V,e.type!==Ms.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===V||e==null)return this._t=void 0,this.it=e;if(e===Qo)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Fs.directiveName=`unsafeHTML`,Fs.resultType=1;var Is=Ns(Fs),Ls={};function Rs(e){let t=Ls[e];if(t)return t;t=Ls[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function zs(e,t){typeof t!=`string`&&(t=zs.defaultChars);let n=Rs(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}zs.defaultChars=`;/?:@&=+$,#`,zs.componentChars=``;var Bs={};function Vs(e){let t=Bs[e];if(t)return t;t=Bs[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Hs(e,t,n){typeof t!=`string`&&(n=t,t=Hs.defaultChars),n===void 0&&(n=!0);let r=Vs(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}Hs.defaultChars=`;/?:@&=+$,-_.!~*'()#`,Hs.componentChars=`-_.!~*'()`;function Us(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function Ws(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Gs=/^([a-z0-9.+-]+:)/i,Ks=/:[0-9]*$/,qs=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Js=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],Ys=[`/`,`?`,`#`],Xs=255,Zs=/^[+a-z0-9A-Z_-]{0,63}$/,Qs=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,$s={javascript:!0,"javascript:":!0},ec={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function tc(e,t){if(e&&e instanceof Ws)return e;let n=new Ws;return n.parse(e,t),n}Ws.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=qs.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=Gs.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&$s[o])&&(a=a.substr(2),this.slashes=!0)),!$s[o]&&(i||o&&!ec[o])){let e=-1;for(let t=0;t<Ys.length;t++)r=a.indexOf(Ys[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<Js.length;t++)r=a.indexOf(Js[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(Zs)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(Zs)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(Qs);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>Xs&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),ec[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},Ws.prototype.parseHost=function(e){let t=Ks.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var nc=s({decode:()=>zs,encode:()=>Hs,format:()=>Us,parse:()=>tc}),rc=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ic=/[\0-\x1F\x7F-\x9F]/,ac=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,oc=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,sc=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,cc=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,lc=s({Any:()=>rc,Cc:()=>ic,Cf:()=>ac,P:()=>oc,S:()=>sc,Z:()=>cc}),uc=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),dc=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),fc=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),pc=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function mc(e){return e>=55296&&e<=57343||e>1114111?65533:fc.get(e)??e}var U;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(U||={});var hc=32,gc;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(gc||={});function _c(e){return e>=U.ZERO&&e<=U.NINE}function vc(e){return e>=U.UPPER_A&&e<=U.UPPER_F||e>=U.LOWER_A&&e<=U.LOWER_F}function yc(e){return e>=U.UPPER_A&&e<=U.UPPER_Z||e>=U.LOWER_A&&e<=U.LOWER_Z||_c(e)}function bc(e){return e===U.EQUALS||yc(e)}var W;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(W||={});var xc;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(xc||={});var Sc=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=W.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=xc.Strict}startEntity(e){this.decodeMode=e,this.state=W.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case W.EntityStart:return e.charCodeAt(t)===U.NUM?(this.state=W.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=W.NamedEntity,this.stateNamedEntity(e,t));case W.NumericStart:return this.stateNumericStart(e,t);case W.NumericDecimal:return this.stateNumericDecimal(e,t);case W.NumericHex:return this.stateNumericHex(e,t);case W.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|hc)===U.LOWER_X?(this.state=W.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=W.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(_c(r)||vc(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(_c(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===U.SEMI)this.consumed+=1;else if(this.decodeMode===xc.Strict)return 0;return this.emitCodePoint(mc(this.result),this.consumed),this.errors&&(e!==U.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&gc.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=wc(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===xc.Attribute&&(i===0||bc(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&gc.VALUE_LENGTH)>>14,i!==0){if(a===U.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==xc.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&gc.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~gc.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case W.NamedEntity:return this.result!==0&&(this.decodeMode!==xc.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case W.NumericDecimal:return this.emitNumericEntity(0,2);case W.NumericHex:return this.emitNumericEntity(0,3);case W.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case W.EntityStart:return 0}}};function Cc(e){let t=``,n=new Sc(e,e=>t+=pc(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function wc(e,t,n,r){let i=(t&gc.BRANCH_LENGTH)>>7,a=t&gc.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Tc=Cc(uc);Cc(dc);function Ec(e,t=xc.Legacy){return Tc(e,t)}var Dc=s({arrayReplaceAt:()=>Nc,assign:()=>Mc,escapeHtml:()=>Kc,escapeRE:()=>Jc,fromCodePoint:()=>Fc,has:()=>jc,isMdAsciiPunct:()=>Zc,isPunctChar:()=>Xc,isSpace:()=>G,isString:()=>kc,isValidEntityCode:()=>Pc,isWhiteSpace:()=>Yc,lib:()=>$c,normalizeReference:()=>Qc,unescapeAll:()=>Vc,unescapeMd:()=>Bc});function Oc(e){return Object.prototype.toString.call(e)}function kc(e){return Oc(e)===`[object String]`}var Ac=Object.prototype.hasOwnProperty;function jc(e,t){return Ac.call(e,t)}function Mc(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Nc(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Pc(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Fc(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Ic=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Lc=RegExp(Ic.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Rc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function zc(e,t){if(t.charCodeAt(0)===35&&Rc.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Pc(n)?Fc(n):e}let n=Ec(e);return n===e?e:n}function Bc(e){return e.indexOf(`\\`)<0?e:e.replace(Ic,`$1`)}function Vc(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Lc,function(e,t,n){return t||zc(e,n)})}var Hc=/[&<>"]/,Uc=/[&<>"]/g,Wc={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Gc(e){return Wc[e]}function Kc(e){return Hc.test(e)?e.replace(Uc,Gc):e}var qc=/[.?*+^$[\]\\(){}|-]/g;function Jc(e){return e.replace(qc,`\\$&`)}function G(e){switch(e){case 9:case 32:return!0}return!1}function Yc(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Xc(e){return oc.test(e)||sc.test(e)}function Zc(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Qc(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}var $c={mdurl:nc,ucmicro:lc};function el(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function tl(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=Vc(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=Vc(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function nl(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=Vc(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=Vc(e.slice(t,a)),o}var rl=s({parseLinkDestination:()=>tl,parseLinkLabel:()=>el,parseLinkTitle:()=>nl}),il={};il.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Kc(a.content)+`</code>`},il.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Kc(e[t].content)+`</code></pre>
`},il.fence=function(e,t,n,r,i){let a=e[t],o=a.info?Vc(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Kc(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},il.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},il.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},il.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},il.text=function(e,t){return Kc(e[t].content)},il.html_block=function(e,t){return e[t].content},il.html_inline=function(e,t){return e[t].content};function al(){this.rules=Mc({},il)}al.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Kc(e.attrs[t][0])+`="`+Kc(e.attrs[t][1])+`"`;return r},al.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},al.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},al.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},al.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function K(){this.__rules__=[],this.__cache__=null}K.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},K.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},K.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},K.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},K.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},K.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},K.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},K.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},K.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},K.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ol(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}ol.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},ol.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},ol.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},ol.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},ol.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function sl(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}sl.prototype.Token=ol;var cl=/\r\n?|\n/g,ll=/\0/g;function ul(e){let t;t=e.src.replace(cl,`
`),t=t.replace(ll,`�`),e.src=t}function dl(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function fl(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function pl(e){return/^<a[>\s]/i.test(e)}function ml(e){return/^<\/a\s*>/i.test(e)}function hl(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(pl(o.content)&&i>0&&i--,ml(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Nc(r,a,c)}}}}var gl=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,_l=/\((c|tm|r)\)/i,vl=/\((c|tm|r)\)/gi,yl={c:`©`,r:`®`,tm:`™`};function bl(e,t){return yl[t.toLowerCase()]}function xl(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(vl,bl)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Sl(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&gl.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Cl(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(_l.test(e.tokens[t].content)&&xl(e.tokens[t].children),gl.test(e.tokens[t].content)&&Sl(e.tokens[t].children))}var wl=/['"]/,Tl=/['"]/g,El=`’`;function Dl(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function Ol(e,t){let n,r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[i].level;for(n=r.length-1;n>=0&&!(r[n].level<=o);n--);if(r.length=n+1,a.type!==`text`)continue;let s=a.content,c=0,l=s.length;OUTER:for(;c<l;){Tl.lastIndex=c;let u=Tl.exec(s);if(!u)break;let d=!0,f=!0;c=u.index+1;let p=u[0]===`'`,m=32;if(u.index-1>=0)m=s.charCodeAt(u.index-1);else for(n=i-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(c<l)h=s.charCodeAt(c);else for(n=i+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=Zc(m)||Xc(String.fromCharCode(m)),_=Zc(h)||Xc(String.fromCharCode(h)),v=Yc(m),y=Yc(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&u[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&(a.content=Dl(a.content,u.index,El));continue}if(f)for(n=r.length-1;n>=0;n--){let d=r[n];if(r[n].level<o)break;if(d.single===p&&r[n].level===o){d=r[n];let o,f;p?(o=t.md.options.quotes[2],f=t.md.options.quotes[3]):(o=t.md.options.quotes[0],f=t.md.options.quotes[1]),a.content=Dl(a.content,u.index,f),e[d.token].content=Dl(e[d.token].content,d.pos,o),c+=f.length-1,d.token===i&&(c+=o.length-1),s=a.content,l=s.length,r.length=n;continue OUTER}}d?r.push({token:i,pos:u.index,single:p,level:o}):f&&p&&(a.content=Dl(a.content,u.index,El))}}}function kl(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!wl.test(e.tokens[t].content)||Ol(e.tokens[t].children,e)}function Al(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var jl=[[`normalize`,ul],[`block`,dl],[`inline`,fl],[`linkify`,hl],[`replacements`,Cl],[`smartquotes`,kl],[`text_join`,Al]];function Ml(){this.ruler=new K;for(let e=0;e<jl.length;e++)this.ruler.push(jl[e][0],jl[e][1])}Ml.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Ml.prototype.State=sl;function Nl(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(G(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Nl.prototype.push=function(e,t,n){let r=new ol(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Nl.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Nl.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Nl.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&G(this.src.charCodeAt(e));e++);return e},Nl.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!G(this.src.charCodeAt(--e)))return e+1;return e},Nl.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Nl.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Nl.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(G(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Nl.prototype.Token=ol;var Pl=65536;function Fl(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Il(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Ll(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!G(s)||o===45&&G(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!G(t))return!1;a++}let c=Fl(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Fl(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Il(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Fl(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Il(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Pl))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Rl(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function zl(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Bl(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(G(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Vl(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!G(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Hl(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!G(e.src.charCodeAt(r))?-1:r}function Ul(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!G(a))?-1:i}function Wl(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Gl(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Ul(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Hl(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],ee=e.sCount[c],te=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=te,e.tShift[c]=b,e.sCount[c]=ee,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let ne=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){ne=!0;break}if(ne)break;if(d){if(p=Ul(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Hl(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Wl(e,h),!0}function Kl(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!G(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!G(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&G(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&G(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Qc(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var ql=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Jl=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,Yl=RegExp(`^(?:`+Jl+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Xl=RegExp(`^(?:`+Jl+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),Zl=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+ql.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Xl.source+`\\s*$`),/^$/,!1]];function Ql(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Zl.length&&!Zl[s][0].test(o);s++);if(s===Zl.length)return!1;if(r)return Zl[s][2];let c=t+1;if(!Zl[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Zl[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let l=e.push(`html_block`,``,0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function $l(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!G(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&G(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=e.src.slice(i,a).trim(),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function eu(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return!1;let c=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function tu(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var nu=[[`table`,Ll,[`paragraph`,`reference`]],[`code`,Rl],[`fence`,zl,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Bl,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Vl,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Gl,[`paragraph`,`reference`,`blockquote`]],[`reference`,Kl],[`html_block`,Ql,[`paragraph`,`reference`,`blockquote`]],[`heading`,$l,[`paragraph`,`reference`,`blockquote`]],[`lheading`,eu],[`paragraph`,tu]];function ru(){this.ruler=new K;for(let e=0;e<nu.length;e++)this.ruler.push(nu[e][0],nu[e][1],{alt:(nu[e][2]||[]).slice()})}ru.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},ru.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},ru.prototype.State=Nl;function iu(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}iu.prototype.pushPending=function(){let e=new ol(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},iu.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new ol(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},iu.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32,a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32,c=Zc(i)||Xc(String.fromCharCode(i)),l=Zc(s)||Xc(String.fromCharCode(s)),u=Yc(i),d=Yc(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},iu.prototype.Token=ol;function au(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ou(e,t){let n=e.pos;for(;n<e.posMax&&!au(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var su=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function cu(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(su);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function lu(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&G(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var uu=[];for(let e=0;e<256;e++)uu.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){uu[e.charCodeAt(0)]=1});function du(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),G(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&uu[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function fu(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function pu(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function mu(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function hu(e){let t=e.tokens_meta,n=e.tokens_meta.length;mu(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&mu(e,t[r].delimiters)}var gu={tokenize:pu,postProcess:hu};function _u(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function vu(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function yu(e){let t=e.tokens_meta,n=e.tokens_meta.length;vu(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&vu(e,t[r].delimiters)}var bu={tokenize:_u,postProcess:yu};function xu(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Qc(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function Su(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Qc(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var Cu=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,wu=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Tu(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(wu.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(Cu.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function Eu(e){return/^<a[>\s]/i.test(e)}function Du(e){return/^<\/a\s*>/i.test(e)}function Ou(e){let t=e|32;return t>=97&&t<=122}function ku(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!Ou(i))return!1;let a=e.src.slice(r).match(Yl);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],Eu(t.content)&&e.linkLevel++,Du(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var Au=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ju=/^&([a-z][a-z0-9]{1,31});/i;function Mu(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Au);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Pc(t)?Fc(t):Fc(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(ju);if(r){let n=Ec(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function Nu(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Pu(e){let t=e.tokens_meta,n=e.tokens_meta.length;Nu(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&Nu(t[e].delimiters)}function Fu(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Iu=[[`text`,ou],[`linkify`,cu],[`newline`,lu],[`escape`,du],[`backticks`,fu],[`strikethrough`,gu.tokenize],[`emphasis`,bu.tokenize],[`link`,xu],[`image`,Su],[`autolink`,Tu],[`html_inline`,ku],[`entity`,Mu]],Lu=[[`balance_pairs`,Pu],[`strikethrough`,gu.postProcess],[`emphasis`,bu.postProcess],[`fragments_join`,Fu]];function Ru(){this.ruler=new K;for(let e=0;e<Iu.length;e++)this.ruler.push(Iu[e][0],Iu[e][1]);this.ruler2=new K;for(let e=0;e<Lu.length;e++)this.ruler2.push(Lu[e][0],Lu[e][1])}Ru.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},Ru.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Ru.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},Ru.prototype.State=iu;function zu(e){let t={};e||={},t.src_Any=rc.source,t.src_Cc=ic.source,t.src_Z=cc.source,t.src_P=oc.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!`+n+`|`+t.src_ZPCc+`)`+t.src_Any+`)`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!`+t.src_ZCc+`|[@/\\[\\]()]).)+@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|`+n+`|`+t.src_ZPCc+`)(?!`+(e[`---`]?`-(?!--)|`:`-|`)+`_|:\\d|\\.-|\\.(?!$|`+t.src_ZPCc+`))`,t.src_path=`(?:[/?#](?:(?!`+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+`|\\]).)*\\]|\\((?:(?!`+t.src_ZCc+`|[)]).)*\\)|\\{(?:(?!`+t.src_ZCc+`|[}]).)*\\}|\\"(?:(?!`+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+`|[']).)+\\'|\\'(?=`+t.src_pseudo_letter+`|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!`+t.src_ZCc+`|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!`+t.src_ZCc+`|$)|;(?!`+t.src_ZCc+`|$)|\\!+(?!`+t.src_ZCc+`|[!]|$)|\\?(?!`+t.src_ZCc+`|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|`+t.src_pseudo_letter+`{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:`+t.src_pseudo_letter+`)|(?:`+t.src_pseudo_letter+`(?:-|`+t.src_pseudo_letter+`){0,61}`+t.src_pseudo_letter+`))`,t.src_host=`(?:(?:(?:(?:`+t.src_domain+`)\\.)*`+t.src_domain+`))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:`+t.src_ZPCc+`|>|$))`,t.tpl_email_fuzzy=`(^|`+n+`|"|\\(|`+t.src_ZCc+`)(`+t.src_email_name+`@`+t.tpl_host_fuzzy_strict+`)`,t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+`)`,t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+`)`,t}function Bu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Vu(e){return Object.prototype.toString.call(e)}function Hu(e){return Vu(e)===`[object String]`}function Uu(e){return Vu(e)===`[object Object]`}function Wu(e){return Vu(e)===`[object RegExp]`}function Gu(e){return Vu(e)===`[object Function]`}function Ku(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var qu={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Ju(e){return Object.keys(e||{}).reduce(function(e,t){return e||qu.hasOwnProperty(t)},!1)}var Yu={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/`+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:`+n.re.src_domain+`)\\.)+`+n.re.src_domain_root+`)`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^`+n.re.src_email_name+`@`+n.re.src_host_strict,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Xu=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Zu=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Qu(e){e.__index__=-1,e.__text_cache__=``}function $u(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function ed(){return function(e,t){t.normalize(e)}}function td(e){let t=e.re=zu(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Xu),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "`+e+`": `+t)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Uu(n)){Wu(n.validate)?r.validate=$u(n.validate):Gu(n.validate)?r.validate=n.validate:a(t,n),Gu(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=ed();return}if(Hu(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:ed()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Ku).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`ig`),e.re.schema_at_start=RegExp(`^`+e.re.schema_search.source,`i`),e.re.pretest=RegExp(`(`+e.re.schema_test.source+`)|(`+e.re.host_fuzzy_test.source+`)|@`,`i`),Qu(e)}function nd(e,t){let n=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(n,r);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function rd(e,t){let n=new nd(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function q(e,t){if(!(this instanceof q))return new q(e,t);t||Ju(e)&&(t=e,e={}),this.__opts__=Bu({},qu,t),this.__index__=-1,this.__last_index__=-1,this.__schema__=``,this.__text_cache__=``,this.__schemas__=Bu({},Yu,e),this.__compiled__={},this.__tlds__=Zu,this.__tlds_replaced__=!1,this.re={},td(this)}q.prototype.add=function(e,t){return this.__schemas__[e]=t,td(this),this},q.prototype.set=function(e){return this.__opts__=Bu(this.__opts__,e),this},q.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,n,r,i,a,o,s,c,l;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],s.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=n.index+n[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__=``,this.__index__=a,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&(l=e.indexOf(`@`),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__=`mailto:`,this.__index__=a,this.__last_index__=o))),this.__index__>=0},q.prototype.pretest=function(e){return this.re.pretest.test(e)},q.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},q.prototype.match=function(e){let t=[],n=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(rd(this,n)),n=this.__last_index__);let r=n?e.slice(n):e;for(;this.test(r);)t.push(rd(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null},q.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,rd(this,0)):null},q.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),td(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,td(this),this)},q.prototype.normalize=function(e){e.schema||(e.url=`http://`+e.url),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:`+e.url)},q.prototype.onCompile=function(){};var id=2147483647,ad=36,od=1,sd=26,cd=38,ld=700,ud=72,dd=128,fd=`-`,pd=/^xn--/,md=/[^\0-\x7F]/,hd=/[\x2E\u3002\uFF0E\uFF61]/g,gd={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},_d=ad-od,vd=Math.floor,yd=String.fromCharCode;function bd(e){throw RangeError(gd[e])}function xd(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function Sd(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(hd,`.`);let i=xd(e.split(`.`),t).join(`.`);return r+i}function Cd(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var wd=e=>String.fromCodePoint(...e),Td=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ad},Ed=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Dd=function(e,t,n){let r=0;for(e=n?vd(e/ld):e>>1,e+=vd(e/t);e>_d*sd>>1;r+=ad)e=vd(e/_d);return vd(r+(_d+1)*e/(e+cd))},Od=function(e){let t=[],n=e.length,r=0,i=dd,a=ud,o=e.lastIndexOf(fd);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&bd(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=ad;;i+=ad){s>=n&&bd(`invalid-input`);let o=Td(e.charCodeAt(s++));o>=ad&&bd(`invalid-input`),o>vd((id-r)/t)&&bd(`overflow`),r+=o*t;let c=i<=a?od:i>=a+sd?sd:i-a;if(o<c)break;let l=ad-c;t>vd(id/l)&&bd(`overflow`),t*=l}let c=t.length+1;a=Dd(r-o,c,o==0),vd(r/c)>id-i&&bd(`overflow`),i+=vd(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},kd=function(e){let t=[];e=Cd(e);let n=e.length,r=dd,i=0,a=ud;for(let n of e)n<128&&t.push(yd(n));let o=t.length,s=o;for(o&&t.push(fd);s<n;){let n=id;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>vd((id-i)/c)&&bd(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>id&&bd(`overflow`),n===r){let e=i;for(let n=ad;;n+=ad){let r=n<=a?od:n>=a+sd?sd:n-a;if(e<r)break;let i=e-r,o=ad-r;t.push(yd(Ed(r+i%o,0))),e=vd(i/o)}t.push(yd(Ed(e,0))),a=Dd(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Ad={version:`2.3.1`,ucs2:{decode:Cd,encode:wd},decode:Od,encode:kd,toASCII:function(e){return Sd(e,function(e){return md.test(e)?`xn--`+kd(e):e})},toUnicode:function(e){return Sd(e,function(e){return pd.test(e)?Od(e.slice(4).toLowerCase()):e})}},jd={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Md=/^(vbscript|javascript|file|data):/,Nd=/^data:image\/(gif|png|jpeg|webp);/;function Pd(e){let t=e.trim().toLowerCase();return Md.test(t)?Nd.test(t):!0}var Fd=[`http:`,`https:`,`mailto:`];function Id(e){let t=tc(e,!0);if(t.hostname&&(!t.protocol||Fd.indexOf(t.protocol)>=0))try{t.hostname=Ad.toASCII(t.hostname)}catch{}return Hs(Us(t))}function Ld(e){let t=tc(e,!0);if(t.hostname&&(!t.protocol||Fd.indexOf(t.protocol)>=0))try{t.hostname=Ad.toUnicode(t.hostname)}catch{}return zs(Us(t),zs.defaultChars+`%`)}function J(e,t){if(!(this instanceof J))return new J(e,t);t||kc(e)||(t=e||{},e=`default`),this.inline=new Ru,this.block=new ru,this.core=new Ml,this.renderer=new al,this.linkify=new q,this.validateLink=Pd,this.normalizeLink=Id,this.normalizeLinkText=Ld,this.utils=Dc,this.helpers=Mc({},rl),this.options={},this.configure(e),t&&this.set(t)}J.prototype.set=function(e){return Mc(this.options,e),this},J.prototype.configure=function(e){let t=this;if(kc(e)){let t=e;if(e=jd[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},J.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},J.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},J.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},J.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},J.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},J.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},J.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Rd=new J({html:!0,linkify:!0}),zd=class extends hs{constructor(...e){super(...e),this.value=``}static{this.styles=[ws,fo`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				flex: 1;
				overflow: auto;
			}

			.preview {
				padding: 16px 24px;
				line-height: 1.7;
				overflow-wrap: break-word;
				font-size: 14px;

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					margin: 1em 0;
					border-bottom: 1px solid #e1dfdd;
					padding-bottom: 0.3em;
				}

				h1 {
					font-size: 20px;
				}

				h2 {
					font-size: 18px;
				}

				h3 {
					font-size: 16px;
				}

				h4 {
					font-size: 15px;
				}

				h5 {
					font-size: 14px;
				}

				h6 {
					font-size: 13px;
				}

				p {
					margin: 0.5em 0;
					line-height: 1.4;
				}

				code {
					background: #f3f2f1;
					padding: 0.2em 0.4em;
					border-radius: 4px;
					font-size: 0.9em;
				}

				pre code {
					background: none;
					padding: 0;
				}

				pre {
					background: #f3f2f1;
					padding: 12px 16px;
					border-radius: 6px;
					overflow-x: auto;
				}

				blockquote {
					border-left: 4px solid #e1dfdd;
					margin: 0;
					padding-left: 16px;
					color: #605e5c;
				}

				a {
					color: #0078d4;
				}

				img {
					max-width: 100%;
				}

				table {
					border-collapse: collapse;
					width: 100%;

					th,
					td {
						border: 1px solid #e1dfdd;
						padding: 6px 12px;
					}

					th {
						background: #f3f2f1;
					}
				}
			}
		`]}render(){return Zo`
			<header class="pane-header">
				<h1>Preview</h1>
			</header>
			<div class="container">
				<div class="preview">${Is(Rd.render(this.value))}</div>
			</div>
		`}};H([bs()],zd.prototype,`value`,void 0),zd=H([_s(`markdown-preview`)],zd);var Bd=class extends hs{constructor(...e){super(...e),this.cancelable=!0,this.title=``,this.message=``}static{this.styles=[ws,fo`
			fluent-dialog-body {
				word-break: break-all;
				overflow-wrap: break-all;
			}
		`]}static async _open({cancelable:e,title:t,message:n}){let r=new this;return r.cancelable=e,r.title=t,r.message=n,document.body.append(r),await r.updateComplete,r.show(),new Promise(e=>{r.addEventListener(`close`,t=>{e(t.detail),setTimeout(()=>{r.remove()},1500)})})}static async openAlert(e,t=``){return this._open({cancelable:!1,message:e,title:t})}static async openConfirm(e,t=``){return this._open({cancelable:!0,message:e,title:t})}show(){this.dialog.show()}hide(){this.dialog.hide()}_handleToggle(e){e.detail.newState===`closed`&&this.dispatchEvent(new CustomEvent(`close`,{detail:null}))}_handleClickOK(){this.dispatchEvent(new CustomEvent(`close`,{detail:!0})),this.hide()}_handleClickCancel(){this.dispatchEvent(new CustomEvent(`close`,{detail:!1})),this.hide()}render(){return Zo`
			<fluent-dialog id="dialog" aria-label="Actions" type="alert" @toggle=${this._handleToggle}>
				<fluent-dialog-body>
					<h2 slot="title">${this.title}</h2>
					<div>${this.message}</div>
					<fluent-button slot="action" appearance="primary" @click=${this._handleClickOK}> OK </fluent-button>
					<fluent-button slot="action" ?hidden=${!this.cancelable} @click=${this._handleClickCancel}>
						キャンセル
					</fluent-button>
				</fluent-dialog-body>
			</fluent-dialog>
		`}};H([bs()],Bd.prototype,`cancelable`,void 0),H([bs()],Bd.prototype,`title`,void 0),H([bs()],Bd.prototype,`message`,void 0),H([Cs(`#dialog`)],Bd.prototype,`dialog`,void 0),Bd=H([_s(`confirm-dialog`)],Bd);var Vd=class extends hs{constructor(...e){super(...e),this._markdown=``,this._token=localStorage.getItem(`token`)||``,this._gist_id=localStorage.getItem(`gist_id`)||``,this._filename_type=`month-group`,this._filename_rule=``,this._separator=!0}static{this.styles=[ws,fo`
			.layout {
				display: flex;
				flex-direction: column;
				gap: 20px;
				width: 100%;
				height: 100%;
				padding: 20px 40px;
				box-sizing: border-box;
			}

			.top {
				padding: 24px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 40px;
			}

			.settings {
				display: flex;
				gap: 40px;
				overflow: auto;

				.column {
					display: flex;
					flex-flow: column;
					gap: 16px;
				}

				fluent-text-input {
					width: 300px;
				}

				.custom-row {
					display: flex;
					align-items: center;
					gap: 16px;

					fluent-input {
						width: 200px;
					}
				}
			}

			.buttons {
				display: flex;
				gap: 8px;

				fluent-button {
					width: 160px;
					height: 80px;
					font-size: 20px;
					margin: 0 10px;
				}
			}

			.bottom {
				display: flex;
				flex-direction: row;
				flex: 1;
				gap: 40px;
				min-height: 0;
			}

			.pane {
				flex: 1;

				markdown-editor,
				markdown-preview {
					height: 100%;
				}
			}
		`]}_handleMarkdownChange(e){this._markdown=e.detail.value}_handleInputChange(e){let t=e.target;switch(t.name||t.getAttribute(`name`)){case`token`:this._token=t.value;break;case`gist-id`:this._gist_id=t.value;break;case`filename-type`:this._filename_type=t.value;break;case`filename-rule`:this._filename_rule=t.value;break;case`separator`:this._separator=t.checked;break}}_cancelEvent(e){e.stopPropagation()}async _handlePost(){try{localStorage.setItem(`token`,this._token),localStorage.setItem(`gist_id`,this._gist_id);let e=await Es(this._token),t=await Ds(this._gist_id);if(t.status!==200||e.status!==200)throw Error(`Gist の取得に失敗しました`,{cause:{gist:t,me:e}});if(e.body.login!==t.body.owner.login)throw Error(`Token のユーザーと Gist のユーザーが異なります "${e.body.login}" and "${t.body.owner.login}"`,{cause:{gist:t,me:e}});let n=Object.keys(t.body.files),r=ks(this._filename_type,this._filename_rule,n),i=t.body.files[r];if(i?.truncated)throw Error(`ファイルが省略されています ${r}`,{cause:i});if(!await Bd.openConfirm(Zo`
					<p>
						<b>${r}</b> の Gist を更新しますか？<br />
						セパレーター<b>${this._separator?`あり`:`なし`}</b><br />
						既存ファイル<b>${i?`あり`:`なし`}</b><br />
						最終更新: <b>${(0,Ts.default)(t.body.updated_at).format(`YYYY/MM/DD HH:mm:ss`)}</b>
					</p>
				`,`確認`))return;let a=As(n.includes(r)?i.content:``,this._markdown,this._separator),o=await Os(this._token,this._gist_id,r,a);if(o.status!==200)throw Error(`更新に失敗しました (${o.status})`,{cause:o});await Bd.openAlert(Zo`
					<p>更新しました</p>
					<p><a href="${t.body.html_url}" target="_blank">${t.body.html_url}</a></p>
				`,`成功`)}catch(e){let t=e;console.error(t,t.cause),await Bd.openAlert(Zo`
					<p>エラーが発生しました</p>
					<fluent-textarea appearance="filled-darker" .value=${t.message} block readonly></fluent-textarea>
				`,`エラー`)}}render(){return Zo`
			<div class="layout">
				<section class="container top">
					<div class="settings">
						<div class="column">
							<fluent-text-input name="token" value=${this._token} @input=${this._handleInputChange}>
								Token
							</fluent-text-input>
							<fluent-text-input name="gist-id" value=${this._gist_id} @input=${this._handleInputChange}>
								Gist ID
							</fluent-text-input>
						</div>
						<fluent-field label-position="above">
							<label slot="label">Filename type</label>
							<fluent-radio-group
								slot="input"
								orientation="vertical"
								name="filename-type"
								value=${this._filename_type}
								@change=${this._handleInputChange}
							>
								<fluent-field label-position="after">
									<label slot="label">YYYY-MM.md</label>
									<fluent-radio slot="input" name="filename-type" value="month-group"></fluent-radio>
								</fluent-field>
								<fluent-field label-position="after">
									<label slot="label">YYYY-MM-NNN.md</label>
									<fluent-radio slot="input" name="filename-type" value="month-single"></fluent-radio>
								</fluent-field>
								<div class="custom-row">
									<fluent-field label-position="after">
										<label slot="label">Custom</label>
										<fluent-radio slot="input" name="filename-type" value="custom"></fluent-radio>
									</fluent-field>
									<fluent-text-input
										id="filename-rule-custom"
										name="filename-rule"
										placeholder="{YYYY}-{MM}-title.md"
										.value=${this._filename_rule}
										@input=${this._handleInputChange}
										@change=${this._cancelEvent}
										?disabled=${this._filename_type!==`custom`}
									></fluent-text-input>
									<fluent-tooltip anchor="filename-rule-custom" positioning="below-start" delay="700">
										{YYYY} のような形式で dayjs のフォーマットが使えます<br />
										{NNN} は自動連番になります<br />
										N の数がパッディングする桁数です
									</fluent-tooltip>
								</div>
							</fluent-radio-group>
						</fluent-field>
						<div class="column">
							<fluent-field label-position="after">
								<label slot="label">Separator</label>
								<fluent-checkbox
									name="separator"
									.checked=${this._separator}
									@change=${this._handleInputChange}
									slot="input"
								></fluent-checkbox>
							</fluent-field>
						</div>
					</div>
					<div class="buttons">
						<fluent-button shape="circular" appearance="primary" size="large" @click=${this._handlePost}>
							POST
						</fluent-button>
					</div>
				</section>

				<div class="bottom">
					<div class="pane">
						<markdown-editor .value=${this._markdown} @change=${this._handleMarkdownChange}></markdown-editor>
					</div>
					<div class="pane">
						<markdown-preview .value=${this._markdown}></markdown-preview>
					</div>
				</div>
			</div>
		`}};H([xs()],Vd.prototype,`_markdown`,void 0),H([xs()],Vd.prototype,`_token`,void 0),H([xs()],Vd.prototype,`_gist_id`,void 0),H([xs()],Vd.prototype,`_filename_type`,void 0),H([xs()],Vd.prototype,`_filename_rule`,void 0),H([xs()],Vd.prototype,`_separator`,void 0),Vd=H([_s(`gist-append`)],Vd);var Hd=`adoptedStyleSheets`in document,Ud=`CSSScopeRule`in window,Wd=new Map,Gd=new Map,Kd=new Map,qd=new Map,Jd=new CSSStyleSheet;function Yd(e,t=document){if(!(!t||!Zd(t))){if(!Hd||t instanceof HTMLElement&&!t.shadowRoot&&!Ud){nf(e,t===document?document.documentElement:t);return}[document,document.documentElement,document.body].includes(t)?Qd(e):$d(e,t)}}function Xd(e){if(!Wd.has(e)){let t=[];for(let[n,r]of Object.entries(e))t.push(`--${n}:${r.toString()};`);Wd.set(e,t.join(``))}return Wd.get(e)}function Zd(e){return[document,document.documentElement].includes(e)||e instanceof HTMLElement&&!!e.closest(`body`)}function Qd(e){if(e===null){document.adoptedStyleSheets.includes(Jd)&&Jd.replaceSync(``);return}Jd.replaceSync(`
    html {
      ${Xd(e)}
    }
  `),document.adoptedStyleSheets.includes(Jd)||document.adoptedStyleSheets.push(Jd)}function $d(e,t){if(e===null){t.shadowRoot&&Kd.has(t)?Kd.get(t).replaceSync(``):(delete t.dataset.fluentTheme,of(t));return}t.shadowRoot?ef(t).replaceSync(`
      :host {
        ${Xd(e)}
      }
    `):(t.dataset.fluentTheme=tf(e),of(t))}function ef(e){if(!Kd.has(e)){let t=new CSSStyleSheet;Kd.set(e,t),e.shadowRoot?.adoptedStyleSheets.push(t)}return Kd.get(e)}function tf(e){if(!Gd.has(e)){let t=Rn(`fluent-theme-`),n=new CSSStyleSheet;Gd.set(e,t),n.replaceSync(`
      @scope ([data-fluent-theme="${t}"]) {
        :scope {
          ${Xd(e)}
        }
      }
    `),document.adoptedStyleSheets.push(n)}return Gd.get(e)}function nf(e,t){let n;if(e===null){if(!qd.has(t))return;n=qd.get(t)}else qd.set(t,e),n=e;for(let[r,i]of Object.entries(n))e===null?t.style.removeProperty(`--${r}`):t.style.setProperty(`--${r}`,i.toString())}var{userAgent:rf}=navigator,af=/\bAppleWebKit\/[\d+\.]+\b/.test(rf);function of(e){if(!af)return;let t=`visibility`,n=e.style.getPropertyValue(t);e.style.setProperty(t,`hidden`),ue.process(),e.style.setProperty(t,n)}var Y={2:`#050505`,4:`#0a0a0a`,6:`#0f0f0f`,8:`#141414`,10:`#1a1a1a`,12:`#1f1f1f`,14:`#242424`,16:`#292929`,18:`#2e2e2e`,20:`#333333`,22:`#383838`,24:`#3d3d3d`,26:`#424242`,28:`#474747`,30:`#4d4d4d`,32:`#525252`,34:`#575757`,36:`#5c5c5c`,38:`#616161`,40:`#666666`,42:`#6b6b6b`,44:`#707070`,46:`#757575`,48:`#7a7a7a`,50:`#808080`,52:`#858585`,54:`#8a8a8a`,56:`#8f8f8f`,58:`#949494`,60:`#999999`,62:`#9e9e9e`,64:`#a3a3a3`,66:`#a8a8a8`,68:`#adadad`,70:`#b3b3b3`,72:`#b8b8b8`,74:`#bdbdbd`,76:`#c2c2c2`,78:`#c7c7c7`,80:`#cccccc`,82:`#d1d1d1`,84:`#d6d6d6`,86:`#dbdbdb`,88:`#e0e0e0`,90:`#e6e6e6`,92:`#ebebeb`,94:`#f0f0f0`,96:`#f5f5f5`,98:`#fafafa`,99:`#fcfcfc`},sf={5:`rgba(255, 255, 255, 0.05)`,10:`rgba(255, 255, 255, 0.1)`,20:`rgba(255, 255, 255, 0.2)`,30:`rgba(255, 255, 255, 0.3)`,40:`rgba(255, 255, 255, 0.4)`,50:`rgba(255, 255, 255, 0.5)`,60:`rgba(255, 255, 255, 0.6)`,70:`rgba(255, 255, 255, 0.7)`,80:`rgba(255, 255, 255, 0.8)`,90:`rgba(255, 255, 255, 0.9)`},cf={5:`rgba(0, 0, 0, 0.05)`,10:`rgba(0, 0, 0, 0.1)`,20:`rgba(0, 0, 0, 0.2)`,30:`rgba(0, 0, 0, 0.3)`,40:`rgba(0, 0, 0, 0.4)`,50:`rgba(0, 0, 0, 0.5)`,60:`rgba(0, 0, 0, 0.6)`,70:`rgba(0, 0, 0, 0.7)`,80:`rgba(0, 0, 0, 0.8)`,90:`rgba(0, 0, 0, 0.9)`},X=`#ffffff`,lf=`#000000`,uf={shade50:`#130204`,shade40:`#230308`,shade30:`#420610`,shade20:`#590815`,shade10:`#690a19`,primary:`#750b1c`,tint10:`#861b2c`,tint20:`#962f3f`,tint30:`#ac4f5e`,tint40:`#d69ca5`,tint50:`#e9c7cd`,tint60:`#f9f0f2`},df={shade50:`#200205`,shade40:`#3b0509`,shade30:`#6e0811`,shade20:`#960b18`,shade10:`#b10e1c`,primary:`#c50f1f`,tint10:`#cc2635`,tint20:`#d33f4c`,tint30:`#dc626d`,tint40:`#eeacb2`,tint50:`#f6d1d5`,tint60:`#fdf3f4`},ff={shade50:`#210809`,shade40:`#3f1011`,shade30:`#751d1f`,shade20:`#9f282b`,shade10:`#bc2f32`,primary:`#d13438`,tint10:`#d7494c`,tint20:`#dc5e62`,tint30:`#e37d80`,tint40:`#f1bbbc`,tint50:`#f8dadb`,tint60:`#fdf6f6`},pf={shade50:`#230900`,shade40:`#411200`,shade30:`#7a2101`,shade20:`#a62d01`,shade10:`#c43501`,primary:`#da3b01`,tint10:`#de501c`,tint20:`#e36537`,tint30:`#e9835e`,tint40:`#f4bfab`,tint50:`#f9dcd1`,tint60:`#fdf6f3`},mf={shade50:`#200d03`,shade40:`#3d1805`,shade30:`#712d09`,shade20:`#9a3d0c`,shade10:`#b6480e`,primary:`#ca5010`,tint10:`#d06228`,tint20:`#d77440`,tint30:`#df8e64`,tint40:`#efc4ad`,tint50:`#f7dfd2`,tint60:`#fdf7f4`},hf={shade50:`#271002`,shade40:`#4a1e04`,shade30:`#8a3707`,shade20:`#bc4b09`,shade10:`#de590b`,primary:`#f7630c`,tint10:`#f87528`,tint20:`#f98845`,tint30:`#faa06b`,tint40:`#fdcfb4`,tint50:`#fee5d7`,tint60:`#fff9f5`},gf={shade50:`#291600`,shade40:`#4d2a00`,shade30:`#8f4e00`,shade20:`#c26a00`,shade10:`#e67e00`,primary:`#ff8c00`,tint10:`#ff9a1f`,tint20:`#ffa83d`,tint30:`#ffba66`,tint40:`#ffddb3`,tint50:`#ffedd6`,tint60:`#fffaf5`},_f={shade50:`#251a00`,shade40:`#463100`,shade30:`#835b00`,shade20:`#b27c00`,shade10:`#d39300`,primary:`#eaa300`,tint10:`#edad1c`,tint20:`#efb839`,tint30:`#f2c661`,tint40:`#f9e2ae`,tint50:`#fcefd3`,tint60:`#fefbf4`},vf={shade50:`#282400`,shade40:`#4c4400`,shade30:`#817400`,shade20:`#c0ad00`,shade10:`#e4cc00`,primary:`#fde300`,tint10:`#fde61e`,tint20:`#fdea3d`,tint30:`#feee66`,tint40:`#fef7b2`,tint50:`#fffad6`,tint60:`#fffef5`},yf={shade50:`#1f1900`,shade40:`#3a2f00`,shade30:`#6c5700`,shade20:`#937700`,shade10:`#ae8c00`,primary:`#c19c00`,tint10:`#c8a718`,tint20:`#d0b232`,tint30:`#dac157`,tint40:`#ecdfa5`,tint50:`#f5eece`,tint60:`#fdfbf2`},bf={shade50:`#181202`,shade40:`#2e2103`,shade30:`#553e06`,shade20:`#745408`,shade10:`#89640a`,primary:`#986f0b`,tint10:`#a47d1e`,tint20:`#b18c34`,tint30:`#c1a256`,tint40:`#e0cea2`,tint50:`#efe4cb`,tint60:`#fbf8f2`},xf={shade50:`#170e07`,shade40:`#2b1a0e`,shade30:`#50301a`,shade20:`#6c4123`,shade10:`#804d29`,primary:`#8e562e`,tint10:`#9c663f`,tint20:`#a97652`,tint30:`#bb8f6f`,tint40:`#ddc3b0`,tint50:`#edded3`,tint60:`#faf7f4`},Sf={shade50:`#0c1501`,shade40:`#162702`,shade30:`#294903`,shade20:`#376304`,shade10:`#427505`,primary:`#498205`,tint10:`#599116`,tint20:`#6ba02b`,tint30:`#85b44c`,tint40:`#bdd99b`,tint50:`#dbebc7`,tint60:`#f6faf0`},Cf={shade50:`#002111`,shade40:`#003d20`,shade30:`#00723b`,shade20:`#009b51`,shade10:`#00b85f`,primary:`#00cc6a`,tint10:`#19d279`,tint20:`#34d889`,tint30:`#5ae0a0`,tint40:`#a8f0cd`,tint50:`#cff7e4`,tint60:`#f3fdf8`},wf={shade50:`#031a02`,shade40:`#063004`,shade30:`#0b5a08`,shade20:`#0e7a0b`,shade10:`#11910d`,primary:`#13a10e`,tint10:`#27ac22`,tint20:`#3db838`,tint30:`#5ec75a`,tint40:`#a7e3a5`,tint50:`#cef0cd`,tint60:`#f2fbf2`},Tf={shade50:`#031403`,shade40:`#052505`,shade30:`#094509`,shade20:`#0c5e0c`,shade10:`#0e700e`,primary:`#107c10`,tint10:`#218c21`,tint20:`#359b35`,tint30:`#54b054`,tint40:`#9fd89f`,tint50:`#c9eac9`,tint60:`#f1faf1`},Ef={shade50:`#021102`,shade40:`#032003`,shade30:`#063b06`,shade20:`#085108`,shade10:`#0a5f0a`,primary:`#0b6a0b`,tint10:`#1a7c1a`,tint20:`#2d8e2d`,tint30:`#4da64d`,tint40:`#9ad29a`,tint50:`#c6e7c6`,tint60:`#f0f9f0`},Df={shade50:`#001d1f`,shade40:`#00373a`,shade30:`#00666d`,shade20:`#008b94`,shade10:`#00a5af`,primary:`#00b7c3`,tint10:`#18bfca`,tint20:`#32c8d1`,tint30:`#58d3db`,tint40:`#a6e9ed`,tint50:`#cef3f5`,tint60:`#f2fcfd`},Of={shade50:`#001516`,shade40:`#012728`,shade30:`#02494c`,shade20:`#026467`,shade10:`#037679`,primary:`#038387`,tint10:`#159195`,tint20:`#2aa0a4`,tint30:`#4cb4b7`,tint40:`#9bd9db`,tint50:`#c7ebec`,tint60:`#f0fafa`},kf={shade50:`#000f12`,shade40:`#001b22`,shade30:`#00333f`,shade20:`#004555`,shade10:`#005265`,primary:`#005b70`,tint10:`#0f6c81`,tint20:`#237d92`,tint30:`#4496a9`,tint40:`#94c8d4`,tint50:`#c3e1e8`,tint60:`#eff7f9`},Af={shade50:`#001322`,shade40:`#002440`,shade30:`#004377`,shade20:`#005ba1`,shade10:`#006cbf`,primary:`#0078d4`,tint10:`#1a86d9`,tint20:`#3595de`,tint30:`#5caae5`,tint40:`#a9d3f2`,tint50:`#d0e7f8`,tint60:`#f3f9fd`},jf={shade50:`#000c16`,shade40:`#00172a`,shade30:`#002c4e`,shade20:`#003b6a`,shade10:`#00467e`,primary:`#004e8c`,tint10:`#125e9a`,tint20:`#286fa8`,tint30:`#4a89ba`,tint40:`#9abfdc`,tint50:`#c7dced`,tint60:`#f0f6fa`},Mf={shade50:`#0d1126`,shade40:`#182047`,shade30:`#2c3c85`,shade20:`#3c51b4`,shade10:`#4760d5`,primary:`#4f6bed`,tint10:`#637cef`,tint20:`#778df1`,tint30:`#93a4f4`,tint40:`#c8d1fa`,tint50:`#e1e6fc`,tint60:`#f7f9fe`},Nf={shade50:`#00061d`,shade40:`#000c36`,shade30:`#001665`,shade20:`#001e89`,shade10:`#0023a2`,primary:`#0027b4`,tint10:`#173bbd`,tint20:`#3050c6`,tint30:`#546fd2`,tint40:`#a3b2e8`,tint50:`#ccd5f3`,tint60:`#f2f4fc`},Pf={shade50:`#120f25`,shade40:`#221d46`,shade30:`#3f3682`,shade20:`#5649b0`,shade10:`#6656d1`,primary:`#7160e8`,tint10:`#8172eb`,tint20:`#9184ee`,tint30:`#a79cf1`,tint40:`#d2ccf8`,tint50:`#e7e4fb`,tint60:`#f9f8fe`},Ff={shade50:`#0f0717`,shade40:`#1c0e2b`,shade30:`#341a51`,shade20:`#46236e`,shade10:`#532982`,primary:`#5c2e91`,tint10:`#6b3f9e`,tint20:`#7c52ab`,tint30:`#9470bd`,tint40:`#c6b1de`,tint50:`#e0d3ed`,tint60:`#f7f4fb`},If={shade50:`#160418`,shade40:`#29072e`,shade30:`#4c0d55`,shade20:`#671174`,shade10:`#7a1589`,primary:`#881798`,tint10:`#952aa4`,tint20:`#a33fb1`,tint30:`#b55fc1`,tint40:`#d9a7e0`,tint50:`#eaceef`,tint60:`#faf2fb`},Lf={shade50:`#1f091d`,shade40:`#3a1136`,shade30:`#6d2064`,shade20:`#932b88`,shade10:`#af33a1`,primary:`#c239b3`,tint10:`#c94cbc`,tint20:`#d161c4`,tint30:`#da7ed0`,tint40:`#edbbe7`,tint50:`#f5daf2`,tint60:`#fdf5fc`},Rf={shade50:`#1c0b1f`,shade40:`#35153a`,shade30:`#63276d`,shade20:`#863593`,shade10:`#9f3faf`,primary:`#b146c2`,tint10:`#ba58c9`,tint20:`#c36bd1`,tint30:`#cf87da`,tint40:`#e6bfed`,tint50:`#f2dcf5`,tint60:`#fcf6fd`},zf={shade50:`#24091b`,shade40:`#441232`,shade30:`#80215d`,shade20:`#ad2d7e`,shade10:`#cd3595`,primary:`#e43ba6`,tint10:`#e750b0`,tint20:`#ea66ba`,tint30:`#ef85c8`,tint40:`#f7c0e3`,tint50:`#fbddf0`,tint60:`#fef6fb`},Bf={shade50:`#1f0013`,shade40:`#390024`,shade30:`#6b0043`,shade20:`#91005a`,shade10:`#ac006b`,primary:`#bf0077`,tint10:`#c71885`,tint20:`#ce3293`,tint30:`#d957a8`,tint40:`#eca5d1`,tint50:`#f5cee6`,tint60:`#fcf2f9`},Vf={shade50:`#13000c`,shade40:`#240017`,shade30:`#43002b`,shade20:`#5a003b`,shade10:`#6b0045`,primary:`#77004d`,tint10:`#87105d`,tint20:`#98246f`,tint30:`#ad4589`,tint40:`#d696c0`,tint50:`#e9c4dc`,tint60:`#faf0f6`},Hf={shade50:`#141313`,shade40:`#252323`,shade30:`#444241`,shade20:`#5d5958`,shade10:`#6e6968`,primary:`#7a7574`,tint10:`#8a8584`,tint20:`#9a9594`,tint30:`#afabaa`,tint40:`#d7d4d4`,tint50:`#eae8e8`,tint60:`#faf9f9`},Uf={shade50:`#0f0e0e`,shade40:`#1c1b1a`,shade30:`#343231`,shade20:`#474443`,shade10:`#54514f`,primary:`#5d5a58`,tint10:`#706d6b`,tint20:`#84817e`,tint30:`#9e9b99`,tint40:`#cecccb`,tint50:`#e5e4e3`,tint60:`#f8f8f8`},Wf={shade50:`#111314`,shade40:`#1f2426`,shade30:`#3b4447`,shade20:`#505c60`,shade10:`#5f6d71`,primary:`#69797e`,tint10:`#79898d`,tint20:`#89989d`,tint30:`#a0adb2`,tint40:`#cdd6d8`,tint50:`#e4e9ea`,tint60:`#f8f9fa`},Gf={shade50:`#090a0b`,shade40:`#111315`,shade30:`#202427`,shade20:`#2b3135`,shade10:`#333a3f`,primary:`#394146`,tint10:`#4d565c`,tint20:`#626c72`,tint30:`#808a90`,tint40:`#bcc3c7`,tint50:`#dbdfe1`,tint60:`#f6f7f8`},Z={red:ff,green:Tf,darkOrange:pf,yellow:vf,berry:Lf,lightGreen:wf,marigold:_f},Kf={darkRed:uf,cranberry:df,pumpkin:mf,peach:gf,gold:yf,brass:bf,brown:xf,forest:Sf,seafoam:Cf,darkGreen:Ef,lightTeal:Df,teal:Of,steel:kf,blue:Af,royalBlue:jf,cornflower:Mf,navy:Nf,lavender:Pf,purple:Ff,grape:If,lilac:Rf,pink:zf,magenta:Bf,plum:Vf,beige:Hf,mink:Uf,platinum:Wf,anchor:Gf},Q={cranberry:df,green:Tf,orange:hf},qf=[`red`,`green`,`darkOrange`,`yellow`,`berry`,`lightGreen`,`marigold`],Jf=`darkRed.cranberry.pumpkin.peach.gold.brass.brown.forest.seafoam.darkGreen.lightTeal.teal.steel.blue.royalBlue.cornflower.navy.lavender.purple.grape.lilac.pink.magenta.plum.beige.mink.platinum.anchor`.split(`.`),Yf={success:`green`,warning:`orange`,danger:`cranberry`},Xf=qf.reduce((e,t)=>{let n=t.slice(0,1).toUpperCase()+t.slice(1),r={[`colorPalette${n}Background1`]:Z[t].tint60,[`colorPalette${n}Background2`]:Z[t].tint40,[`colorPalette${n}Background3`]:Z[t].primary,[`colorPalette${n}Foreground1`]:Z[t].shade10,[`colorPalette${n}Foreground2`]:Z[t].shade30,[`colorPalette${n}Foreground3`]:Z[t].primary,[`colorPalette${n}BorderActive`]:Z[t].primary,[`colorPalette${n}Border1`]:Z[t].tint40,[`colorPalette${n}Border2`]:Z[t].primary};return Object.assign(e,r)},{});Xf.colorPaletteYellowForeground1=Z.yellow.shade30,Xf.colorPaletteRedForegroundInverted=Z.red.tint20,Xf.colorPaletteGreenForegroundInverted=Z.green.tint20,Xf.colorPaletteYellowForegroundInverted=Z.yellow.tint40;var Zf=Jf.reduce((e,t)=>{let n=t.slice(0,1).toUpperCase()+t.slice(1),r={[`colorPalette${n}Background2`]:Kf[t].tint40,[`colorPalette${n}Foreground2`]:Kf[t].shade30,[`colorPalette${n}BorderActive`]:Kf[t].primary};return Object.assign(e,r)},{}),Qf={...Xf,...Zf},$f=Object.entries(Yf).reduce((e,[t,n])=>{let r=t.slice(0,1).toUpperCase()+t.slice(1),i={[`colorStatus${r}Background1`]:Q[n].tint60,[`colorStatus${r}Background2`]:Q[n].tint40,[`colorStatus${r}Background3`]:Q[n].primary,[`colorStatus${r}Foreground1`]:Q[n].shade10,[`colorStatus${r}Foreground2`]:Q[n].shade30,[`colorStatus${r}Foreground3`]:Q[n].primary,[`colorStatus${r}ForegroundInverted`]:Q[n].tint30,[`colorStatus${r}BorderActive`]:Q[n].primary,[`colorStatus${r}Border1`]:Q[n].tint40,[`colorStatus${r}Border2`]:Q[n].primary};return Object.assign(e,i)},{});$f.colorStatusDangerBackground3Hover=Q[Yf.danger].shade10,$f.colorStatusDangerBackground3Pressed=Q[Yf.danger].shade20,$f.colorStatusWarningForeground1=Q[Yf.warning].shade20,$f.colorStatusWarningForeground3=Q[Yf.warning].shade20,$f.colorStatusWarningBorder2=Q[Yf.warning].shade20;var ep=e=>({colorNeutralForeground1:Y[14],colorNeutralForeground1Hover:Y[14],colorNeutralForeground1Pressed:Y[14],colorNeutralForeground1Selected:Y[14],colorNeutralForeground2:Y[26],colorNeutralForeground2Hover:Y[14],colorNeutralForeground2Pressed:Y[14],colorNeutralForeground2Selected:Y[14],colorNeutralForeground2BrandHover:e[80],colorNeutralForeground2BrandPressed:e[70],colorNeutralForeground2BrandSelected:e[80],colorNeutralForeground3:Y[38],colorNeutralForeground3Hover:Y[26],colorNeutralForeground3Pressed:Y[26],colorNeutralForeground3Selected:Y[26],colorNeutralForeground3BrandHover:e[80],colorNeutralForeground3BrandPressed:e[70],colorNeutralForeground3BrandSelected:e[80],colorNeutralForeground4:Y[44],colorNeutralForeground5:Y[38],colorNeutralForeground5Hover:Y[14],colorNeutralForeground5Pressed:Y[14],colorNeutralForeground5Selected:Y[14],colorNeutralForegroundDisabled:Y[74],colorNeutralForegroundInvertedDisabled:sf[40],colorBrandForegroundLink:e[70],colorBrandForegroundLinkHover:e[60],colorBrandForegroundLinkPressed:e[40],colorBrandForegroundLinkSelected:e[70],colorNeutralForeground2Link:Y[26],colorNeutralForeground2LinkHover:Y[14],colorNeutralForeground2LinkPressed:Y[14],colorNeutralForeground2LinkSelected:Y[14],colorCompoundBrandForeground1:e[80],colorCompoundBrandForeground1Hover:e[70],colorCompoundBrandForeground1Pressed:e[60],colorBrandForeground1:e[80],colorBrandForeground2:e[70],colorBrandForeground2Hover:e[60],colorBrandForeground2Pressed:e[30],colorNeutralForeground1Static:Y[14],colorNeutralForegroundStaticInverted:X,colorNeutralForegroundInverted:X,colorNeutralForegroundInvertedHover:X,colorNeutralForegroundInvertedPressed:X,colorNeutralForegroundInvertedSelected:X,colorNeutralForegroundInverted2:X,colorNeutralForegroundOnBrand:X,colorNeutralForegroundInvertedLink:X,colorNeutralForegroundInvertedLinkHover:X,colorNeutralForegroundInvertedLinkPressed:X,colorNeutralForegroundInvertedLinkSelected:X,colorBrandForegroundInverted:e[100],colorBrandForegroundInvertedHover:e[110],colorBrandForegroundInvertedPressed:e[100],colorBrandForegroundOnLight:e[80],colorBrandForegroundOnLightHover:e[70],colorBrandForegroundOnLightPressed:e[50],colorBrandForegroundOnLightSelected:e[60],colorNeutralBackground1:X,colorNeutralBackground1Hover:Y[96],colorNeutralBackground1Pressed:Y[88],colorNeutralBackground1Selected:Y[92],colorNeutralBackground2:Y[98],colorNeutralBackground2Hover:Y[94],colorNeutralBackground2Pressed:Y[86],colorNeutralBackground2Selected:Y[90],colorNeutralBackground3:Y[96],colorNeutralBackground3Hover:Y[92],colorNeutralBackground3Pressed:Y[84],colorNeutralBackground3Selected:Y[88],colorNeutralBackground4:Y[94],colorNeutralBackground4Hover:Y[98],colorNeutralBackground4Pressed:Y[96],colorNeutralBackground4Selected:X,colorNeutralBackground5:Y[92],colorNeutralBackground5Hover:Y[96],colorNeutralBackground5Pressed:Y[94],colorNeutralBackground5Selected:Y[98],colorNeutralBackground6:Y[90],colorNeutralBackground7:`#00000000`,colorNeutralBackground7Hover:Y[92],colorNeutralBackground7Pressed:Y[84],colorNeutralBackground7Selected:`#00000000`,colorNeutralBackground8:Y[99],colorNeutralBackgroundInverted:Y[16],colorNeutralBackgroundInvertedHover:Y[24],colorNeutralBackgroundInvertedPressed:Y[12],colorNeutralBackgroundInvertedSelected:Y[22],colorNeutralBackgroundStatic:Y[20],colorNeutralBackgroundAlpha:sf[50],colorNeutralBackgroundAlpha2:sf[80],colorSubtleBackground:`transparent`,colorSubtleBackgroundHover:Y[96],colorSubtleBackgroundPressed:Y[88],colorSubtleBackgroundSelected:Y[92],colorSubtleBackgroundLightAlphaHover:sf[70],colorSubtleBackgroundLightAlphaPressed:sf[50],colorSubtleBackgroundLightAlphaSelected:`transparent`,colorSubtleBackgroundInverted:`transparent`,colorSubtleBackgroundInvertedHover:cf[10],colorSubtleBackgroundInvertedPressed:cf[30],colorSubtleBackgroundInvertedSelected:cf[20],colorTransparentBackground:`transparent`,colorTransparentBackgroundHover:`transparent`,colorTransparentBackgroundPressed:`transparent`,colorTransparentBackgroundSelected:`transparent`,colorNeutralBackgroundDisabled:Y[94],colorNeutralBackgroundDisabled2:X,colorNeutralBackgroundInvertedDisabled:sf[10],colorNeutralStencil1:Y[90],colorNeutralStencil2:Y[98],colorNeutralStencil1Alpha:cf[10],colorNeutralStencil2Alpha:cf[5],colorBackgroundOverlay:cf[40],colorScrollbarOverlay:cf[50],colorBrandBackground:e[80],colorBrandBackgroundHover:e[70],colorBrandBackgroundPressed:e[40],colorBrandBackgroundSelected:e[60],colorCompoundBrandBackground:e[80],colorCompoundBrandBackgroundHover:e[70],colorCompoundBrandBackgroundPressed:e[60],colorBrandBackgroundStatic:e[80],colorBrandBackground2:e[160],colorBrandBackground2Hover:e[150],colorBrandBackground2Pressed:e[130],colorBrandBackground3Static:e[60],colorBrandBackground4Static:e[40],colorBrandBackgroundInverted:X,colorBrandBackgroundInvertedHover:e[160],colorBrandBackgroundInvertedPressed:e[140],colorBrandBackgroundInvertedSelected:e[150],colorNeutralCardBackground:Y[98],colorNeutralCardBackgroundHover:X,colorNeutralCardBackgroundPressed:Y[96],colorNeutralCardBackgroundSelected:Y[92],colorNeutralCardBackgroundDisabled:Y[94],colorNeutralStrokeAccessible:Y[38],colorNeutralStrokeAccessibleHover:Y[34],colorNeutralStrokeAccessiblePressed:Y[30],colorNeutralStrokeAccessibleSelected:e[80],colorNeutralStroke1:Y[82],colorNeutralStroke1Hover:Y[78],colorNeutralStroke1Pressed:Y[70],colorNeutralStroke1Selected:Y[74],colorNeutralStroke2:Y[88],colorNeutralStroke3:Y[94],colorNeutralStroke4:Y[92],colorNeutralStroke4Hover:Y[88],colorNeutralStroke4Pressed:Y[84],colorNeutralStroke4Selected:Y[92],colorNeutralStrokeSubtle:Y[88],colorNeutralStrokeOnBrand:X,colorNeutralStrokeOnBrand2:X,colorNeutralStrokeOnBrand2Hover:X,colorNeutralStrokeOnBrand2Pressed:X,colorNeutralStrokeOnBrand2Selected:X,colorBrandStroke1:e[80],colorBrandStroke2:e[140],colorBrandStroke2Hover:e[120],colorBrandStroke2Pressed:e[80],colorBrandStroke2Contrast:e[140],colorCompoundBrandStroke:e[80],colorCompoundBrandStrokeHover:e[70],colorCompoundBrandStrokePressed:e[60],colorNeutralStrokeDisabled:Y[88],colorNeutralStrokeDisabled2:Y[92],colorNeutralStrokeInvertedDisabled:sf[40],colorTransparentStroke:`transparent`,colorTransparentStrokeInteractive:`transparent`,colorTransparentStrokeDisabled:`transparent`,colorNeutralStrokeAlpha:cf[5],colorNeutralStrokeAlpha2:sf[20],colorStrokeFocus1:X,colorStrokeFocus2:lf,colorNeutralShadowAmbient:`rgba(0,0,0,0.12)`,colorNeutralShadowKey:`rgba(0,0,0,0.14)`,colorNeutralShadowAmbientLighter:`rgba(0,0,0,0.06)`,colorNeutralShadowKeyLighter:`rgba(0,0,0,0.07)`,colorNeutralShadowAmbientDarker:`rgba(0,0,0,0.20)`,colorNeutralShadowKeyDarker:`rgba(0,0,0,0.24)`,colorBrandShadowAmbient:`rgba(0,0,0,0.30)`,colorBrandShadowKey:`rgba(0,0,0,0.25)`}),tp={borderRadiusNone:`0`,borderRadiusSmall:`2px`,borderRadiusMedium:`4px`,borderRadiusLarge:`6px`,borderRadiusXLarge:`8px`,borderRadius2XLarge:`12px`,borderRadius3XLarge:`16px`,borderRadius4XLarge:`24px`,borderRadius5XLarge:`32px`,borderRadius6XLarge:`40px`,borderRadiusCircular:`10000px`},np={curveAccelerateMax:`cubic-bezier(0.9,0.1,1,0.2)`,curveAccelerateMid:`cubic-bezier(1,0,1,1)`,curveAccelerateMin:`cubic-bezier(0.8,0,0.78,1)`,curveDecelerateMax:`cubic-bezier(0.1,0.9,0.2,1)`,curveDecelerateMid:`cubic-bezier(0,0,0,1)`,curveDecelerateMin:`cubic-bezier(0.33,0,0.1,1)`,curveEasyEaseMax:`cubic-bezier(0.8,0,0.2,1)`,curveEasyEase:`cubic-bezier(0.33,0,0.67,1)`,curveLinear:`cubic-bezier(0,0,1,1)`},rp={durationUltraFast:`50ms`,durationFaster:`100ms`,durationFast:`150ms`,durationNormal:`200ms`,durationGentle:`250ms`,durationSlow:`300ms`,durationSlower:`400ms`,durationUltraSlow:`500ms`},ip={fontSizeBase100:`10px`,fontSizeBase200:`12px`,fontSizeBase300:`14px`,fontSizeBase400:`16px`,fontSizeBase500:`20px`,fontSizeBase600:`24px`,fontSizeHero700:`28px`,fontSizeHero800:`32px`,fontSizeHero900:`40px`,fontSizeHero1000:`68px`},ap={lineHeightBase100:`14px`,lineHeightBase200:`16px`,lineHeightBase300:`20px`,lineHeightBase400:`22px`,lineHeightBase500:`28px`,lineHeightBase600:`32px`,lineHeightHero700:`36px`,lineHeightHero800:`40px`,lineHeightHero900:`52px`,lineHeightHero1000:`92px`},op={fontWeightRegular:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700},sp={fontFamilyBase:`'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif`,fontFamilyMonospace:`Consolas, 'Courier New', Courier, monospace`,fontFamilyNumeric:`Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif`},$={none:`0`,xxs:`2px`,xs:`4px`,sNudge:`6px`,s:`8px`,mNudge:`10px`,m:`12px`,l:`16px`,xl:`20px`,xxl:`24px`,xxxl:`32px`},cp={spacingHorizontalNone:$.none,spacingHorizontalXXS:$.xxs,spacingHorizontalXS:$.xs,spacingHorizontalSNudge:$.sNudge,spacingHorizontalS:$.s,spacingHorizontalMNudge:$.mNudge,spacingHorizontalM:$.m,spacingHorizontalL:$.l,spacingHorizontalXL:$.xl,spacingHorizontalXXL:$.xxl,spacingHorizontalXXXL:$.xxxl},lp={spacingVerticalNone:$.none,spacingVerticalXXS:$.xxs,spacingVerticalXS:$.xs,spacingVerticalSNudge:$.sNudge,spacingVerticalS:$.s,spacingVerticalMNudge:$.mNudge,spacingVerticalM:$.m,spacingVerticalL:$.l,spacingVerticalXL:$.xl,spacingVerticalXXL:$.xxl,spacingVerticalXXXL:$.xxxl},up={strokeWidthThin:`1px`,strokeWidthThick:`2px`,strokeWidthThicker:`3px`,strokeWidthThickest:`4px`};function dp(e,t,n=``){return{[`shadow2${n}`]:`0 0 2px ${e}, 0 1px 2px ${t}`,[`shadow4${n}`]:`0 0 2px ${e}, 0 2px 4px ${t}`,[`shadow8${n}`]:`0 0 2px ${e}, 0 4px 8px ${t}`,[`shadow16${n}`]:`0 0 2px ${e}, 0 8px 16px ${t}`,[`shadow28${n}`]:`0 0 8px ${e}, 0 14px 28px ${t}`,[`shadow64${n}`]:`0 0 8px ${e}, 0 32px 64px ${t}`}}Yd((e=>{let t=ep(e);return{...tp,...ip,...ap,...sp,...op,...up,...cp,...lp,...rp,...np,...t,...Qf,...$f,...dp(t.colorNeutralShadowAmbient,t.colorNeutralShadowKey),...dp(t.colorBrandShadowAmbient,t.colorBrandShadowKey,`Brand`)}})({10:`#061724`,20:`#082338`,30:`#0a2e4a`,40:`#0c3b5e`,50:`#0e4775`,60:`#0f548c`,70:`#115ea3`,80:`#0f6cbd`,90:`#2886de`,100:`#479ef5`,110:`#62abf5`,120:`#77b7f7`,130:`#96c6fa`,140:`#b4d6fa`,150:`#cfe4fa`,160:`#ebf3fc`}));