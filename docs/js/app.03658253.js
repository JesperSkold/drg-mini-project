(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/drg-mini-project-vuex/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10d7":function(t,e,n){t.exports=n.p+"img/Glyphid_swarmer.6554f6fa.png"},"22b7":function(t,e,n){t.exports=n.p+"img/Magnite_icon.ff603484.png"},"2e69":function(t,e,n){t.exports=n.p+"img/burger.5cab5c52.svg"},3083:function(t,e,n){},"374b":function(t,e,n){t.exports=n.p+"img/Fleas.beb3cc08.png"},"3dfd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["lg"===t.$mq||"md"===t.$mq?n("NavBar"):t._e(),"sm"===t.$mq?n("Burger"):t._e(),n("router-view"),n("Footer")],1)},s=[],a=n("d000"),i=n("fd2d"),o=n("e7b4"),c={components:{NavBar:a["default"],Burger:o["default"],Footer:i["default"]}},u=c,l=(n("5c0b"),n("2877")),p=Object(l["a"])(u,r,s,!1,null,null,null);e["default"]=p.exports},"42ef":function(t,e,n){"use strict";n("4827")},4360:function(t,e,n){"use strict";n.r(e);var r=n("1da1"),s=n("5530"),a=n("2909"),i=(n("96cf"),n("7db0"),n("d3b7"),n("b0c0"),n("a434"),n("2b0e")),o=n("2f62"),c=n("f4d2");i["a"].use(o["a"]),e["default"]=new o["a"].Store({state:{products:Object(a["a"])(c),cart:[],articles:[]},mutations:{cartPush:function(t,e){var n=t.cart.find((function(t){return e.name===t.name}));n?n.amount++:t.cart.push(Object(s["a"])(Object(s["a"])({},e),{},{amount:1}))},decreaser:function(t,e){var n=t.cart.find((function(t){return e.name===t.name}));n.amount--,n.amount<1&&t.cart.splice(t.cart.indexOf(n),1)},increaser:function(t,e){t.cart.find((function(t){return e.name===t.name})).amount++},saveArticles:function(t,e){t.articles=e}},actions:{toCart:function(t,e){t.commit("cartPush",e)},decrease:function(t,e){t.commit("decreaser",e)},increase:function(t,e){t.commit("increaser",e)},fetchArticles:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=6");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t.commit("saveArticles",r),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},getters:{calcTotalCart:function(t){return t.cart.reduce((function(t,e){return t+e.amount*e.price}),0)},calcQuantity:function(t){return t.cart.reduce((function(t,e){return t+e.amount}),0)}}})},"44be":function(t,e,n){t.exports=n.p+"img/Bismor_icon.9ff267a4.png"},4533:function(t,e,n){"use strict";n("f663")},"45cb":function(t,e,n){t.exports=n.p+"img/Enor_pearl_icon.3b03ad5f.png"},4827:function(t,e,n){},"4b80":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),s=n("660e");r["a"].use(s["a"],{breakpoints:{sm:652,md:1250,lg:1/0}})},"54e6":function(t,e,n){t.exports=n.p+"img/instagram.e5f5d20a.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("3dfd"),a=n("a18c"),i=n("4360");n("4b80");r["a"].config.productionTip=!1,new r["a"]({router:a["default"],store:i["default"],render:function(t){return t(s["default"])}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5fb5":function(t,e,n){"use strict";n("7c5e")},"66c0":function(t,e,n){},"767b":function(t,e,n){t.exports=n.p+"img/Croppa_icon.055b9a6c.png"},"7c5e":function(t,e,n){},"806d":function(t,e,n){},"86aa":function(t,e,n){"use strict";n("66c0")},"8aa2":function(t,e,n){t.exports=n.p+"img/Jadiz_icon.6e998006.png"},"9c0c":function(t,e,n){},a18c:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),s=n("8c4f"),a=n("bb51"),i=n("cc55"),o=n("df47");r["a"].use(s["a"]);var c=[{path:"/",name:"Home",component:a["default"],children:[{path:"/cart",name:"CartView",component:i["default"]}]},{path:"/news",name:"NewsView",component:o["default"]}],u=new s["a"]({mode:"history",base:"/drg-mini-project-vuex/",routes:c});e["default"]=u},a3df:function(t,e,n){t.exports=n.p+"img/twitter.66a49535.svg"},a8ec:function(t,e,n){var r={"./App":"3dfd","./App.vue":"3dfd","./assets/Bismor_icon.png":"44be","./assets/Croppa_icon.png":"767b","./assets/Enor_pearl_icon.png":"45cb","./assets/Fleas.png":"374b","./assets/Glyphid_Slasher.png":"c380","./assets/Glyphid_exploder.png":"fd66","./assets/Glyphid_swarmer.png":"10d7","./assets/Golden_LootBug.png":"ab5d","./assets/Jadiz_icon.png":"8aa2","./assets/LootBug.png":"d8e1","./assets/Magnite_icon.png":"22b7","./assets/Umanite_icon.png":"ab80","./assets/burger.svg":"2e69","./assets/close.svg":"bf37","./assets/facebook.svg":"aaa3","./assets/instagram.svg":"54e6","./assets/logo.png":"cf05","./assets/products":"f4d2","./assets/products.json":"f4d2","./assets/ps_enlarge.svg":"f960","./assets/twitter.svg":"a3df","./components/BurgerMenu":"e7b4","./components/BurgerMenu.vue":"e7b4","./components/Footer":"fd2d","./components/Footer.vue":"fd2d","./components/NavBar":"d000","./components/NavBar.vue":"d000","./components/ProductCard":"e915","./components/ProductCard.vue":"e915","./main":"56d7","./main.js":"56d7","./plugins/vue-mq":"4b80","./plugins/vue-mq.js":"4b80","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./views/CartView":"cc55","./views/CartView.vue":"cc55","./views/Home":"bb51","./views/Home.vue":"bb51","./views/NewsView":"df47","./views/NewsView.vue":"df47"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id="a8ec"},aaa3:function(t,e,n){t.exports=n.p+"img/facebook.c8fac322.svg"},ab5d:function(t,e,n){t.exports=n.p+"img/Golden_LootBug.16515690.png"},ab80:function(t,e,n){t.exports=n.p+"img/Umanite_icon.0560ab27.png"},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"products"},t._l(t.products,(function(t){return n("article",{key:t.name},[n("ProductCard",{attrs:{productObj:t}})],1)})),0),n("router-view",{attrs:{"name:":"",CartView:""}})],1)},s=[],a=n("e915"),i={name:"Home",components:{ProductCard:a["default"]},computed:{products:function(){return this.$store.state.products}}},o=i,c=(n("86aa"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,"3122e5da",null);e["default"]=u.exports},bf37:function(t,e,n){t.exports=n.p+"img/close.144a6bbd.svg"},bfa9:function(t,e,n){"use strict";n("3083")},c159:function(t,e,n){"use strict";n("806d")},c18d:function(t,e,n){"use strict";n("e7e3")},c380:function(t,e,n){t.exports=n.p+"img/Glyphid_Slasher.57c014c8.png"},cc55:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"cart-view",class:{mobileCart:"sm"===t.$mq}},[n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[n("span",{staticClass:"material-icons close"},[t._v(" close ")])]),t._l(t.renderCartItems,(function(e){return n("li",{key:e.name},[n("p",[t._v(t._s(e.name))]),n("div",{staticClass:"controls"},[n("button",{staticClass:"decrease",on:{click:function(n){return t.decrease(e)}}},[t._v("-")]),n("span",[t._v(t._s(e.amount))]),n("button",{staticClass:"increase",on:{click:function(n){return t.increase(e)}}},[t._v("+")])])])})),n("p",{staticClass:"quantity"},[t._v(t._s(t.renderCartQuantity)+" items in cart")]),n("p",{staticClass:"total"},[t._v("Total: "+t._s(t.renderCartTotal)+" €")])],2)},s=[],a={name:"CartView",computed:{renderCartItems:function(){return this.$store.state.cart},renderCartTotal:function(){return this.$store.getters.calcTotalCart},renderCartQuantity:function(){return this.$store.getters.calcQuantity}},methods:{decrease:function(t){this.$store.dispatch("decrease",t)},increase:function(t){this.$store.dispatch("increase",t)}}},i=a,o=(n("42ef"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"6fca84c3",null);e["default"]=c.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d000:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:{newsNav:t.newsNav}},[t._m(0),n("ul",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[n("li",[t._v("Home")])]),n("router-link",{staticClass:"nav-link",attrs:{to:{name:"NewsView"}}},[n("li",[t._v("News")])]),n("li",[n("router-link",{staticClass:"router-link",attrs:{to:{name:"CartView"}}},[n("span",{staticClass:"material-icons"},[t._v(" shopping_cart ")]),n("span",{staticClass:"quantity"},[t._v(t._s(t.renderCartQuantity))])])],1)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("DRG All-in-One")]),n("p",[t._v("A Page for Merchandise, News and Information about Hoxxes IV")])])}],a={computed:{renderCartQuantity:function(){return this.$store.getters.calcQuantity}},data:function(){return{newsNav:!1}},watch:{$route:function(t){"/news"===t.path?(this.newsNav=!0,console.log("news")):(this.newsNav=!1,console.log("home"))}},mounted:function(){"/news"===this.$route.path?this.newsNav=!0:this.newsNav=!1}},i=a,o=(n("bfa9"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"01419919",null);e["default"]=c.exports},d8e1:function(t,e,n){t.exports=n.p+"img/LootBug.c14e091a.png"},df47:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"news-container"},[n("h1",[t._v("Latest space news")]),t._l(t.articles,(function(e){return n("article",{key:e.id},[n("h2",[t._v(t._s(e.title))]),n("p",[t._v("Published at "+t._s(e.publishedAt))]),n("p",[t._v("Updated at "+t._s(e.updatedAt))]),n("p",[n("a",{attrs:{href:e.url}},[t._v(t._s(e.url))])]),n("figure",[n("img",{attrs:{src:e.imageUrl,alt:"Image from article"}}),n("figcaption",{staticClass:"news-container__summary"},[t._v(t._s(e.summary))])])])}))],2)])},s=[],a=n("1da1"),i=(n("96cf"),{computed:{articles:function(){return this.$store.state.articles}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchArticles");case 1:case"end":return e.stop()}}),e)})))()}}),o=i,c=(n("c159"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,"1c72795c",null);e["default"]=u.exports},e7b4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openMenu?t._e():r("img",{attrs:{src:n("2e69"),alt:"",srcset:""},on:{click:t.openBurger}}),t.openMenu?r("nav",[r("ul",[r("li",{staticClass:"close-btn",on:{click:function(e){t.openMenu=!1}}},[t._v("X")]),r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[r("li",[t._v("Home")])]),r("router-link",{staticClass:"nav-link",attrs:{to:{name:"NewsView"}}},[r("li",[t._v("News")])]),r("li",[r("router-link",{staticClass:"router-link",attrs:{to:{name:"CartView"}}},[r("span",{staticClass:"material-icons"},[t._v(" shopping_cart ")]),r("span",{staticClass:"quantity"},[t._v(t._s(t.renderCartQuantity))])])],1)],1)]):t._e()])},s=[],a={data:function(){return{openMenu:!1}},methods:{openBurger:function(){this.openMenu=!this.openMenu}},computed:{renderCartQuantity:function(){return this.$store.getters.calcQuantity}}},i=a,o=(n("5fb5"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"2a76ff63",null);e["default"]=c.exports},e7e3:function(t,e,n){},e915:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-image-container"},[r("img",{attrs:{src:n("a8ec")("./"+t.productObj.img),alt:"",srcset:""}})]),r("p",{staticClass:"name"},[t._v(t._s(t.productObj.name))]),r("p",{staticClass:"price"},[t._v(t._s(t.productObj.price)+" €")]),r("button",{staticClass:"product-card__button",on:{click:t.addToCart}},[t._v("ADD TO CART")])])},s=[],a={props:{productObj:Object},methods:{addToCart:function(){this.$store.dispatch("toCart",this.productObj)}}},i=a,o=(n("c18d"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"9257d1a6",null);e["default"]=c.exports},f4d2:function(t){t.exports=JSON.parse('[{"name":"Extraordinary Fester Flea","img":"assets/Fleas.png","price":100},{"name":"Exquisite Glyphid Exploder","img":"assets/Glyphid_exploder.png","price":10},{"name":"Outstanding Glyphid Slasher","img":"assets/Glyphid_Slasher.png","price":1337},{"name":"Remarkable Glyphid Swarmer","img":"assets/Glyphid_swarmer.png","price":13137},{"name":"Unprecedented Golden Lootbug","img":"assets/Golden_LootBug.png","price":135637},{"name":"Exceptional Lootbug","img":"assets/LootBug.png","price":13237}]')},f663:function(t,e,n){},f960:function(t,e,n){t.exports=n.p+"img/ps_enlarge.314d3542.svg"},fd2d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{class:{newsFooter:t.newsFooter}},[n("ul",[n("h2",[t._v("ABOUT")]),n("router-link",{attrs:{to:"/"}},[n("li",[t._v("Home")])]),n("li",[t._v("Contact Us")]),n("li",[t._v("FAQs")])],1),t._m(0),t._m(1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("h2",[t._v("PRODUCT")]),n("li",[t._v("Testimonials")]),n("li",[t._v("How it Works")]),n("li",[t._v("Member Discounts")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"socials"},[r("img",{attrs:{src:n("aaa3"),alt:"facebook icon"}}),r("img",{attrs:{src:n("54e6"),alt:"instagram icon"}}),r("img",{attrs:{src:n("a3df"),alt:"twitter icon"}})])}],a={data:function(){return{newsFooter:!1}},watch:{$route:function(t){"/news"===t.path?this.newsFooter=!0:this.newsFooter=!1}},mounted:function(){"/news"===this.$route.path?this.newsFooter=!0:this.newsFooter=!1}},i=a,o=(n("4533"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"8f55ad40",null);e["default"]=c.exports},fd66:function(t,e,n){t.exports=n.p+"img/Glyphid_exploder.98e4328d.png"}});
//# sourceMappingURL=app.03658253.js.map