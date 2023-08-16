<template>
  <div>
    <Header />
    <!-- <section class="p-0" v-if="order==''">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'"> back to home</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- thank-you section start -->
    <section class="section-b-space light-layout">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="success-text">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <h2>ลงทะเบียนเสร็จสมบูรณ์</h2>
              <p>
                ระบบได้ส่งอีเมลยืนยันการลงทะเบียนไปให้ท่านแล้ว
                กรุณาอ่านรายละเอียดการชำระเงินด้านล่างนี้
              </p>
              <!-- <p>Transaction ID:{{order.token}}</p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <!-- order-detail section start -->
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product-order">
              <h3>รายละเอียดการลงทะเบียนของคุณ</h3>
              <div class="row product-order-detail">
                <div class="col-3">
                  <img
                    :src="getImgUrl(order.product.image.alt)"
                    alt
                    class="img-fluid"
                  />
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>กิจกรรม</h4>
                    <h5>{{ order.product.eventName }}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>จำนวนสิทธิ์</h4>
                    <h5>{{ order.product.amountOwnership }}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>ราคา</h4>
                    <h5>{{ numberWithCommas(order.product.totalPrice) }}</h5>
                  </div>
                </div>
              </div>
              <div class="total-sec">
                <ul>
                  <li>
                    รวมทั้งสิ้น
                    <span
                      >{{
                        numberWithCommas(order.product.totalPrice)
                      }}
                      บาท</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row order-success-sec">
              <div class="col-sm-12 mb-3">
                <h4 class="text-danger">ข้อมูลการลงทะเบียน</h4>
                <ul class="order-detail">
                  <li>
                    ชื่อ-สกุล : {{ order.userDetail.firstName }}
                    {{ order.userDetail.lastName }}
                  </li>
                  <li>Email : {{ order.userDetail.email }}</li>
                  <li>
                    วันที่ลงทะเบียน :
                    {{ formatDate(order.product.registeredAt, 'LLLL') }}
                  </li>
                </ul>
              </div>
              <!-- <div class="col-sm-6">
                <h4>shipping address</h4>
                <ul class="order-detail">
                  <li>gerg harvell</li>
                  <li>568, suite ave.</li>
                  <li>Austrlia, 235153</li>
                  <li>Contact No. 987456321</li>
                </ul>
              </div> -->
              <div class="col-sm-12 payment-mode">
                <h4 class="text-danger">รายละเอียดการชำระเงิน</h4>
                <div class="delivery-sec">
                  <h3 class="text-primary">{{bankName}}</h3>
                  <h3>เลขที่บัญชี {{accountNo}}</h3>
                  <h3>ชื่อบัญชี {{accountName}}</h3>
                </div>
              </div>
              <div class="col-md-12">
                <div class="delivery-sec">
                  <h4 class="text-danger">กรุณาชำระเงินภายใน</h4>
                  <h3>{{ formatDate(order.product.dueDate, 'LLLL') }}</h3>
                  <nuxt-link :to="{ path: '/page/confirm-payment' }"
                    ><b-button pill size="lg" variant="success" class="mt-2"
                      ><i class="fa fa-money" aria-hidden="true"></i>
                      แจ้งยืนยันการชำระเงิน</b-button
                    >
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '../../components/header/header1';
import Footer from '../../components/footer/footer1';
import moment from 'moment';
import BankInformationService from '../../src/services/bank-information/bank.information.service';
moment.locale('th');

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters({
      order: 'products/getOrder',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency',
    }),
  },
  head() {
    return {
      title: `BansingGoGo | ลงทะเบียนเสร็จสมบูรณ์`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard page description',
        },
      ],
    };
  },
  data() {
    return {
      bankName: null,
      accountNo: null,
      accountName: null
    };
  },
  mounted() {
    if (!this.order) {
      this.$router.push('/');
    }
    this.getBankInformation();
    console.log("order : ", this.order);
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/uploads/event/' + path);
      // return require('@/assets/images/uploads/event/reggae_time.jpeg')
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    formatDate(date, format = 'LL') {
      return moment(date).add(543, 'year').format(format);
    },
    getBankInformation() {
      BankInformationService.getAll().then(
        (response) => {
          if (response.data) {
            this.accountName = response.data.accountName;
            this.accountNo = response.data.accountNo;
          this.bankName = response.data.bankName

            console.log('bank => ', response.data);
          }
        },
        (error) => {
          console.log('error fetch get bank information : ', error);
        },
      );
    },
  },
};
</script>
