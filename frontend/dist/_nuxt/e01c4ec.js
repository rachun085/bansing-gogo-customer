(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1127:function(t,e,r){"use strict";r.r(e);r(6),r(5),r(3),r(2),r(7),r(4),r(8);var l=r(0),c=r(51),o=r(447),n=r(446);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{Header:o.a,Footer:n.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({order:"products/getOrder",cartTotal:"cart/cartTotalAmount",curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(445)("./"+path)}}},_=d,f=r(62),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),""==t.order?r("section",{staticClass:"p-0"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"error-section"},[r("h1",[t._v("404")]),t._v(" "),r("h2",[t._v("page not found")]),t._v(" "),r("nuxt-link",{class:"btn btn-solid",attrs:{to:{path:"/"}}},[t._v(" back to home")])],1)])])])]):t._e(),t._v(" "),""!=t.order?r("section",{staticClass:"section-b-space light-layout"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"success-text"},[r("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),r("h2",[t._v("thank you")]),t._v(" "),r("p",[t._v("Payment is successfully processsed and your order is on the way")]),t._v(" "),r("p",[t._v("Transaction ID:"+t._s(t.order.token))])])])])])]):t._e(),t._v(" "),""!=t.order?r("section",{staticClass:"section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"product-order"},[r("h3",[t._v("your order details")]),t._v(" "),t._l(t.order.product,(function(e,l){return r("div",{key:l,staticClass:"row product-order-detail"},[r("div",{staticClass:"col-3"},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:""}})]),t._v(" "),r("div",{staticClass:"col-3 order_detail"},[r("div",[r("h4",[t._v("product name")]),t._v(" "),r("h5",[t._v(t._s(e.title))])])]),t._v(" "),r("div",{staticClass:"col-3 order_detail"},[r("div",[r("h4",[t._v("quantity")]),t._v(" "),r("h5",[t._v(t._s(e.quantity))])])]),t._v(" "),r("div",{staticClass:"col-3 order_detail"},[r("div",[r("h4",[t._v("price")]),t._v(" "),r("h5",[t._v(t._s(t._f("currency")(e.price*t.curr.curr*e.quantity,t.curr.symbol)))])])])])})),t._v(" "),r("div",{staticClass:"total-sec"},[r("ul",[r("li",[t._v("\n                    Total\n                    "),r("span",[t._v(t._s(t._f("currency")(t.cartTotal*t.curr.curr,t.curr.symbol)))])])])])],2)]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"row order-success-sec"},[r("div",{staticClass:"col-sm-6"},[r("h4",[t._v("summery")]),t._v(" "),r("ul",{staticClass:"order-detail"},[r("li",[t._v("order ID: "+t._s(t.order.token))]),t._v(" "),r("li",[t._v("Order Date: October 18, 2020")]),t._v(" "),r("li",[t._v("Order Total: "+t._s(t._f("currency")(t.cartTotal*t.curr.curr,t.curr.symbol)))])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])]):t._e(),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6"},[r("h4",[t._v("shipping address")]),t._v(" "),r("ul",{staticClass:"order-detail"},[r("li",[t._v("gerg harvell")]),t._v(" "),r("li",[t._v("568, suite ave.")]),t._v(" "),r("li",[t._v("Austrlia, 235153")]),t._v(" "),r("li",[t._v("Contact No. 987456321")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-12 payment-mode"},[r("h4",[t._v("payment method")]),t._v(" "),r("p",[t._v("Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"delivery-sec"},[r("h3",[t._v("expected date of delivery")]),t._v(" "),r("h2",[t._v("october 22, 2020")])])])}],!1,null,null,null);e.default=component.exports},446:function(t,e,r){"use strict";var l={},c=r(62),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),l("section",{staticClass:"section-b-space light-layout"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row footer-theme partition-f"},[l("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-contant"},[l("div",{staticClass:"footer-logo"},[l("img",{attrs:{src:r(448),alt:"logo"}})]),t._v(" "),l("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),l("div",{staticClass:"sub-footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[t._m(6),t._v(" "),l("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[l("div",{staticClass:"payment-card-bottom"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(455),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(453),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(454),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(451),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(452),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},447:function(t,e,r){"use strict";var l=r(456),c=r(458),o=r(450),n=r(457),v={data:function(){return{leftSidebarVal:!1}},components:{TopBar:l.a,LeftSidebar:c.a,Nav:o.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},d=r(62),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",[l("div",{staticClass:"mobile-fix-option"}),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12"},[l("div",{staticClass:"main-menu"},[l("div",{staticClass:"menu-left"},[l("div",{staticClass:"brand-logo"},[l("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[l("img",{staticClass:"img-fluid",attrs:{src:r(448),alt:""}})])],1)]),t._v(" "),l("div",{staticClass:"menu-right pull-right"},[l("Nav"),t._v(" "),l("HeaderWidgets")],1)])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);