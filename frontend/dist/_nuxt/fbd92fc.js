(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1181:function(t,e,r){"use strict";r.r(e);r(5),r(7),r(4),r(8);var n=r(0),o=(r(6),r(3),r(2),r(51)),c=r(447),l=r(446),d=r(449),f=r(478),v=r(482);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Header:c.a,Footer:l.a,Breadcrumbs:d.a,Timer:f.a,relatedProduct:v.a},data:function(){return{counter:1,activeColor:"",selectedSize:"",qty:"",size:[],productTYpe:"",productId:"",swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0},swiperOption1:{slidesPerView:3,spaceBetween:30,freeMode:!0,centeredSlides:!1}}},computed:m(m(m({},Object(o.c)({currency:function(t){return t.products.currency}})),Object(o.b)({curr:"products/changeCurrency"})),{},{getDetail:function(){return this.$store.getters["products/getProductById"](1)},swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.getDetail.variants[0].color,this.sizeVariant(this.getDetail.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.getDetail.variants[0].size)},methods:{priceCurrency:function(){this.$store.dispatch("products/changeCurrency")},addToWishlist:function(t){this.$store.dispatch("products/addToWishlist",t)},discountedPrice:function(t){return t.price-t.price*t.discount/100},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return this.stock(),e},addToCart:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t)},buyNow:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t),this.$router.push("/page/account/checkout")},increment:function(){this.counter++},decrement:function(){this.counter>1&&this.counter--},changeSizeVariant:function(t){this.selectedSize=t,this.stock()},getImgUrl:function(path){return r(445)("./"+path)},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var n=this;this.swiper.slideTo(e,1e3,!1),this.size=[],this.activeColor=r,this.getDetail.variants.filter((function(e){t===e.image_id&&n.size.push(e.size)}))},stock:function(){var t=this;this.getDetail.variants.filter((function(e){t.activeColor===e.color&&t.selectedSize===e.size&&(t.qty=e.qty)}))}}},_=r(62),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:t.getDetail.title}}),t._v(" "),r("section",[r("div",{staticClass:"collection-wrapper productdetail"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(e,n){return r("div",{key:n,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:e.alt}})])})),0)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 slider-nav-images"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"mySwiper1"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(e,n){return r("div",{key:n,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:"product.alt"},on:{click:function(e){return t.slideTo(n)}}})])})),0)])])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.getDetail.title))]),t._v(" "),t.getDetail.sale?r("h4",[r("del",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),r("span",[t._v(t._s(t.getDetail.discount)+"% off")])]):t._e(),t._v(" "),t.getDetail.sale?r("h3",[t._v(t._s(t._f("currency")(t.discountedPrice(t.getDetail)*t.curr.curr,t.curr.symbol)))]):r("h3",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),r("ul",{staticClass:"color-variant"},t._l(t.Color(t.getDetail.variants),(function(e,n){return r("li",{key:n,class:{active:t.activeColor==e}},[r("a",{class:[e],style:{"background-color":e},on:{click:function(r){return t.sizeVariant(t.getDetail.variants[n].image_id,n,e)}}})])})),0),t._v(" "),t.getDetail.stock<8?r("div",{staticClass:"pro_inventory"},[r("p",{staticClass:"active"},[t._v(" Hurry! We have only "+t._s(t.getDetail.stock)+" product in stock. ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),r("div",{staticClass:"product-description border-product"},[r("h6",{staticClass:"product-title size-text"},[t._v("\n                          select size\n                          "),r("span",[r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"javascript:void(0)"}},[t._v("size chart")])])]),t._v(" "),r("div",{staticClass:"size-box"},[r("ul",t._l(t.size,(function(e,n){return r("li",{key:n,staticClass:"product-title",class:{active:t.selectedSize==e}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.changeSizeVariant(e)}}},[t._v(t._s(e))])])})),0)]),t._v(" "),t.counter<=t.getDetail.stock?r("h5",{staticClass:"avalibility"},[r("span",[t._v("In Stock")])]):t._e(),t._v(" "),t.counter>t.getDetail.stock?r("h5",{staticClass:"avalibility"},[r("span",[t._v("Out of Stock")])]):t._e(),t._v(" "),r("h6",{staticClass:"product-title"},[t._v("quantity")]),t._v(" "),r("div",{staticClass:"qty-box"},[r("div",{staticClass:"input-group"},[r("span",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn quantity-left-minus",attrs:{type:"button","data-type":"minus","data-field":""},on:{click:function(e){return t.decrement()}}},[r("i",{staticClass:"ti-angle-left"})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],staticClass:"form-control input-number",attrs:{type:"text",name:"quantity",disabled:t.counter>t.getDetail.stock},domProps:{value:t.counter},on:{input:function(e){e.target.composing||(t.counter=e.target.value)}}}),t._v(" "),r("span",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn quantity-right-plus",attrs:{type:"button","data-type":"plus","data-field":""},on:{click:function(e){return t.increment()}}},[r("i",{staticClass:"ti-angle-right"})])])])])]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("nuxt-link",{attrs:{to:{path:"/page/account/cart"}}},[r("button",{staticClass:"btn btn-solid",attrs:{title:"Add to cart",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.addToCart(t.getDetail,t.counter)}}},[t._v("Add To Cart")])]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{title:"buy now",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.buyNow(t.getDetail,t.counter)}}},[t._v("Buy Now")])],1),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),r("p",[t._v(t._s(t.getDetail.description.substring(0,200)+"...."))])]),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("share it")]),t._v(" "),r("div",{staticClass:"product-icon"},[t._m(1),t._v(" "),r("form",{staticClass:"d-inline-block"},[r("button",{staticClass:"wishlist-btn",on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart"}),t._v(" "),r("span",{staticClass:"title-font"},[t._v("Add To WishList")])])])])]),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("Time Reminder")]),t._v(" "),r("Timer",{attrs:{date:"December 20, 2020"}})],1)])])])])])]),t._v(" "),r("section",{staticClass:"tab-product m-0"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-lg-12"},[r("b-tabs",{attrs:{card:""}},[r("b-tab",{attrs:{title:"Description",active:""}},[r("b-card-text",[t._v(t._s(t.getDetail.description))])],1),t._v(" "),r("b-tab",{attrs:{title:"Details"}},[r("b-card-text",[t._v("\n                          "+t._s(t.getDetail.description)+"\n                          "),r("div",{staticClass:"single-product-tables"},[r("table",[r("tbody",[r("tr",[r("td",[t._v("Febric")]),t._v(" "),r("td",[t._v("Chiffon")])]),t._v(" "),r("tr",[r("td",[t._v("Color")]),t._v(" "),r("td",[t._v("Red")])]),t._v(" "),r("tr",[r("td",[t._v("Material")]),t._v(" "),r("td",[t._v("Crepe printed")])])])]),t._v(" "),r("table",[r("tbody",[r("tr",[r("td",[t._v("Length")]),t._v(" "),r("td",[t._v("50 Inches")])]),t._v(" "),r("tr",[r("td",[t._v("Size")]),t._v(" "),r("td",[t._v("S, M, L .XXL")])])])])])])],1),t._v(" "),r("b-tab",{attrs:{title:"Video"}},[r("b-card-text",[r("div",{staticClass:"mt-3 text-center"},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])],1),t._v(" "),r("b-tab",{attrs:{title:"Write Review"}},[r("b-card-text",[r("form",{staticClass:"theme-form"},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"media"},[r("label",[t._v("Rating")]),t._v(" "),r("div",{staticClass:"media-body ml-3"},[r("div",{staticClass:"rating three-star"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Your name",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"review",placeholder:"Enter your Review Subjects",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{placeholder:"Wrire Your Testimonial Here",id:"exampleFormControlTextarea1",rows:"6"}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-solid",attrs:{type:"submit"}},[t._v("Submit YOur Review")])])])])])],1)],1)],1)])])]),t._v(" "),r("relatedProduct",{attrs:{productTYpe:t.productTYpe,productId:t.productId}}),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inventory-scroll"},[e("span",{staticStyle:{width:"95%"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-social"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss"})])])])}],!1,null,null,null);e.default=component.exports},461:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},462:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},464:function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},i=0;i<e.length;i++)r[e[i]]=Object.getOwnPropertyDescriptor(t,e[i]);return r},o=/%[sdj%]/g;e.format=function(t){if(!j(t)){for(var e=[],i=0;i<arguments.length;i++)e.push(d(arguments[i]));return e.join(" ")}i=1;for(var r=arguments,n=r.length,c=String(t).replace(o,(function(t){if("%%"===t)return"%";if(i>=n)return t;switch(t){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch(t){return"[Circular]"}default:return t}})),l=r[i];i<n;l=r[++i])C(l)||!x(l)?c+=" "+l:c+=" "+d(l);return c},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var c,l={};function d(t,r){var n={seen:[],stylize:v};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),w(r)?n.showHidden=r:r&&e._extend(n,r),D(n.showHidden)&&(n.showHidden=!1),D(n.depth)&&(n.depth=2),D(n.colors)&&(n.colors=!1),D(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=f),y(n,t,n.depth)}function f(t,e){var style=d.styles[e];return style?"["+d.colors[style][0]+"m"+t+"["+d.colors[style][1]+"m":t}function v(t,e){return t}function y(t,r,n){if(t.customInspect&&r&&T(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return j(o)||(o=y(t,o,n)),o}var c=function(t,e){if(D(e))return t.stylize("undefined","undefined");if(j(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(O(e))return t.stylize(""+e,"number");if(w(e))return t.stylize(""+e,"boolean");if(C(e))return t.stylize("null","null")}(t,r);if(c)return c;var l=Object.keys(r),d=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(l);if(t.showHidden&&(l=Object.getOwnPropertyNames(r)),k(r)&&(l.indexOf("message")>=0||l.indexOf("description")>=0))return m(r);if(0===l.length){if(T(r)){var f=r.name?": "+r.name:"";return t.stylize("[Function"+f+"]","special")}if(S(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(z(r))return t.stylize(Date.prototype.toString.call(r),"date");if(k(r))return m(r)}var output,base="",v=!1,x=["{","}"];(_(r)&&(v=!0,x=["[","]"]),T(r))&&(base=" [Function"+(r.name?": "+r.name:"")+"]");return S(r)&&(base=" "+RegExp.prototype.toString.call(r)),z(r)&&(base=" "+Date.prototype.toUTCString.call(r)),k(r)&&(base=" "+m(r)),0!==l.length||v&&0!=r.length?n<0?S(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),output=v?function(t,e,r,n,o){for(var output=[],i=0,c=e.length;i<c;++i)$(e,String(i))?output.push(h(t,e,r,n,String(i),!0)):output.push("");return o.forEach((function(o){o.match(/^\d+$/)||output.push(h(t,e,r,n,o,!0))})),output}(t,r,n,d,l):l.map((function(e){return h(t,r,n,d,e,v)})),t.seen.pop(),function(output,base,t){var e=output.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(e>60)return t[0]+(""===base?"":base+"\n ")+" "+output.join(",\n  ")+" "+t[1];return t[0]+base+" "+output.join(", ")+" "+t[1]}(output,base,x)):x[0]+base+x[1]}function m(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,o,c){var l,d,desc;if((desc=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?d=desc.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):desc.set&&(d=t.stylize("[Setter]","special")),$(n,o)||(l="["+o+"]"),d||(t.seen.indexOf(desc.value)<0?(d=C(r)?y(t,desc.value,null):y(t,desc.value,r-1)).indexOf("\n")>-1&&(d=c?d.split("\n").map((function(line){return"  "+line})).join("\n").substr(2):"\n"+d.split("\n").map((function(line){return"   "+line})).join("\n")):d=t.stylize("[Circular]","special")),D(l)){if(c&&o.match(/^\d+$/))return d;(l=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=t.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=t.stylize(l,"string"))}return l+": "+d}function _(t){return Array.isArray(t)}function w(t){return"boolean"==typeof t}function C(t){return null===t}function O(t){return"number"==typeof t}function j(t){return"string"==typeof t}function D(t){return void 0===t}function S(t){return x(t)&&"[object RegExp]"===P(t)}function x(t){return"object"==typeof t&&null!==t}function z(t){return x(t)&&"[object Date]"===P(t)}function k(t){return x(t)&&("[object Error]"===P(t)||t instanceof Error)}function T(t){return"function"==typeof t}function P(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(D(c)&&(c=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!l[r])if(new RegExp("\\b"+r+"\\b","i").test(c)){var n=t.pid;l[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else l[r]=function(){};return l[r]},e.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=_,e.isBoolean=w,e.isNull=C,e.isNullOrUndefined=function(t){return null==t},e.isNumber=O,e.isString=j,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=D,e.isRegExp=S,e.isObject=x,e.isDate=z,e.isError=k,e.isFunction=T,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(461);var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function $(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,time;console.log("%s - %s",(t=new Date,time=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":"),[t.getDate(),N[t.getMonth()],time].join(" ")),e.format.apply(e,arguments))},e.inherits=r(462),e._extend=function(t,e){if(!e||!x(e))return t;for(var r=Object.keys(e),i=r.length;i--;)t[r[i]]=e[r[i]];return t};var R="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(R&&t[R]){var e;if("function"!=typeof(e=t[R]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,o)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),R&&Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=R,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],i=0;i<arguments.length;i++)r.push(arguments[i]);var n=r.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var o=this,c=function(){return n.apply(o,arguments)};e.apply(this,r).then((function(e){t.nextTick(c,null,e)}),(function(e){t.nextTick(I,e,c)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}}).call(this,r(113))},477:function(t,e,r){var n=r(10),o=Math.ceil,c=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})}}]);