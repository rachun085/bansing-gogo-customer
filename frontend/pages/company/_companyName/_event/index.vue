<template>
  <div>
    <Header />
    <Breadcrumbs :title="eventData.name" />
    <!-- section start -->
    <section>
      <div class="collection-wrapper productdetail">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(product, index) in eventData.image"
                    :key="index"
                  >
                    <img
                      :src="getImgUrl(product.alt)"
                      :id="product.image_id"
                      class="img-fluid bg-img"
                      :alt="product.alt"
                    />
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product,index) in eventData.images"
                              :key="index"
                            >
                              <img
                                :src="getImgUrl(product.src)"
                                :id="product.image_id"
                                class="img-fluid bg-img"
                                alt="product.alt"
                                @click="slideTo(index)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
            </div>
            <div class="col-lg-6 rtl-text">
              <div class="product-right">
                <h2>{{ eventData.name }}</h2>
                <div class="border-product">
                  <h4>เป้าหมาย</h4>
                  <div class="d-flex justify-content-between">
                    <h3>{{ numberWithCommas(eventData.targetPrice) }} บาท</h3>
                    <span></span>
                    <h3>{{ percentOfRegister }}%</h3>
                  </div>

                  <div class="pro_inventory">
                    <div class="inventory-scroll">
                      <span :style="{ width: percentOfRegister + '%' }"></span>
                    </div>
                  </div>
                  <h3></h3>
                  <h5>
                    จำนวนทั้งสิ้น
                    <span class="font-weight-bold text-danger">{{
                      eventData.ownership
                    }}</span>
                    สิทธิ์เท่านั้น
                  </h5>
                  <h5>
                    สิทธิ์ละ
                    <span class="font-weight-bold text-danger">{{
                      numberWithCommas(eventData.pricePerOwnership)
                    }}</span>
                    บาท
                  </h5>
                </div>
                <div class="pro_inventory" v-if="eventData.stock < 8">
                  <p class="active">
                    Hurry! We have only {{ eventData.stock }} product in stock.
                  </p>
                  <div class="inventory-scroll">
                    <span style="width: 95%"></span>
                  </div>
                </div>
                <div class="border-product">
                  <h3 class="product-title">เงื่อนไข</h3>
                  <p class="h5 mt-2 mb-2" v-html="eventData.shortDescription"></p>
                  <!-- <button
                        class="btn btn-secondary btn-lg btn-block"
                        title="Add to cart"
                        @click="showDocument()"
                      >
                        ใบสัญญาการสนับสนุน
                      </button> -->
                </div>

                <div class="border-product">
                  <!-- <div class="product-buttons"> -->
                  <!-- <nuxt-link :to="{ path: '/page/account/cart' }">
                      <button
                        class="btn btn-danger btn-lg"
                        title="Add to cart"
                        @click="addToCart(eventData, counter)"
                        :disabled="counter > eventData.stock"
                      >
                        ว่าจ้าง
                      </button>
                    </nuxt-link>
                    <button
                      class="btn btn-primary btn-lg"
                      title="buy now"
                      @click="buyNow(eventData, counter)"
                      :disabled="counter > eventData.stock"
                    >
                      ย้อนกลับ
                    </button> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <!-- product-tab starts -->
    <section class="tab-product m-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <b-tabs card>
              <b-tab title="รายละเอียดงาน" active>
                <h5 v-html="eventData.description"></h5>
                <div class="product-right">
                  <div class="border-product">
                    <h4 class="text-center text-info font-italic">ร่วมลงทุน</h4>
                    <h2 class="text-center">{{ eventData.name }}</h2>
                    <h5 class="text-center">
                      ยอดคงเหลือในการว่าจ้าง
                      <span class="h2">{{
                        numberWithCommas(balancePrice)
                      }}</span>
                      บาท
                    </h5>
                  </div>
                  <div class="border-product">
                    <h4 class="text-center">
                      จำนวนผู้ว่าจ้างขณะนี้
                      <span class="h2" v-html="htmlAmountOwnership"></span>
                    </h4>
                    <h5 class="text-center text-info">
                      ({{ registeredCompleted + registeredUnComplete }}/{{
                        eventData.ownership
                      }}
                      คน)
                    </h5>
                  </div>
                  <div class="border-product text-center">
                    <h5>
                      เลือกจำนวนสิทธิ์ที่ท่านต้องการว่าจ้าง
                      <span class="ml-2"
                        ><b-form-spinbutton
                          id="sb-inline"
                          v-model="amountOwnership"
                          inline
                        ></b-form-spinbutton
                      ></span>
                    </h5>
                    <!-- <nuxt-link :to="{ path: '/page/account/cart' }"> -->
                    <!-- <button
                        class="btn btn-danger btn-lg"
                        title="Add to cart"
                        @click="addToCart(eventData, counter)"
                        :disabled="counter > eventData.stock"
                      >
                        ว่าจ้าง
                      </button> -->

                    <b-button
                      pill
                      size="lg"
                      variant="success"
                      @click="
                        multiplySumPrice(
                          amountOwnership,
                          eventData.pricePerOwnership,
                        )
                      "
                      ><i class="fa fa-check" aria-hidden="true"></i>
                      ว่าจ้าง</b-button
                    >
                    <!-- </nuxt-link> -->
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>

    <!-- <pulse-loader :loading="showSpinner"></pulse-loader> -->
    <!-- product-tab ends -->
    <!-- <relatedProduct :productTYpe="productTYpe" :productId="productId" /> -->
    <Footer />
    <b-modal id="modal-xl" size="xl" v-model="showPdfViewerModal">
      <PdfViewer :pdfReadUrl="pdfUrl" />
    </b-modal>

    <!-- modal when click 'ว่าจ้าง' -->
    <b-modal
      id="modal-sum-price"
      size="lg"
      title="Add-to-cart"
      :hide-header="true"
      ref="modal-sum-price"
      v-model="openModalSumPrice"
      centered
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      modal-ok="ttt"
      scrollable
    >
      <div class="text-center border border-dark p-3">
        <h4>
          จำนวนสิทธิ์ที่ท่านต้องการว่าจ้าง:
          <span class="text-primary font-bold">{{ amountOwnership }}</span>
          สิทธิ์
        </h4>
        <h4>
          ยอดชำระ {{ numberWithCommas(eventData.pricePerOwnership) }} x
          {{ amountOwnership }} =
          <span class="text-primary font-bold">{{
            numberWithCommas(sumPrice)
          }}</span>
          บาท
        </h4>
        </div>
           <div class="mt-3 border border-dark text-center">
      <!-- <b-card border-variant="dark" align="left"> -->
        <!-- <b-card-text> -->
          <div class="font-weight-bold h5 m-2">ข้อตกลงและเงื่อนไขการใช้บริการ (Terms and Conditions)</div> 
