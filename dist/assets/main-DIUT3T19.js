(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();function C(e){var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){return t.reject(r)})})}function D(e){var t=this;return new t(function(r,s){if(!(e&&typeof e.length<"u"))return s(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(e);if(i.length===0)return r([]);var n=i.length;function c(l,o){if(o&&(typeof o=="object"||typeof o=="function")){var a=o.then;if(typeof a=="function"){a.call(o,function(u){c(l,u)},function(u){i[l]={status:"rejected",reason:u},--n===0&&r(i)});return}}i[l]={status:"fulfilled",value:o},--n===0&&r(i)}for(var f=0;f<i.length;f++)c(f,i[f])})}function j(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}j.prototype=Error.prototype;function U(e){var t=this;return new t(function(r,s){if(!(e&&typeof e.length<"u"))return s(new TypeError("Promise.any accepts an array"));var i=Array.prototype.slice.call(e);if(i.length===0)return s();for(var n=[],c=0;c<i.length;c++)try{t.resolve(i[c]).then(r).catch(function(f){n.push(f),n.length===i.length&&s(new j(n,"All promises were rejected"))})}catch(f){s(f)}})}var G=setTimeout;function k(e){return!!(e&&typeof e.length<"u")}function K(){}function V(e,t){return function(){e.apply(t,arguments)}}function d(e){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if(typeof e!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],H(e,this)}function q(e,t){for(;e._state===3;)e=e._value;if(e._state===0){e._deferreds.push(t);return}e._handled=!0,d._immediateFn(function(){var r=e._state===1?t.onFulfilled:t.onRejected;if(r===null){(e._state===1?x:P)(t.promise,e._value);return}var s;try{s=r(e._value)}catch(i){P(t.promise,i);return}x(t.promise,s)})}function x(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(typeof t=="object"||typeof t=="function")){var r=t.then;if(t instanceof d){e._state=3,e._value=t,O(e);return}else if(typeof r=="function"){H(V(r,t),e);return}}e._state=1,e._value=t,O(e)}catch(s){P(e,s)}}function P(e,t){e._state=2,e._value=t,O(e)}function O(e){e._state===2&&e._deferreds.length===0&&d._immediateFn(function(){e._handled||d._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)q(e,e._deferreds[t]);e._deferreds=null}function W(e,t,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.promise=r}function H(e,t){var r=!1;try{e(function(s){r||(r=!0,x(t,s))},function(s){r||(r=!0,P(t,s))})}catch(s){if(r)return;r=!0,P(t,s)}}d.prototype.catch=function(e){return this.then(null,e)};d.prototype.then=function(e,t){var r=new this.constructor(K);return q(this,new W(e,t,r)),r};d.prototype.finally=C;d.all=function(e){return new d(function(t,r){if(!k(e))return r(new TypeError("Promise.all accepts an array"));var s=Array.prototype.slice.call(e);if(s.length===0)return t([]);var i=s.length;function n(f,l){try{if(l&&(typeof l=="object"||typeof l=="function")){var o=l.then;if(typeof o=="function"){o.call(l,function(a){n(f,a)},r);return}}s[f]=l,--i===0&&t(s)}catch(a){r(a)}}for(var c=0;c<s.length;c++)n(c,s[c])})};d.any=U;d.allSettled=D;d.resolve=function(e){return e&&typeof e=="object"&&e.constructor===d?e:new d(function(t){t(e)})};d.reject=function(e){return new d(function(t,r){r(e)})};d.race=function(e){return new d(function(t,r){if(!k(e))return r(new TypeError("Promise.race accepts an array"));for(var s=0,i=e.length;s<i;s++)d.resolve(e[s]).then(t,r)})};d._immediateFn=typeof setImmediate=="function"&&function(e){setImmediate(e)}||function(e){G(e,0)};d._unhandledRejectionFn=function(t){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var w=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}();typeof w.Promise!="function"?w.Promise=d:(w.Promise.prototype.finally||(w.Promise.prototype.finally=C),w.Promise.allSettled||(w.Promise.allSettled=D),w.Promise.any||(w.Promise.any=U));var m=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof global<"u"&&global||{},b={searchParams:"URLSearchParams"in m,iterable:"Symbol"in m&&"iterator"in Symbol,blob:"FileReader"in m&&"Blob"in m&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in m,arrayBuffer:"ArrayBuffer"in m};function Z(e){return e&&DataView.prototype.isPrototypeOf(e)}if(b.arrayBuffer)var X=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],Q=ArrayBuffer.isView||function(e){return e&&X.indexOf(Object.prototype.toString.call(e))>-1};function T(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function S(e){return typeof e!="string"&&(e=String(e)),e}function F(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){if(t.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}y.prototype.append=function(e,t){e=T(e),t=S(t);var r=this.map[e];this.map[e]=r?r+", "+t:t};y.prototype.delete=function(e){delete this.map[T(e)]};y.prototype.get=function(e){return e=T(e),this.has(e)?this.map[e]:null};y.prototype.has=function(e){return this.map.hasOwnProperty(T(e))};y.prototype.set=function(e,t){this.map[T(e)]=S(t)};y.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)};y.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),F(e)};y.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),F(e)};y.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),F(e)};b.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function L(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}}function M(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function J(e){var t=new FileReader,r=M(t);return t.readAsArrayBuffer(e),r}function Y(e){var t=new FileReader,r=M(t),s=/charset=([A-Za-z0-9_-]+)/.exec(e.type),i=s?s[1]:"utf-8";return t.readAsText(e,i),r}function ee(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}function R(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function N(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:b.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:b.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():b.arrayBuffer&&b.blob&&Z(e)?(this._bodyArrayBuffer=R(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):b.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||Q(e))?this._bodyArrayBuffer=R(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=L(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=L(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(b.blob)return this.blob().then(J);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var e=L(this);if(e)return e;if(this._bodyBlob)return Y(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ee(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(ne)}),this.json=function(){return this.text().then(JSON.parse)},this}var te=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function re(e){var t=e.toUpperCase();return te.indexOf(t)>-1?t:e}function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new y(t.headers)),this.method=re(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in m){var n=new AbortController;return n.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+new Date().getTime());else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})};function ne(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),i=s.shift().replace(/\+/g," "),n=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(n))}}),t}function oe(e){var t=new y,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(s){return s.indexOf(`
`)===0?s.substr(1,s.length):s}).forEach(function(s){var i=s.split(":"),n=i.shift().trim();if(n){var c=i.join(":").trim();try{t.append(n,c)}catch(f){console.warn("Response "+f.message)}}}),t}N.call(_.prototype);function v(e,t){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}N.call(v.prototype);v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})};v.error=function(){var e=new v(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var se=[301,302,303,307,308];v.redirect=function(e,t){if(se.indexOf(t)===-1)throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})};var A=m.DOMException;try{new A}catch{A=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},A.prototype=Object.create(Error.prototype),A.prototype.constructor=A}function z(e,t){return new Promise(function(r,s){var i=new _(e,t);if(i.signal&&i.signal.aborted)return s(new A("Aborted","AbortError"));var n=new XMLHttpRequest;function c(){n.abort()}n.onload=function(){var o={statusText:n.statusText,headers:oe(n.getAllResponseHeaders()||"")};i.url.indexOf("file://")===0&&(n.status<200||n.status>599)?o.status=200:o.status=n.status,o.url="responseURL"in n?n.responseURL:o.headers.get("X-Request-URL");var a="response"in n?n.response:n.responseText;setTimeout(function(){r(new v(a,o))},0)},n.onerror=function(){setTimeout(function(){s(new TypeError("Network request failed"))},0)},n.ontimeout=function(){setTimeout(function(){s(new TypeError("Network request timed out"))},0)},n.onabort=function(){setTimeout(function(){s(new A("Aborted","AbortError"))},0)};function f(o){try{return o===""&&m.location.href?m.location.href:o}catch{return o}}if(n.open(i.method,f(i.url),!0),i.credentials==="include"?n.withCredentials=!0:i.credentials==="omit"&&(n.withCredentials=!1),"responseType"in n&&(b.blob?n.responseType="blob":b.arrayBuffer&&(n.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof y||m.Headers&&t.headers instanceof m.Headers)){var l=[];Object.getOwnPropertyNames(t.headers).forEach(function(o){l.push(T(o)),n.setRequestHeader(o,S(t.headers[o]))}),i.headers.forEach(function(o,a){l.indexOf(a)===-1&&n.setRequestHeader(a,o)})}else i.headers.forEach(function(o,a){n.setRequestHeader(a,o)});i.signal&&(i.signal.addEventListener("abort",c),n.onreadystatechange=function(){n.readyState===4&&i.signal.removeEventListener("abort",c)}),n.send(typeof i._bodyInit>"u"?null:i._bodyInit)})}z.polyfill=!0;m.fetch||(m.fetch=z,m.Headers=y,m.Request=_,m.Response=v);document.addEventListener("DOMContentLoaded",()=>{const e={name:document.getElementById("nameInput"),email:document.getElementById("emailInput"),phone:document.getElementById("phoneInput"),title:document.getElementById("titleInput"),company:document.getElementById("companyInput"),scale:document.getElementById("scaleInput"),buttonSubmit:document.getElementById("submitBtn"),elementSuccess:document.getElementById("button-success")},t={name:document.getElementById("errorName"),email:document.getElementById("errorEmail"),phone:document.getElementById("errorPhone"),title:document.getElementById("errorTitle"),company:document.getElementById("errorCompany")},r="Không được để trống ",s=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,i=/^0\d{9,10}$/,n=(l,o,a)=>l?(o.style.display="none",a.style.borderColor="#F4F6F8",!0):(o.innerText=r,a.style.borderColor="red",o.style.display="block",!1);e.elementSuccess&&e.elementSuccess.addEventListener("click",()=>{document.getElementById("modal-success").classList.add("hidden"),document.getElementById("overlay-success").style.opacity=0,document.getElementById("wrapper-success").style.opacity=0});const c=l=>{if(!l)t.email.innerText=r;else if(!s.test(l))t.email.innerText="Email không hợp lệ";else return t.email.style.display="none",e.email.style.borderColor="#F4F6F8",!0;return e.email.style.borderColor="red",t.email.style.display="block",!1},f=l=>{if(!l)t.phone.innerText=r;else if(!i.test(l))t.phone.innerText="Số điện thoại không hợp lệ";else return t.phone.style.display="none",e.phone.style.borderColor="#F4F6F8",!0;return e.phone.style.borderColor="red",t.phone.style.display="block",!1};e.name.addEventListener("blur",l=>n(l.target.value,t.name,e.name)),e.email.addEventListener("blur",l=>c(l.target.value)),e.phone.addEventListener("blur",l=>f(l.target.value)),e.title.addEventListener("blur",l=>n(l.target.value,t.title,e.title)),e.company.addEventListener("blur",l=>n(l.target.value,t.company,e.company)),e.buttonSubmit.addEventListener("click",l=>{l.preventDefault();const o=document.getElementById("isLoading"),a=document.getElementById("content-submit"),u=document.getElementById("modal-success"),h=document.getElementById("modal-form"),p=n(e.name.value,t.name,e.name),g=c(e.email.value),E=f(e.phone.value),B=n(e.title.value,t.title,e.title),I=n(e.company.value,t.company,e.company);p&&g&&E&&B&&I&&(o.style.display="block",a.style.display="none",fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmwhKV6tnRFg9jadylw2a8AiEVgpHT_E3p5_OwwWR6Rz-OMQ/formResponse",{method:"POST",body:new URLSearchParams({"entry.2067157562":e.name.value,"entry.1204097896":e.email.value,"entry.1401283432":e.phone.value,"entry.425009858":e.title.value,"entry.636440658":e.company.value,"entry.234823845":e.scale.value}),mode:"no-cors",redirect:"follow",referrer:"no-referrer"}).then(()=>{o.style.display="none",a.style.display="block",u.classList.remove("hidden"),document.getElementById("overlay-success").style.opacity=.5,document.getElementById("wrapper-success").style.opacity=1,h.classList.add("hidden"),e.buttonSubmit.disabled=!0}).catch($=>{console.error("Error submitting form:",$),o.style.display="none",a.style.display="block"}).finally(()=>{e.buttonSubmit.disabled=!1}))})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-language"),t=document.querySelector(".content-language");e.addEventListener("click",function(r){t.classList.toggle("active-language"),r.stopPropagation()}),window.addEventListener("click",function(r){!t.contains(r.target)&&!e.contains(r.target)&&t.classList.remove("active-language")})});const ie=(()=>{var e={},t={speedOpen:50,speedClose:250,toggleClass:"hidden",selectorTarget:"[data-modal-target]",selectorTrigger:"[data-modal-trigger]",selectorClose:"[data-modal-close]",selectorOverlay:"[data-modal-overlay]",selectorWrapper:"[data-modal-wrapper]",selectorInputFocus:"[data-modal-input-focus]"};Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(l){var o=this,a=this;if(!document.documentElement.contains(o))return null;do{if(a.matches(l))return a;a=a.parentElement}while(a!==null);return null});function r(l){var o=l.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),a=o[0],u=o[o.length-1],h=9;l.addEventListener("keydown",function(p){var g=p.key==="Tab"||p.keyCode===h;g&&(p.shiftKey?document.activeElement===a&&(u.focus(),p.preventDefault()):document.activeElement===u&&(a.focus(),p.preventDefault()))})}var s=function(l){l.getAttribute("aria-expanded")==="true"?l.setAttribute("aria-expanded",!1):l.setAttribute("aria-expanded",!0)},i=function(l,o){var a=o;if(typeof l=="string"&&(a=document.getElementById(l),a&&a.setAttribute("data-auto-trigger","")),!!a){var u=a.querySelector(t.selectorOverlay),h=a.querySelector(t.selectorWrapper),p=a.querySelector(t.selectorInputFocus);a.classList.remove(t.toggleClass),document.documentElement.style.overflow="hidden",typeof l!="string"&&s(l),setTimeout(function(){if(u){var g=u.getAttribute("data-class-in").split(" "),E=u.getAttribute("data-class-out").split(" ");u.classList.remove(...E),u.classList.add(...g)}if(h){var B=h.getAttribute("data-class-in").split(" "),I=h.getAttribute("data-class-out").split(" ");h.classList.remove(...I),h.classList.add(...B)}p&&p.focus(),r(a)},t.speedOpen)}},n=function(l){var o=l.closest(t.selectorTarget),a=document.querySelector('[aria-controls="'+o.id+'"'),u=o.querySelector(t.selectorOverlay),h=o.querySelector(t.selectorWrapper);if(a===null&&(a=document.querySelector('a[href="#'+o.id+'"')),u){var p=u.getAttribute("data-class-in").split(" "),g=u.getAttribute("data-class-out").split(" ");u.classList.remove(...p),u.classList.add(...g)}if(h){var E=h.getAttribute("data-class-in").split(" "),B=h.getAttribute("data-class-out").split(" ");h.classList.remove(...E),h.classList.add(...B)}document.documentElement.style.overflow="",o.hasAttribute("data-auto-trigger")?o.removeAttribute("data-auto-trigger"):s(a),setTimeout(function(){o.classList.add(t.toggleClass)},t.speedClose)},c=function(l){var o=l.target,a,u,h=o.closest("button"),p=o.closest("a"),g=null;o.hasAttribute("data-modal-trigger")&&o.hasAttribute("aria-controls")||h&&h.hasAttribute("data-modal-trigger")&&h.hasAttribute("aria-controls")?(a=o.closest(t.selectorTrigger),u=document.getElementById(a.getAttribute("aria-controls")),g=!0):o.hash&&o.hash.substr(1).indexOf("modal")>-1?(a=o,u=document.getElementById(o.hash.substr(1)),g=!0):p&&p.hash&&p.hash.substr(1).indexOf("modal")>-1&&(a=p,u=document.getElementById(p.hash.substr(1)),g=!0);var E=o.closest(t.selectorClose);g&&u&&i(a,u),E&&n(E),(g||E)&&l.preventDefault()},f=function(l){if(l.key==="Escape"||l.keyCode===27){var o=document.querySelectorAll(t.selectorTarget),a;for(a=0;a<o.length;++a)o[a].classList.contains(t.toggleClass)||n(o[a])}};return e.init=function(){document.addEventListener("click",c,!1),document.addEventListener("keydown",f,!1)},e.openModal=i,e.closeModal=n,e})();document.addEventListener("DOMContentLoaded",function(){ie.init()});