function jp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yc={exports:{}},pl={},wc={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),$p=Symbol.for("react.portal"),Op=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),Vp=Symbol.for("react.lazy"),Hs=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,kc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||xc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Qn.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||xc}var Ma=za.prototype=new Ec;Ma.constructor=za;Sc(Ma,Qn.prototype);Ma.isPureReactComponent=!0;var Qs=Array.isArray,Cc=Object.prototype.hasOwnProperty,Fa={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Cc.call(t,r)&&!_c.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Qr,type:e,key:l,ref:i,props:o,_owner:Fa.current}}function Hp(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function Qp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ys=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qp(""+e.key):t.toString(36)}function Eo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Qr:case $p:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ti(i,0):r,Qs(o)?(n="",e!=null&&(n=e.replace(Ys,"$&/")+"/"),Eo(o,t,n,"",function(u){return u})):o!=null&&(Da(o)&&(o=Hp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ys,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Qs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ti(l,a);i+=Eo(l,t,n,s,o)}else if(s=Wp(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ti(l,a++),i+=Eo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function eo(e,t,n){if(e==null)return e;var r=[],o=0;return Eo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Co={transition:null},Xp={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Fa};z.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Qn;z.Fragment=Op;z.Profiler=Mp;z.PureComponent=za;z.StrictMode=zp;z.Suspense=Up;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cc.call(t,s)&&!_c.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:e.type,key:o,ref:l,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:Dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};z.createElement=Nc;z.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Ap,render:e}};z.isValidElement=Da;z.lazy=function(e){return{$$typeof:Vp,_payload:{_status:-1,_result:e},_init:Yp}};z.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return Pe.current.useCallback(e,t)};z.useContext=function(e){return Pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};z.useEffect=function(e,t){return Pe.current.useEffect(e,t)};z.useId=function(){return Pe.current.useId()};z.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Pe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};z.useRef=function(e){return Pe.current.useRef(e)};z.useState=function(e){return Pe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Pe.current.useTransition()};z.version="18.2.0";wc.exports=z;var S=wc.exports;const H=Ip(S),ji=jp({__proto__:null,default:H},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=S,Gp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),Zp=Object.prototype.hasOwnProperty,bp=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qp={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Zp.call(t,r)&&!qp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gp,type:e,key:l,ref:i,props:o,_owner:bp.current}}pl.Fragment=Jp;pl.jsx=Pc;pl.jsxs=Pc;yc.exports=pl;var E=yc.exports,Tc={exports:{}},He={},Rc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,I){var O=R.length;R.push(I);e:for(;0<O;){var A=O-1>>>1,U=R[A];if(0<o(U,I))R[A]=I,R[O]=U,O=A;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],O=R.pop();if(O!==I){R[0]=O;e:for(var A=0,U=R.length,de=U>>>1;A<de;){var le=2*(A+1)-1,Le=R[le],Ee=le+1,ut=R[Ee];if(0>o(Le,O))Ee<U&&0>o(ut,Le)?(R[A]=ut,R[Ee]=O,A=Ee):(R[A]=Le,R[le]=O,A=le);else if(Ee<U&&0>o(ut,O))R[A]=ut,R[Ee]=O,A=Ee;else break e}}return I}function o(R,I){var O=R.sortIndex-I.sortIndex;return O!==0?O:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],p=1,m=null,h=3,w=!1,v=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=R)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function y(R){if(g=!1,f(R),!v)if(n(s)!==null)v=!0,Rt(C);else{var I=n(u);I!==null&&Fe(y,I.startTime-R)}}function C(R,I){v=!1,g&&(g=!1,d(N),N=-1),w=!0;var O=h;try{for(f(I),m=n(s);m!==null&&(!(m.expirationTime>I)||R&&!ee());){var A=m.callback;if(typeof A=="function"){m.callback=null,h=m.priorityLevel;var U=A(m.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?m.callback=U:m===n(s)&&r(s),f(I)}else r(s);m=n(s)}if(m!==null)var de=!0;else{var le=n(u);le!==null&&Fe(y,le.startTime-I),de=!1}return de}finally{m=null,h=O,w=!1}}var T=!1,k=null,N=-1,$=5,j=-1;function ee(){return!(e.unstable_now()-j<$)}function Re(){if(k!==null){var R=e.unstable_now();j=R;var I=!0;try{I=k(!0,R)}finally{I?Xe():(T=!1,k=null)}}else T=!1}var Xe;if(typeof c=="function")Xe=function(){c(Re)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Tt=tt.port2;tt.port1.onmessage=Re,Xe=function(){Tt.postMessage(null)}}else Xe=function(){x(Re,0)};function Rt(R){k=R,T||(T=!0,Xe())}function Fe(R,I){N=x(function(){R(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Rt(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var O=h;h=I;try{return R()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return I()}finally{h=O}},e.unstable_scheduleCallback=function(R,I,O){var A=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?A+O:A):O=A,R){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=O+U,R={id:p++,callback:I,priorityLevel:R,startTime:O,expirationTime:U,sortIndex:-1},O>A?(R.sortIndex=O,t(u,R),n(s)===null&&R===n(u)&&(g?(d(N),N=-1):g=!0,Fe(y,O-A))):(R.sortIndex=U,t(s,R),v||w||(v=!0,Rt(C))),R},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(R){var I=h;return function(){var O=h;h=I;try{return R.apply(this,arguments)}finally{h=O}}}})(Lc);Rc.exports=Lc;var e0=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=S,We=e0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,wr={};function pn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(wr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xs={},Ks={};function n0(e){return Ii.call(Ks,e)?!0:Ii.call(Xs,e)?!1:t0.test(e)?Ks[e]=!0:(Xs[e]=!0,!1)}function r0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function o0(e,t,n,r){if(t===null||typeof t>"u"||r0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ua);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ba(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(o0(t,n,o,r)&&(n=null),r||o===null?n0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),zi=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,ni;function lr(e){if(ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ni=t&&t[1]||""}return`
`+ni+e}var ri=!1;function oi(e,t){if(!e||ri)return"";ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function l0(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=oi(e.type,!1),e;case 11:return e=oi(e.type.render,!1),e;case 1:return e=oi(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case $i:return"Profiler";case Va:return"StrictMode";case Oi:return"Suspense";case zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case Wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function i0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function a0(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=a0(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dc(e,t){t=t.checked,t!=null&&Ba(e,"checked",t,!1)}function Di(e,t){Dc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ir(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Ac(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,Bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var u0=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vi(e,t){if(t){if(u0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,jn=null,In=null;function eu(e){if(e=Kr(e)){if(typeof Qi!="function")throw Error(_(280));var t=e.stateNode;t&&(t=yl(t),Qi(e.stateNode,e.type,t))}}function Hc(e){jn?In?In.push(e):In=[e]:jn=e}function Qc(){if(jn){var e=jn,t=In;if(In=jn=null,eu(e),t)for(e=0;e<t.length;e++)eu(t[e])}}function Yc(e,t){return e(t)}function Xc(){}var li=!1;function Kc(e,t,n){if(li)return e(t,n);li=!0;try{return Yc(e,t,n)}finally{li=!1,(jn!==null||In!==null)&&(Xc(),Qc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Yi=!1;if(Et)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Yi=!1}function c0(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var cr=!1,Uo=null,Bo=!1,Xi=null,f0={onError:function(e){cr=!0,Uo=e}};function d0(e,t,n,r,o,l,i,a,s){cr=!1,Uo=null,c0.apply(f0,arguments)}function p0(e,t,n,r,o,l,i,a,s){if(d0.apply(this,arguments),cr){if(cr){var u=Uo;cr=!1,Uo=null}else throw Error(_(198));Bo||(Bo=!0,Xi=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tu(e){if(mn(e)!==e)throw Error(_(188))}function m0(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return tu(o),e;if(l===r)return tu(o),t;l=l.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Jc(e){return e=m0(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var bc=We.unstable_scheduleCallback,nu=We.unstable_cancelCallback,h0=We.unstable_shouldYield,g0=We.unstable_requestPaint,te=We.unstable_now,v0=We.unstable_getCurrentPriorityLevel,Ya=We.unstable_ImmediatePriority,qc=We.unstable_UserBlockingPriority,Vo=We.unstable_NormalPriority,y0=We.unstable_LowPriority,ef=We.unstable_IdlePriority,ml=null,ht=null;function w0(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:k0,x0=Math.log,S0=Math.LN2;function k0(e){return e>>>=0,e===0?32:31-(x0(e)/S0|0)|0}var oo=64,lo=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=ar(a):(l&=i,l!==0&&(r=ar(l)))}else i=n&~o,i!==0?r=ar(i):l!==0&&(r=ar(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),o=1<<n,r|=e[n],t&=~o;return r}function E0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-it(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=E0(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function _0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rf,Ka,of,lf,af,Gi=!1,io=[],At=null,Ut=null,Bt=null,kr=new Map,Er=new Map,$t=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function bn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function P0(e,t,n,r,o){switch(t){case"focusin":return At=bn(At,e,t,n,r,o),!0;case"dragenter":return Ut=bn(Ut,e,t,n,r,o),!0;case"mouseover":return Bt=bn(Bt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return kr.set(l,bn(kr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Er.set(l,bn(Er.get(l)||null,e,t,n,r,o)),!0}return!1}function sf(e){var t=tn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gc(n),t!==null){e.blockedOn=t,af(e.priority,function(){of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=Kr(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function ou(e,t,n){_o(e)&&n.delete(t)}function T0(){Gi=!1,At!==null&&_o(At)&&(At=null),Ut!==null&&_o(Ut)&&(Ut=null),Bt!==null&&_o(Bt)&&(Bt=null),kr.forEach(ou),Er.forEach(ou)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,T0)))}function Cr(e){function t(o){return qn(o,e)}if(0<io.length){qn(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&qn(At,e),Ut!==null&&qn(Ut,e),Bt!==null&&qn(Bt,e),kr.forEach(t),Er.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)sf(n),n.blockedOn===null&&$t.shift()}var $n=Pt.ReactCurrentBatchConfig,Ho=!0;function R0(e,t,n,r){var o=B,l=$n.transition;$n.transition=null;try{B=1,Ga(e,t,n,r)}finally{B=o,$n.transition=l}}function L0(e,t,n,r){var o=B,l=$n.transition;$n.transition=null;try{B=4,Ga(e,t,n,r)}finally{B=o,$n.transition=l}}function Ga(e,t,n,r){if(Ho){var o=Ji(e,t,n,r);if(o===null)gi(e,t,r,Qo,n),ru(e,r);else if(P0(o,e,t,n,r))r.stopPropagation();else if(ru(e,r),t&4&&-1<N0.indexOf(e)){for(;o!==null;){var l=Kr(o);if(l!==null&&rf(l),l=Ji(e,t,n,r),l===null&&gi(e,t,r,Qo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else gi(e,t,r,null,n)}}var Qo=null;function Ji(e,t,n,r){if(Qo=null,e=Qa(r),e=tn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v0()){case Ya:return 1;case qc:return 4;case Vo:case y0:return 16;case ef:return 536870912;default:return 16}default:return 16}}var zt=null,Ja=null,No=null;function cf(){if(No)return No;var e,t=Ja,n=t.length,r,o="value"in zt?zt.value:zt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function lu(){return!1}function Qe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ao:lu,this.isPropagationStopped=lu,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=Qe(Yn),Xr=b({},Yn,{view:0,detail:0}),j0=Qe(Xr),ai,si,er,hl=b({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(ai=e.screenX-er.screenX,si=e.screenY-er.screenY):si=ai=0,er=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:si}}),iu=Qe(hl),I0=b({},hl,{dataTransfer:0}),$0=Qe(I0),O0=b({},Xr,{relatedTarget:0}),ui=Qe(O0),z0=b({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Qe(z0),F0=b({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=Qe(F0),A0=b({},Yn,{data:0}),au=Qe(A0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function ba(){return W0}var H0=b({},Xr,{key:function(e){if(e.key){var t=U0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=Qe(H0),Y0=b({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Qe(Y0),X0=b({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),K0=Qe(X0),G0=b({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Qe(G0),Z0=b({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=Qe(Z0),q0=[9,13,27,32],qa=Et&&"CompositionEvent"in window,fr=null;Et&&"documentMode"in document&&(fr=document.documentMode);var em=Et&&"TextEvent"in window&&!fr,ff=Et&&(!qa||fr&&8<fr&&11>=fr),uu=" ",cu=!1;function df(e,t){switch(e){case"keyup":return q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function tm(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(cu=!0,uu);case"textInput":return e=t.data,e===uu&&cu?null:e;default:return null}}function nm(e,t){if(xn)return e==="compositionend"||!qa&&df(e,t)?(e=cf(),No=Ja=zt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rm[e.type]:t==="textarea"}function mf(e,t,n,r){Hc(r),t=Yo(t,"onChange"),0<t.length&&(n=new Za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,_r=null;function om(e){_f(e,0)}function gl(e){var t=En(e);if(Fc(t))return e}function lm(e,t){if(e==="change")return t}var hf=!1;if(Et){var ci;if(Et){var fi="oninput"in document;if(!fi){var du=document.createElement("div");du.setAttribute("oninput","return;"),fi=typeof du.oninput=="function"}ci=fi}else ci=!1;hf=ci&&(!document.documentMode||9<document.documentMode)}function pu(){dr&&(dr.detachEvent("onpropertychange",gf),_r=dr=null)}function gf(e){if(e.propertyName==="value"&&gl(_r)){var t=[];mf(t,_r,e,Qa(e)),Kc(om,t)}}function im(e,t,n){e==="focusin"?(pu(),dr=t,_r=n,dr.attachEvent("onpropertychange",gf)):e==="focusout"&&pu()}function am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(_r)}function sm(e,t){if(e==="click")return gl(t)}function um(e,t){if(e==="input"||e==="change")return gl(t)}function cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:cm;function Nr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ii.call(t,o)||!st(e[o],t[o]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,t){var n=mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mu(n)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fm(e){var t=yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vf(n.ownerDocument.documentElement,n)){if(r!==null&&es(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=hu(n,l);var i=hu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dm=Et&&"documentMode"in document&&11>=document.documentMode,Sn=null,Zi=null,pr=null,bi=!1;function gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bi||Sn==null||Sn!==Ao(r)||(r=Sn,"selectionStart"in r&&es(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Nr(pr,r)||(pr=r,r=Yo(Zi,"onSelect"),0<r.length&&(t=new Za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},di={},wf={};Et&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function vl(e){if(di[e])return di[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return di[e]=t[n];return e}var xf=vl("animationend"),Sf=vl("animationiteration"),kf=vl("animationstart"),Ef=vl("transitionend"),Cf=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Cf.set(e,t),pn(t,[e])}for(var pi=0;pi<vu.length;pi++){var mi=vu[pi],pm=mi.toLowerCase(),mm=mi[0].toUpperCase()+mi.slice(1);Jt(pm,"on"+mm)}Jt(xf,"onAnimationEnd");Jt(Sf,"onAnimationIteration");Jt(kf,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Ef,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p0(r,t,void 0,e),e.currentTarget=null}function _f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;yu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;yu(o,a,u),l=s}}}if(Bo)throw e=Xi,Bo=!1,Xi=null,e}function X(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(Nf(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),Nf(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[uo]){e[uo]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(hm.has(n)||hi(n,!1,e),hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,hi("selectionchange",!1,t))}}function Nf(e,t,n,r){switch(uf(t)){case 1:var o=R0;break;case 4:o=L0;break;default:o=Ga}n=o.bind(null,t,n,e),o=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=tn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Kc(function(){var u=l,p=Qa(n),m=[];e:{var h=Cf.get(e);if(h!==void 0){var w=Za,v=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":w=Q0;break;case"focusin":v="focus",w=ui;break;case"focusout":v="blur",w=ui;break;case"beforeblur":case"afterblur":w=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=K0;break;case xf:case Sf:case kf:w=M0;break;case Ef:w=J0;break;case"scroll":w=j0;break;case"wheel":w=b0;break;case"copy":case"cut":case"paste":w=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=su}var g=(t&4)!==0,x=!g&&e==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Sr(c,d),y!=null&&g.push(Tr(c,y,f)))),x)break;c=c.return}0<g.length&&(h=new w(h,v,null,n,p),m.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Hi&&(v=n.relatedTarget||n.fromElement)&&(tn(v)||v[Ct]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?tn(v):null,v!==null&&(x=mn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(g=iu,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=su,y="onPointerLeave",d="onPointerEnter",c="pointer"),x=w==null?h:En(w),f=v==null?h:En(v),h=new g(y,c+"leave",w,n,p),h.target=x,h.relatedTarget=f,y=null,tn(p)===u&&(g=new g(d,c+"enter",v,n,p),g.target=f,g.relatedTarget=x,y=g),x=y,w&&v)t:{for(g=w,d=v,c=0,f=g;f;f=vn(f))c++;for(f=0,y=d;y;y=vn(y))f++;for(;0<c-f;)g=vn(g),c--;for(;0<f-c;)d=vn(d),f--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=vn(g),d=vn(d)}g=null}else g=null;w!==null&&wu(m,h,w,g,!1),v!==null&&x!==null&&wu(m,x,v,g,!0)}}e:{if(h=u?En(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=lm;else if(fu(h))if(hf)C=um;else{C=am;var T=im}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=sm);if(C&&(C=C(e,u))){mf(m,C,n,p);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Ai(h,"number",h.value)}switch(T=u?En(u):window,e){case"focusin":(fu(T)||T.contentEditable==="true")&&(Sn=T,Zi=u,pr=null);break;case"focusout":pr=Zi=Sn=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,gu(m,n,p);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":gu(m,n,p)}var k;if(qa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xn?df(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ff&&n.locale!=="ko"&&(xn||N!=="onCompositionStart"?N==="onCompositionEnd"&&xn&&(k=cf()):(zt=p,Ja="value"in zt?zt.value:zt.textContent,xn=!0)),T=Yo(u,N),0<T.length&&(N=new au(N,e,null,n,p),m.push({event:N,listeners:T}),k?N.data=k:(k=pf(n),k!==null&&(N.data=k)))),(k=em?tm(e,n):nm(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(p=new au("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=k))}_f(m,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Sr(e,n),l!=null&&r.unshift(Tr(e,l,o)),l=Sr(e,t),l!=null&&r.push(Tr(e,l,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Sr(n,l),s!=null&&i.unshift(Tr(n,s,a))):o||(s=Sr(n,l),s!=null&&i.push(Tr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var gm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(vm,"")}function co(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(_(425))}function Xo(){}var qi=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(xm)}:na;function xm(e){setTimeout(function(){throw e})}function vi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Xn,Rr="__reactProps$"+Xn,Ct="__reactContainer$"+Xn,ra="__reactEvents$"+Xn,Sm="__reactListeners$"+Xn,km="__reactHandles$"+Xn;function tn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ku(e);e!==null;){if(n=e[mt])return n;e=ku(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[mt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function yl(e){return e[Rr]||null}var oa=[],Cn=-1;function Zt(e){return{current:e}}function K(e){0>Cn||(e.current=oa[Cn],oa[Cn]=null,Cn--)}function Y(e,t){Cn++,oa[Cn]=e.current,e.current=t}var Gt={},ke=Zt(Gt),$e=Zt(!1),sn=Gt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Ko(){K($e),K(ke)}function Eu(e,t,n){if(ke.current!==Gt)throw Error(_(168));Y(ke,t),Y($e,n)}function Pf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,i0(e)||"Unknown",o));return b({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,sn=ke.current,Y(ke,e),Y($e,$e.current),!0}function Cu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Pf(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,K($e),K(ke),Y(ke,e)):K($e),Y($e,n)}var wt=null,wl=!1,yi=!1;function Tf(e){wt===null?wt=[e]:wt.push(e)}function Em(e){wl=!0,Tf(e)}function bt(){if(!yi&&wt!==null){yi=!0;var e=0,t=B;try{var n=wt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,wl=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),bc(Ya,bt),o}finally{B=t,yi=!1}}return null}var _n=[],Nn=0,Jo=null,Zo=0,Ke=[],Ge=0,un=null,xt=1,St="";function qt(e,t){_n[Nn++]=Zo,_n[Nn++]=Jo,Jo=e,Zo=t}function Rf(e,t,n){Ke[Ge++]=xt,Ke[Ge++]=St,Ke[Ge++]=un,un=e;var r=xt;e=St;var o=32-it(r)-1;r&=~(1<<o),n+=1;var l=32-it(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,xt=1<<32-it(t)+o|n<<o|r,St=l+e}else xt=1<<l|n<<o|r,St=e}function ts(e){e.return!==null&&(qt(e,1),Rf(e,1,0))}function ns(e){for(;e===Jo;)Jo=_n[--Nn],_n[Nn]=null,Zo=_n[--Nn],_n[Nn]=null;for(;e===un;)un=Ke[--Ge],Ke[Ge]=null,St=Ke[--Ge],Ke[Ge]=null,xt=Ke[--Ge],Ke[Ge]=null}var Be=null,Ae=null,G=!1,lt=null;function Lf(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ae=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:xt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ae=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(G){var t=Ae;if(t){var n=t;if(!_u(e,t)){if(la(e))throw Error(_(418));t=Vt(n.nextSibling);var r=Be;t&&_u(e,t)?Lf(r,n):(e.flags=e.flags&-4097|2,G=!1,Be=e)}}else{if(la(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,Be=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function fo(e){if(e!==Be)return!1;if(!G)return Nu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=Ae)){if(la(e))throw jf(),Error(_(418));for(;t;)Lf(e,t),t=Vt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Be?Vt(e.stateNode.nextSibling):null;return!0}function jf(){for(var e=Ae;e;)e=Vt(e.nextSibling)}function An(){Ae=Be=null,G=!1}function rs(e){lt===null?lt=[e]:lt.push(e)}var Cm=Pt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=Zt(null),qo=null,Pn=null,os=null;function ls(){os=Pn=qo=null}function is(e){var t=bo.current;K(bo),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){qo=e,os=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(os!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(qo===null)throw Error(_(308));Pn=e,qo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function as(e){nn===null?nn=[e]:nn.push(e)}function If(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,as(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,as(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}function Pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var o=e.updateQueue;It=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(l!==null){var m=o.baseState;i=0,p=u=s=null,a=l;do{var h=a.lane,w=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,g=a;switch(h=t,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){m=v.call(w,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(w,m,h):v,h==null)break e;m=b({},m,h);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=w,s=m):p=p.next=w,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);fn|=i,e.lanes=i,e.memoizedState=m}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Of=new jc.Component().refs;function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Qt(e),l=kt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,o),t!==null&&(at(t,e,o,r),To(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Qt(e),l=kt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,o),t!==null&&(at(t,e,o,r),To(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Qt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(at(t,e,r,n),To(t,e,r))}};function Ru(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(o,l):!0}function zf(e,t,n){var r=!1,o=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=be(l):(o=Oe(t)?sn:ke.current,r=t.contextTypes,l=(r=r!=null)?Dn(e,o):Gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Of,ss(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=be(l):(l=Oe(t)?sn:ke.current,o.context=Dn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(sa(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xl.enqueueReplaceState(o,o.state,null),el(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===Of&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function Mf(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Yt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,y){return c===null||c.tag!==6?(c=_i(f,d.mode,y),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,y){var C=f.type;return C===wn?p(d,c,f.props.children,y,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&ju(C)===c.type)?(y=o(c,f.props),y.ref=tr(d,c,f),y.return=d,y):(y=Oo(f.type,f.key,f.props,null,d.mode,y),y.ref=tr(d,c,f),y.return=d,y)}function u(d,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ni(f,d.mode,y),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,y,C){return c===null||c.tag!==7?(c=ln(f,d.mode,y,C),c.return=d,c):(c=o(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_i(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case to:return f=Oo(c.type,c.key,c.props,null,d.mode,f),f.ref=tr(d,null,c),f.return=d,f;case yn:return c=Ni(c,d.mode,f),c.return=d,c;case jt:var y=c._init;return m(d,y(c._payload),f)}if(ir(c)||Jn(c))return c=ln(c,d.mode,f,null),c.return=d,c;po(d,c)}return null}function h(d,c,f,y){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return f.key===C?s(d,c,f,y):null;case yn:return f.key===C?u(d,c,f,y):null;case jt:return C=f._init,h(d,c,C(f._payload),y)}if(ir(f)||Jn(f))return C!==null?null:p(d,c,f,y,null);po(d,f)}return null}function w(d,c,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,a(c,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case to:return d=d.get(y.key===null?f:y.key)||null,s(c,d,y,C);case yn:return d=d.get(y.key===null?f:y.key)||null,u(c,d,y,C);case jt:var T=y._init;return w(d,c,f,T(y._payload),C)}if(ir(y)||Jn(y))return d=d.get(f)||null,p(c,d,y,C,null);po(c,y)}return null}function v(d,c,f,y){for(var C=null,T=null,k=c,N=c=0,$=null;k!==null&&N<f.length;N++){k.index>N?($=k,k=null):$=k.sibling;var j=h(d,k,f[N],y);if(j===null){k===null&&(k=$);break}e&&k&&j.alternate===null&&t(d,k),c=l(j,c,N),T===null?C=j:T.sibling=j,T=j,k=$}if(N===f.length)return n(d,k),G&&qt(d,N),C;if(k===null){for(;N<f.length;N++)k=m(d,f[N],y),k!==null&&(c=l(k,c,N),T===null?C=k:T.sibling=k,T=k);return G&&qt(d,N),C}for(k=r(d,k);N<f.length;N++)$=w(k,d,N,f[N],y),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?N:$.key),c=l($,c,N),T===null?C=$:T.sibling=$,T=$);return e&&k.forEach(function(ee){return t(d,ee)}),G&&qt(d,N),C}function g(d,c,f,y){var C=Jn(f);if(typeof C!="function")throw Error(_(150));if(f=C.call(f),f==null)throw Error(_(151));for(var T=C=null,k=c,N=c=0,$=null,j=f.next();k!==null&&!j.done;N++,j=f.next()){k.index>N?($=k,k=null):$=k.sibling;var ee=h(d,k,j.value,y);if(ee===null){k===null&&(k=$);break}e&&k&&ee.alternate===null&&t(d,k),c=l(ee,c,N),T===null?C=ee:T.sibling=ee,T=ee,k=$}if(j.done)return n(d,k),G&&qt(d,N),C;if(k===null){for(;!j.done;N++,j=f.next())j=m(d,j.value,y),j!==null&&(c=l(j,c,N),T===null?C=j:T.sibling=j,T=j);return G&&qt(d,N),C}for(k=r(d,k);!j.done;N++,j=f.next())j=w(k,d,N,j.value,y),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?N:j.key),c=l(j,c,N),T===null?C=j:T.sibling=j,T=j);return e&&k.forEach(function(Re){return t(d,Re)}),G&&qt(d,N),C}function x(d,c,f,y){if(typeof f=="object"&&f!==null&&f.type===wn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case to:e:{for(var C=f.key,T=c;T!==null;){if(T.key===C){if(C=f.type,C===wn){if(T.tag===7){n(d,T.sibling),c=o(T,f.props.children),c.return=d,d=c;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&ju(C)===T.type){n(d,T.sibling),c=o(T,f.props),c.ref=tr(d,T,f),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===wn?(c=ln(f.props.children,d.mode,y,f.key),c.return=d,d=c):(y=Oo(f.type,f.key,f.props,null,d.mode,y),y.ref=tr(d,c,f),y.return=d,d=y)}return i(d);case yn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ni(f,d.mode,y),c.return=d,d=c}return i(d);case jt:return T=f._init,x(d,c,T(f._payload),y)}if(ir(f))return v(d,c,f,y);if(Jn(f))return g(d,c,f,y);po(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=_i(f,d.mode,y),c.return=d,d=c),i(d)):n(d,c)}return x}var Un=Mf(!0),Ff=Mf(!1),Gr={},gt=Zt(Gr),Lr=Zt(Gr),jr=Zt(Gr);function rn(e){if(e===Gr)throw Error(_(174));return e}function us(e,t){switch(Y(jr,t),Y(Lr,e),Y(gt,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bi(t,e)}K(gt),Y(gt,t)}function Bn(){K(gt),K(Lr),K(jr)}function Df(e){rn(jr.current);var t=rn(gt.current),n=Bi(t,e.type);t!==n&&(Y(Lr,e),Y(gt,n))}function cs(e){Lr.current===e&&(K(gt),K(Lr))}var J=Zt(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wi=[];function fs(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var Ro=Pt.ReactCurrentDispatcher,xi=Pt.ReactCurrentBatchConfig,cn=0,Z=null,ie=null,ue=null,nl=!1,mr=!1,Ir=0,_m=0;function ye(){throw Error(_(321))}function ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function ps(e,t,n,r,o,l){if(cn=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?Rm:Lm,e=n(r,o),mr){l=0;do{if(mr=!1,Ir=0,25<=l)throw Error(_(301));l+=1,ue=ie=null,t.updateQueue=null,Ro.current=jm,e=n(r,o)}while(mr)}if(Ro.current=rl,t=ie!==null&&ie.next!==null,cn=0,ue=ie=Z=null,nl=!1,t)throw Error(_(300));return e}function ms(){var e=Ir!==0;return Ir=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(ie===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,ie=e;else{if(e===null)throw Error(_(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function $r(e,t){return typeof t=="function"?t(e):t}function Si(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var p=u.lane;if((cn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,Z.lanes|=p,fn|=p}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,st(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Z.lanes|=l,fn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);st(l,t.memoizedState)||(Ie=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Af(){}function Uf(e,t){var n=Z,r=qe(),o=t(),l=!st(r.memoizedState,o);if(l&&(r.memoizedState=o,Ie=!0),r=r.queue,hs(Wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Or(9,Vf.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(_(349));cn&30||Bf(n,t,o)}return o}function Bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vf(e,t,n,r){t.value=n,t.getSnapshot=r,Hf(t)&&Qf(e)}function Wf(e,t,n){return n(function(){Hf(t)&&Qf(e)})}function Hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Qf(e){var t=_t(e,1);t!==null&&at(t,e,1,-1)}function Iu(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Tm.bind(null,Z,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yf(){return qe().memoizedState}function Lo(e,t,n,r){var o=ft();Z.flags|=e,o.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var o=qe();r=r===void 0?null:r;var l=void 0;if(ie!==null){var i=ie.memoizedState;if(l=i.destroy,r!==null&&ds(r,i.deps)){o.memoizedState=Or(t,n,l,r);return}}Z.flags|=e,o.memoizedState=Or(1|t,n,l,r)}function $u(e,t){return Lo(8390656,8,e,t)}function hs(e,t){return Sl(2048,8,e,t)}function Xf(e,t){return Sl(4,2,e,t)}function Kf(e,t){return Sl(4,4,e,t)}function Gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jf(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Gf.bind(null,t,e),n)}function gs(){}function Zf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return cn&21?(st(n,t)||(n=tf(),Z.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function Nm(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=xi.transition;xi.transition={};try{e(!1),t()}finally{B=n,xi.transition=r}}function ed(){return qe().memoizedState}function Pm(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=If(e,t,n,r),n!==null){var o=Ne();at(n,e,r,o),rd(n,t,r)}}function Tm(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,st(a,i)){var s=t.interleaved;s===null?(o.next=o,as(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=If(e,t,o,r),n!==null&&(o=Ne(),at(n,e,r,o),rd(n,t,r))}}function td(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function nd(e,t){mr=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}var rl={readContext:be,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Rm={readContext:be,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:$u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pm.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:gs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=Nm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ft();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ce===null)throw Error(_(349));cn&30||Bf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,$u(Wf.bind(null,r,l,e),[e]),r.flags|=2048,Or(9,Vf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ft(),t=ce.identifierPrefix;if(G){var n=St,r=xt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:be,useCallback:Zf,useContext:be,useEffect:hs,useImperativeHandle:Jf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:bf,useReducer:Si,useRef:Yf,useState:function(){return Si($r)},useDebugValue:gs,useDeferredValue:function(e){var t=qe();return qf(t,ie.memoizedState,e)},useTransition:function(){var e=Si($r)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Uf,useId:ed,unstable_isNewReconciler:!1},jm={readContext:be,useCallback:Zf,useContext:be,useEffect:hs,useImperativeHandle:Jf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:bf,useReducer:ki,useRef:Yf,useState:function(){return ki($r)},useDebugValue:gs,useDeferredValue:function(e){var t=qe();return ie===null?t.memoizedState=e:qf(t,ie.memoizedState,e)},useTransition:function(){var e=ki($r)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Uf,useId:ed,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=l0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Im=typeof WeakMap=="function"?WeakMap:Map;function od(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,xa=r),ca(e,t)},n}function ld(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ca(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Im;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ym.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var $m=Pt.ReactCurrentOwner,Ie=!1;function Ce(e,t,n,r){t.child=e===null?Ff(t,null,n,r):Un(t,e.child,n,r)}function Fu(e,t,n,r,o){n=n.render;var l=t.ref;return On(t,o),r=ps(e,t,n,r,l,o),n=ms(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(G&&n&&ts(t),t.flags|=1,Ce(e,t,r,o),t.child)}function Du(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Cs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,id(e,t,l,r,o)):(e=Oo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(i,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Yt(l,r),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Nr(l,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return fa(e,t,n,r,o)}function ad(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Rn,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Rn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(Rn,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(Rn,De),De|=r;return Ce(e,t,o,n),t.child}function sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fa(e,t,n,r,o){var l=Oe(n)?sn:ke.current;return l=Dn(t,l),On(t,o),n=ps(e,t,n,r,l,o),r=ms(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(G&&r&&ts(t),t.flags|=1,Ce(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(Oe(n)){var l=!0;Go(t)}else l=!1;if(On(t,o),t.stateNode===null)jo(e,t),zf(t,n,r),ua(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=Oe(n)?sn:ke.current,u=Dn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Lu(t,i,r,u),It=!1;var h=t.memoizedState;i.state=h,el(t,r,i,o),s=t.memoizedState,a!==r||h!==s||$e.current||It?(typeof p=="function"&&(sa(t,n,p,r),s=t.memoizedState),(a=It||Ru(t,n,a,r,h,s,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,$f(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rt(t.type,a),i.props=u,m=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=Oe(n)?sn:ke.current,s=Dn(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Lu(t,i,r,s),It=!1,h=t.memoizedState,i.state=h,el(t,r,i,o);var v=t.memoizedState;a!==m||h!==v||$e.current||It?(typeof w=="function"&&(sa(t,n,w,r),v=t.memoizedState),(u=It||Ru(t,n,u,r,h,v,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,l,o)}function da(e,t,n,r,o,l){sd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Cu(t,n,!1),Nt(e,t,l);r=t.stateNode,$m.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Un(t,e.child,null,l),t.child=Un(t,null,a,l)):Ce(e,t,a,l),t.memoizedState=r.state,o&&Cu(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?Eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eu(e,t.context,!1),us(e,t.containerInfo)}function Uu(e,t,n,r,o){return An(),rs(o),t.flags|=256,Ce(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,o=J.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(J,o&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Cl(i,r,0,null),e=ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ma(n),t.memoizedState=pa,e):vs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Om(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Yt(a,l):(l=ln(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ma(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return l=e.child,e=l.sibling,r=Yt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vs(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&rs(r),Un(t,e.child,null,n),e=vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Om(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ei(Error(_(422))),mo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Cl({mode:"visible",children:r.children},o,0,null),l=ln(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Un(t,e.child,null,i),t.child.memoizedState=ma(i),t.memoizedState=pa,l);if(!(t.mode&1))return mo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(_(419)),r=Ei(l,r,void 0),mo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ie||a){if(r=ce,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,_t(e,o),at(r,e,o,-1))}return Es(),r=Ei(Error(_(421))),mo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Xm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ae=Vt(o.nextSibling),Be=t,G=!0,lt=null,e!==null&&(Ke[Ge++]=xt,Ke[Ge++]=St,Ke[Ge++]=un,xt=e.id,St=e.overflow,un=t),t=vs(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function Ci(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function fd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ci(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&tl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ci(t,!0,n,null,l);break;case"together":Ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zm(e,t,n){switch(t.tag){case 3:ud(t),An();break;case 5:Df(t);break;case 1:Oe(t.type)&&Go(t);break;case 4:us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(Y(J,J.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);Y(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,n)}return Nt(e,t,n)}var dd,ha,pd,md;dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ha=function(){};pd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(gt.current);var l=null;switch(n){case"input":o=Fi(e,o),r=Fi(e,r),l=[];break;case"select":o=b({},o,{value:void 0}),r=b({},r,{value:void 0}),l=[];break;case"textarea":o=Ui(e,o),r=Ui(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Vi(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&X("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mm(e,t,n){var r=t.pendingProps;switch(ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Oe(t.type)&&Ko(),we(t),null;case 3:return r=t.stateNode,Bn(),K($e),K(ke),fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Ea(lt),lt=null))),ha(e,t),we(t),null;case 5:cs(t);var o=rn(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return we(t),null}if(e=rn(gt.current),fo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[mt]=t,r[Rr]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)X(sr[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Js(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":bs(r,l),X("invalid",r)}Vi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&co(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&co(r.textContent,a,e),o=["children",""+a]):wr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":no(r),Zs(r,l,!0);break;case"textarea":no(r),qs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[Rr]=r,dd(e,t,!1,!1),t.stateNode=e;e:{switch(i=Wi(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)X(sr[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":Js(e,r),o=Fi(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=b({},r,{value:void 0}),X("invalid",e);break;case"textarea":bs(e,r),o=Ui(e,r),X("invalid",e);break;default:o=r}Vi(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Wc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xr(e,s):typeof s=="number"&&xr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&X("scroll",e):s!=null&&Ba(e,l,s,i))}switch(n){case"input":no(e),Zs(e,r,!1);break;case"textarea":no(e),qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=rn(jr.current),rn(gt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(l=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return we(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ae!==null&&t.mode&1&&!(t.flags&128))jf(),An(),t.flags|=98560,l=!1;else if(l=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[mt]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else lt!==null&&(Ea(lt),lt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Es())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Bn(),ha(e,t),e===null&&Pr(t.stateNode.containerInfo),we(t),null;case 10:return is(t.type._context),we(t),null;case 17:return Oe(t.type)&&Ko(),we(t),null;case 19:if(K(J),l=t.memoizedState,l===null)return we(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)nr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=tl(e),i!==null){for(t.flags|=128,nr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(J,J.current&1|2),t.child}e=e.sibling}l.tail!==null&&te()>Wn&&(t.flags|=128,r=!0,nr(l,!1),t.lanes=4194304)}else{if(!r)if(e=tl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!G)return we(t),null}else 2*te()-l.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,nr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=te(),t.sibling=null,n=J.current,Y(J,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ks(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Fm(e,t){switch(ns(t),t.tag){case 1:return Oe(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),K($e),K(ke),fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return Bn(),null;case 10:return is(t.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var ho=!1,Se=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ga(e,t,n){try{n()}catch(r){q(e,t,r)}}var Vu=!1;function Am(e,t){if(qi=Ho,e=yf(),es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++u===o&&(a=i),h===l&&++p===r&&(s=i),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},Ho=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,x=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:rt(t.type,g),x);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Vu,Vu=!1,v}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ga(t,n,l)}o=o.next}while(o!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Rr],delete t[ra],delete t[Sm],delete t[km])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var pe=null,ot=!1;function Lt(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Se||Tn(n,t);case 6:var r=pe,o=ot;pe=null,Lt(e,t,n),pe=r,ot=o,pe!==null&&(ot?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(ot?(e=pe,n=n.stateNode,e.nodeType===8?vi(e.parentNode,n):e.nodeType===1&&vi(e,n),Cr(e)):vi(pe,n.stateNode));break;case 4:r=pe,o=ot,pe=n.stateNode.containerInfo,ot=!0,Lt(e,t,n),pe=r,ot=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ga(n,t,i),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!Se&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Lt(e,t,n),Se=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var o=Km.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,ot=!1;break e;case 3:pe=a.stateNode.containerInfo,ot=!0;break e;case 4:pe=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(pe===null)throw Error(_(160));vd(l,i,o),pe=null,ot=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ct(e),r&4){try{hr(3,e,e.return),kl(3,e)}catch(g){q(e,e.return,g)}try{hr(5,e,e.return)}catch(g){q(e,e.return,g)}}break;case 1:nt(t,e),ct(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(nt(t,e),ct(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(g){q(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Dc(o,l),Wi(a,i);var u=Wi(a,l);for(i=0;i<s.length;i+=2){var p=s[i],m=s[i+1];p==="style"?Wc(o,m):p==="dangerouslySetInnerHTML"?Bc(o,m):p==="children"?xr(o,m):Ba(o,p,m,u)}switch(a){case"input":Di(o,l);break;case"textarea":Ac(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Ln(o,!!l.multiple,w,!1):h!==!!l.multiple&&(l.defaultValue!=null?Ln(o,!!l.multiple,l.defaultValue,!0):Ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[Rr]=l}catch(g){q(e,e.return,g)}}break;case 6:if(nt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(g){q(e,e.return,g)}}break;case 3:if(nt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(g){q(e,e.return,g)}break;case 4:nt(t,e),ct(e);break;case 13:nt(t,e),ct(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(xs=te())),r&4&&Hu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||p,nt(t,e),Se=u):nt(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(L=e,p=e.child;p!==null;){for(m=L=p;L!==null;){switch(h=L,w=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:Tn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){q(r,n,g)}}break;case 5:Tn(h,h.return);break;case 22:if(h.memoizedState!==null){Yu(m);continue}}w!==null?(w.return=h,L=w):Yu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vc("display",i))}catch(g){q(e,e.return,g)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){q(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:nt(t,e),ct(e),r&4&&Hu(e);break;case 21:break;default:nt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var l=Wu(e);wa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Wu(e);ya(e,a,i);break;default:throw Error(_(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Um(e,t,n){L=e,wd(e)}function wd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ho;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Se;a=ho;var u=Se;if(ho=i,(Se=s)&&!u)for(L=o;L!==null;)i=L,s=i.child,i.tag===22&&i.memoizedState!==null?Xu(o):s!==null?(s.return=i,L=s):Xu(o);for(;l!==null;)L=l,wd(l),l=l.sibling;L=o,ho=a,Se=u}Qu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,L=l):Qu(e)}}function Qu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Tu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Cr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Se||t.flags&512&&va(t)}catch(h){q(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Yu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Xu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var l=t.return;try{va(t)}catch(s){q(t,l,s)}break;case 5:var i=t.return;try{va(t)}catch(s){q(t,i,s)}}}catch(s){q(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Bm=Math.ceil,ol=Pt.ReactCurrentDispatcher,ys=Pt.ReactCurrentOwner,Ze=Pt.ReactCurrentBatchConfig,M=0,ce=null,re=null,ge=0,De=0,Rn=Zt(0),ae=0,zr=null,fn=0,El=0,ws=0,gr=null,je=null,xs=0,Wn=1/0,yt=null,ll=!1,xa=null,Ht=null,go=!1,Mt=null,il=0,vr=0,Sa=null,Io=-1,$o=0;function Ne(){return M&6?te():Io!==-1?Io:Io=te()}function Qt(e){return e.mode&1?M&2&&ge!==0?ge&-ge:Cm.transition!==null?($o===0&&($o=tf()),$o):(e=B,e!==0||(e=window.event,e=e===void 0?16:uf(e.type)),e):1}function at(e,t,n,r){if(50<vr)throw vr=0,Sa=null,Error(_(185));Yr(e,n,r),(!(M&2)||e!==ce)&&(e===ce&&(!(M&2)&&(El|=n),ae===4&&Ot(e,ge)),ze(e,r),n===1&&M===0&&!(t.mode&1)&&(Wn=te()+500,wl&&bt()))}function ze(e,t){var n=e.callbackNode;C0(e,t);var r=Wo(e,e===ce?ge:0);if(r===0)n!==null&&nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nu(n),t===1)e.tag===0?Em(Ku.bind(null,e)):Tf(Ku.bind(null,e)),wm(function(){!(M&6)&&bt()}),n=null;else{switch(nf(r)){case 1:n=Ya;break;case 4:n=qc;break;case 16:n=Vo;break;case 536870912:n=ef;break;default:n=Vo}n=Pd(n,xd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xd(e,t){if(Io=-1,$o=0,M&6)throw Error(_(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Wo(e,e===ce?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var o=M;M|=2;var l=kd();(ce!==e||ge!==t)&&(yt=null,Wn=te()+500,on(e,t));do try{Hm();break}catch(a){Sd(e,a)}while(!0);ls(),ol.current=l,M=o,re!==null?t=0:(ce=null,ge=0,t=ae)}if(t!==0){if(t===2&&(o=Ki(e),o!==0&&(r=o,t=ka(e,o))),t===1)throw n=zr,on(e,0),Ot(e,r),ze(e,te()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,!(r&30)&&!Vm(o)&&(t=al(e,r),t===2&&(l=Ki(e),l!==0&&(r=l,t=ka(e,l))),t===1))throw n=zr,on(e,0),Ot(e,r),ze(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:en(e,je,yt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=xs+500-te(),10<t)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=na(en.bind(null,e,je,yt),t);break}en(e,je,yt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-it(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bm(r/1960))-r,10<r){e.timeoutHandle=na(en.bind(null,e,je,yt),r);break}en(e,je,yt);break;case 5:en(e,je,yt);break;default:throw Error(_(329))}}}return ze(e,te()),e.callbackNode===n?xd.bind(null,e):null}function ka(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=al(e,t),e!==2&&(t=je,je=n,t!==null&&Ea(t)),e}function Ea(e){je===null?je=e:je.push.apply(je,e)}function Vm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!st(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~ws,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Ku(e){if(M&6)throw Error(_(327));zn();var t=Wo(e,0);if(!(t&1))return ze(e,te()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Ki(e);r!==0&&(t=r,n=ka(e,r))}if(n===1)throw n=zr,on(e,0),Ot(e,t),ze(e,te()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,je,yt),ze(e,te()),null}function Ss(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Wn=te()+500,wl&&bt())}}function dn(e){Mt!==null&&Mt.tag===0&&!(M&6)&&zn();var t=M;M|=1;var n=Ze.transition,r=B;try{if(Ze.transition=null,B=1,e)return e()}finally{B=r,Ze.transition=n,M=t,!(M&6)&&bt()}}function ks(){De=Rn.current,K(Rn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ym(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Bn(),K($e),K(ke),fs();break;case 5:cs(r);break;case 4:Bn();break;case 13:K(J);break;case 19:K(J);break;case 10:is(r.type._context);break;case 22:case 23:ks()}n=n.return}if(ce=e,re=e=Yt(e.current,null),ge=De=t,ae=0,zr=null,ws=El=fn=0,je=gr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}nn=null}return e}function Sd(e,t){do{var n=re;try{if(ls(),Ro.current=rl,nl){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}nl=!1}if(cn=0,ue=ie=Z=null,mr=!1,Ir=0,ys.current=null,n===null||n.return===null){ae=1,zr=t,re=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ge,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=zu(i);if(w!==null){w.flags&=-257,Mu(w,i,a,l,t),w.mode&1&&Ou(l,u,t),t=w,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if(!(t&1)){Ou(l,u,t),Es();break e}s=Error(_(426))}}else if(G&&a.mode&1){var x=zu(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Mu(x,i,a,l,t),rs(Vn(s,a));break e}}l=s=Vn(s,a),ae!==4&&(ae=2),gr===null?gr=[l]:gr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=od(l,s,t);Pu(l,d);break e;case 1:a=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=ld(l,a,t);Pu(l,y);break e}}l=l.return}while(l!==null)}Cd(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function kd(){var e=ol.current;return ol.current=rl,e===null?rl:e}function Es(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(fn&268435455)&&!(El&268435455)||Ot(ce,ge)}function al(e,t){var n=M;M|=2;var r=kd();(ce!==e||ge!==t)&&(yt=null,on(e,t));do try{Wm();break}catch(o){Sd(e,o)}while(!0);if(ls(),M=n,ol.current=r,re!==null)throw Error(_(261));return ce=null,ge=0,ae}function Wm(){for(;re!==null;)Ed(re)}function Hm(){for(;re!==null&&!h0();)Ed(re)}function Ed(e){var t=Nd(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Cd(e):re=t,ys.current=null}function Cd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Mm(n,t,De),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function en(e,t,n){var r=B,o=Ze.transition;try{Ze.transition=null,B=1,Qm(e,t,n,r)}finally{Ze.transition=o,B=r}return null}function Qm(e,t,n,r){do zn();while(Mt!==null);if(M&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(_0(e,l),e===ce&&(re=ce=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,Pd(Vo,function(){return zn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ze.transition,Ze.transition=null;var i=B;B=1;var a=M;M|=4,ys.current=null,Am(e,n),yd(n,e),fm(ea),Ho=!!qi,ea=qi=null,e.current=n,Um(n),g0(),M=a,B=i,Ze.transition=l}else e.current=n;if(go&&(go=!1,Mt=e,il=o),l=e.pendingLanes,l===0&&(Ht=null),w0(n.stateNode),ze(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ll)throw ll=!1,e=xa,xa=null,e;return il&1&&e.tag!==0&&zn(),l=e.pendingLanes,l&1?e===Sa?vr++:(vr=0,Sa=e):vr=0,bt(),null}function zn(){if(Mt!==null){var e=nf(il),t=Ze.transition,n=B;try{if(Ze.transition=null,B=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,il=0,M&6)throw Error(_(331));var o=M;for(M|=4,L=e.current;L!==null;){var l=L,i=l.child;if(L.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:hr(8,p,l)}var m=p.child;if(m!==null)m.return=p,L=m;else for(;L!==null;){p=L;var h=p.sibling,w=p.return;if(hd(p),p===u){L=null;break}if(h!==null){h.return=w,L=h;break}L=w}}}var v=l.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}L=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,L=i;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,L=d;break e}L=l.return}}var c=e.current;for(L=c;L!==null;){i=L;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,L=f;else e:for(i=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(C){q(a,a.return,C)}if(a===i){L=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,L=y;break e}L=a.return}}if(M=o,bt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{B=n,Ze.transition=t}}return!1}function Gu(e,t,n){t=Vn(n,t),t=od(e,t,1),e=Wt(e,t,1),t=Ne(),e!==null&&(Yr(e,1,t),ze(e,t))}function q(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Vn(n,e),e=ld(t,e,1),t=Wt(t,e,1),e=Ne(),t!==null&&(Yr(t,1,e),ze(t,e));break}}t=t.return}}function Ym(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>te()-xs?on(e,0):ws|=n),ze(e,t)}function _d(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=Ne();e=_t(e,t),e!==null&&(Yr(e,t,n),ze(e,n))}function Xm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function Km(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),_d(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,zm(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,G&&t.flags&1048576&&Rf(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var o=Dn(t,ke.current);On(t,n),o=ps(null,t,r,e,o,n);var l=ms();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(l=!0,Go(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ss(t),o.updater=xl,t.stateNode=o,o._reactInternals=t,ua(t,r,e,n),t=da(null,t,r,!0,l,n)):(t.tag=0,G&&l&&ts(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Jm(r),e=rt(r,e),o){case 0:t=fa(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Fu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,rt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),fa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Au(e,t,r,o,n);case 3:e:{if(ud(t),e===null)throw Error(_(387));r=t.pendingProps,l=t.memoizedState,o=l.element,$f(e,t),el(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Vn(Error(_(423)),t),t=Uu(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(_(424)),t),t=Uu(e,t,r,n,o);break e}else for(Ae=Vt(t.stateNode.containerInfo.firstChild),Be=t,G=!0,lt=null,n=Ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===o){t=Nt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Df(t),e===null&&ia(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ta(r,o)?i=null:l!==null&&ta(r,l)&&(t.flags|=32),sd(e,t),Ce(e,t,i,n),t.child;case 6:return e===null&&ia(t),null;case 13:return cd(e,t,n);case 4:return us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Fu(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Y(bo,r._currentValue),r._currentValue=i,l!==null)if(st(l.value,i)){if(l.children===o.children&&!$e.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=kt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),aa(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(_(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),aa(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,On(t,n),o=be(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),Du(e,t,r,o,n);case 15:return id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),jo(e,t),t.tag=1,Oe(r)?(e=!0,Go(t)):e=!1,On(t,n),zf(t,r,o),ua(t,r,o,n),da(null,t,r,!0,e,n);case 19:return fd(e,t,n);case 22:return ad(e,t,n)}throw Error(_(156,t.tag))};function Pd(e,t){return bc(e,t)}function Gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new Gm(e,t,n,r)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jm(e){if(typeof e=="function")return Cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wa)return 11;if(e===Ha)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Cs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wn:return ln(n.children,o,l,t);case Va:i=8,o|=8;break;case $i:return e=Je(12,n,t,o|2),e.elementType=$i,e.lanes=l,e;case Oi:return e=Je(13,n,t,o),e.elementType=Oi,e.lanes=l,e;case zi:return e=Je(19,n,t,o),e.elementType=zi,e.lanes=l,e;case zc:return Cl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:i=10;break e;case Oc:i=9;break e;case Wa:i=11;break e;case Ha:i=14;break e;case jt:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Je(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function ln(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Je(22,e,r,t),e.elementType=zc,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Ni(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,r,o,l,i,a,s){return e=new Zm(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ss(l),e}function bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Td(e){if(!e)return Gt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Pf(e,n,t)}return t}function Rd(e,t,n,r,o,l,i,a,s){return e=_s(n,r,!0,e,o,l,i,a,s),e.context=Td(null),n=e.current,r=Ne(),o=Qt(n),l=kt(r,o),l.callback=t??null,Wt(n,l,o),e.current.lanes=o,Yr(e,o,r),ze(e,r),e}function _l(e,t,n,r){var o=t.current,l=Ne(),i=Qt(o);return n=Td(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,i),e!==null&&(at(e,o,i,l),To(e,o,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ns(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function qm(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}Nl.prototype.render=Ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));_l(e,t,null,null)};Nl.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){_l(null,e,null,null)}),t[Ct]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&sf(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function eh(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=sl(i);l.call(u)}}var i=Rd(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=i,e[Ct]=i.current,Pr(e.nodeType===8?e.parentNode:e),dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=sl(s);a.call(u)}}var s=_s(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=s,e[Ct]=s.current,Pr(e.nodeType===8?e.parentNode:e),dn(function(){_l(t,s,n,r)}),s}function Tl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=sl(i);a.call(s)}}_l(t,i,e,o)}else i=eh(n,t,e,o,r);return sl(i)}rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(Xa(t,n|1),ze(t,te()),!(M&6)&&(Wn=te()+500,bt()))}break;case 13:dn(function(){var r=_t(e,1);if(r!==null){var o=Ne();at(r,e,1,o)}}),Ns(e,1)}};Ka=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ne();at(t,e,134217728,n)}Ns(e,134217728)}};of=function(e){if(e.tag===13){var t=Qt(e),n=_t(e,t);if(n!==null){var r=Ne();at(n,e,t,r)}Ns(e,t)}};lf=function(){return B};af=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Qi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=yl(r);if(!o)throw Error(_(90));Fc(r),Di(r,o)}}}break;case"textarea":Ac(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Yc=Ss;Xc=dn;var th={usingClientEntryPoint:!1,Events:[Kr,En,yl,Hc,Qc,Ss]},rr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nh={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{ml=vo.inject(nh),ht=vo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(t))throw Error(_(200));return bm(e,t,null,n)};He.createRoot=function(e,t){if(!Ts(e))throw Error(_(299));var n=!1,r="",o=Ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Ps(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return dn(e)};He.hydrate=function(e,t,n){if(!Pl(t))throw Error(_(200));return Tl(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Ts(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Ld;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Rd(t,null,e,1,n??null,o,!1,l,i),e[Ct]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Nl(t)};He.render=function(e,t,n){if(!Pl(t))throw Error(_(200));return Tl(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(_(40));return e._reactRootContainer?(dn(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};He.unstable_batchedUpdates=Ss;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Tl(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),Tc.exports=He;var rh=Tc.exports,Id,bu=rh;Id=bu.createRoot,bu.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const qu="popstate";function oh(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Ca("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ul(o)}return ih(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $d(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lh(){return Math.random().toString(36).substr(2,8)}function ec(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),Mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||lh()})}function ul(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ih(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=Ft.Pop,s=null,u=p();u==null&&(u=0,i.replaceState(Mr({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function m(){a=Ft.Pop;let x=p(),d=x==null?null:x-u;u=x,s&&s({action:a,location:g.location,delta:d})}function h(x,d){a=Ft.Push;let c=Ca(g.location,x,d);n&&n(c,x),u=p()+1;let f=ec(c,u),y=g.createHref(c);try{i.pushState(f,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(y)}l&&s&&s({action:a,location:g.location,delta:1})}function w(x,d){a=Ft.Replace;let c=Ca(g.location,x,d);n&&n(c,x),u=p();let f=ec(c,u),y=g.createHref(c);i.replaceState(f,"",y),l&&s&&s({action:a,location:g.location,delta:0})}function v(x){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof x=="string"?x:ul(x);return c=c.replace(/ $/,"%20"),oe(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let g={get action(){return a},get location(){return e(o,i)},listen(x){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(qu,m),s=x,()=>{o.removeEventListener(qu,m),s=null}},createHref(x){return t(o,x)},createURL:v,encodeLocation(x){let d=v(x);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:w,go(x){return i.go(x)}};return g}var tc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tc||(tc={}));function ah(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kn(t):t,o=Rs(r.pathname||"/",n);if(o==null)return null;let l=Od(e);sh(l);let i=null;for(let a=0;i==null&&a<l.length;++a){let s=xh(o);i=vh(l[a],s)}return i}function Od(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Xt([r,s.relativePath]),p=n.concat(s);l.children&&l.children.length>0&&(oe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Od(l.children,t,p,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:hh(u,l.index),routesMeta:p})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of zd(l.path))o(l,i,s)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=zd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function sh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uh=/^:[\w-]+$/,ch=3,fh=2,dh=1,ph=10,mh=-2,nc=e=>e==="*";function hh(e,t){let n=e.split("/"),r=n.length;return n.some(nc)&&(r+=mh),t&&(r+=fh),n.filter(o=>!nc(o)).reduce((o,l)=>o+(uh.test(l)?ch:l===""?dh:ph),r)}function gh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function vh(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=yh({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let m=a.route;l.push({params:r,pathname:Xt([o,p.pathname]),pathnameBase:Ch(Xt([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Xt([o,p.pathnameBase]))}return l}function yh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,m)=>{let{paramName:h,isOptional:w}=p;if(h==="*"){let g=a[m]||"";i=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[m];return w&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function wh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$d(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function xh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:kh(n,t):t,search:_h(r),hash:Nh(o)}}function kh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Pi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Md(e,t){let n=Eh(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kn(e):(o=Mr({},e),oe(!o.pathname||!o.pathname.includes("?"),Pi("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),Pi("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),Pi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let m=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=Sh(o,a),u=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),Ch=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dd=["post","put","patch","delete"];new Set(Dd);const Th=["get",...Dd];new Set(Th);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fr.apply(this,arguments)}const Ls=S.createContext(null),Rh=S.createContext(null),hn=S.createContext(null),Rl=S.createContext(null),gn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Ad=S.createContext(null);function Lh(e,t){let{relative:n}=t===void 0?{}:t;Jr()||oe(!1);let{basename:r,navigator:o}=S.useContext(hn),{hash:l,pathname:i,search:a}=Bd(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Xt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Jr(){return S.useContext(Rl)!=null}function Zr(){return Jr()||oe(!1),S.useContext(Rl).location}function Ud(e){S.useContext(hn).static||S.useLayoutEffect(e)}function jh(){let{isDataRoute:e}=S.useContext(gn);return e?Hh():Ih()}function Ih(){Jr()||oe(!1);let e=S.useContext(Ls),{basename:t,future:n,navigator:r}=S.useContext(hn),{matches:o}=S.useContext(gn),{pathname:l}=Zr(),i=JSON.stringify(Md(o,n.v7_relativeSplatPath)),a=S.useRef(!1);return Ud(()=>{a.current=!0}),S.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=Fd(u,JSON.parse(i),l,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Xt([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,i,l,e])}function Bd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(hn),{matches:o}=S.useContext(gn),{pathname:l}=Zr(),i=JSON.stringify(Md(o,r.v7_relativeSplatPath));return S.useMemo(()=>Fd(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function $h(e,t){return Oh(e,t)}function Oh(e,t,n,r){Jr()||oe(!1);let{navigator:o}=S.useContext(hn),{matches:l}=S.useContext(gn),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Zr(),p;if(t){var m;let x=typeof t=="string"?Kn(t):t;s==="/"||(m=x.pathname)!=null&&m.startsWith(s)||oe(!1),p=x}else p=u;let h=p.pathname||"/",w=h;if(s!=="/"){let x=s.replace(/^\//,"").split("/");w="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=ah(e,{pathname:w}),g=Ah(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Xt([s,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Xt([s,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,n,r);return t&&g?S.createElement(Rl.Provider,{value:{location:Fr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ft.Pop}},g):g}function zh(){let e=Wh(),t=Ph(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const Mh=S.createElement(zh,null);class Fh extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(Ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dh(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(Ls);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(gn.Provider,{value:t},r)}function Ah(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=i.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id]));p>=0||oe(!1),i=i.slice(0,Math.min(i.length,p+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let m=i[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=p),m.route.id){let{loaderData:h,errors:w}=n,v=m.route.loader&&h[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||v){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,m,h)=>{let w,v=!1,g=null,x=null;n&&(w=a&&m.route.id?a[m.route.id]:void 0,g=m.route.errorElement||Mh,s&&(u<0&&h===0?(Qh("route-fallback",!1),v=!0,x=null):u===h&&(v=!0,x=m.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,h+1)),c=()=>{let f;return w?f=g:v?f=x:m.route.Component?f=S.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=p,S.createElement(Dh,{match:m,routeContext:{outlet:p,matches:d,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?S.createElement(Fh,{location:n.location,revalidation:n.revalidation,component:g,error:w,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Vd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vd||{}),cl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cl||{});function Uh(e){let t=S.useContext(Ls);return t||oe(!1),t}function Bh(e){let t=S.useContext(Rh);return t||oe(!1),t}function Vh(e){let t=S.useContext(gn);return t||oe(!1),t}function Wd(e){let t=Vh(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Wh(){var e;let t=S.useContext(Ad),n=Bh(cl.UseRouteError),r=Wd(cl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Hh(){let{router:e}=Uh(Vd.UseNavigateStable),t=Wd(cl.UseNavigateStable),n=S.useRef(!1);return Ud(()=>{n.current=!0}),S.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Fr({fromRouteId:t},l)))},[e,t])}const rc={};function Qh(e,t,n){!t&&!rc[e]&&(rc[e]=!0)}function Hd(e){oe(!1)}function Yh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ft.Pop,navigator:l,static:i=!1,future:a}=e;Jr()&&oe(!1);let s=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:l,static:i,future:Fr({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Kn(r));let{pathname:p="/",search:m="",hash:h="",state:w=null,key:v="default"}=r,g=S.useMemo(()=>{let x=Rs(p,s);return x==null?null:{location:{pathname:x,search:m,hash:h,state:w,key:v},navigationType:o}},[s,p,m,h,w,v,o]);return g==null?null:S.createElement(hn.Provider,{value:u},S.createElement(Rl.Provider,{children:n,value:g}))}function Xh(e){let{children:t,location:n}=e;return $h(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let l=[...t,o];if(r.type===S.Fragment){n.push.apply(n,_a(r.props.children,l));return}r.type!==Hd&&oe(!1),!r.props.index||!r.props.children||oe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=_a(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}function Kh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Gh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jh(e,t){return e.button===0&&(!t||t==="_self")&&!Gh(e)}const Zh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bh="6";try{window.__reactRouterVersion=bh}catch{}const qh="startTransition",oc=ji[qh];function e1(e){let{basename:t,children:n,future:r,window:o}=e,l=S.useRef();l.current==null&&(l.current=oh({window:o,v5Compat:!0}));let i=l.current,[a,s]=S.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},p=S.useCallback(m=>{u&&oc?oc(()=>s(m)):s(m)},[s,u]);return S.useLayoutEffect(()=>i.listen(p),[i,p]),S.createElement(Yh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dr=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:p,unstable_viewTransition:m}=t,h=Kh(t,Zh),{basename:w}=S.useContext(hn),v,g=!1;if(typeof u=="string"&&n1.test(u)&&(v=u,t1))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=Rs(y.pathname,w);y.origin===f.origin&&C!=null?u=C+y.search+y.hash:g=!0}catch{}let x=Lh(u,{relative:o}),d=r1(u,{replace:i,state:a,target:s,preventScrollReset:p,relative:o,unstable_viewTransition:m});function c(f){r&&r(f),f.defaultPrevented||d(f)}return S.createElement("a",Na({},h,{href:v||x,onClick:g||l?r:c,ref:n,target:s}))});var lc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lc||(lc={}));var ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ic||(ic={}));function r1(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=t===void 0?{}:t,s=jh(),u=Zr(),p=Bd(e,{relative:i});return S.useCallback(m=>{if(Jh(m,n)){m.preventDefault();let h=r!==void 0?r:ul(u)===ul(p);s(e,{replace:h,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[u,s,p,r,o,n,e,l,i,a])}class br{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const o1=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},he={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:o1()},js=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},l1=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=js(e);he.publicKey=n.publicKey,he.blockHeadless=n.blockHeadless,he.storageProvider=n.storageProvider,he.blockList=n.blockList,he.limitRate=n.limitRate,he.origin=n.origin||t},Qd=async(e,t,n={})=>{const r=await fetch(he.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),l=new br(r.status,o);if(r.ok)return l;throw l},Yd=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},i1=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Xd=e=>e.webdriver||!e.languages||e.languages.length===0,Kd=()=>new br(451,"Unavailable For Headless Browser"),a1=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},s1=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},u1=(e,t)=>e instanceof FormData?e.get(t):e[t],Gd=(e,t)=>{if(s1(e))return!1;a1(e.list,e.watchVariable);const n=u1(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Jd=()=>new br(403,"Forbidden"),c1=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},f1=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},Zd=async(e,t,n)=>{if(!t.throttle||!n)return!1;c1(t.throttle,t.id);const r=t.id||e;return await f1(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},bd=()=>new br(429,"Too Many Requests"),d1=async(e,t,n,r)=>{const o=js(r),l=o.publicKey||he.publicKey,i=o.blockHeadless||he.blockHeadless,a=he.storageProvider||o.storageProvider,s={...he.blockList,...o.blockList},u={...he.limitRate,...o.limitRate};return i&&Xd(navigator)?Promise.reject(Kd()):(Yd(l,e,t),i1(n),n&&Gd(s,n)?Promise.reject(Jd()):await Zd(location.pathname,u,a)?Promise.reject(bd()):Qd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:l,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},p1=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},m1=e=>typeof e=="string"?document.querySelector(e):e,h1=async(e,t,n,r)=>{const o=js(r),l=o.publicKey||he.publicKey,i=o.blockHeadless||he.blockHeadless,a=he.storageProvider||o.storageProvider,s={...he.blockList,...o.blockList},u={...he.limitRate,...o.limitRate};if(i&&Xd(navigator))return Promise.reject(Kd());const p=m1(n);Yd(l,e,t),p1(p);const m=new FormData(p);return Gd(s,m)?Promise.reject(Jd()):await Zd(location.pathname,u,a)?Promise.reject(bd()):(m.append("lib_version","4.3.3"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",l),Qd("/api/v1.0/email/send-form",m))},g1={init:l1,send:d1,sendForm:h1,EmailJSResponseStatus:br},v1=()=>{const e=S.useRef(),[t,n]=S.useState(!1),[r,o]=S.useState(!1),l=i=>{i.preventDefault(),n(!0),g1.sendForm("service_l8hu9vj","template_qgi79eu",e.current,{publicKey:"HM-T9UXuknXCpGgWW"}).then(()=>{e.current.reset(),n(!1),o(!0)},a=>{n(!1)})};return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"flex justify-center items-center hidden",children:E.jsxs("form",{ref:e,onSubmit:l,className:"container",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"mb-2 font-bold text-lg text-gray-900",children:"Nome"}),E.jsx("input",{type:"text",name:"from_name",className:"mb-4 p-2 border border-gray-300 rounded"})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"mb-2 font-bold text-lg text-gray-900",children:"Telefone"}),E.jsx("input",{type:"number",name:"from_phone",className:"mb-4 p-2 border border-gray-300 rounded"})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"mb-2 font-bold text-lg text-gray-900",children:"Email"}),E.jsx("input",{type:"email",name:"from_email",className:"mb-4 p-2 border border-gray-300 rounded"})]}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("label",{className:"mb-2 font-bold text-lg text-gray-900",children:"Assunto"}),E.jsx("input",{type:"text",name:"subject",className:"mb-4 p-2 border border-gray-300 rounded"})]})]}),E.jsxs("div",{className:"col-span-full flex flex-col",children:[E.jsx("label",{className:"mb-2 font-bold text-lg text-gray-900",children:"Mensagem"}),E.jsx("textarea",{name:"message",className:"mb-4 p-2 h-32 border border-gray-300 rounded"})]}),E.jsx("div",{className:"col-span-full flex justify-center",children:E.jsx("input",{type:"submit",value:"Enviar",className:"p-2 bg-blue-500 text-white rounded cursor-pointer"})})]})}),t&&E.jsx("p",{className:"mt-4 text-blue-500",children:"Carregando..."}),r&&E.jsx("p",{className:"mt-4 text-green-500",children:"Mensagem enviada com sucesso!"})]})},y1="/foto4.png";function w1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function x1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var S1=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(x1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=w1(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",fl="-moz-",F="-webkit-",qd="comm",Is="rule",$s="decl",k1="@import",ep="@keyframes",E1="@layer",C1=Math.abs,Ll=String.fromCharCode,_1=Object.assign;function N1(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function tp(e){return e.trim()}function P1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Pa(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function Ar(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Os(e){return e.length}function yo(e,t){return t.push(e),e}function T1(e,t){return e.map(t).join("")}var jl=1,Hn=1,np=0,Me=0,ne=0,Gn="";function Il(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:jl,column:Hn,length:i,return:""}}function or(e,t){return _1(Il("",null,null,"",null,null,0),e,{length:-e.length},t)}function R1(){return ne}function L1(){return ne=Me>0?me(Gn,--Me):0,Hn--,ne===10&&(Hn=1,jl--),ne}function Ve(){return ne=Me<np?me(Gn,Me++):0,Hn++,ne===10&&(Hn=1,jl++),ne}function vt(){return me(Gn,Me)}function zo(){return Me}function qr(e,t){return Ar(Gn,e,t)}function Ur(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rp(e){return jl=Hn=1,np=dt(Gn=e),Me=0,[]}function op(e){return Gn="",e}function Mo(e){return tp(qr(Me-1,Ta(e===91?e+2:e===40?e+1:e)))}function j1(e){for(;(ne=vt())&&ne<33;)Ve();return Ur(e)>2||Ur(ne)>3?"":" "}function I1(e,t){for(;--t&&Ve()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return qr(e,zo()+(t<6&&vt()==32&&Ve()==32))}function Ta(e){for(;Ve();)switch(ne){case e:return Me;case 34:case 39:e!==34&&e!==39&&Ta(ne);break;case 40:e===41&&Ta(e);break;case 92:Ve();break}return Me}function $1(e,t){for(;Ve()&&e+ne!==57;)if(e+ne===84&&vt()===47)break;return"/*"+qr(t,Me-1)+"*"+Ll(e===47?e:Ve())}function O1(e){for(;!Ur(vt());)Ve();return qr(e,Me)}function z1(e){return op(Fo("",null,null,null,[""],e=rp(e),0,[0],e))}function Fo(e,t,n,r,o,l,i,a,s){for(var u=0,p=0,m=i,h=0,w=0,v=0,g=1,x=1,d=1,c=0,f="",y=o,C=l,T=r,k=f;x;)switch(v=c,c=Ve()){case 40:if(v!=108&&me(k,m-1)==58){Pa(k+=D(Mo(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=Mo(c);break;case 9:case 10:case 13:case 32:k+=j1(v);break;case 92:k+=I1(zo()-1,7);continue;case 47:switch(vt()){case 42:case 47:yo(M1($1(Ve(),zo()),t,n),s);break;default:k+="/"}break;case 123*g:a[u++]=dt(k)*d;case 125*g:case 59:case 0:switch(c){case 0:case 125:x=0;case 59+p:d==-1&&(k=D(k,/\f/g,"")),w>0&&dt(k)-m&&yo(w>32?sc(k+";",r,n,m-1):sc(D(k," ","")+";",r,n,m-2),s);break;case 59:k+=";";default:if(yo(T=ac(k,t,n,u,p,o,a,f,y=[],C=[],m),l),c===123)if(p===0)Fo(k,t,T,T,y,l,m,a,C);else switch(h===99&&me(k,3)===110?100:h){case 100:case 108:case 109:case 115:Fo(e,T,T,r&&yo(ac(e,T,T,0,0,o,a,f,o,y=[],m),C),o,C,m,a,r?y:C);break;default:Fo(k,T,T,T,[""],C,0,a,C)}}u=p=w=0,g=d=1,f=k="",m=i;break;case 58:m=1+dt(k),w=v;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&L1()==125)continue}switch(k+=Ll(c),c*g){case 38:d=p>0?1:(k+="\f",-1);break;case 44:a[u++]=(dt(k)-1)*d,d=1;break;case 64:vt()===45&&(k+=Mo(Ve())),h=vt(),p=m=dt(f=k+=O1(zo())),c++;break;case 45:v===45&&dt(k)==2&&(g=0)}}return l}function ac(e,t,n,r,o,l,i,a,s,u,p){for(var m=o-1,h=o===0?l:[""],w=Os(h),v=0,g=0,x=0;v<r;++v)for(var d=0,c=Ar(e,m+1,m=C1(g=i[v])),f=e;d<w;++d)(f=tp(g>0?h[d]+" "+c:D(c,/&\f/g,h[d])))&&(s[x++]=f);return Il(e,t,n,o===0?Is:a,s,u,p)}function M1(e,t,n){return Il(e,t,n,qd,Ll(R1()),Ar(e,2,-2),0)}function sc(e,t,n,r){return Il(e,t,n,$s,Ar(e,0,r),Ar(e,r+1,-1),r)}function Mn(e,t){for(var n="",r=Os(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function F1(e,t,n,r){switch(e.type){case E1:if(e.children.length)break;case k1:case $s:return e.return=e.return||e.value;case qd:return"";case ep:return e.return=e.value+"{"+Mn(e.children,r)+"}";case Is:e.value=e.props.join(",")}return dt(n=Mn(e.children,r))?e.return=e.value+"{"+n+"}":""}function D1(e){var t=Os(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function A1(e){return function(t){t.root||(t=t.return)&&e(t)}}function U1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var B1=function(t,n,r){for(var o=0,l=0;o=l,l=vt(),o===38&&l===12&&(n[r]=1),!Ur(l);)Ve();return qr(t,Me)},V1=function(t,n){var r=-1,o=44;do switch(Ur(o)){case 0:o===38&&vt()===12&&(n[r]=1),t[r]+=B1(Me-1,n,r);break;case 2:t[r]+=Mo(o);break;case 4:if(o===44){t[++r]=vt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ll(o)}while(o=Ve());return t},W1=function(t,n){return op(V1(rp(t),n))},uc=new WeakMap,H1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!uc.get(r))&&!o){uc.set(t,!0);for(var l=[],i=W1(n,l),a=r.props,s=0,u=0;s<i.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=l[s]?i[s].replace(/&\f/g,a[p]):a[p]+" "+i[s]}}},Q1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function lp(e,t){switch(N1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+fl+e+xe+e+e;case 6828:case 4268:return F+e+xe+e+e;case 6165:return F+e+xe+"flex-"+e+e;case 5187:return F+e+D(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return F+e+xe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return F+e+xe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+xe+D(e,"shrink","negative")+e;case 5292:return F+e+xe+D(e,"basis","preferred-size")+e;case 6060:return F+"box-"+D(e,"-grow","")+F+e+xe+D(e,"grow","positive")+e;case 4554:return F+D(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+fl+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pa(e,"stretch")?lp(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,dt(e)-3-(~Pa(e,"!important")&&10))){case 107:return D(e,":",":"+F)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(me(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return F+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+xe+e+e}return e}var Y1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $s:t.return=lp(t.value,t.length);break;case ep:return Mn([or(t,{value:D(t.value,"@","@"+F)})],o);case Is:if(t.length)return T1(t.props,function(l){switch(P1(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mn([or(t,{props:[D(l,/:(read-\w+)/,":"+fl+"$1")]})],o);case"::placeholder":return Mn([or(t,{props:[D(l,/:(plac\w+)/,":"+F+"input-$1")]}),or(t,{props:[D(l,/:(plac\w+)/,":"+fl+"$1")]}),or(t,{props:[D(l,/:(plac\w+)/,xe+"input-$1")]})],o)}return""})}},X1=[Y1],K1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var x=g.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||X1,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var x=g.getAttribute("data-emotion").split(" "),d=1;d<x.length;d++)l[x[d]]=!0;a.push(g)});var s,u=[H1,Q1];{var p,m=[F1,A1(function(g){p.insert(g)})],h=D1(u.concat(o,m)),w=function(x){return Mn(z1(x),h)};s=function(x,d,c,f){p=c,w(x?x+"{"+d.styles+"}":d.styles),f&&(v.inserted[d.name]=!0)}}var v={key:n,sheet:new S1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return v.sheet.hydrate(a),v},ip={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,zs=fe?Symbol.for("react.element"):60103,Ms=fe?Symbol.for("react.portal"):60106,$l=fe?Symbol.for("react.fragment"):60107,Ol=fe?Symbol.for("react.strict_mode"):60108,zl=fe?Symbol.for("react.profiler"):60114,Ml=fe?Symbol.for("react.provider"):60109,Fl=fe?Symbol.for("react.context"):60110,Fs=fe?Symbol.for("react.async_mode"):60111,Dl=fe?Symbol.for("react.concurrent_mode"):60111,Al=fe?Symbol.for("react.forward_ref"):60112,Ul=fe?Symbol.for("react.suspense"):60113,G1=fe?Symbol.for("react.suspense_list"):60120,Bl=fe?Symbol.for("react.memo"):60115,Vl=fe?Symbol.for("react.lazy"):60116,J1=fe?Symbol.for("react.block"):60121,Z1=fe?Symbol.for("react.fundamental"):60117,b1=fe?Symbol.for("react.responder"):60118,q1=fe?Symbol.for("react.scope"):60119;function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zs:switch(e=e.type,e){case Fs:case Dl:case $l:case zl:case Ol:case Ul:return e;default:switch(e=e&&e.$$typeof,e){case Fl:case Al:case Vl:case Bl:case Ml:return e;default:return t}}case Ms:return t}}}function ap(e){return Ye(e)===Dl}V.AsyncMode=Fs;V.ConcurrentMode=Dl;V.ContextConsumer=Fl;V.ContextProvider=Ml;V.Element=zs;V.ForwardRef=Al;V.Fragment=$l;V.Lazy=Vl;V.Memo=Bl;V.Portal=Ms;V.Profiler=zl;V.StrictMode=Ol;V.Suspense=Ul;V.isAsyncMode=function(e){return ap(e)||Ye(e)===Fs};V.isConcurrentMode=ap;V.isContextConsumer=function(e){return Ye(e)===Fl};V.isContextProvider=function(e){return Ye(e)===Ml};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs};V.isForwardRef=function(e){return Ye(e)===Al};V.isFragment=function(e){return Ye(e)===$l};V.isLazy=function(e){return Ye(e)===Vl};V.isMemo=function(e){return Ye(e)===Bl};V.isPortal=function(e){return Ye(e)===Ms};V.isProfiler=function(e){return Ye(e)===zl};V.isStrictMode=function(e){return Ye(e)===Ol};V.isSuspense=function(e){return Ye(e)===Ul};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$l||e===Dl||e===zl||e===Ol||e===Ul||e===G1||typeof e=="object"&&e!==null&&(e.$$typeof===Vl||e.$$typeof===Bl||e.$$typeof===Ml||e.$$typeof===Fl||e.$$typeof===Al||e.$$typeof===Z1||e.$$typeof===b1||e.$$typeof===q1||e.$$typeof===J1)};V.typeOf=Ye;ip.exports=V;var eg=ip.exports,sp=eg,tg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ng={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},up={};up[sp.ForwardRef]=tg;up[sp.Memo]=ng;var rg=!0;function cp(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ds=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||rg===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},fp=function(t,n,r){Ds(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function og(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var lg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ig=/[A-Z]|^ms/g,ag=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dp=function(t){return t.charCodeAt(1)===45},cc=function(t){return t!=null&&typeof t!="boolean"},Ti=U1(function(e){return dp(e)?e:e.replace(ig,"-$&").toLowerCase()}),fc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ag,function(r,o,l){return pt={name:o,styles:l,next:pt},o})}return lg[t]!==1&&!dp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Br(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return sg(e,t,n)}case"function":{if(e!==void 0){var l=pt,i=n(e);return pt=l,Br(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function sg(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Br(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":cc(i)&&(r+=Ti(l)+":"+fc(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)cc(i[a])&&(r+=Ti(l)+":"+fc(l,i[a])+";");else{var s=Br(e,t,i);switch(l){case"animation":case"animationName":{r+=Ti(l)+":"+s+";";break}default:r+=l+"{"+s+"}"}}}return r}var dc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,As=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";pt=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=Br(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=Br(r,n,t[a]),o&&(l+=i[a]);dc.lastIndex=0;for(var s="",u;(u=dc.exec(l))!==null;)s+="-"+u[1];var p=og(l)+s;return{name:p,styles:l,next:pt}},ug=function(t){return t()},cg=ji.useInsertionEffect?ji.useInsertionEffect:!1,pp=cg||ug,Us={}.hasOwnProperty,mp=S.createContext(typeof HTMLElement<"u"?K1({key:"css"}):null);mp.Provider;var hp=function(t){return S.forwardRef(function(n,r){var o=S.useContext(mp);return t(n,o,r)})},gp=S.createContext({}),Ra="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fg=function(t,n){var r={};for(var o in n)Us.call(n,o)&&(r[o]=n[o]);return r[Ra]=t,r},dg=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ds(n,r,o),pp(function(){return fp(n,r,o)}),null},pg=hp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ra],l=[r],i="";typeof e.className=="string"?i=cp(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=As(l,void 0,S.useContext(gp));i+=t.key+"-"+a.name;var s={};for(var u in e)Us.call(e,u)&&u!=="css"&&u!==Ra&&(s[u]=e[u]);return s.ref=n,s.className=i,S.createElement(S.Fragment,null,S.createElement(dg,{cache:t,serialized:a,isStringTag:typeof o=="string"}),S.createElement(o,s))}),mg=pg,hg=E.Fragment;function se(e,t,n){return Us.call(t,"css")?E.jsx(mg,fg(e,t),n):E.jsx(e,t,n)}function vp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return As(t)}var P=function(){var t=vp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},gg=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function vg(e,t,n){var r=[],o=cp(e,r,n);return r.length<2?n:o+t(r)}var yg=function(t){var n=t.cache,r=t.serializedArr;return pp(function(){for(var o=0;o<r.length;o++)fp(n,r[o],!1)}),null},Ri=hp(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];var h=As(p,t.registered);return r.push(h),Ds(t,h,!1),t.key+"-"+h.name},l=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return vg(t.registered,o,gg(p))},i={css:o,cx:l,theme:S.useContext(gp)},a=e.children(i);return n=!0,S.createElement(S.Fragment,null,S.createElement(yg,{cache:t,serializedArr:r}),a)}),wg=Object.defineProperty,xg=(e,t,n)=>t in e?wg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wo=(e,t,n)=>(xg(e,typeof t!="symbol"?t+"":t,n),n),La=new Map,xo=new WeakMap,pc=0,Sg=void 0;function kg(e){return e?(xo.has(e)||(pc+=1,xo.set(e,pc.toString())),xo.get(e)):"0"}function Eg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?kg(e.root):e[t]}`).toString()}function Cg(e){const t=Eg(e);let n=La.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},La.set(t,n)}return n}function yp(e,t,n={},r=Sg){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:l,elements:i}=Cg(n),a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),La.delete(o))}}function _g(e){return typeof e.children!="function"}var mc=class extends S.Component{constructor(e){super(e),wo(this,"node",null),wo(this,"_unobserveCb",null),wo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),wo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),_g(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=yp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:v}=this.state;return e({inView:w,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:m,...h}=this.props;return S.createElement(t||"div",{ref:this.handleNode,...h},e)}};function wp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[m,h]=S.useState(null),w=S.useRef(),[v,g]=S.useState({inView:!!a,entry:void 0});w.current=u,S.useEffect(()=>{if(i||!m)return;let f;return f=yp(m,(y,C)=>{g({inView:y,entry:C}),w.current&&w.current(y,C),C.isIntersecting&&l&&f&&(f(),f=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,s,t]);const x=(p=v.entry)==null?void 0:p.target,d=S.useRef();!m&&x&&!l&&!i&&d.current!==x&&(d.current=x,g({inView:!!a,entry:void 0}));const c=[h,v.inView,v.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var xp={exports:{}},W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Wl=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Yl=Symbol.for("react.provider"),Xl=Symbol.for("react.context"),Ng=Symbol.for("react.server_context"),Kl=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),bl=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),Sp;Sp=Symbol.for("react.module.reference");function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bs:switch(e=e.type,e){case Wl:case Ql:case Hl:case Gl:case Jl:return e;default:switch(e=e&&e.$$typeof,e){case Ng:case Xl:case Kl:case bl:case Zl:case Yl:return e;default:return t}}case Vs:return t}}}W.ContextConsumer=Xl;W.ContextProvider=Yl;W.Element=Bs;W.ForwardRef=Kl;W.Fragment=Wl;W.Lazy=bl;W.Memo=Zl;W.Portal=Vs;W.Profiler=Ql;W.StrictMode=Hl;W.Suspense=Gl;W.SuspenseList=Jl;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return et(e)===Xl};W.isContextProvider=function(e){return et(e)===Yl};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs};W.isForwardRef=function(e){return et(e)===Kl};W.isFragment=function(e){return et(e)===Wl};W.isLazy=function(e){return et(e)===bl};W.isMemo=function(e){return et(e)===Zl};W.isPortal=function(e){return et(e)===Vs};W.isProfiler=function(e){return et(e)===Ql};W.isStrictMode=function(e){return et(e)===Hl};W.isSuspense=function(e){return et(e)===Gl};W.isSuspenseList=function(e){return et(e)===Jl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wl||e===Ql||e===Hl||e===Gl||e===Jl||e===Pg||typeof e=="object"&&e!==null&&(e.$$typeof===bl||e.$$typeof===Zl||e.$$typeof===Yl||e.$$typeof===Xl||e.$$typeof===Kl||e.$$typeof===Sp||e.getModuleId!==void 0)};W.typeOf=et;xp.exports=W;var Tg=xp.exports;P`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;P`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;P`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;P`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Rg=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Lg=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jg=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ig=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$g=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ws=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Og=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zg=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mg=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fg=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dg=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ag=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ug=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Bg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ws,iterationCount:o=1}){return vp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Vg(e){return e==null}function Wg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function kp(e,t){return n=>n?e():t()}function Vr(e){return kp(e,()=>null)}function ja(e){return Vr(()=>({opacity:0}))(e)}const Ep=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=Ws,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:m,children:h,onVisibilityChange:w}=e,v=S.useMemo(()=>Bg({keyframes:i,duration:o}),[o,i]);return Vg(h)?null:Wg(h)?se(Qg,{...e,animationStyles:v,children:String(h)}):Tg.isFragment(h)?se(Cp,{...e,animationStyles:v}):se(hg,{children:S.Children.map(h,(g,x)=>{if(!S.isValidElement(g))return null;const d=r+(t?x*o*n:0);switch(g.type){case"ol":case"ul":return se(Ri,{children:({cx:c})=>se(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:se(Ep,{...e,children:g.props.children})})});case"li":return se(mc,{threshold:l,triggerOnce:a,onChange:w,children:({inView:c,ref:f})=>se(Ri,{children:({cx:y})=>se(g.type,{...g.props,ref:f,className:y(p,g.props.className),css:Vr(()=>v)(c),style:Object.assign({},m,g.props.style,ja(!c),{animationDelay:d+"ms"})})})});default:return se(mc,{threshold:l,triggerOnce:a,onChange:w,children:({inView:c,ref:f})=>se("div",{ref:f,className:s,css:Vr(()=>v)(c),style:Object.assign({},u,ja(!c),{animationDelay:d+"ms"}),children:se(Ri,{children:({cx:y})=>se(g.type,{...g.props,className:y(p,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},Hg={display:"inline-block",whiteSpace:"pre"},Qg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:m}=e,{ref:h,inView:w}=wp({triggerOnce:a,threshold:i,onChange:m});return kp(()=>se("div",{ref:h,className:s,style:Object.assign({},u,Hg),children:p.split("").map((v,g)=>se("span",{css:Vr(()=>t)(w),style:{animationDelay:o+g*l*r+"ms"},children:v},g))}),()=>se(Cp,{...e,children:p}))(n)},Cp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:s,inView:u}=wp({triggerOnce:r,threshold:n,onChange:a});return se("div",{ref:s,className:o,css:Vr(()=>t)(u),style:Object.assign({},l,ja(!u)),children:i})};P`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;P`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Yg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Xg=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Kg=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Jg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Zg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,bg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,qg=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ev=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,tv=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,nv=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,rv=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ov=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lv(e,t,n){switch(n){case"bottom-left":return t?Xg:Lg;case"bottom-right":return t?Kg:jg;case"down":return e?t?Jg:$g:t?Gg:Ig;case"left":return e?t?bg:Og:t?Zg:Ws;case"right":return e?t?ev:Mg:t?qg:zg;case"top-left":return t?tv:Fg;case"top-right":return t?nv:Dg;case"up":return e?t?ov:Ug:t?rv:Ag;default:return t?Yg:Rg}}const Ia=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=S.useMemo(()=>lv(t,r,n),[t,n,r]);return se(Ep,{keyframes:l,...o})};P`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;P`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;P`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const iv=()=>E.jsx("div",{className:"overflow-hidden flex flex-col lg:flex-row items-start lg:items-start mt-7 mb-114 py-1",children:E.jsxs("div",{className:"container mx-auto grid grid-cols-12 items-center justify-center",children:[E.jsx("div",{className:"col-span-12 lg:col-span-6 px-2 flex flex-col justify-center items-center",children:E.jsx("div",{className:"w-[356px] max-w-full bg-border-gradient rounded-full  light-border-effect",children:E.jsx("img",{src:y1,alt:"",className:"w-full h-auto rounded-full"})})}),E.jsx(Ia,{direction:"down",cascade:!0,damping:.1,duration:1e3,className:"col-span-12 lg:col-span-6 px-2 flex flex-col justify-center items-start lg:items-center",children:E.jsxs("div",{children:[E.jsx("h1",{className:"text-white font-poppins text-4xl font-semibold leading-tight tracking-wide",children:"Rafael Carvalho"}),E.jsx("span",{className:"text-white font-poppins text-lg font-normal leading-relaxed tracking-widest",children:"Desenvolvedor Front-end"}),E.jsxs("p",{className:"mt-10 w-full text-white font-poppins text-lg font-normal leading-relaxed tracking-widest",children:["Atuo em Tecnologia da Informação desde 2020, com experiência em Infraestrutura, Implantação de Sistemas e atualmente sou desenvolvedor. Trabalho com ",E.jsx("strong",{className:"font-semibold",children:"Next"}),", ",E.jsx("strong",{className:"font-semibold",children:"React"}),", ",E.jsx("strong",{className:"font-semibold",children:"PHP"})," e criação de temas e plugins em ",E.jsx("strong",{className:"font-semibold",children:"WordPress"}),". Tenho vivência em ",E.jsx("strong",{className:"font-semibold",children:"Java"}),", ",E.jsx("strong",{className:"font-semibold",children:"Oracle (SQL)"}),", ",E.jsx("strong",{className:"font-semibold",children:"Javascript"}),", ",E.jsx("strong",{className:"font-semibold",children:"jQuery"}),"."]})]})})]})}),av="/projects/logoCafeteria.webp",sv="/projects/logoPokebola.png",uv="/projects/PreviewCafeteriaSoZe.gif",cv=()=>{const e=Zr(),t=[{name:"Cafeteria Sô Zé",image:av,url:`${e.pathname}Cafeteria_So_Ze`,preview:uv},{name:"Pokedex",image:sv,url:`${e.pathname}react_pokedex`}];return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"flex justify-center align-center mt-24",children:E.jsx("div",{className:"col-12 flex justify-center align-center mb-10",children:E.jsx("h2",{className:"text-white font-poppins text-32 font-normal leading-normal tracking-wider",children:"Meus Projetos"})})}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10",children:t.map((n,r)=>E.jsxs("div",{className:"card relative z-10 bg-white group",children:[E.jsx("img",{src:n.image,alt:`Foto do projeto ${n.name}`,className:"w-full h-full object-cover"}),E.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-0",children:[E.jsx("h3",{className:"absolute text-white font-poppins text-2xl font-normal leading-normal transform translate-y-[-30px] group-hover:translate-y-[-50px] transition-transform duration-1000",children:n.name}),E.jsx(Dr,{to:n.url,className:"rounded font-poppins text-lg font-medium py-1 px-2 border-2 border-gray-400 mt-62 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:"Ver Projeto"})]})]},r))})]})},fv="/languages/javascript.png",dv="/languages/react.png",pv="/languages/typescript.png",mv="/languages/sass.png",hv="/languages/wordpress.png",gv="/languages/node.png",vv="/languages/php.png",hc="/languages/pequeno-tra%C3%A7o.svg",yv=()=>{const e={Sass:{name:"Sass",image:mv},Node:{name:"Node",image:gv},Javascript:{name:"JavaScript",image:fv},React:{name:"ReactJS",image:dv},PHP:{name:"PHP",image:vv},Wordpress:{name:"Wordpress",image:hv},TypeScript:{name:"TypeScript",image:pv}};return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"container mx-auto flex flex-col items-center space-y-10",children:E.jsx("h2",{className:"text-white font-poppins text-32 font-normal mb-10 tracking-wider",children:"Minhas Skills"})}),E.jsxs("div",{className:"hidden lg:flex justify-center space-x-12 mx-12",children:[E.jsx("img",{src:hc,alt:"Traço"}),E.jsx("div",{className:"container mx-auto flex flex-col items-center space-y-10",children:E.jsx("div",{className:"col-span-12 flex justify-center space-x-12",children:Object.entries(e).map(([t,n],r)=>E.jsx(Ia,{direction:"left",damping:.1,duration:1e3+r*200,children:E.jsx(Dr,{to:n.name,target:"_blank",children:E.jsx("img",{src:n.image,alt:t,className:""})})},r))})}),E.jsx("img",{src:hc,alt:"Traço"})]}),E.jsx("div",{className:"lg:hidden mx-12",children:E.jsx("div",{className:"container mx-auto flex flex-wrap justify-center gap-4",children:Object.entries(e).map(([t,n],r)=>E.jsx(Ia,{direction:"left",damping:.1,duration:1e3+r*200,children:E.jsx("div",{className:"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-center",children:E.jsx(Dr,{to:n.name,target:"_blank",children:E.jsx("img",{src:n.image,alt:t,className:"w-full max-w-xs"})})})},r))})})]})},wv="/social%20media%20icons/github.svg",xv="/social%20media%20icons/linkedin.svg",Sv="/social%20media%20icons/instagram.svg",kv="/social%20media%20icons/whatsapp.svg",Ev="/social%20media%20icons/email.svg";function _p(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=_p(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Dt(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=_p(e))&&(r&&(r+=" "),r+=t);return r}const Wr=e=>typeof e=="number"&&!isNaN(e),an=e=>typeof e=="string",Ue=e=>typeof e=="function",Do=e=>an(e)||Ue(e)?e:null,$a=e=>S.isValidElement(e)||an(e)||Ue(e)||Wr(e);function Cv(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function ql(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:l=300}=e;return function(i){let{children:a,position:s,preventExitTransition:u,done:p,nodeRef:m,isIn:h,playToast:w}=i;const v=r?`${t}--${s}`:t,g=r?`${n}--${s}`:n,x=S.useRef(0);return S.useLayoutEffect(()=>{const d=m.current,c=v.split(" "),f=y=>{y.target===m.current&&(w(),d.removeEventListener("animationend",f),d.removeEventListener("animationcancel",f),x.current===0&&y.type!=="animationcancel"&&d.classList.remove(...c))};d.classList.add(...c),d.addEventListener("animationend",f),d.addEventListener("animationcancel",f)},[]),S.useEffect(()=>{const d=m.current,c=()=>{d.removeEventListener("animationend",c),o?Cv(d,p,l):p()};h||(u?c():(x.current=1,d.className+=` ${g}`,d.addEventListener("animationend",c)))},[h]),H.createElement(H.Fragment,null,a)}}function gc(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const _e=new Map;let Hr=[];const Oa=new Set,_v=e=>Oa.forEach(t=>t(e)),Np=()=>_e.size>0;function Pp(e,t){var n;if(t)return!((n=_e.get(t))==null||!n.isToastActive(e));let r=!1;return _e.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function Tp(e,t){$a(e)&&(Np()||Hr.push({content:e,options:t}),_e.forEach(n=>{n.buildToast(e,t)}))}function vc(e,t){_e.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Nv(e){const{subscribe:t,getSnapshot:n,setProps:r}=S.useRef(function(l){const i=l.containerId||1;return{subscribe(a){const s=function(p,m,h){let w=1,v=0,g=[],x=[],d=[],c=m;const f=new Map,y=new Set,C=()=>{d=Array.from(f.values()),y.forEach(N=>N())},T=N=>{x=N==null?[]:x.filter($=>$!==N),C()},k=N=>{const{toastId:$,onOpen:j,updateId:ee,children:Re}=N.props,Xe=ee==null;N.staleId&&f.delete(N.staleId),f.set($,N),x=[...x,N.props.toastId].filter(tt=>tt!==N.staleId),C(),h(gc(N,Xe?"added":"updated")),Xe&&Ue(j)&&j(S.isValidElement(Re)&&Re.props)};return{id:p,props:c,observe:N=>(y.add(N),()=>y.delete(N)),toggle:(N,$)=>{f.forEach(j=>{$!=null&&$!==j.props.toastId||Ue(j.toggle)&&j.toggle(N)})},removeToast:T,toasts:f,clearQueue:()=>{v-=g.length,g=[]},buildToast:(N,$)=>{if((U=>{let{containerId:de,toastId:le,updateId:Le}=U;const Ee=de?de!==p:p!==1,ut=f.has(le)&&Le==null;return Ee||ut})($))return;const{toastId:j,updateId:ee,data:Re,staleId:Xe,delay:tt}=$,Tt=()=>{T(j)},Rt=ee==null;Rt&&v++;const Fe={...c,style:c.toastStyle,key:w++,...Object.fromEntries(Object.entries($).filter(U=>{let[de,le]=U;return le!=null})),toastId:j,updateId:ee,data:Re,closeToast:Tt,isIn:!1,className:Do($.className||c.toastClassName),bodyClassName:Do($.bodyClassName||c.bodyClassName),progressClassName:Do($.progressClassName||c.progressClassName),autoClose:!$.isLoading&&(R=$.autoClose,I=c.autoClose,R===!1||Wr(R)&&R>0?R:I),deleteToast(){const U=f.get(j),{onClose:de,children:le}=U.props;Ue(de)&&de(S.isValidElement(le)&&le.props),h(gc(U,"removed")),f.delete(j),v--,v<0&&(v=0),g.length>0?k(g.shift()):C()}};var R,I;Fe.closeButton=c.closeButton,$.closeButton===!1||$a($.closeButton)?Fe.closeButton=$.closeButton:$.closeButton===!0&&(Fe.closeButton=!$a(c.closeButton)||c.closeButton);let O=N;S.isValidElement(N)&&!an(N.type)?O=S.cloneElement(N,{closeToast:Tt,toastProps:Fe,data:Re}):Ue(N)&&(O=N({closeToast:Tt,toastProps:Fe,data:Re}));const A={content:O,props:Fe,staleId:Xe};c.limit&&c.limit>0&&v>c.limit&&Rt?g.push(A):Wr(tt)?setTimeout(()=>{k(A)},tt):k(A)},setProps(N){c=N},setToggle:(N,$)=>{f.get(N).toggle=$},isToastActive:N=>x.some($=>$===N),getSnapshot:()=>c.newestOnTop?d.reverse():d}}(i,l,_v);_e.set(i,s);const u=s.observe(a);return Hr.forEach(p=>Tp(p.content,p.options)),Hr=[],()=>{u(),_e.delete(i)}},setProps(a){var s;(s=_e.get(i))==null||s.setProps(a)},getSnapshot(){var a;return(a=_e.get(i))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=S.useSyncExternalStore(t,n,n);return{getToastToRender:function(l){if(!o)return[];const i=new Map;return o.forEach(a=>{const{position:s}=a.props;i.has(s)||i.set(s,[]),i.get(s).push(a)}),Array.from(i,a=>l(a[0],a[1]))},isToastActive:Pp,count:o==null?void 0:o.length}}function Pv(e){const[t,n]=S.useState(!1),[r,o]=S.useState(!1),l=S.useRef(null),i=S.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:s,closeToast:u,onClick:p,closeOnClick:m}=e;var h,w;function v(){n(!0)}function g(){n(!1)}function x(f){const y=l.current;i.canDrag&&y&&(i.didMove=!0,t&&g(),i.delta=e.draggableDirection==="x"?f.clientX-i.start:f.clientY-i.start,i.start!==f.clientX&&(i.canCloseOnClick=!1),y.style.transform=`translate3d(${e.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`},0)`,y.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function d(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",d);const f=l.current;if(i.canDrag&&i.didMove&&f){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();f.style.transition="transform 0.2s, opacity 0.2s",f.style.removeProperty("transform"),f.style.removeProperty("opacity")}}(w=_e.get((h={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||w.setToggle(h.id,h.fn),S.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",v),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",g)}},[e.pauseOnFocusLoss]);const c={onPointerDown:function(f){if(e.draggable===!0||e.draggable===f.pointerType){i.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",d);const y=l.current;i.canCloseOnClick=!0,i.canDrag=!0,y.style.transition="none",e.draggableDirection==="x"?(i.start=f.clientX,i.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(i.start=f.clientY,i.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(f){const{top:y,bottom:C,left:T,right:k}=l.current.getBoundingClientRect();f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&f.clientX>=T&&f.clientX<=k&&f.clientY>=y&&f.clientY<=C?g():v()}};return a&&s&&(c.onMouseEnter=g,e.stacked||(c.onMouseLeave=v)),m&&(c.onClick=f=>{p&&p(f),i.canCloseOnClick&&u()}),{playToast:v,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:l,eventHandlers:c}}function Tv(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:l,className:i,style:a,controlledProgress:s,progress:u,rtl:p,isIn:m,theme:h}=e;const w=l||s&&u===0,v={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};s&&(v.transform=`scaleX(${u})`);const g=Dt("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":p}),x=Ue(i)?i({rtl:p,type:o,defaultClassName:g}):Dt(g,i),d={[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{m&&r()}};return H.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},H.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${o}`}),H.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:x,style:v,...d}))}let Rv=1;const Rp=()=>""+Rv++;function Lv(e){return e&&(an(e.toastId)||Wr(e.toastId))?e.toastId:Rp()}function yr(e,t){return Tp(e,t),t.toastId}function dl(e,t){return{...t,type:t&&t.type||e,toastId:Lv(t)}}function So(e){return(t,n)=>yr(t,dl(e,n))}function Q(e,t){return yr(e,dl("default",t))}Q.loading=(e,t)=>yr(e,dl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Q.promise=function(e,t,n){let r,{pending:o,error:l,success:i}=t;o&&(r=an(o)?Q.loading(o,n):Q.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(p,m,h)=>{if(m==null)return void Q.dismiss(r);const w={type:p,...a,...n,data:h},v=an(m)?{render:m}:m;return r?Q.update(r,{...w,...v}):Q(v.render,{...w,...v}),h},u=Ue(e)?e():e;return u.then(p=>s("success",i,p)).catch(p=>s("error",l,p)),u},Q.success=So("success"),Q.info=So("info"),Q.error=So("error"),Q.warning=So("warning"),Q.warn=Q.warning,Q.dark=(e,t)=>yr(e,dl("default",{theme:"dark",...t})),Q.dismiss=function(e){(function(t){var n;if(Np()){if(t==null||an(n=t)||Wr(n))_e.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=_e.get(t.containerId);r?r.removeToast(t.id):_e.forEach(o=>{o.removeToast(t.id)})}}else Hr=Hr.filter(r=>t!=null&&r.options.toastId!==t)})(e)},Q.clearWaitingQueue=function(e){e===void 0&&(e={}),_e.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},Q.isActive=Pp,Q.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var l;let{containerId:i}=o;return(l=_e.get(i||1))==null?void 0:l.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,l={delay:100,...r,...t,toastId:t.toastId||e,updateId:Rp()};l.toastId!==e&&(l.staleId=e);const i=l.render||o;delete l.render,yr(i,l)}},Q.done=e=>{Q.update(e,{progress:1})},Q.onChange=function(e){return Oa.add(e),()=>{Oa.delete(e)}},Q.play=e=>vc(!0,e),Q.pause=e=>vc(!1,e);const jv=typeof window<"u"?S.useLayoutEffect:S.useEffect,ko=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return H.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},Li={info:function(e){return H.createElement(ko,{...e},H.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return H.createElement(ko,{...e},H.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return H.createElement(ko,{...e},H.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return H.createElement(ko,{...e},H.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return H.createElement("div",{className:"Toastify__spinner"})}},Iv=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:l}=Pv(e),{closeButton:i,children:a,autoClose:s,onClick:u,type:p,hideProgressBar:m,closeToast:h,transition:w,position:v,className:g,style:x,bodyClassName:d,bodyStyle:c,progressClassName:f,progressStyle:y,updateId:C,role:T,progress:k,rtl:N,toastId:$,deleteToast:j,isIn:ee,isLoading:Re,closeOnClick:Xe,theme:tt}=e,Tt=Dt("Toastify__toast",`Toastify__toast-theme--${tt}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":Xe}),Rt=Ue(g)?g({rtl:N,position:v,type:p,defaultClassName:Tt}):Dt(Tt,g),Fe=function(A){let{theme:U,type:de,isLoading:le,icon:Le}=A,Ee=null;const ut={theme:U,type:de};return Le===!1||(Ue(Le)?Ee=Le({...ut,isLoading:le}):S.isValidElement(Le)?Ee=S.cloneElement(Le,ut):le?Ee=Li.spinner():(Lp=>Lp in Li)(de)&&(Ee=Li[de](ut))),Ee}(e),R=!!k||!s,I={closeToast:h,type:p,theme:tt};let O=null;return i===!1||(O=Ue(i)?i(I):S.isValidElement(i)?S.cloneElement(i,I):function(A){let{closeToast:U,theme:de,ariaLabel:le="close"}=A;return H.createElement("button",{className:`Toastify__close-button Toastify__close-button--${de}`,type:"button",onClick:Le=>{Le.stopPropagation(),U(Le)},"aria-label":le},H.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},H.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(I)),H.createElement(w,{isIn:ee,done:j,position:v,preventExitTransition:n,nodeRef:r,playToast:l},H.createElement("div",{id:$,onClick:u,"data-in":ee,className:Rt,...o,style:x,ref:r},H.createElement("div",{...ee&&{role:T},className:Ue(d)?d({type:p}):Dt("Toastify__toast-body",d),style:c},Fe!=null&&H.createElement("div",{className:Dt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Re})},Fe),H.createElement("div",null,a)),O,H.createElement(Tv,{...C&&!R?{key:`pb-${C}`}:{},rtl:N,theme:tt,delay:s,isRunning:t,isIn:ee,closeToast:h,hide:m,type:p,style:y,className:f,controlledProgress:R,progress:k||0})))},ei=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},$v=ql(ei("bounce",!0));ql(ei("slide",!0));ql(ei("zoom"));ql(ei("flip"));const Ov={position:"top-right",transition:$v,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function zv(e){let t={...Ov,...e};const n=e.stacked,[r,o]=S.useState(!0),l=S.useRef(null),{getToastToRender:i,isToastActive:a,count:s}=Nv(t),{className:u,style:p,rtl:m,containerId:h}=t;function w(g){const x=Dt("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":m});return Ue(u)?u({position:g,rtl:m,defaultClassName:x}):Dt(x,Do(u))}function v(){n&&(o(!0),Q.play())}return jv(()=>{if(n){var g;const x=l.current.querySelectorAll('[data-in="true"]'),d=12,c=(g=t.position)==null?void 0:g.includes("top");let f=0,y=0;Array.from(x).reverse().forEach((C,T)=>{const k=C;k.classList.add("Toastify__toast--stacked"),T>0&&(k.dataset.collapsed=`${r}`),k.dataset.pos||(k.dataset.pos=c?"top":"bot");const N=f*(r?.2:1)+(r?0:d*T);k.style.setProperty("--y",`${c?N:-1*N}px`),k.style.setProperty("--g",`${d}`),k.style.setProperty("--s",""+(1-(r?y:0))),f+=k.offsetHeight,y+=.025})}},[r,s,n]),H.createElement("div",{ref:l,className:"Toastify",id:h,onMouseEnter:()=>{n&&(o(!1),Q.pause())},onMouseLeave:v},i((g,x)=>{const d=x.length?{...p}:{...p,pointerEvents:"none"};return H.createElement("div",{className:w(g),style:d,key:`container-${g}`},x.map(c=>{let{content:f,props:y}=c;return H.createElement(Iv,{...y,stacked:n,collapseAll:v,isIn:a(y.toastId,y.containerId),style:y.style,key:`toast-${y.key}`},f)}))}))}const Mv=()=>{const e={Github:{name:"Github",url:"https://github.com/LeafCarvalho",img:wv},LinkedIn:{name:"LinkedIn",url:"https://www.linkedin.com/in/rafaelcarvalhosl/",img:xv},Instagram:{name:"Instagram",url:"https://www.instagram.com/dev_filosofo/",img:Sv}},t={WhatsApp:{name:"WhatsApp",url:"https://api.whatsapp.com/send?phone=31980540274&text=Ol%C3%A1,%20Rafael!%20Tudo%20bem?",img:kv},Email:{name:"Email",endereco:"rafaeldecarvalhodasilva01@yahoo.com.br",img:Ev}},n=()=>{navigator.clipboard.writeText(t.Email.endereco).then(()=>{Q.info("Email copiado para área de transferência!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(r=>console.error("Erro ao copiar email: ",r))};return E.jsx("div",{className:"bg-backgroundHeader border-borderColor border-b-2 border-solid text-white p-4 sticky flex justify-center",children:E.jsxs("div",{className:"container flex flex-col-reverse sm:flex-row justify-between",children:[E.jsx("div",{className:"flex flex-row space-x-7 justify-center sm:justify-start",children:Object.entries(t).map(([r,o],l)=>o.name==="Email"?E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:n,className:"flex items-center",children:[E.jsx("img",{src:o.img,alt:r,className:"mr-2"}),E.jsx("span",{className:"tracking-widest",children:o.name})]},l),E.jsx(zv,{})]}):E.jsxs(Dr,{to:o.url,target:"_blank",className:"flex items-center",children:[E.jsx("img",{src:o.img,alt:r,className:"mr-2"}),E.jsx("span",{className:"tracking-widest",children:o.name})]},l))}),E.jsx("div",{className:"flex flex-row space-x-7 justify-center sm:justify-start sm:mb-0 mb-4 sm:mt-0",children:Object.entries(e).map(([r,o],l)=>E.jsxs(Dr,{to:o.url,target:"_blank",className:"flex items-center",children:[E.jsx("img",{src:o.img,alt:r,className:"mr-2"}),E.jsx("span",{className:"tracking-widest",children:o.name})]},l))})]})})};function Fv(){return E.jsxs(E.Fragment,{children:[E.jsx(Mv,{}),E.jsx(iv,{}),E.jsx(yv,{}),E.jsx(cv,{}),E.jsx(v1,{})]})}const Dv=Id(document.getElementById("root"));Dv.render(E.jsx(e1,{children:E.jsx(Xh,{children:E.jsx(Hd,{path:"/",element:E.jsx(Fv,{})})})}));
