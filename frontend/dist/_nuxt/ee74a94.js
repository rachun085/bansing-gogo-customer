(window.webpackJsonp=window.webpackJsonp||[]).push([[130,123,125,128],{1135:function(t,e,r){"use strict";r.r(e);r(6),r(5),r(3),r(2),r(7),r(4),r(8);var c=r(0),o=(r(13),r(51)),l=r(447),n=r(446),d=r(459),v=r(460),m=r(466),f=r(467),h=r(699),_=r(700),C=r(1092),w=r(701),y=r(702),O=r(703),x=r(704),k=r(705),j=r(706);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var D={components:{Header:l.a,Slider:h.default,CollectionBanner:_.default,ProductSlider:C.default,Banner:w.default,ProductTab:y.default,Services:O.default,Blog:x.default,Instagram:k.default,LogoSlider:j.default,Footer:n.a,quickviewModel:d.a,compareModel:v.a,cartModel:m.a,newsletterModel:f.a},data:function(){return{products:[],category:[],showquickviewmodel:!1,showcomparemodal:!1,showcartmodal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({productslist:function(t){return t.products.productslist}})),mounted:function(){this.productsArray()},methods:{productsArray:function(){var t=this;this.productslist.map((function(e){"fashion"===e.type&&(t.products.push(e),e.collection.map((function(i){-1===t.category.indexOf(i)&&t.category.push(i)})))}))},showQuickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e},showCoampre:function(t,e){this.showcomparemodal=t,this.comapreproduct=e},closeCompareModal:function(t){this.showcomparemodal=t},showCart:function(t,e){this.showcartmodal=t,this.cartproduct=e},closeCartModal:function(t){this.showcartmodal=t}}},S=D,M=r(62),component=Object(M.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Slider"),t._v(" "),r("CollectionBanner"),t._v(" "),r("ProductSlider",{attrs:{products:t.products},on:{openQuickview:t.showQuickview,openCompare:t.showCoampre,openCart:t.showCart}}),t._v(" "),r("Banner"),t._v(" "),r("ProductTab",{attrs:{products:t.products,category:t.category},on:{openQuickview:t.showQuickview,openCompare:t.showCoampre,openCart:t.showCart}}),t._v(" "),r("Services"),t._v(" "),r("Blog"),t._v(" "),r("Instagram"),t._v(" "),r("LogoSlider"),t._v(" "),r("Footer"),t._v(" "),r("quickviewModel",{attrs:{openModal:t.showquickviewmodel,productData:t.quickviewproduct}}),t._v(" "),r("compareModel",{attrs:{openCompare:t.showcomparemodal,productData:t.comapreproduct},on:{closeCompare:t.closeCompareModal}}),t._v(" "),r("cartModel",{attrs:{openCart:t.showcartmodal,productData:t.cartproduct,products:t.products},on:{closeCart:t.closeCartModal}}),t._v(" "),r("newsletterModel")],1)}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,r){"use strict";var c={},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),c("section",{staticClass:"section-b-space light-layout"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row footer-theme partition-f"},[c("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),c("div",{staticClass:"footer-contant"},[c("div",{staticClass:"footer-logo"},[c("img",{attrs:{src:r(448),alt:"logo"}})]),t._v(" "),c("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),c("div",{staticClass:"sub-footer"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[t._m(6),t._v(" "),c("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[c("div",{staticClass:"payment-card-bottom"},[c("ul",[c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(455),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(453),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(454),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(451),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(452),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},447:function(t,e,r){"use strict";var c=r(456),o=r(458),l=r(450),n=r(457),d={data:function(){return{leftSidebarVal:!1}},components:{TopBar:c.a,LeftSidebar:o.a,Nav:l.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},v=r(62),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("header",[c("div",{staticClass:"mobile-fix-option"}),t._v(" "),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12"},[c("div",{staticClass:"main-menu"},[c("div",{staticClass:"menu-left"},[c("div",{staticClass:"brand-logo"},[c("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[c("img",{staticClass:"img-fluid",attrs:{src:r(448),alt:""}})])],1)]),t._v(" "),c("div",{staticClass:"menu-right pull-right"},[c("Nav"),t._v(" "),c("HeaderWidgets")],1)])])])])])])}),[],!1,null,null,null);e.a=component.exports},459:function(t,e,r){"use strict";r(5),r(3),r(2),r(7),r(4),r(8);var c=r(0),o=(r(6),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={props:["openModal","productData"],data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},Size:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].size)&&e.push(t[i].size);return e},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)},getImgUrl:function(path){return r(445)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=n,v=r(62),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openModal?r("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Quickview","hide-footer":!0}},[r("div",{staticClass:"row quickview-modal"},[r("div",{staticClass:"col-lg-6 col-xs-12"},[r("div",{staticClass:"quick-view-img"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.productData.images,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.productData.title))]),t._v(" "),t.productData.sale?r("h3",[t._v("\n            "+t._s(t._f("currency")(t.discountedPrice(t.productData)*t.curr.curr,t.curr.symbol))+"\n      "),r("del",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))])]):r("h3",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.productData.variants[0].color?r("ul",{staticClass:"color-variant"},t._l(t.Color(t.productData.variants),(function(t,e){return r("li",{key:e},[r("a",{class:[t],style:{"background-color":t}})])})),0):t._e(),t._v(" "),t.productData.variants[0].size?r("div",{staticClass:"product-description border-product"},[r("h6",{staticClass:"product-title"},[t._v("select size")]),t._v(" "),r("div",{staticClass:"size-box"},[r("ul",t._l(t.Size(t.productData.variants),(function(e,c){return r("li",{key:c},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),r("p",[t._v(t._s(t.productData.description.substring(0,250)+"...."))])]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("a",{staticClass:"btn btn-solid",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("add to cart")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/product/sidebar/"+t.productData.id}}},[t._v("view detail")])],1)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},460:function(t,e,r){"use strict";var c={props:["openCompare","productData"],methods:{getImgUrl:function(path){return r(445)("./"+path)},closeCompare:function(t){this.$emit("closeCompare",false)}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openCompare?r("b-modal",{attrs:{id:"modal-compare",size:"lg",centered:"",title:"Compare","hide-footer":!0,"hide-header":!0}},[r("div",{staticClass:"row compare-modal"},[r("div",{staticClass:"col-lg-12"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCompare(t.openCompare)}}},[r("span",[t._v("×")])]),t._v(" "),r("div",{staticClass:"media"},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),r("div",{staticClass:"media-body align-self-center text-center"},[r("h5",[r("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),r("span",[t._v(t._s(t.productData.title))]),t._v(" "),r("span",[t._v("successfully added to your Compare list")])]),t._v(" "),r("div",{staticClass:"buttons d-flex justify-content-center"},[r("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/page/compare/compare-1"}}},[t._v("View Compare list")])],1)])])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},466:function(t,e,r){"use strict";r(6),r(5),r(7),r(4),r(8);var c=r(0),o=(r(3),r(2),r(76),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["openCart","productData","products","category"],computed:n(n({},Object(o.c)({currency:function(t){return t.products.currency}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(445)("./"+path)},closeCart:function(t){this.$emit("closeCart",false)},cartRelatedProducts:function(t,e){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t}))&&r.id!==e)return r}))},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=r(62),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.openCart?c("b-modal",{attrs:{id:"modal-cart",size:"lg",centered:"",title:"Add-to-cart","hide-footer":!0,"hide-header":!0}},[c("div",{staticClass:"row cart-modal"},[c("div",{staticClass:"col-lg-12"},[c("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCart(t.openCart)}}},[c("span",[t._v("×")])]),t._v(" "),c("div",{staticClass:"media"},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),c("div",{staticClass:"media-body align-self-center text-center"},[c("h5",[c("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),c("span",[t._v(t._s(t.productData.title))]),t._v(" "),c("span",[t._v("successfully added to your Cart.")])]),t._v(" "),c("div",{staticClass:"buttons d-flex justify-content-center"},[c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/cart"}}},[t._v("View Cart")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/checkout"}}},[t._v("Checkout")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/"}}},[t._v("Continue Shopping")])],1),t._v(" "),c("div",{staticClass:"upsell_payment"},[c("img",{staticClass:"img-fluid w-auto mt-3",attrs:{alt:"",src:r(468)}})])])]),t._v(" "),c("div",{staticClass:"product-section"},[c("div",{staticClass:"col-12 product-upsell text-center"},[c("h4",[t._v("Customers who bought this item also.")])]),t._v(" "),c("div",{staticClass:"row"},t._l(t.cartRelatedProducts(t.productData.collection[0],t.productData.id).slice(0,4),(function(e,r){return c("div",{key:r,staticClass:"product-box col-sm-3 col-6"},[c("div",{staticClass:"img-wrapper"},[c("div",{staticClass:"front"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:e.title}})])],1),t._v(" "),c("div",{staticClass:"product-detail"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("h6",[t._v(t._s(e.title))])]),t._v(" "),e.sale?c("h4",[t._v(t._s(t._f("currency")(t.discountedPrice(e)*t.curr.curr,t.curr.symbol))+"\n                        "),c("del",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])],1)])])})),0)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},467:function(t,e,r){"use strict";var c={data:function(){return{imagepath:r(481)}},mounted:function(){"newsletter"!==localStorage.getItem("showModel")&&(this.showModal(),localStorage.setItem("showModel","newsletter"))},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{ref:"my-modal",attrs:{id:"modal-newsletter",size:"lg",centered:"","hide-footer":!0}},[r("div",{staticClass:"modal-body modal1"},[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"modal-bg"},[r("div",{staticClass:"offer-content"},[r("img",{staticClass:"img-fluid",attrs:{src:t.imagepath,alt:"offer"}}),t._v(" "),r("h2",[t._v("newsletter")]),t._v(" "),r("form",{staticClass:"auth-form needs-validation",attrs:{target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"email",name:"EMAIL",placeholder:"Enter your email",required:"required"}}),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},699:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{swiperOption:{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},items:[{imagepath:r(463),title:"welcome to fashion",subtitle:"women fashion",alignclass:"p-left"},{imagepath:r(463),title:"welcome to fashion",subtitle:"men fashion",alignclass:"p-left"}]}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"p-0"},[r("div",{staticClass:"slide-1 home-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("div",{staticClass:"home text-center",class:e.alignclass,style:{"background-image":"url("+e.imagepath+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"slider-contain"},[r("div",[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("h1",[t._v(t._s(e.subtitle))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/collection/leftsidebar/all"}}},[t._v("shop now")])],1)])])])])])])})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])])}),[],!1,null,null,null);e.default=component.exports},700:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{items:[{imagepath:r(547),title:"men",subtitle:"save 30%"},{imagepath:r(510),title:"women",subtitle:"save 60%"},{imagepath:r(510),title:"women",subtitle:"save 60%"}]}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"pb-0 ratio2_1"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row partition2"},t._l(t.items,(function(e,c){return r("div",{key:c,staticClass:"col-md-4"},[r("nuxt-link",{attrs:{to:{path:"/collection/leftsidebar/all"}}},[r("div",{staticClass:"collection-banner p-right text-center"},[r("div",{staticClass:"img-part"},[r("img",{staticClass:"img-fluid",attrs:{src:e.imagepath,alt:""}})]),t._v(" "),r("div",{staticClass:"contain-banner"},[r("div",[r("h4",[t._v(t._s(e.subtitle))]),t._v(" "),r("h2",[t._v(t._s(e.title))])])])])])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},701:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{imagepath:r(538),title:"2019",subtitle:"fashion trends",text:"special offer"}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"p-0"},[r("div",{staticClass:"full-banner parallax text-center p-left",style:{"background-image":"url("+t.imagepath+")"}},[r("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"banner-contain"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("h3",[t._v(t._s(t.subtitle))]),t._v(" "),r("h4",[t._v(t._s(t.text))])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},702:function(t,e,r){"use strict";r.r(e);r(3),r(2),r(76);var c={props:["products","category"],components:{productBox1:r(465).a},data:function(){return{title:"special products",subtitle:"exclusive products",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0}},methods:{getCategoryProduct:function(t){return this.products.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,e){this.showCart=t,this.cartproduct=e,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,e){this.showcomapreModal=t,this.comapreproduct=e,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"title1 section-t-space"},[r("h4",[t._v(t._s(t.subtitle))]),t._v(" "),r("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))])]),t._v(" "),r("section",{staticClass:"section-b-space p-t-0 ratio_asos"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"theme-tab"},[r("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.category,(function(e,c){return r("b-tab",{key:c,attrs:{title:e}},[r("div",{staticClass:"no-slider row"},t._l(t.getCategoryProduct(e),(function(e,c){return r("div",{key:c,staticClass:"product-box"},[r("productBox1",{attrs:{product:e,index:c},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])})),1)],1)])])])]),t._v(" "),r("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[r("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[],!1,null,null,null);e.default=component.exports},703:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{title_1:"free shipping",subtitle_1:"free shipping world wide",title_2:"24 X 7 service",subtitle_2:"online service for new customer",title_3:"festival offer",subtitle_3:"new special festival offer"}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("section",{staticClass:"service border-section small-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 service-block"},[r("div",{staticClass:"media"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -117 679.99892 679"}},[r("path",{attrs:{d:"m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0",fill:"#ff4c3b"}})]),t._v(" "),r("div",{staticClass:"media-body"},[r("h4",[t._v(t._s(t.title_1))]),t._v(" "),r("p",[t._v(t._s(t.subtitle_1))])])])]),t._v(" "),r("div",{staticClass:"col-md-4 service-block"},[r("div",{staticClass:"media"},[r("svg",{staticStyle:{"enable-background":"new 0 0 480 480"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 480 480","xml:space":"preserve",width:"512px",height:"512px"}},[r("g",[r("g",[r("g",[r("path",{attrs:{d:"M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160 c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24 c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552 c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8 c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32 l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8 S332.418,464,328,464z",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0 C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288 V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2 c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296 c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0 c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248 c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952 C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112 C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568 c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704 c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947 c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888 C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002 c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002 C224.781,213.464,224.781,218.53,221.658,221.654z",fill:"#ff4c3b"}})])])])]),t._v(" "),r("div",{staticClass:"media-body"},[r("h4",[t._v(t._s(t.title_2))]),t._v(" "),r("p",[t._v(t._s(t.subtitle_2))])])])]),t._v(" "),r("div",{staticClass:"col-md-4 service-block"},[r("div",{staticClass:"media"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -14 512.00001 512"}},[r("path",{attrs:{d:"m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0",fill:"#ff4c3b"}}),t._v(" "),r("path",{attrs:{d:"m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0",fill:"#ff4c3b"}})]),t._v(" "),r("div",{staticClass:"media-body"},[r("h4",[t._v(t._s(t.title_3))]),t._v(" "),r("p",[t._v(t._s(t.subtitle_3))])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},704:function(t,e,r){"use strict";r.r(e);var c=r(51),o={data:function(){return{title:"from the blog",subtitle:"recent story",swiperOption:{slidesPerView:3,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},420:{slidesPerView:2,spaceBetween:20},0:{slidesPerView:1,spaceBetween:20}}}}},computed:Object(c.c)({bloglist:function(t){return t.blog.bloglist}}),methods:{getImgUrl:function(path){return r(445)("./"+path)}}},l=r(62),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"title1 section-t-space"},[r("h4",[t._v(t._s(t.subtitle))]),t._v(" "),r("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))])])])])]),t._v(" "),r("section",{staticClass:"blog p-t-0 ratio2_3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.bloglist,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"classic-effect"},[r("div",[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0]),alt:""}})]),t._v(" "),r("span")])]),t._v(" "),r("div",{staticClass:"blog-details"},[r("h4",[t._v(t._s(e.date))]),t._v(" "),r("a",{attrs:{href:"#"}},[r("p",[t._v(t._s(e.title))])]),t._v(" "),r("hr",{staticClass:"style1"}),t._v(" "),r("h6",[t._v("by: "+t._s(e.author)+" , 2 Comment")])])])})),0)])])])])])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){"use strict";r.r(e);var c=r(52),o=r.n(c),l={data:function(){return{title:"#instagram",swiperOption:{loop:!0,slideSpeed:300,slidesPerView:7,slidesToScroll:7,breakpoints:{1199:{slidesPerView:5},991:{slidesPerView:3},480:{slidesPerView:2}}},instagram:[]}},mounted:function(){var t=this;o.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15").then((function(e){t.instagram=e.data.data}))}},n=r(62),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"instagram"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 p-0"},[r("h2",{staticClass:"title-borderless"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"slide-7 no-arrow"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.instagram.slice(0,15),(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("div",[r("a",{attrs:{href:e.link,target:"_blank"}},[r("div",{staticClass:"instagram-box"},[r("img",{attrs:{alt:"",src:e.images.standard_resolution.url}}),t._v(" "),t._m(0,!0)])])])])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay"},[e("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports},706:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{swiperOption:{slidesPerView:6,freeMode:!0,breakpoints:{1199:{slidesPerView:6},768:{slidesPerView:4},420:{slidesPerView:3},0:{slidesPerView:2}}},items:[{imagepath:r(469)},{imagepath:r(470)},{imagepath:r(471)},{imagepath:r(472)},{imagepath:r(473)},{imagepath:r(474)},{imagepath:r(475)},{imagepath:r(476)}]}}},o=r(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"slide-6 no-arrow"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(t,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("div",[r("div",{staticClass:"logo-block text-center"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:t.imagepath,alt:""}})])])])])})),0)])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);