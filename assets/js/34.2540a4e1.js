(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{135:function(t,r,n){t.exports=n(136)},136:function(t,r,n){n(112),n(87),t.exports=n(137)},137:function(t,r,n){var e=n(53),o=n(111);t.exports=n(23).getIterator=function(t){var r=o(t);if("function"!=typeof r)throw TypeError(t+" is not iterable!");return e(r.call(t))}},138:function(t,r,n){var e=n(18),o=n(139)(!0);e(e.S,"Object",{entries:function(t){return o(t)}})},139:function(t,r,n){var e=n(15),o=n(83),i=n(63),c=n(99).f;t.exports=function(t){return function(r){for(var n,a=i(r),u=o(a),s=u.length,l=0,f=[];s>l;)n=u[l++],e&&!c.call(a,n)||f.push(t?[n,a[n]]:a[n]);return f}}},14:function(t,r,n){var e=n(41).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(15)&&e(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},140:function(t,r,n){"use strict";n(141);var e=n(51),o=n(110),i=n(15),c=/./.toString,a=function(t){n(58)(RegExp.prototype,"toString",t,!0)};n(39)((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?a((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=c.name&&a((function(){return c.call(this)}))},141:function(t,r,n){n(15)&&"g"!=/./g.flags&&n(41).f(RegExp.prototype,"flags",{configurable:!0,get:n(110)})},142:function(t,r,n){"use strict";var e=n(74);n.n(e).a},143:function(t,r,n){"use strict";var e=n(75);n.n(e).a},145:function(t,r,n){"use strict";var e=n(128),o=(n(78),n(116)),i=n.n(o);var c=n(135),a=n.n(c),u=n(117),s=n.n(u);function l(t,r){return function(t){if(i()(t))return t}(t)||function(t,r){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var c,u=a()(t);!(e=(c=u.next()).done)&&(n.push(c.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(138),n(140),n(21),n(22),n(38),n(147);var f=function(t){return Object.keys(t).reduce((function(t,r){return["span","offset"].includes(r)}),!1)},v=function(t,r){var n=[];return"[object Object]"===Object.prototype.toString.call(t)&&Object.entries(t).forEach((function(t){var e=l(t,2),o=e[0],i=e[1];return n.push("vigour-col-".concat(o,"-").concat(r,"-").concat(i))})),n},p={name:"vigour-col",inheritAttrs:!1,props:{span:{type:[String,Number]},offset:{type:[String,Number]},xs:{type:Object,validator:f},sm:{type:Object,validator:f},md:{type:Object,validator:f},lg:{type:Object,validator:f}},data:function(){return{gutter:0}},computed:{colStyle:function(){var t=this.gutter;return{paddingLeft:"".concat(t/2,"px"),paddingRight:"".concat(t/2,"px")}},colClasses:function(){var t=this.span,r=this.offset,n=this.xs,o=this.sm,i=this.md,c=this.lg;return[(t||0===t)&&"vigour-col-span-".concat(t),(r||0===r)&&"vigour-col-offset-".concat(r)].concat(Object(e.a)(v(n,"xs")),Object(e.a)(v(o,"sm")),Object(e.a)(v(i,"md")),Object(e.a)(v(c,"lg")))}}},g=(n(142),n(1)),h=Object(g.a)(p,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"vigour-col-wrapper",class:this.colClasses,style:this.colStyle},[r("div",this._b({staticClass:"vigour-col"},"div",this.$attrs,!1),[this._t("default")],2)])}),[],!1,null,"298c0b65",null);r.a=h.exports},146:function(t,r,n){"use strict";n(38),n(21),n(22),n(78);var e={name:"vigour-row",props:{gutter:[String,Number],align:{type:String,validator:function(t){return["left","center","right"].includes(t)}}},mounted:function(){var t=this;this.$children.forEach((function(r){r.$data.gutter=t.gutter}))},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:"".concat(-t/2,"px"),marginRight:"".concat(-t/2,"px")}},rowClass:function(){var t=this.align;return[t&&"vigour-row-".concat(t)]}}},o=(n(143),n(1)),i=Object(o.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vigour-row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"4a699344",null);r.a=i.exports},17:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(66),o=n.n(e);function i(t,r,n){return r in t?o()(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}},237:function(t,r,n){},326:function(t,r,n){"use strict";var e=n(237);n.n(e).a},371:function(t,r,n){"use strict";n.r(r);var e,o=n(17),i=(n(14),n(145)),c=n(146),a={components:(e={},Object(o.a)(e,i.a.name,i.a),Object(o.a)(e,c.a.name,c.a),e)},u=(n(326),n(1)),s=Object(u.a)(a,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticStyle:{"padding-top":"0.5em"}},[n("vigour-row",[n("vigour-col",{staticClass:"color1"},[t._v("1")]),t._v(" "),n("vigour-col",{staticClass:"color2"},[t._v("2")])],1),t._v(" "),n("vigour-row",[n("vigour-col",{staticClass:"color1"},[t._v("1")]),t._v(" "),n("vigour-col",{staticClass:"color2"},[t._v("2")]),t._v(" "),n("vigour-col",{staticClass:"color3"},[t._v("3")]),t._v(" "),n("vigour-col",{staticClass:"color4"},[t._v("4")])],1)],1)}),[],!1,null,"6f0950f6",null);r.default=s.exports},66:function(t,r,n){t.exports=n(67)},67:function(t,r,n){n(68);var e=n(23).Object;t.exports=function(t,r,n){return e.defineProperty(t,r,n)}},68:function(t,r,n){var e=n(54);e(e.S+e.F*!n(40),"Object",{defineProperty:n(49).f})},74:function(t,r,n){},75:function(t,r,n){},78:function(t,r,n){"use strict";var e=n(37),o=n(57),i=n(48),c=n(115),a=n(62),u=n(39),s=n(100).f,l=n(86).f,f=n(41).f,v=n(91).trim,p=e.Number,g=p,h=p.prototype,b="Number"==i(n(94)(h)),d="trim"in String.prototype,m=function(t){var r=a(t,!1);if("string"==typeof r&&r.length>2){var n,e,o,i=(r=d?r.trim():v(r,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=r.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(r.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+r}for(var c,u=r.slice(2),s=0,l=u.length;s<l;s++)if((c=u.charCodeAt(s))<48||c>o)return NaN;return parseInt(u,e)}}return+r};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof p&&(b?u((function(){h.valueOf.call(n)})):"Number"!=i(n))?c(new g(m(r)),n,p):m(r)};for(var y,_=n(15)?s(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)o(g,y=_[x])&&!o(p,y)&&f(p,y,l(g,y));p.prototype=h,h.constructor=p,n(58)(e,"Number",p)}},91:function(t,r,n){var e=n(18),o=n(42),i=n(39),c=n(92),a="["+c+"]",u=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),l=function(t,r,n){var o={},a=i((function(){return!!c[t]()||"​"!="​"[t]()})),u=o[t]=a?r(f):c[t];n&&(o[n]=u),e(e.P+e.F*a,"String",o)},f=l.trim=function(t,r){return t=String(o(t)),1&r&&(t=t.replace(u,"")),2&r&&(t=t.replace(s,"")),t};t.exports=l},92:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);