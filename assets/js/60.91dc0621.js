(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{191:function(t,e,n){},266:function(t,e,n){"use strict";var a=n(191);n.n(a).a},279:function(t,e,n){"use strict";var a=n(126),i=(n(35),n(36),{name:"vigour-tag-input",inheritAttrs:!1,model:{prop:"tags",event:"update"},props:{tags:{type:Array},placeholder:{type:String,default:"Add tag..."}},data:function(){return{input:""}},computed:{newTag:function(){return this.input.trim()}},methods:{addTag:function(){0===this.newTag.length||this.tags.includes(this.newTag)||this.$emit("update",[].concat(Object(a.a)(this.tags),[this.newTag])),this.clearInput()},removeTag:function(t){this.$emit("update",this.tags.filter((function(e){return e!==t})))},handleBackspace:function(){0===this.newTag.length&&this.$emit("update",this.tags.slice(0,-1))},clearInput:function(){this.input=""}}}),u=(n(266),n(1)),s=Object(u.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vigour-tag-input"},[t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"vigour-tag-input-tag"},[n("span",{staticClass:"vigour-tag-input-text"},[t._v(t._s(e))]),n("span",{staticClass:"vigour-tag-input-remove",on:{click:function(n){return t.removeTag(e)}}},[t._v("\n      ×\n    ")])])})),t._v(" "),n("input",t._g(t._b({staticClass:"vigour-tag-input-input",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.input},on:{input:function(e){t.input=e.target.value},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTag(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"backspace",void 0,e.key,void 0)?null:t.handleBackspace(e)}]}},"input",t.$attrs,!1),t.$listeners))],2)}),[],!1,null,"5e19468a",null);e.a=s.exports},418:function(t,e,n){"use strict";n.r(e);var a=n(17),i=(n(14),n(279)),u={components:Object(a.a)({},i.a.name,i.a),data:function(){return{tags:["美食","博客"]}}},s=n(1),r=Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"0.5em"}},[n("vigour-tag-input",{attrs:{placeholder:"请输入 tag"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);