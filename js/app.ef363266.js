(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/domainesia/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1268:function(t,e,n){},"2db5":function(t,e,n){"use strict";var a=n("f12a"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),s={},l=Object(o["a"])(s,i,r,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content-container"},[n("h1",[t._v("Search Your Domain")]),n("div",{staticClass:"search"},[n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{red:t.alert},attrs:{type:"text",placeholder:"namadomain.com"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("button",{on:{click:function(e){return t.search()}}},[n("i",{staticClass:"fas fa-search"}),t._v(" Search")])]),t.alert?n("span",[t._v("sorry, domain isn't available")]):t._e()]),t.recom?n("h2",[t._v("Recomendation for you")]):t._e(),t.recom?n("div",{staticClass:"recomendation-container"},t._l(t.SAvailable,(function(e){return n("Recomendations",{key:e.id,attrs:{name:t.namesplit,dot:e.dot,price:e.price},on:{buy:function(n){return t.buy(e.id)}}})})),1):t._e(),t.available?n("div",{staticClass:"available"},[n("div",{staticClass:"text"},[t._v("Domain is Available!")]),n("button",{staticClass:"buy-button",on:{click:function(e){return t.buy()}}},[t._v("Buy")])]):t._e()])])])},p=[],f=(n("4160"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recomendation"},[n("div",{staticClass:"left"},[n("div",{staticClass:"name"},[t._v(t._s(t.name)),n("b",[t._v(t._s(t.dot))])]),n("div",{staticClass:"price"},[t._v("Rp."+t._s(t.rupiah(t.price)))])]),n("div",{staticClass:"right"},[n("button",{staticClass:"buy-button",on:{click:function(e){return t.buy()}}},[t._v("Buy")])])])}),m=[],v=(n("a15b"),n("d3b7"),n("25f0"),n("466d"),{methods:{rupiah:function(t){var e=t.toString(),n=e.length%3,a=e.substr(0,n),i=e.substr(n).match(/\d{3}/g);if(i){var r=n?".":"";a+=r+i.join(".")}return a}}}),h={name:"Recomendation",props:{name:String,dot:String,price:null},mixins:[v],methods:{buy:function(){this.$emit("buy")}}},b=h,y=(n("7028"),Object(o["a"])(b,f,m,!1,null,"770e26c4",null)),_=y.exports,g={name:"Home",components:{Recomendations:_},data:function(){return{name:null,namesplit:null,recom:!1,alert:!1,available:!1,SAvailable:null}},mounted:function(){this.SAvailable=this.$store.state.available},methods:{search:function(){if(this.recom=!1,this.alert=!1,this.available=!1,this.name){var t=this.name.split("."),e="."+t[1];if(this.namesplit=t[0],""==this.namesplit)return void alert("Harap Mengisi nama Domain");if(t.length<2)return this.namesplit=this.name,void(this.recom=!0);for(var n=0;n<this.SAvailable.length;n++)if(e==this.SAvailable[n].dot)return void(this.available=!0);0==this.available&&(this.alert=!0,this.recom=!0)}else alert("Harap Mengisi Data")},buy:function(t){t||0==t?this.SAvailable.forEach(function(e){t==e.id&&(this.name=this.namesplit+e.dot,this.recom=!1,this.alert=!1,this.available=!0)}.bind(this)):(this.available=!1,this.name=null,this.recom=!1,alert("Terimakasih, Pembelian anda akan Diproses"))}}},C=g,S=(n("2db5"),Object(o["a"])(C,d,p,!1,null,"41630d54",null)),w=S.exports;a["a"].use(u["a"]);var O=[{path:"/",name:"Home",component:w}],k=new u["a"]({mode:"history",base:"/domainesia/",routes:O}),x=k,j=n("2f62");a["a"].use(j["a"]);var P=new j["a"].Store({state:{available:[{id:0,dot:".space",price:1e5},{id:1,dot:".net",price:1e5},{id:2,dot:".org",price:1e5}]},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:x,store:P,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},7028:function(t,e,n){"use strict";var a=n("1268"),i=n.n(a);i.a},"9c0c":function(t,e,n){},f12a:function(t,e,n){}});
//# sourceMappingURL=app.ef363266.js.map