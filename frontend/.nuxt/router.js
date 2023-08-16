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
const _cc0c40a2 = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _4e765a8c = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _27cc3db1 = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _869e1f1c = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _e6591646 = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _274e8a06 = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _61aaa962 = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _725bf917 = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _7c63e42f = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _b271df94 = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _459cc408 = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _cc0ddda2 = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _5d3d8a98 = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _4ae6eb23 = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
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
const _a97f746e = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _a963456c = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _0a2f0be5 = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _6ac18c77 = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _af2068dc = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _10427526 = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _2d8e6cda = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _569de124 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _5e45f5b8 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _382abd95 = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _3d09cacc = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _d51c46be = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _116f594d = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _117d70ce = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _118b884f = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _d075b7fa = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _2c099304 = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _7f63fbf6 = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
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
const _c060ea32 = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _39afdcbf = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _54347557 = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _3102c924 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _b6f780d4 = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _1b8ba0f3 = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _200307ea = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _0ab60ea7 = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _9f203f4e = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _7b346265 = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _2e77b5ea = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _55cbeb48 = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _0abd0ccc = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _0779757f = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _4a522db5 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _297bb12c = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _7c2639af = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _36d2dd32 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _6e25e1f8 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _773250fc = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _3c319af1 = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _f232e698 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _4ef356c6 = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _744beef8 = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _8d73fc0e = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _47d9133e = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _87c25256 = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _4b05d382 = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _303c94f6 = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _795d939c = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _320e66a2 = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _70556be1 = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _01632eb0 = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _8ccb0e52 = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _d73d55a4 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _5c16a6b8 = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _3d38c195 = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _6463ea8c = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _1c863dc6 = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _7f03bed2 = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _3970d0f7 = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _c66f0ca8 = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _63f3c6dc = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _1a775878 = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _c2623698 = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _323a105d = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _7c28066e = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _610d6a3c = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _5a73b2bf = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _a5af1332 = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _2c958d9c = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _739454a8 = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _3b6b6def = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _62ac424e = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _c1bf2db2 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _353bb9d7 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _10e356df = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _d1586e64 = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _21980716 = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _3939c6f5 = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _47b961fc = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _245bd944 = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _a75f35da = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _5a33bdcc = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _2bb835b6 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _185a87d8 = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _b13f11fe = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _44c61281 = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _44d42a02 = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _70cd4f66 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _47066f82 = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _d1b11078 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _1ceda83f = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _321ff1bd = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _3efe6702 = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _79282824 = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _796cc007 = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _7358d4f4 = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _01943e22 = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _229ba716 = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _280a9bad = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _37d6a403 = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _5e58feaf = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _b9153252 = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _658d59a7 = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _10e0fbdd = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _fce369a8 = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _64dd1519 = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _360b1e48 = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _1a9eede5 = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _1b97a4e8 = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _23b833e8 = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _544b5066 = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _021e296f = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _2b8d8838 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _acbea50a = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _b4a323ca = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _20d1d748 = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _83701a6a = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _1195b750 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _0849e6f8 = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
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
    path: "/shop/electronics-1",
    component: _cc0c40a2,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _4e765a8c,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _27cc3db1,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _869e1f1c,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _e6591646,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _274e8a06,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _61aaa962,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _725bf917,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _7c63e42f,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _b271df94,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _459cc408,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _cc0ddda2,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _5d3d8a98,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _4ae6eb23,
    name: "shop-watch"
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
    path: "/page/compare/compare-1",
    component: _a97f746e,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _a963456c,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _0a2f0be5,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _6ac18c77,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _af2068dc,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _10427526,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _2d8e6cda,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _569de124,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _5e45f5b8,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _382abd95,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _3d09cacc,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _d51c46be,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _116f594d,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _117d70ce,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _118b884f,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _d075b7fa,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _2c099304,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _7f63fbf6,
    name: "page-portfolio-portfolio-4-col"
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
    path: "/shop/electronics-1/components/collection_banner",
    component: _c060ea32,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _39afdcbf,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _54347557,
    name: "shop-electronics-1-components-slider"
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
    path: "/shop/fashion-3/components/banner",
    component: _7b346265,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _2e77b5ea,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _55cbeb48,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _0abd0ccc,
    name: "shop-fashion-3-components-slider"
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
    path: "/shop/flower/components/blog",
    component: _4ef356c6,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _744beef8,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _8d73fc0e,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _47d9133e,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _87c25256,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _4b05d382,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _303c94f6,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _795d939c,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _320e66a2,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _70556be1,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _01632eb0,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _8ccb0e52,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _d73d55a4,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _5c16a6b8,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _3d38c195,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _6463ea8c,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _1c863dc6,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _7f03bed2,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _3970d0f7,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _c66f0ca8,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _63f3c6dc,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _1a775878,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _c2623698,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _323a105d,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _7c28066e,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _610d6a3c,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _5a73b2bf,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _a5af1332,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _2c958d9c,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _739454a8,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _3b6b6def,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _62ac424e,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _c1bf2db2,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _353bb9d7,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _10e356df,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _d1586e64,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _21980716,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _3939c6f5,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _47b961fc,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _245bd944,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _a75f35da,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _5a33bdcc,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _2bb835b6,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _185a87d8,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _b13f11fe,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _44c61281,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _44d42a02,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _70cd4f66,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _47066f82,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _d1b11078,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _1ceda83f,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _321ff1bd,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _3efe6702,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _79282824,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _796cc007,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _7358d4f4,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _01943e22,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _229ba716,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _280a9bad,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _37d6a403,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _5e58feaf,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _b9153252,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _658d59a7,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _10e0fbdd,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _fce369a8,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _64dd1519,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _360b1e48,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _1a9eede5,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _1b97a4e8,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _23b833e8,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _544b5066,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _021e296f,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _2b8d8838,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _acbea50a,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _b4a323ca,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _20d1d748,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _83701a6a,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _1195b750,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _0849e6f8,
    name: "shop-watch-components-top_products"
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