<div class="mt-2 lh-base p-2">
  กรุณาอ่านข้อกำหนดและเงื่อนไขต่าง ๆ ดังต่อไปนี้อย่างละเอียด โดยในการเข้าถึงเว็บไซต์ แอพพลิเคชั่น หรือช่องทางการให้บริการอื่นใดของฟินโนมีนา ถือว่าคุณตกลงที่จะผูกพันตามข้อตกลงและเงื่อนไขการใช้บริการนี้
  </div>
  <div>เว็บไซต์ แอพพลิเคชั่น และช่องทางบริการอื่น เช่น เว็บเพจต่าง ๆ การติดต่อผ่าน Messaging Apps หรือช่องทางการให้บริการอื่นใด (รวมเรียกว่า “ช่องทางการให้บริการ”) ของบริษัท ฟินโนมีนา จำกัดและบริษัทในเครือ (“ฟินโนมีนา” หรือ “บริษัท“) ฟินโนมีนาเป็นเจ้าของและผู้ดูแลช่องทางการให้บริการ โดยมีวัตถุประสงค์เพื่อการให้บริการ รวมถึงเป็นแหล่งรวบรวม เผยแพร่ข้อมูลด้านต่าง ๆ ของฟินโนมีนา อีกทั้งยังเป็นการอำนวยความสะดวกแก่คุณในการใช้บริการ รวมถึงใช้งานผลิตภัณฑ์ต่าง ๆ ของฟินโนมีนาด้วย

