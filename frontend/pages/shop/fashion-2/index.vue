<template>
  <div>
    <Header />
    <Slider />
    <h2 class="text-center mt-4 mb-3">เลือกบริษัทที่ต้องการลงทุน</h2>
    <Banner />
    <!-- <Collection :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" /> -->
    <!-- <Banner2 /> -->
    <!-- <Product :products="products" :category="category" /> -->
    <!-- <Instagram /> -->
    <Footer />
    <!-- <quickviewModel
      :openModal="showquickviewmodel"
      :productData="quickviewproduct"
    />
    <compareModel
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
    <cartModel
      :openCart="showcartmodal"
      :productData="cartproduct"
      @closeCart="closeCartModal"
      :products="products"
      :category="category"
    /> -->
    <!-- <newsletterModel /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '../../../components/header/header3';
import Footer from '../../../components/footer/footer3';
import quickviewModel from '../../../components/widgets/quickview';
import compareModel from '../../../components/widgets/compare-popup';
import cartModel from '../../../components/cart-model/cart-modal-popup';
import Slider from './components/slider';
import Banner from './components/collection-banner';
import Collection from './components/collection';
import Banner2 from './components/banner';
import Product from './components/product';
import Instagram from './components/instagram';

export default {
  components: {
    Header,
    Slider,
    Banner,
    Collection,
    Banner2,
    Product,
    Footer,
    Instagram,
    quickviewModel,
    compareModel,
    cartModel,
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
    };
  },
  head() {
    return {
      title: `BansingGoGo | หน้าหลัก`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    // currentUser() {
    //   return this.$store.state.auth.user;
    // }
  },
  async mounted() {
    await this.productsArray();
    // if (!this.currentUser) {
    //   this.$router.push('/page/account/login');
    // }
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'fashion') {
          this.products.push(item);
          item.collection.map((i) => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    },
  },
};
</script>
