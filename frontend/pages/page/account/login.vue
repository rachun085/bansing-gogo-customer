<template>
  <div>
    <Header />
    <Breadcrumbs title="เข้าสู่ระบบ" />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{ logintitle }}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <div v-if="message" class="p-3 mb-2 bg-danger text-white">
                  อีเมลและ/หรือรหัสผ่านที่ระบุมาไม่ถูกต้อง
                </div>
                <div
                  v-if="messageDisabled"
                  class="p-3 mb-2 bg-danger text-white"
                >
                  บัญชีนี้ถูกระงับการใข้งาน กรุณาติดต่อเจ้าหน้าที่
                </div>
                <div
                  v-if="messageNotconfirm"
                  class="p-3 mb-2 bg-danger text-white"
                >
                  บัญชีนี้ยังไม่ได้ยืนยันอีเมล หากตรวจสอบแล้วไม่ได้รับอีเมล
                  <span class="text-warning" @click="resendConfirmationEmail()"
                    ><u>คลิกที่นี่</u></span
                  >
                  เพื่อส่งข้อความยืนยันอีกครั้ง
                </div>
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <ValidationProvider
                      rules="required|email"
                      v-slot="{ errors }"
                      name="email"
                    >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        name="email"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="password"
                    >
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Enter your password"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-solid"
                    :disabled="invalid"
                  >
                    เข้าสู่ระบบ
                  </button>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{ registertitle }}</h3>
            <div class="theme-card authentication-right">
              <h5 class="title-font">สมัครสมาชิกเลยตอนนี้</h5>
              <p class="h5">
                ไม่มีค่าใช้จ่ายใดๆทั้งสิ้น เพียงกรอกข้อมูลไม่กี่ขั้นตอน
                ก็สามารถเป็นผู้ร่วมลงทุนได้เลย~!
              </p>
              <nuxt-link
                :to="{ path: '/page/account/register' }"
                class="btn btn-solid"
                >สมัครสมาชิก</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <loading
      :active.sync="loading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :opacity="setOpacity"
      :blur="blur"
      :lock-scroll="true"
    ></loading>
    <Footer />
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm';
import Header from '../../../components/header/header1';
import Footer from '../../../components/footer/footer1';
import Breadcrumbs from '../../../components/widgets/breadcrumbs';
import User from '../../../src/models/user';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2';
import pdf from '../../../components/pdf/contract-pdf.vue'

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
    Loading,
    pdf
  },
  data() {
    return {
      logintitle: 'เข้าสู่ระบบ',
      registertitle: 'ยังไม่ได้เป็นสมาชิก?',
      email: null,
      password: null,
      message: false,
      messageDisabled: false,
      messageNotconfirm: false,
      loading: false,
      label: 'loading...',
      fullPage: true,
      setOpacity: 0.5,
      blur: null,
    };
  },
  head() {
      return {
        title: `Bansing GOGO | ${this.logintitle}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Login page description'
          }
        ]
      }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    onSubmit() {
      if (this.email && this.password) {
        const user = new User(this.email.trim(), this.password.trim());
        this.$store.dispatch('auth/login', user).then(
          (response) => {
            console.log('login success => ', response);
            this.$router.push('/');
          },
          (error) => {
            if (error.response.data.message == 'This user is disabled') {
              this.loading = false;
              this.messageDisabled = true;
              this.message = false;
              this.messageNotconfirm = false;
            } else if (
              error.response.data.message == 'This user is not confirmed'
            ) {
              this.loading = false;
              this.messageNotconfirm = true;
              this.message = false;
              this.messageDisabled = false;
            } else {
              this.loading = false;
              this.message = true;
              this.messageDisabled = false;
              this.messageNotconfirm = false;
            }
          },
        );
      }
    },
    async resendConfirmationEmail() {
      // this.loading = true;
      const uninterceptedAxiosInstance = axios.create();
      const response = await uninterceptedAxiosInstance.post(
        'http://localhost:4000/email-confirmation/resend-confirmation-link',
        { email: this.email },
      );
      console.log('response : ', response.data);
      if (response.data.statusCode == 200) {
        // this.loading = false;
        this.messageNotconfirm = false;

        Swal.fire({
          icon: 'success',
          text: 'ส่งอีเมลยืนยันเรียบร้อยแล้ว โปรดตรวจสอบอีเมลของท่าน',
          showConfirmButton: false,
          timer: 4000,
        });
      }
      // else if(response.data.statusCode == 400 && response.data.data == "Email already confirmed"){
      //   this.text = "already confirmed";
      // }
      // else{
      //   this.text = "fail";
      // }
    },
  },
};
</script>
