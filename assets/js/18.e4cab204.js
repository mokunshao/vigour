(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{14:function(t,e,n){var r=n(41).f,o=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in o||n(15)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(t){return""}}})},15:function(t,e,n){t.exports=!n(39)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(66),o=n.n(r);function u(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},20:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},23:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},253:function(t,e,n){},345:function(t,e,n){"use strict";var r=n(253);n.n(r).a},353:function(t,e,n){"use strict";n.r(e);var r=n(17),o=(n(14),{name:"vigour-toggle",props:{value:{},disabled:{type:Boolean}},computed:{theValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}}),u=(n(345),n(1)),i=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"vigour-toggle"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theValue,expression:"theValue"}],staticClass:"vigour-toggle-input",attrs:{disabled:t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.theValue)?t._i(t.theValue,null)>-1:t.theValue},on:{change:function(e){var n=t.theValue,r=e.target,o=!!r.checked;if(Array.isArray(n)){var u=t._i(n,null);r.checked?u<0&&(t.theValue=n.concat([null])):u>-1&&(t.theValue=n.slice(0,u).concat(n.slice(u+1)))}else t.theValue=o}}}),t._v(" "),n("span",{staticClass:"vigour-toggle-slider"}),t._v(" "),n("div",{staticClass:"vigour-toggle-children"},[t._t("default")],2)])}),[],!1,null,"03c5cf0e",null).exports,c={components:Object(r.a)({},i.name,i),data:function(){return{toggleValue:!0}}},a=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"0.5em"}},[n("vigour-toggle",{model:{value:t.toggleValue,callback:function(e){t.toggleValue=e},expression:"toggleValue"}},[t._v("text")]),t._v(" "),n("vigour-toggle",{attrs:{disabled:""},model:{value:t.toggleValue,callback:function(e){t.toggleValue=e},expression:"toggleValue"}},[t._v("text")])],1)}),[],!1,null,null,null);e.default=a.exports},37:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},39:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},40:function(t,e,n){t.exports=!n(71)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},41:function(t,e,n){var r=n(51),o=n(76),u=n(62),i=Object.defineProperty;e.f=n(15)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},44:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},49:function(t,e,n){var r=n(53),o=n(88),u=n(89),i=Object.defineProperty;e.f=n(40)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},51:function(t,e,n){var r=n(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},53:function(t,e,n){var r=n(55);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},54:function(t,e,n){var r=n(44),o=n(23),u=n(73),i=n(59),c=n(64),a=function(t,e,n){var f,l,s,p=t&a.F,v=t&a.G,d=t&a.S,g=t&a.P,y=t&a.B,h=t&a.W,b=v?o:o[e]||(o[e]={}),w=b.prototype,x=v?r:d?r[e]:(r[e]||{}).prototype;for(f in v&&(n=e),n)(l=!p&&x&&void 0!==x[f])&&c(b,f)||(s=l?x[f]:n[f],b[f]=v&&"function"!=typeof x[f]?n[f]:y&&l?u(s,r):h&&x[f]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):g&&"function"==typeof s?u(Function.call,s):s,g&&((b.virtual||(b.virtual={}))[f]=s,t&a.R&&w&&!w[f]&&i(w,f,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},55:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},59:function(t,e,n){var r=n(49),o=n(72);t.exports=n(40)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},62:function(t,e,n){var r=n(20);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},64:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},66:function(t,e,n){t.exports=n(67)},67:function(t,e,n){n(68);var r=n(23).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},68:function(t,e,n){var r=n(54);r(r.S+r.F*!n(40),"Object",{defineProperty:n(49).f})},71:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},72:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},73:function(t,e,n){var r=n(81);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},76:function(t,e,n){t.exports=!n(15)&&!n(39)((function(){return 7!=Object.defineProperty(n(80)("div"),"a",{get:function(){return 7}}).a}))},77:function(t,e,n){var r=n(55),o=n(44).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},80:function(t,e,n){var r=n(20),o=n(37).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},81:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},88:function(t,e,n){t.exports=!n(40)&&!n(71)((function(){return 7!=Object.defineProperty(n(77)("div"),"a",{get:function(){return 7}}).a}))},89:function(t,e,n){var r=n(55);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}}]);