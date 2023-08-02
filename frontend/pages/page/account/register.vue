<template>
  <div>
    <Header />
    <Breadcrumbs title="สมัครสมาชิก" />
    <section class="register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>{{ title }}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="First name">ชื่อ</label>
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        name="First name"
                      >
                        <input
                          type="text"
                          class="form-control"
                          id="First name"
                          v-model="firstName"
                          placeholder=""
                          name="First name"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="lname">นามสกุล</label>
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        name="Last name"
                      >
                        <input
                          type="text"
                          class="form-control"
                          id="lname"
                          v-model="lastName"
                          placeholder=""
                          name="lname"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="phoneNumber">เบอร์โทรศัพท์ที่ติดต่อได้</label>
                      <ValidationProvider
                        rules="required|max:10"
                        v-slot="{ errors }"
                        name="phoneNumber"
                      >
                        <input
                          type="number"
                          class="form-control"
                          v-model="phoneNumber"
                          placeholder=""
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="email">Email</label>
                      <small class="text-muted"
                        >(โปรดใช้อีเมลที่มีอยู่จริง
                        เนื่องจากต้องใช้ในการยืนยันการสมัครสมาชิก)</small
                      >
                      <ValidationProvider
                        rules="required|email"
                        v-slot="{ errors }"
                        name="Email"
                      >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="email"
                          placeholder=""
                          name="email"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="password">กรอกรหัสผ่าน</label>
                      <ValidationProvider
                        rules="required|min:6"
                        v-slot="{ errors }"
                        name="password"
                      >
                        <input
                          type="password"
                          class="form-control"
                          v-model="password"
                          placeholder=""
                          name="password"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="email">กรอกรหัสผ่านอีกครั้ง</label>
                      <ValidationProvider
                        rules="required|confirmed:password"
                        v-slot="{ errors }"
                        name="confirmPassword"
                      >
                        <input
                          type="password"
                          class="form-control"
                          v-model="confirmPassword"
                          placeholder=""
                          name="confirmPassword"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-solid mt-2"
                      :disabled="invalid"
                    >
                      สร้างบัญชี
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
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
import UserRegister from '../../../src/models/user-register';
import Swal from 'sweetalert2';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  data() {
    return {
      title: 'สร้างบัญชีผู้ใช้',
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      phoneNumber: null,
    };
  },
  methods: {
    async onSubmit() {
      const user = new UserRegister(
        this.email,
        this.password,
        this.confirmPassword,
        this.firstName,
        this.lastName,
        this.phoneNumber,
      );
      const register = await this.$store.dispatch('auth/register', user);
      if (register.status == 'success') {
        Swal.fire({
          icon: 'success',
          text: 'สมัครสมาชิกเสร็จสมบูรณ์ ระบบได้ส่งลิ้งค์เพื่อยืนยันการสมัครแล้วในเมลของท่าน โปรดยืนยันอีเมลก่อนเข้าใช้งาน',
          showConfirmButton: false,
          timer: 6000,
        }).then(() => {
          this.$router.push('/page/account/login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: 'เกิดข้อผิดพลาดในการสมัครสมาชิก โปรดลองอีกครั้ง',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    },
  },
};
</script>
