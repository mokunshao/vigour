(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{189:function(t,n,e){},259:function(t,n,e){"use strict";var a=e(189);e.n(a).a},268:function(t,n,e){"use strict";var a=e(122),i=(e(34),e(35),{name:"vigour-tag-input",model:{prop:"tags",event:"update"},props:{tags:{type:Array},placeholder:{type:String,default:"Add tag..."}},data:function(){return{input:""}},computed:{newTag:function(){return this.input.trim()}},methods:{addTag:function(){0===this.newTag.length||this.tags.includes(this.newTag)||this.$emit("update",[].concat(Object(a.a)(this.tags),[this.newTag])),this.clearInput()},removeTag:function(t){this.$emit("update",this.tags.filter((function(n){return n!==t})))},handleBackspace:function(){0===this.newTag.length&&this.$emit("update",this.tags.slice(0,-1))},clearInput:function(){this.input=""}}}),u=(e(259),e(1)),s=Object(u.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vigour-tag-input"},[t._l(t.tags,(function(n){return e("span",{key:n,staticClass:"vigour-tag-input-tag"},[e("span",{staticClass:"vigour-tag-input-text"},[t._v(t._s(n))]),e("span",{staticClass:"vigour-tag-input-remove",on:{click:function(e){return t.removeTag(n)}}},[t._v("\n      ×\n    ")])])})),t._v(" "),e("input",t._g(t._b({staticClass:"vigour-tag-input-input",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.input},on:{input:function(n){t.input=n.target.value},keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.addTag(n))},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"backspace",void 0,n.key,void 0)?null:t.handleBackspace(n)}]}},"input",t.$attrs,!1),t.$listeners))],2)}),[],!1,null,"76e85ca3",null);n.a=s.exports},405:function(t,n,e){"use strict";e.r(n);var a=e(18),i=(e(15),e(268)),u={components:Object(a.a)({},i.a.name,i.a),data:function(){return{tags:["美食","博客"]}}},s=e(1),r=Object(s.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"0.5em"}},[e("vigour-tag-input",{model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)}),[],!1,null,null,null);n.default=r.exports}}]);