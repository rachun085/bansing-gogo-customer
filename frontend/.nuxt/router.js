import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4d6d5e20 = () => interopDefault(import('../pages/email-confirmation.vue' /* webpackChunkName: "pages/email-confirmation" */))
const _44781fce = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _92862446 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _c3b5483a = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _3b3913f0 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _29a23f5f = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _1f2c6f6d = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _491587dc = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _340cecb2 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _f32c4cb8 = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _2148f7f4 = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _b9daf230 = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _1924cdec = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _5eb7bd62 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _d8886e92 = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _731d8738 = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _3d81211e = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _0b731ca3 = () => interopDefault(import('../pages/page/confirm-payment.vue' /* webpackChunkName: "pages/page/confirm-payment" */))
const _0aa86040 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _173f164e = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _a3bec7a4 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _2013df1e = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _66bfa56e = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _3e925275 = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _aa2d0424 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _aac3d384 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _2e9489ad = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _3fe2d484 = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _4e765a8c = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _27cc3db1 = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _5ce0a586 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _2917aca4 = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _0141c3f0 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _0051c52e = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _5226a468 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _538964dc = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _50f46143 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _7bf84f31 = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _5a4e1d71 = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _4358b00b = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _0c3a63c1 = () => interopDefault(import('../pages/page/account/reset-password.vue' /* webpackChunkName: "pages/page/account/reset-password" */))
const _4c62dead = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _42071ede = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _62111f3c = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _00018158 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _3d73c39b = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _01639478 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _f55dcd58 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _8b89e08a = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _78eae638 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _77acfb20 = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _4b3ca796 = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _708098f2 = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _c0aba2a0 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _5701e313 = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _77d1c46e = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _f3c6d26c = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _dd4afb68 = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _6d9a3c52 = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _11cbdb56 = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _2c8fc7d0 = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _f070db32 = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _342df43d = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _404ed384 = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _3c958ce6 = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _3ce8907c = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _4d2cebf5 = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _3102c924 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _b6f780d4 = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _1b8ba0f3 = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _200307ea = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _0ab60ea7 = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _9f203f4e = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _0779757f = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _4a522db5 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _297bb12c = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _7c2639af = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _36d2dd32 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _6e25e1f8 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _773250fc = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _3c319af1 = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _f232e698 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _3678ff4e = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _3b7f9ba6 = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _12243db0 = () => interopDefault(import('../pages/company/_companyName/index.vue' /* webpackChunkName: "pages/company/_companyName/index" */))
const _c9aaf310 = () => interopDefault(import('../pages/company/_companyName/_event/index.vue' /* webpackChunkName: "pages/company/_companyName/_event/index" */))
const _7c6bea4c = () => interopDefault(import('../pages/company/_companyName/_event/components/header.vue' /* webpackChunkName: "pages/company/_companyName/_event/components/header" */))
const _26d258e8 = () => interopDefault(import('../pages/company/_companyName/_event/components/pdf-viewer.vue' /* webpackChunkName: "pages/company/_companyName/_event/components/pdf-viewer" */))
const _32868e98 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/email-confirmation",
    component: _4d6d5e20,
    name: "email-confirmation"
  }, {
    path: "/blog/blog-detail",
    component: _44781fce,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _92862446,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _c3b5483a,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _3b3913f0,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _29a23f5f,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _1f2c6f6d,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _491587dc,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _340cecb2,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _f32c4cb8,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _2148f7f4,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _b9daf230,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _1924cdec,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _5eb7bd62,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _d8886e92,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _731d8738,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _3d81211e,
    name: "page-coming-soon"
  }, {
    path: "/page/confirm-payment",
    component: _0b731ca3,
    name: "page-confirm-payment"
  }, {
    path: "/page/faq",
    component: _0aa86040,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _173f164e,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _a3bec7a4,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _2013df1e,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _66bfa56e,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _3e925275,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _aa2d0424,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _aac3d384,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _2e9489ad,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _3fe2d484,
    name: "shop-beauty"
  }, {
    path: "/shop/fashion",
    component: _4e765a8c,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _27cc3db1,
    name: "shop-fashion-2"
  }, {
    path: "/blog/widgets/blog-list",
    component: _5ce0a586,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _2917aca4,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _0141c3f0,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _0051c52e,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _5226a468,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _538964dc,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _50f46143,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _7bf84f31,
    name: "page-account-login"
  }, {
    path: "/page/account/profile",
    component: _5a4e1d71,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _4358b00b,
    name: "page-account-register"
  }, {
    path: "/page/account/reset-password",
    component: _0c3a63c1,
    name: "page-account-reset-password"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _4c62dead,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _42071ede,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _62111f3c,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _00018158,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _3d73c39b,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _01639478,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _f55dcd58,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _8b89e08a,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _78eae638,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _77acfb20,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _4b3ca796,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _708098f2,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _c0aba2a0,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _5701e313,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _77d1c46e,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _f3c6d26c,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _dd4afb68,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _6d9a3c52,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _11cbdb56,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _2c8fc7d0,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _f070db32,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _342df43d,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _404ed384,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _3c958ce6,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _3ce8907c,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _4d2cebf5,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _3102c924,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _b6f780d4,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _1b8ba0f3,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _200307ea,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _0ab60ea7,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _9f203f4e,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _0779757f,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _4a522db5,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _297bb12c,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _7c2639af,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _36d2dd32,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _6e25e1f8,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _773250fc,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _3c319af1,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _f232e698,
    name: "shop-fashion-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _3678ff4e,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _3b7f9ba6,
    name: "product-sidebar-id"
  }, {
    path: "/company/:companyName",
    component: _12243db0,
    name: "company-companyName"
  }, {
    path: "/company/:companyName?/:event",
    component: _c9aaf310,
    name: "company-companyName-event"
  }, {
    path: "/company/:companyName?/:event/components/header",
    component: _7c6bea4c,
    name: "company-companyName-event-components-header"
  }, {
    path: "/company/:companyName?/:event/components/pdf-viewer",
    component: _26d258e8,
    name: "company-companyName-event-components-pdf-viewer"
  }, {
    path: "/",
    component: _32868e98,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
