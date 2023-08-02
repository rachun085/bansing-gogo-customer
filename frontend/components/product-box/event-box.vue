<template>
  <div>
    <div class="img-wrapper">
      <!-- <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
        <span class="lable4" v-if="product.sale">on sale</span>
      </div> -->
      <div class="front">
        <!-- <nuxt-link :to="{ path: '/event/'+event.urlName }"> -->
        <nuxt-link :to="{ path: baseURL + `/${event.urlName}`}">
          <img
            :src='getImgUrl()'
            :id="event.id"
            class="img-fluid bg-img"
            :alt="event.name"
            :key="index"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
        <li
          class="grid_thumb_img"
          :class="{active: imageSrc === image.src}"
          v-for="(image,index) in event.images"
          :key="index"
          @click="productVariantChange(image.src)"
        >
          <a href="javascript:void(0);">
            <img :src="getImgUrl(image.src)" />
          </a>
        </li>
      </ul>
      <div class="cart-info cart-wrap">
          <button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart"
            @click="addToCart(event)"
            v-b-modal.modal-cart
            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button>
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(event)"></i>
        </a>
        <a href="javascript:void(0)" title="Quick View" @click="showQuickview(event)" v-b-modal.modal-lg variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        <a href="javascript:void(0)" title="Comapre" @click="addToCompare(event)" v-b-modal.modal-compare variant="primary">
          <i class="ti-reload" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="product-detail">
      <!-- <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div> -->
      <nuxt-link :to="{ path: '/event/'+event.url_name }">
        <h4 class="mt-3">{{ event.name }}</h4>
      </nuxt-link>
      <!-- <p>{{ event.description }}</p> -->
      <h5 class="mt-2">วันที่: {{formatDate(event.eventDate)}}</h5>
      <h5>เงินสนับสนุนทั้งหมด: {{numberWithCommas(event.targetPrice)}} บาท</h5>
      <!-- <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4> -->
      <!-- <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4> -->
      <!-- <ul class="color-variant" v-if="product.variants[0].color">
        <li v-for="(variant,variantIndex) in Color(product.variants)" :key="variantIndex">
          <a
            @click="productColorchange(variant, product)"
            :class="[variant]"
            v-bind:style="{ 'background-color' : variant}"
          ></a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

export default {
  props: ['event', 'index'],
  data() {
    return {
      imageSrc: '1.jpg',
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: '',
        image: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      baseURL: window.location.pathname.split('/')[2]
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl() {
      if(this.event.image.length > 0){
        return require('@/assets/images/uploads/event/' + this.event.image[0].alt)
      }else{
        return require('@/assets/images/' + this.imageSrc)
      }

    },
    addToCart: function (product) {
      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)
      this.$store.dispatch('cart/addToCart', product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      this.$emit('showalert', this.dismissCountDown)
      this.$store.dispatch('products/addToWishlist', product)
    },
    showQuickview: function (productData) {
      this.showquickview = true
      this.quickviewProduct = productData
      this.$emit('openquickview', this.showquickview, this.quickviewProduct)
    },
    addToCompare: function (product) {
      this.showCompareModal = true
      this.compareProduct = product
      this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)
      this.$store.dispatch('products/addToCompare', product)
    },
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    productColorchange(color, product) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src
            }
          })
        }
      })
    },
    productVariantChange(imgsrc) {
      console.log("I am calll");      
      this.imageSrc = imgsrc
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    formatDate(date){
      dayjs.locale("th");
      return dayjs(date).format("DD MMMM BBBB")
    },
    numberWithCommas(x) {
      if(x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  }
}
</script>