การใช้ช่องทางการให้บริการของฟินโนมีนา อยู่ภายใต้เงื่อนไขว่าคุณตกลงยอมรับข้อตกลงและเงื่อนไขการใช้บริการต่าง ๆ ที่กำหนดไว้ การใช้ช่องทางการให้บริการของฟินโนมีนาของคุณ ย่อมก่อให้เกิดความผูกพันและสัญญาตามกฎหมายดังระบุข้อตกลงและเงื่อนไขการใช้บริการทั้งหมด ซึ่งคุณได้อ่านและทำความเข้าใจในข้อตกลงและเงื่อนไขการใช้บริการแล้ว คุณยอมรับและตกลงที่จะผูกพันกับข้อตกลงและเงื่อนไขการใช้บริการเหล่านี้ หากคุณไม่ยอมรับหรือไม่สามารถปฏิบัติตามข้อตกลงและเงื่อนไขการใช้บริการนี้ คุณจะไม่สามารถใช้งานช่องทางการให้บริการของฟินโนมีนา หรือเข้าถึงเนื้อหาใด ๆ ได้

ช่องทางการให้บริการนี้ นอกจากเป็นช่องทางบริการให้แก่ลูกค้าที่มีบัญชีกองทุนกับบริษัทในการซื้อขายหน่วยลงทุนนั้น เนื้อหาในช่องทางการบริการนี้ ยังมีวัตถุประสงค์ที่จะเป็นเครื่องมือช่วยนักลงทุนหรือผู้ที่สนใจ ในการตัดสินใจลงทุน โดยการเผยแพร่และให้ข้อมูลกองทุนรวม และผลการดำเนินงานของกองทุน ตลอดจนการวิเคราะห์อื่น ๆ รวมถึงการจัดอันดับกองทุน การรวบรวมและจัดทำข้อมูล บทความต่าง ๆ ซึ่งบริษัทใช้ความพยายามอย่างดีที่สุดที่จะสร้างความมั่นใจในความเที่ยงตรง ความถูกต้อง และอยู่บนพื้นฐานของความน่าเชื่อถือได้ (As is basis) และเลือกรับข้อมูลจากแหล่งข้อมูลที่เชื่อถือได้ อย่างไรก็ตามบริษัทไม่รับรอง รับประกันหรือรับผิดชอบต่อความถูกต้อง ครบถ้วน ของรายงานและ/หรือข้อมูลที่ปรากฎ เผยแพร่ เชื่อมต่อ ดาวน์โหลด หรือเข้าถึงได้จากช่องทางการให้บริการ และบริษัทไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดขึ้นจากการนำรายงานและ/หรือข้อมูลไปใช้ ดังนั้น หากคุณจะนำรายงานและ/หรือข้อมูล ที่ปรากฎนี้ไปใช้เพื่อดำเนินการอย่างหนึ่งอย่างใด ควรใช้วิจารณญาณและความรอบคอบในการพิจารณา และกรณีการนำข้อมูลไปใช้ แนะนำให้มีการสอบทาน ตรวจสอบความถูกต้องของข้อมูลจากแหล่งอื่น เช่น บริษัทหลักทรัพย์จัดการกองทุน สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ ตลาดหลักทรัพย์แห่งประเทศไทย อีกครั้ง</div>
        <!-- </b-card-text> -->
      <!-- </b-card> -->
  </div>

        <div class="text-center">
                  <b-form-checkbox
          id="checkbox-1"
          v-model="acceptTerm"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          class="h6 mt-4"
          @change="onChange($event)"
        >
          ข้าพเจ้าได้อ่านและยอมรับเงื่อนไขการว่าจ้าง
        </b-form-checkbox>
        </div>

      

      <template #modal-footer="{ ok, cancel }">
        <!-- <b>Custom Footer</b> -->
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button
          size="lg"
          variant="primary"
          @click="ok()"
          :disabled="disableConfirmRegisterButton"
        >
          ยืนยันการลงทะเบียน
        </b-button>
        <b-button size="lg" variant="danger" @click="cancel()">
          ยกเลิก
        </b-button>
      </template>
    </b-modal>
    <loading
      :active.sync="showSpinner"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :opacity="setOpacity"
      :blur="blur"
      :lock-scroll="true"
    ></loading>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Header from '../../../../components/header/header1';
