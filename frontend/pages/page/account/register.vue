<template>
  <div>
    <Header />
    <Breadcrumbs title="สมัครสมาชิก" />
    <div class="register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>{{ title }}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form
                  class="theme-form overflow-auto"
                  @submit.prevent="onSubmit"
                >
                <div class="form-row">
                  <div class="col-md-2 mb-2">
                      <label for="First name">คำนำหน้าชื่อ</label>
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        name="titleName"
                      >
                        <select v-model="titleName" class="form-control">
                          <option disabled value="">กรุณาเลือก</option>
                          <option value="Mr">นาย</option>
                          <option value="Mrs">นาง</option>
                          <option value="Miss">นางสาว</option>
                        </select>
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                </div>
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
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="cardId">หมายเลขประจำตัวประชาชน</label>
                      <ValidationProvider
                        rules="required|max:13"
                        v-slot="{ errors }"
                        name="cardId"
                      >
                        <input
                          type="text"
                          class="form-control"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                          v-model="cardId"
                          placeholder=""
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
                  </div>

                  <!-- ที่อยู่ -->
                  <h4 class="mt-3">ข้อมูลที่อยู่</h4>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="addressNo">บ้านเลขที่</label>
                      <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        name="addressNo"
                      >
                        <input
                          type="text"
                          class="form-control"
                          id="addressNo"
                          v-model="addressNo"
                          placeholder=""
                          name="addressNo"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="moo">หมู่</label>
                      <ValidationProvider v-slot="{ errors }" name="moo">
                        <input
                          type="text"
                          class="form-control"
                          id="moo"
                          v-model="moo"
                          placeholder=""
                          name="moo"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="soi">ซอย</label>
                      <ValidationProvider v-slot="{ errors }" name="soi">
                        <input
                          class="form-control"
                          v-model="soi"
                          placeholder=""
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="street">ถนน</label>
                      <ValidationProvider v-slot="{ errors }" name="street">
                        <input
                          class="form-control"
                          id="street"
                          v-model="street"
                          placeholder=""
                          name="street"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="tumbon">ตำบล/แขวง</label>
                      <ValidationProvider v-slot="{ errors }" name="tumbon">
                        <thai-address-input
                          type="subdistrict"
                          v-model="tumbon"
                          input-class="form-control"
                          @selected="onSelected"
                        ></thai-address-input>
                        <!-- <input
                          type="text"
                          class="form-control"
                          v-model="tumbon"
                          placeholder=""
                          name="tumbon"
                        /> -->
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="amphoe">อำเภอ/เขต</label>
                      <ValidationProvider v-slot="{ errors }" name="amphoe">
                        <thai-address-input
                          type="district"
                          v-model="amphoe"
                          input-class="form-control"
                          @selected="onSelected"
                        ></thai-address-input>
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="province">จังหวัด</label>
                      <ValidationProvider v-slot="{ errors }" name="province">
                        <thai-address-input
                          type="province"
                          v-model="province"
                          input-class="form-control"
                          @selected="onSelected"
                        ></thai-address-input>
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="zipCode">รหัสไปรษณีย์</label>
                      <ValidationProvider v-slot="{ errors }" name="zipCode">
                        <thai-address-input
                          type="postalCode"
                          v-model="zipCode"
                          input-class="form-control"
                          @selected="onSelected"
                        ></thai-address-input>
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
    </div>
    <Footer />
  </div>
</template>
<script>
import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm';
import Header from '../../../components/header/header1';
import Footer from '../../../components/footer/footer1';
import Breadcrumbs from '../../../components/widgets/breadcrumbs';
import UserRegister from '../../../src/models/user-register';
import Swal from 'sweetalert2';
import ThaiAddressInput from 'vue-thai-address-input';
import 'vue-thai-address-input/dist/vue-thai-address-input.css';

Vue.use(ThaiAddressInput);

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
      titleName: "",
      firstName: null,
      lastName: null,
      email: null,
      cardId: null,
      password: null,
      confirmPassword: null,
      phoneNumber: null,
      addressNo: null,
      soi: null,
      moo: null,
      street: null,
      tumbon: '',
      amphoe: '',
      province: '',
      zipCode: '',
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
        this.cardId,
        this.addressNo,
        this.soi,
        this.moo,
        this.street,
        this.tumbon,
        this.amphoe,
        this.province,
        this.zipCode,
        this.titleName,
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
    onSelected(address) {
      this.tumbon = address.subdistrict;
      this.amphoe = address.district;
      this.province = address.province;
      this.zipCode = address.postalCode;
    },
  },
};
</script>
