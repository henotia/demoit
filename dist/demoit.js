!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){t.exports=n(6)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,n){var r=n(15);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e,n){var r=n(8),o=n(9),i=n(10);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e,n){var r=n(12),o=n(13),i=n(14);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e,n){t.exports=n(16)},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(7),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=x;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(z([])));y&&y!==r&&o.call(y,a)&&(m=y);var w=k.prototype=b.prototype=Object.create(m);S.prototype=w.constructor=k,k.constructor=S,k[u]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var o=new j(x(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=z,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new F(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=q(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function q(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function S(){}function k(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var c=q(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=q(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){window.executeHTML=function(t,e){var n=document.createElement("div");n.innerHTML=e,document.querySelector(".output").appendChild(n.firstChild)}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(3),u=n.n(c);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n="string"==typeof t?e.querySelector(t):t;if(!n)throw new Error('Ops! There is no DOM element matching "'.concat(t,'" selector.'));var r=n.cloneNode(!0);return{e:n,content:function(t){return n.innerHTML=t,this.exports()},appendChild:function(t){return n.appendChild(t),this},css:function(t,e){return void 0!==e?(n.style[t]=e,this):n.style[t]},prop:function(t,e){return void 0!==e?(n[t]=e,this):n[t]},attr:function(t,e){return void 0!==e?(n.setAttribute(t,e),this):n.getAttribute(t)},onClick:function(t){return n.addEventListener("click",t),function(){return n.removeEventListener("click",t)}},onKeyUp:function(t){return n.addEventListener("keyup",t),function(){return n.removeEventListener("keyup",t)}},onRightClick:function(t){var e=function(e){e.preventDefault(),t()};return n.addEventListener("contextmenu",e),function(){return n.removeEventListener("oncontextmenu",e)}},find:function(t){return s(t,n)},restoreToInitialDOM:function(){var t=r.cloneNode(!0);n.parentNode.replaceChild(t,n),n=t},appendTo:function(t){t.e.appendChild(n)},exports:function(){return Array.prototype.slice.call(n.querySelectorAll("[data-export]")).map(function(t){return s(t,n)})},namedExports:function(){return this.exports().reduce(function(t,e){return t[e.attr("data-export")]=e,t},{})},detach:function(){n.parentNode.removeChild(n)}}}s.fromString=function(t){var e=document.createElement("div");return e.innerHTML=t,s(e.firstChild)};var l={presets:["react",["es2015",{modules:!1}]],plugins:["transform-es2015-modules-commonjs"]};function f(t){return Babel.transform(t,l).code}var p={},h=function(t){return t.replace(/\./g,"_")},d=function(t){var e=document.querySelector("#"+h(t));e&&e.parentNode.removeChild(e)};window.executeCSS=function(t,e){if(p[t])p[t].innerHTML=e;else{var n=document.createElement("style");n.setAttribute("id",h(t)),n.innerHTML=e,document.body.appendChild(n),p[t]=n}};n(11);var v=function(t){var e=t.filename,n=t.content,r=function(t){return t.split(/\./).pop().toLowerCase()}(e||"");return"css"===r?n='imported && window.executeCSS("'.concat(e,'", ').concat(JSON.stringify(n),");"):"html"===r&&(n='imported && window.executeHTML("'.concat(e,'", ').concat(JSON.stringify(n),");")),{filename:e,content:n}},m=function(t){var e=t.filename,n=t.content;return'\n  {\n    filename: "'.concat(e,'",\n    func: function (require, exports, imported) {\n      ').concat(f(n),"\n    },\n    exports: {}\n  }\n")};function g(t,e){try{var n="\n      const modules = [".concat(e.map(v).map(m).join(","),"];\n      const require = function(file) {\n        const module = modules.find(({ filename }) => filename === file);\n\n        if (!module) {\n          throw new Error('Demoit can not find \"' + file + '\" file.');\n        }\n        module.func(require, module.exports, true);\n        return module.exports;\n      };\n      modules[").concat(t,"].func(require, modules[").concat(t,"].exports, false);\n    ");new Function(f(n))()}catch(t){console.error(t)}}var y=n(4),w=n.n(y),x="demoit-split-sizes-v2";function q(){var t=void 0!==window.localStorage,e=[25,75,75,25],n=function(){if(t){var n=localStorage.getItem(x);if(n&&4===(n=n.split(",")).length){var r=n.map(parseInt);if(r.every(function(t){return!isNaN(t)}))return r}}return e}(),r=w()(n,4),o=r[0],i=r[1],a=r[2],c=r[3],u=Split([".left",".right"],{sizes:[o,i],gutterSize:4}),s=Split([".output",".console"],{sizes:[a,c],gutterSize:4,direction:"vertical"});t&&setInterval(function(){localStorage.setItem(x,u.getSizes().join(",")+","+s.getSizes().join(","))},2e3)}function b(t){return function(){var e=a()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(),n=s(".output"),"undefined"!=typeof ReactDOM&&ReactDOM.unmountComponentAtNode(n.e),n.content('<div class="hint">&lt;div id="output" /&gt;</div>');case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}var S='<svg width="48" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1596 476q14 14 28 36h-472v-472q22 14 36 28zm-476 164h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zm160 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"/></svg>',k='<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>',C=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(t){return!1}},j=function(){var t=a()(o.a.mark(function t(){var e,n=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.abrupt("return",new Promise(function(t){return setTimeout(t,e)}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),E=function(t){var e=!1;return function(){e||(e=!0,t.apply(void 0,arguments))}},O={},L=function(t,e){if(O[t])return e();var n=document.createElement("script");n.src=t,n.addEventListener("load",function(){O[t]=!0,e()}),document.body.appendChild(n)},F=function(t,e){if(O[t])return e();var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),n.addEventListener("load",function(){O[t]=!0,e()}),document.body.appendChild(n)},z=function(){var t=a()(o.a.mark(function t(e){var n,r=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:function(){},t.abrupt("return",new Promise(function(t){!function r(o){if(n(o),o!==e.length){var i=e[o],a=i.split(".").pop().toLowerCase();"js"===a?L(i,function(){return r(o+1)}):"css"===a?F(i,function(){return r(o+1)}):r(o+1)}else t()}(0)}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function I(t){var e=t.storage,n=t.changePage;return{name:"dependencies",didMount:function(){var t=a()(o.a.mark(function t(r){var i,a,c,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.el,a=i(".value"),c=i(".file"),s=["./vendor/codemirror/codemirror.js","./vendor/codemirror/javascript.js","./vendor/codemirror/xml.js","./vendor/codemirror/jsx.js","./vendor/codemirror/mark-selection.js","./vendor/split.js","./vendor/babel-6.26.0.min.js","./vendor/babel-polyfill@6.26.0.js","./vendor/codemirror/theme/".concat(e.getEditorSettings().theme,".css")].concat(u()(e.getDependencies())),t.next=6,z(s,function(t){a.css("width",t/s.length*100+"%"),t<s.length?c.content(s[t].split(/\//).pop()):(c.css("opacity",0),n("editor"))});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}var M=n(2),P=n.n(M),A={content:"",filename:"untitled.js",editing:!1},T="DEMOIT_v2",N={editor:{theme:"material"},dependencies:[],files:[A]},D=function(t){var e=location.hash.replace(/^#/,"");if(""!==e){var n=t.findIndex(function(t){return t.filename===e});if(n>=0)return n}return 0};var _={cls:"as-button newProject",title:"Start a new project",text:"A blank file. No dependencies.",icon:'<svg width="48" height="48" viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>'},B=function(t){return{title:"Ops!",icon:'<svg width="48" height="48" viewBox="0 0 1792 1792"><path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"/></svg>',text:"".concat(t," can not be loaded or it contains broken JSON.")}},R=function(t){return{title:"Code samples",icon:S,text:"Loading ".concat(t," file ..."),cls:"notClickable"}},G=function(t){return{title:"Code samples",icon:S,text:t.map(function(t){return'\n    <a href="javascript:void(0);" data-export="jsonFile" data-file="'.concat(t,'">').concat(t.split(/\//).pop(),"</a>\n  ")}).join(""),cls:"notClickable"}},U=function(t){return{cls:"as-button restoreFromLocalStorage",title:"Your latest changes",icon:'<svg width="48" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M128 1408h1024v-128h-1024v128zm0-512h1024v-128h-1024v128zm1568 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm-1568-960h1024v-128h-1024v128zm1568 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm0-512q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm96 832v384h-1792v-384h1792zm0-512v384h-1792v-384h1792zm0-512v384h-1792v-384h1792z"/></svg>',text:t.join("<br />")}},H=function(){if(C()){var t=localStorage.getItem(T);try{if(t)return JSON.parse(t)}catch(t){console.error("There is some data in the local storage under the ".concat(T," key. However, it is not a valid JSON."))}}return null},J=function(){var t=a()(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=function(t){var e=null,n=[];return location.search.substr(1).split("&").forEach(function(r){(n=r.split("="))[0]===t&&(e=decodeURIComponent(n[1]))}),e}("state");return null!==t?t.split(","):null},Y=function(t,e){var n=[{}].concat(u()(t),[_,{}]).filter(function(t){return null!==t}),r=e.content(n.map(function(t){var e=t.title,n=t.text,r=t.icon,o=t.cls;return e?'\n        <div class="'.concat(o||"as-button",'">\n          ').concat(r,"\n          <h2>").concat(e,"</h2>\n          <hr />\n          <p>").concat(n,"</p>\n        </div>\n      "):"<div></div>"}).join(""));return e.css("grid-template-columns",n.map(function(t){return t.title?"250px":"1fr"}).join(" ")),r};function V(t){var e=t.storage,n=t.changePage;return{isGrid:!0,name:"home",didMount:function(){var t=a()(o.a.mark(function t(r){var i,c,u,s,l,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=r.el,c=r.pageDOMElement,u=K(),s=H(),l=null,f=null,!u||1!==u.length){t.next=23;break}if("LOCALSTORAGE"!==u[0]){t.next=11;break}e.setState(s),n("dependencies"),t.next=23;break;case 11:return t.prev=11,t.t0=e,t.next=15,J(u[0]);case 15:t.t1=t.sent,t.t0.setState.call(t.t0,t.t1),n("dependencies"),t.next=23;break;case 20:t.prev=20,t.t2=t.catch(11),l=B(u[0]);case 23:u&&u.length>1&&(l=G(u)),s&&(f=U(s.files.map(function(t){return t.filename}))),Y([l,f],c).filter(function(t){return t.attr("data-file")}).forEach(function(t){t.onClick(a()(o.a.mark(function r(){var i;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.attr("data-file"),Y([R(i),f],c),r.prev=2,r.t0=e,r.next=6,J(i);case 6:r.t1=r.sent,r.t0.setState.call(r.t0,r.t1),n("dependencies"),r.next=14;break;case 11:r.prev=11,r.t2=r.catch(2),Y([B(i),f],c);case 14:case"end":return r.stop()}},r,this,[[2,11]])})))}),i(".newProject").onClick(function(){e.setState(N),n("dependencies")}),s&&i(".restoreFromLocalStorage").onClick(function(){e.setState(s),n("dependencies")});case 29:case"end":return t.stop()}},t,this,[[11,20]])}));return function(e){return t.apply(this,arguments)}}()}}function W(){var t=s(".console"),e=!0,n=function(n){var r=document.createElement("div"),o=n?function(t){return t.replace(/[&<>"']/g,function(t){return"&"+{"&":"amp","<":"lt",">":"gt",'"':"quot","'":"#39"}[t]+";"})}(n.toString()):n;r.innerHTML="<p>"+o+"</p>",e&&(t.content(""),e=!1),t.appendChild(r)};return function(){var e=console.error,r=console.log,o=console.warn,i=console.info,a=console.clear;console.error=function(t){n(t.toString()+t.stack),e.apply(console,arguments)},console.log=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];e.forEach(n),r.apply(console,e)},console.warn=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(n),o.apply(console,e)},console.info=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(n),i.apply(console,e)},console.clear=function(){t.content("");for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];a.apply(console,n)}}(),function(){e=!0,t.content('<div class="hint">console.log</div>')}}function Q(t,e,n,r,o,i){var a=s(".files .nav"),c=s(".files .storage"),u=s(".files .manageDependencies"),l=function(){var o=[];o.push("<ul>"),t.getFiles().forEach(function(e,n){var r=e.filename,i=e.editing;o.push('<li><a data-export href="javascript:void(0);" '.concat(t.isCurrentIndex(n)?'class="active"':"",">").concat(r).concat(i?" *":"","</a></li>"))}),o.push("</ul>"),o.push('<ul class="with-icons"><li><a data-export="newFile" href="javascript:void(0)"><svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg></a></li></ul>'),a.content(o.join("")).forEach(function(t,o){"newFile"===t.attr("data-export")?t.onClick(n):(t.onClick(function(){return e(o)}),t.onRightClick(function(){return r(o)}))})};l(),t.listen(l),c.onClick(o),u.onClick(i)}function X(t,e,n,r){return Z.apply(this,arguments)}function Z(){return(Z=a()(o.a.mark(function t(e,n,r,i){var a,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=CodeMirror(s(".js-code-editor").e,P()({value:n||"",mode:"jsx",tabSize:2,lineNumbers:!1,autofocus:!0,foldGutter:!1,gutters:[],styleSelectedText:!0},e)),c=function(){return r(a.getValue())},u=function(){return i(a.getValue())},a.on("change",u),a.setOption("extraKeys",{"Ctrl-S":c,"Cmd-S":c}),CodeMirror.normalizeKeyMap(),a.focus(),t.abrupt("return",a);case 8:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var $=27,tt=function(t){var e=t.title,n=t.content;return'<div class="popup">\n  <section>\n    <h2>'.concat(e,'</h2>\n    <button class="close" data-export="close"><svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg></button>\n    ').concat(n,"\n  </section>\n</div>")};function et(t){var e=s.fromString(tt(t)),n=s("body"),r=n.onKeyUp(function(t){return t.keyCode===$&&o()}),o=function(){r(),e.css("opacity",0),t.cleanUp&&t.cleanUp(),setTimeout(function(){return e.detach()},200)};return e.exports().forEach(function(t){"close"===t.attr("data-export")&&t.onClick(o)}),e.appendTo(n),setTimeout(function(){return e.css("opacity",1)},1),P()({closePopup:o},e.namedExports())}var nt=13;var rt=13;function ot(t,e){return new Promise(function(n){var r=et({title:"Edit",content:'\n        <input name="filename" data-export="filenameInput" value="'.concat(t,'"/>\n        <button class="save" data-export="saveButton">Save</button>\n        <hr />\n        <button class="delete secondary" data-export="deleteButton">').concat(k,"</button>\n      "),cleanUp:function(){n(null)}}),o=r.filenameInput,i=r.saveButton,a=r.closePopup,c=r.deleteButton,u=function(){""!==o.e.value&&n(o.e.value),a()};o.e.focus(),o.e.setSelectionRange(0,t.lastIndexOf(".")),o.onKeyUp(function(t){t.keyCode===rt&&u()}),i.onClick(u),e>1?c.css("display","block"):c.css("display","none"),c.onClick(function(){return n("delete"),a()})})}var it,at=13;function ct(t){return new Promise(function(e){var n=et({title:"Dependencies",content:'\n        <textarea class="dependencies-list" data-export="textarea"></textarea>\n        <p><small>(Separate your dependencies by a new line)</small></p>\n        <button class="save" data-export="saveButton">Save</button>\n      ',cleanUp:function(){e()}}),r=n.textarea,o=n.saveButton,i=n.closePopup,a=function(){e(r.prop("value").split(/\r?\n/)),i()};r.prop("value",t),r.onKeyUp(function(t){t.keyCode===at&&a()}),o.onClick(a)})}function ut(t,e){return new Promise(function(n){var r=et({title:"Type of storage",content:'\n        <p>At the moment Demoit uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">localStorage API</a> to save your progress.</p>\n        <hr />\n        <h2>Transfer your work</h2>\n        <p>Download <a href="https://github.com/krasimir/demoit/raw/master/demoit.zip">Demoit.zip</a>. Unzip. Get the JSON below and save it in a <i>mycode.json</i> file. Then open Demoit with<br />"?state=mycode.json". It will automatically pick the data from the json.</p>\n        <textarea class="state-json" data-export="textarea"></textarea>\n        <hr />\n        <button class="clear-storage secondary" data-export="flush"><svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg><span>Clean up localStorage</span></button>\n      '}),o=r.textarea,i=r.flush;o.prop("value",t),i.onClick(e),n()})}function st(t){var e=t.storage,n=t.changePage;return{editor:null,name:"editor",permanentInDOM:!0,didMount:function(){var t=a()(o.a.mark(function t(r){var i,c,u,s,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.el,q(),i=e.getCurrentFile(),c=i.content,u=b(W()),s=function(){return g(e.getCurrentIndex(),e.getFiles())},t.next=7,X(e.getEditorSettings(),c,function(){var t=a()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:e.editCurrentFile({content:n,editing:!1}),s();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(t){e.editCurrentFile({editing:!0})});case 7:it=t.sent,l=function(){var t=a()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:it.setValue(n.content),it.focus(),e.editCurrentFile({editing:!1}),s();case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Q(e,function(t){l(e.changeActiveFile(t))},function(){var t=a()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t){var e=et({title:"New file",content:'\n        <input name="filename" data-export="filenameInput" placeholder="untitled.js"/>\n        <button class="save" data-export="saveButton">Save</button>\n      ',cleanUp:function(){t()}}),n=e.filenameInput,r=e.saveButton,o=e.closePopup,i=function(){""!==n.e.value&&t(n.e.value),o()};n.e.focus(),n.onKeyUp(function(t){t.keyCode===nt&&i()}),r.onClick(i)});case 2:(n=t.sent)&&l(e.addNewFile(n));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),function(){var t=a()(o.a.mark(function t(n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ot(e.getFileAt(n).filename,e.getFiles().length);case 2:"delete"===(r=t.sent)?(e.deleteFile(n),l(e.getCurrentFile())):r&&e.editFile(n,{filename:r});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(){ut(JSON.stringify(e.dump(),null,2),function(){e.clear(),window.location=window.location.href.split("?")[0]})},function(){var t=a()(o.a.mark(function t(){var r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(t){return t.filter(function(t){return""!==t&&"\n"!==t})},t.next=3,ct(r(e.getDependencies()).join("\n"));case 3:(i=t.sent)&&(e.setDependencies(i),n("dependencies"));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()),s();case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),didShow:function(){it&&it.focus()}}}var lt=function(t){var e=null,n=function(){var t=C(),e=[],n=N,r=D(n.files),o=function(){return e.forEach(function(t){return t()})},i=function(){t&&localStorage.setItem(T,JSON.stringify(n))},a={setState:function(t){r=D((n=t).files),i()},getCurrentIndex:function(){return r},setCurrentIndex:function(t){r=t,location.hash=n.files[t].filename,o()},isCurrentIndex:function(t){return r===t},getCurrentFile:function(){return this.getFiles()[r]},getFiles:function(){return n.files},dump:function(){return n},getDependencies:function(){return n.dependencies},setDependencies:function(t){n.dependencies=t,i(),o()},getEditorSettings:function(){return n.editor},getFileAt:function(t){return this.getFiles()[t]},makeSureOneFileAtLeast:function(){0===this.getFiles().length&&(n.files.push(A),this.setCurrentIndex(0),i())},editFile:function(t,e){n.files[t]=P()({},n.files[t],e),i(),o(),this.setCurrentIndex(r)},editCurrentFile:function(t){this.editFile(r,t)},changeActiveFile:function(t){return this.setCurrentIndex(t),this.getCurrentFile()},addNewFile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"untitled.js";return n.files.push(P()({},A,{filename:t})),i(),this.changeActiveFile(n.files.length-1)},deleteFile:function(t){if(d(this.getFileAt(t).filename),t===r)n.files.splice(t,1),i(),this.setCurrentIndex(0);else{var e=this.getCurrentFile();n.files.splice(t,1),i(),this.setCurrentIndex(this.getFiles().findIndex(function(t){return t===e})||0)}},clear:function(){C&&localStorage.clear(),o()},listen:function(t){e.push(t)}};return a.makeSureOneFileAtLeast(),a}(),r=function(){var t=a()(o.a.mark(function t(n,r){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=i.find(function(t){return t.name===n})){t.next=3;break}throw new Error("There's no a page with name \"".concat(n,'".'));case 3:if(!e){t.next=6;break}return t.next=6,e.hide();case 6:a.show(r),e=a;case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),i=t.map(function(t){return function(t){var e=t.name,n=t.didMount,r=t.didShow,i=t.isGrid,c=t.permanentInDOM;if(!e)throw new Error("The page definition requires a name.");var u=s("body > ."+e),l={pageDOMElement:u,el:function(t){return u.find(t)}};return c&&(n=E(n)),{name:e,show:function(){var t=a()(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u.css("display",i?"grid":"block"),t.next=3,j();case 3:u.css("opacity",1),u.css("transform","translateY(0)"),n&&n(l,e),r&&r(l,e);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),hide:function(){var t=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u.css("opacity",0),u.css("transform","translateY(-20px)"),t.next=4,j(200);case 4:u.css("display","none"),!c&&u.restoreToInitialDOM();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(t({changePage:r,storage:n}))});return function(t){return r(t)}};window.onload=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:lt([V,I,st])("home");case 1:case"end":return t.stop()}},t,this)}))}]);