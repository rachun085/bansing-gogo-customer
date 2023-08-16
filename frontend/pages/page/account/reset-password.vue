<template>
  <div>
    <Header />
    <Breadcrumbs title="รีเซ็ทรหัสผ่าน" />
    <section class="pwd-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <h2>{{ title }}</h2>
            <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form" @submit.prevent="checkForm">
                <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">
                      {{ error }}
                    </li>
                  </ul>
                </div>
                <div class="form-row">
                  <div class="col-md-12">
                    <ValidationProvider
                      rules="required|min:6"
                      v-slot="{ errors }"
                      name="password"
                    >
                      <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="ตั้งรหัสผ่านใหม่"
                        name="password"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-12">
                    <ValidationProvider
                      rules="required|confirmed:password"
                      v-slot="{ errors }"
                      name="confirmPassword"
                    >
                      <input
                        type="password"
                        class="form-control"
                        v-model="confirmPassword"
                        placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
                        name="confirmPassword"
                      />
                      <span
                        class="validate-error mb-2"
                        v-text="กรุณากรอกรหัสผ่านให้ตรงกัน"
                      ></span>
                    </ValidationProvider>
                  </div>

                  <input
                    type="submit"
                    class="btn btn-solid"
                    value="ตกลง"
                    :disabled="invalid"
                  />
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
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
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: 'ตั้งรหัสผ่านใหม่',
      errors: [],
      email: null,
      token: this.$route.query.token,
      messageError: false,
      sentSuccess: false,
      password: null,
      confirmPassword: null,
    };
  },
  head() {
    return {
      title: `${this.title} | Bansing GO GO`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'forgot password page',
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.fetchToken();
  },
  methods: {
    checkForm(e) {
      console.log('submit');

      Swal.fire({
        title: 'ยืนยันการตั้งรหัสผ่านหรือไม่',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: `ยกเลิก`,
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            newPwd: this.password,
            cfNewPwd: this.confirmPassword,
            tokenId: this.token,
          };

          axios
            .post(
              `${process.env.baseUrlBackend}/auth/confirm-reset-password`,
              payload,
            )
            .then((response) => {
              console.log('success response : ', response);
              if (response.data.status == 'success') {
                Swal.fire({
                  icon: 'success',
                  text: 'ตั้งค่ารหัสผ่านใหม่เรียบร้อยแล้ว',
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  this.$router.push('/page/account/login');
                });
              }
            })
            .catch((error) => {
              console.log('error response data : ', error.response.data);
              Swal.fire({
                icon: 'error',
                text: 'บันทึกข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง',
                showConfirmButton: false,
                timer: 4000,
              });
            });
        }
      });
    },
    fetchToken() {
      if (this.token == '' || !this.token) {
        this.$router.push('/page/account/login');
      } else {
        axios
          .get(`${process.env.baseUrlBackend}/auth/find-token/${this.token}`)
          .then((response) => {
            console.log('success response token : ', response);
            if (response.data.status == 'fail') {
              this.$router.push('/page/account/login');
            }else if (response.data.status == 'expired') {
              Swal.fire({
                  icon: 'error',
                  text: 'คุณทำรายการเกินเวลาที่กำหนด กรุณากดส่งคำร้องรีเซ็ทรหัสผ่านใหม่',
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  this.$router.push('/page/account/login');
                });
            }
          })
          .catch((error) => {
            console.log('error response find token : ', error.response.data);
          });
      }
    },
  },
};
</script>
