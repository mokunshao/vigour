(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{124:function(t,n,e){t.exports=e(125)},125:function(t,n,e){e(126);var a=e(50).Object;t.exports=function(t,n,e){return a.defineProperty(t,n,e)}},126:function(t,n,e){var a=e(76);a(a.S+a.F*!e(51),"Object",{defineProperty:e(62).f})},128:function(t,n,e){},225:function(t,n,e){"use strict";var a=e(128);e.n(a).a},228:function(t,n,e){"use strict";e.r(n);var a=e(28),i=(e(29),e(153)),u=(e(38),e(39),{name:"vigour-tag-input",model:{prop:"tags",event:"update"},props:{tags:{type:Array},placeholder:{type:String,default:"Add tag..."}},data:function(){return{input:""}},computed:{newTag:function(){return this.input.trim()}},methods:{addTag:function(){0===this.newTag.length||this.tags.includes(this.newTag)||this.$emit("update",[].concat(Object(i.a)(this.tags),[this.newTag])),this.clearInput()},removeTag:function(t){this.$emit("update",this.tags.filter((function(n){return n!==t})))},handleBackspace:function(){0===this.newTag.length&&this.$emit("update",this.tags.slice(0,-1))},clearInput:function(){this.input=""}}}),r=(e(225),e(0)),s=Object(r.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vigour-tag-input"},[t._l(t.tags,(function(n){return e("span",{key:n,staticClass:"vigour-tag-input-tag"},[e("span",{staticClass:"vigour-tag-input-text"},[t._v(t._s(n))]),e("span",{staticClass:"vigour-tag-input-remove",on:{click:function(e){return t.removeTag(n)}}},[t._v("\n      ×\n    ")])])})),t._v(" "),e("input",t._g(t._b({staticClass:"vigour-tag-input-input",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.input},on:{input:function(n){t.input=n.target.value},keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.addTag(n))},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"backspace",void 0,n.key,void 0)?null:t.handleBackspace(n)}]}},"input",t.$attrs,!1),t.$listeners))],2)}),[],!1,null,"a302d018",null).exports,c={components:Object(a.a)({},s.name,s),data:function(){return{tags:["美食","博客"]}}},o=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"0.5em"}},[e("vigour-tag-input",{model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)}),[],!1,null,null,null);n.default=o.exports},28:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var a=e(124),i=e.n(a);function u(t,n,e){return n in t?i()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},29:function(t,n,e){var a=e(41).f,i=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in i||e(36)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(t){return""}}})}}]);