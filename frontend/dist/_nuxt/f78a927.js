(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{495:function(t,r,e){"use strict";e(5),e(3),e(2),e(7),e(4),e(8);var c=e(0),o=(e(6),e(13),e(51));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var d={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:l(l({},Object(o.c)({productslist:function(t){return t.products.productslist}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(445)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.$emit("openquickview",this.showquickview,t)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r,e){var c=this;r.variants.map((function(o){o.color===t&&r.images.map((function(img){img.image_id===o.image_id&&(c.productslist[e].vImage=img.src)}))}))},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=e(62),component=Object(v.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"img-wrapper"},[e("div",{staticClass:"lable-block"},[t.product.new?e("span",{staticClass:"lable3"},[t._v("new")]):t._e()]),t._v(" "),e("div",{staticClass:"front"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.imageSrc?t.imageSrc:t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),e("ul",{staticClass:"product-thumb-list"},t._l(t.product.images,(function(image,r){return e("li",{key:r,staticClass:"grid_thumb_img",class:{active:t.imageSrc==image.src}},[e("a",{attrs:{href:"javascript:void(0);"}},[e("img",{attrs:{src:t.getImgUrl(image.src),alt:"'image.alt'"}})])])})),0),t._v(" "),e("div",{staticClass:"cart-detail"},[e("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[e("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[e("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"product-info"},[t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("h6",[t._v(t._s(t.product.title))])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.product.variants[0].color?e("ul",{staticClass:"color-variant"},t._l(t.Color(t.product.variants),(function(r,c){return e("li",{key:c},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.productColorchange(r,t.product,t.index)}}})])})),0):t._e(),t._v(" "),e("div",{staticClass:"add-btn"},[e("button",{staticClass:"btn btn-outline",attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart"},on:{click:function(r){return t.addToCart(t.product)}}},[e("i",{staticClass:"ti-shopping-cart"}),t._v(" add to cart\n      ")])])],1)])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.a=component.exports},685:function(t,r,e){"use strict";e.r(r);e(6),e(5),e(7),e(4),e(8);var c=e(0),o=(e(3),e(2),e(76),e(51));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var l={props:["products","category"],components:{productBox3:e(495).a},data:function(){return{swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOption1:{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(445)("./"+path)},getCategoryProduct:function(t){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t})))return r}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=l,v=e(62),component=Object(v.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"ratio_square"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row partition3 partition_3"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"theme-card card-border"},[e("h5",{staticClass:"title-border"},[t._v(t._s(t.category[0]))]),t._v(" "),e("div",{staticClass:"offer-slider slide-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[0]).splice(0,4),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(0,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n                          "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n                          "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]),t._v(" "),t.getCategoryProduct(t.category[0]).length>=5?e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[0]).splice(4,4),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n                          "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n                          "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4 center-slider border-0"},[e("div",[e("div",{staticClass:"title2"},[e("h4",[t._v("on sale")]),t._v(" "),e("h2",{staticClass:"title-inner2"},[t._v(t._s(t.category[1]))])]),t._v(" "),e("div",{staticClass:"offer-slider slide-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"mySwiper1"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.getCategoryProduct(t.category[1]).splice(0,4),(function(r,c){return e("div",{key:c,staticClass:"swiper-slide"},[e("div",[e("div",{staticClass:"product-box product-wrap"},[e("productBox3",{attrs:{product:r,index:c},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])])})),0),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"theme-card card-border"},[e("h5",{staticClass:"title-border"},[t._v(t._s(t.category[2]))]),t._v(" "),e("div",{staticClass:"offer-slider slide-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[2]).splice(0,4),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(2,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n        "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n        "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]),t._v(" "),t.getCategoryProduct(t.category[2]).length>=5?e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[2]).splice(4,5),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(3,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n        "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n        "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])])])])])])])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.default=component.exports}}]);