import Footer from '../../../../components/footer/footer1';
import Breadcrumbs from '../../../../components/widgets/breadcrumbs';
import Timer from '../../../../components/widgets/timer';
import relatedProduct from '../../../../components/widgets/related-products';
import events from '../../../../data/events.json';
import PdfViewer from './components/pdf-viewer';
const _ = require('lodash');
import EventService from '../../../../src/services/event/event.service';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import RegisterService from '../../../../src/services/register/register.service';
import RegisterEvent from '../../../../src/models/register-event';
import { log } from 'console';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    relatedProduct,
    PdfViewer,
    Loading,
  },
  data() {
    return {
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false,
      },
      showPdfViewerModal: false,
      pdfUrl:
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf', // Replace with the actual path to your PDF file,
      amountOwnership: 1,
      amountRegistered: [],
      htmlAmountOwnership: '',
      openModalSumPrice: false,
      sumPrice: 0,
      disableConfirmRegisterButton: true,
      acceptTerm: '',
      eventData: {},
      totalPrice: 0,
      percentOfRegister: 0,
      balancePrice: 0,
      showSpinner: false,
      label: 'loading...',
      fullPage: true,
      setOpacity: 0.5,
      blur: null,
      registeredCompleted: 0,
      registeredUnComplete: 0,
    };
  },
  head() {
    return {
      title: `BansingGoGo | ${this.eventData.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard page description',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      currency: (state) => state.products.currency,
    }),
    ...mapGetters({
      curr: 'products/changeCurrency',
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    currentUser() {
      // console.log('user : ', this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  async mounted() {
    // For displaying default color and size on pageload
    // this.uniqColor = this.getDetail.variants[0].color;
    // this.sizeVariant(this.getDetail.variants[0].image_id);
    // // Active default color
    // this.activeColor = this.uniqColor;
    // this.changeSizeVariant(this.getDetail.variants[0].size);
    if (!this.currentUser) {
      this.$router.push('/page/account/login');
    }
    await this.getDetail();
  },
  methods: {
    priceCurrency: function () {
      this.$store.dispatch('products/changeCurrency');
    },
    addToWishlist: function (product) {
      this.$store.dispatch('products/addToWishlist', product);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      this.stock();
      return uniqColor;
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch('cart/addToCart', product);
    },
    buyNow: function (product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch('cart/addToCart', product);
      this.$router.push('/page/account/checkout');
    },
    // Item Count
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 1) this.counter--;
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant;
      this.stock();
    },
    getImgUrl(path) {
      if (path) {
        return require('@/assets/images/uploads/event/' + path);
      }
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false);
      this.size = [];
      this.activeColor = color;
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
    stock() {
      this.getDetail.variants.filter((item) => {
        if (
          this.activeColor === item.color &&
          this.selectedSize === item.size
        ) {
          this.qty = item.qty;
        }
      });
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    showDocument() {
      console.log('here');
      this.showPdfViewerModal = true;
    },
    multiplySumPrice(amountOwnership, pricePerUnit) {
      this.openModalSumPrice = true;
      const sum = amountOwnership * pricePerUnit;
      this.sumPrice = sum;
    },
    onChange() {
      if (this.acceptTerm == 'accepted')
        this.disableConfirmRegisterButton = false;
      else if (this.acceptTerm == 'not_accepted')
        this.disableConfirmRegisterButton = true;
    },
    closeBox() {
      console.log('here');
      this.disableConfirmRegisterButton = true;
    },
    getDetail() {
      let name = this.$route.params.event;
      // this.$route.params.id
      //   return this.$store.getters['products/getProductById'](1)
      //   let found = _.find(events.data, { url_name: name });
      //   return found;
      EventService.getEventByURL(name).then((response) => {
        if (response) {
          console.log('event data : ', response.data);
          this.eventData = response.data;
          this.calculateData();
        }
      }).catch((error) => {
        console.log("throw error ", error.response.data);
        if(error.response.data.statusCode == 404){
          this.$router.push('/');
        }
      })
    },
    getDataAmountOwnership() {
      let icon = '';
      for (let i = 1; i <= this.registeredCompleted; i++) {
        icon +=
          '<span style="color: black;"><i class="fa fa-user mr-3"></i></span>';
      }

      for (let i = 1; i <= this.registeredUnComplete; i++) {
        icon +=
          '<span style="color: gray;"><i class="fa fa-user mr-3"></i></span>';
      }

      this.htmlAmountOwnership = icon;
    },
    async calculateData() {
      console.log('length data : ', this.eventData.register.length);
      if (this.eventData.register.length > 0) {
        // find what percent from 100%
        for (const it of this.eventData.register) {
          let totalPrice = it.totalPrice;
          let amountOwnership = it.amountOwnership;
          if (it.status == 'COMPLETE') {
            this.totalPrice += totalPrice;
            this.registeredCompleted += amountOwnership;
          } else if (it.status == 'UNCOMPLETE') {
            this.registeredUnComplete += amountOwnership;
          }

          // จำนวนผู้ว่าจ้างขณะนี้  (รวมถึงคนที่ยังไม่ชำระเงินด้วย)
          // this.amountRegistered += it.amountOwnership;
          // this.getDataAmountOwnership(this.amountRegistered);
          await this.getDataAmountOwnership();
        }

        //logic ยอดเงินจากการสมัคร / เป้าหมาย * 100 = %
        const calculatePercent = (this.totalPrice / this.eventData.targetPrice) * 100;
        this.percentOfRegister = calculatePercent;

        // ยอดคงเหลือในการว่าจ้าง
        this.balancePrice = this.eventData.targetPrice - this.totalPrice;

        // console.log('total price : ', this.totalPrice);
        // console.log('percent of regist : ', this.percentOfRegister);
        // console.log('amountRegistered : ', this.amountRegistered);
      }

        // ยอดคงเหลือในการว่าจ้าง
        this.balancePrice = this.eventData.targetPrice - this.totalPrice;
    },
    resetModal() {
      this.acceptTerm = 'not_accepted';
    },
    handleOk(bvModalEvent) {
      console.log('click ok');
      this.showSpinner = true;

      const register = new RegisterEvent(
        this.amountOwnership,
        this.sumPrice,
        this.eventData.id,
        this.$store.state.auth.user.id,
      );

      RegisterService.createRegister(register).then(
        (response) => {
          if (response) {
            console.log('register success : ', response.data);
            this.showSpinner = false;
            const {
              password,
              refreshToken,
              resetPasswordToken,
              ...userResult
            } = response.data.user;
            let image = {};

            // for (const it of this.eventData.image) {
              // if (it.type == 1) {
                image = {
                  id: this.eventData.image[0].id,
                  src: this.eventData.image[0].src,
                  alt: this.eventData.image[0].alt,
                  createdAt: this.eventData.image[0].createdAt,
                  type: this.eventData.image[0].type,
                };
              
            // }
            const registerDetail = {
              product: {
                eventId: response.data.event.id,
                eventName: response.data.event.name,
                amountOwnership: response.data.amountOwnership,
                totalPrice: response.data.totalPrice,
                image: image,
                registeredAt: response.data.createdAt,
                dueDate: response.data.dueDate,
              },
              userDetail: userResult,
            };

            this.$store
              .dispatch('products/createOrder', registerDetail)
              .then(() => {
                this.$router.push('/page/order-success');
              });

            // this.profileData = response.data;
            // if (response.data.cardId == null) this.profileData.cardId = '-';
            // console.log('data => ', this.profileData);
          }
        },
        (error) => {
          console.log('error from register event page : ', error);
          // if (error.response && error.response.status === 403) {
          //   EventBus.dispatch('logout');
          // }
        },
      );
    },
    onCancel() {
      console.log('User cancelled the loader.');
    },
  },
};
</script>
