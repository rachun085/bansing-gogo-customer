<template>
  <div>
    <Header />
    <Breadcrumbs title="แก้ไขข้อมูลส่วนตัว" />
    <!-- personal deatail section start -->
    <section class="contact-page register-page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{ title1 }}</h3>
            <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form" @submit.prevent="clickSubmit">
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="firstName">ชื่อ</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="firstName"
                    >
                      <input
                        type="text"
                        class="form-control"
                        v-model="profileData.firstName"
                        placeholder="ชื่อ"
                        name="firstName"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <label for="lastName">นามสกุล</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="lastName"
                    >
                      <input
                        type="text"
                        class="form-control"
                        v-model="profileData.lastName"
                        placeholder="นามสกุล"
                        id="lastName"
                        name="lastName"
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
                        v-model="profileData.phoneNumber"
                        placeholder=""
                        name="password"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <label for="email">Email</label>

                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="profileData.email"
                      placeholder="Email"
                      name="email"
                      readonly
                    />
                    <span class="validate-error">{{ errors[0] }}</span>
                  </div>
                  <div class="col-md-6">
                    <label for="cardId">หมายเลขบัตรประจำตัวประชาชน</label>
                    <ValidationProvider
                      rules="max:13"
                      v-slot="{ errors }"
                      name="cardId"
                    >
                      <input
                        type="text"
                        class="form-control"
                        v-model="profileData.cardId"
                        placeholder="หมายเลขบัตรประจำตัวประชาชน"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="col-md-12">
                    <input
                      type="submit"
                      class="btn btn-solid"
                      value="บันทึกข้อมูล"
                      :disabled="invalid"
                    />
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->

    <!-- address section start -->
    <section class="contact-page register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{ title2 }}</h3>
            <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form" @submit.prevent="changePassword">
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="currentPassword">รหัสผ่านปัจจุบัน</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="currentPassword"
                    >
                      <input
                        type="password"
                        class="form-control"
                        id="currentPassword"
                        v-model="password.currentPassword"
                        placeholder="รหัสผ่านปัจจุบัน"
                        name="currentPassword"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="newPassword">รหัสผ่านใหม่</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="newPassword"
                    >
                      <input
                        type="password"
                        class="form-control"
                        id="newPassword"
                        v-model="password.newPassword"
                        placeholder="รหัสผ่านปัจจุบัน"
                        name="newPassword"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <label for="confirmNewPassword">ยืนยันรหัสผ่านใหม่</label>
                    <ValidationProvider
                      rules="required|confirmed:newPassword"
                      v-slot="{ errors }"
                      name="confirmNewPassword"
                    >
                      <input
                        type="password"
                        class="form-control"
                        id="confirmNewPassword"
                        v-model="password.confirmNewPassword"
                        placeholder="ยืนยันรหัสผ่านใหม่"
                        name="confirmNewPassword"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-12">
                    <input
                      type="submit"
                      class="btn btn-solid"
                      value="บันทึกข้อมูล"
                      :disabled="invalid"
                    />
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
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
import Swal from 'sweetalert2';
import UserService from '../../../src/services/user.service.js';
import EventBus from '../../../src/common/EventBus';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/page/account/login');
    }
    // console.log("profile : ", profile);
    this.fetchProfile();
  },
  data() {
    return {
      title1: 'แก้ไขข้อมูลส่วนตัว',
      title2: 'เปลี่ยนรหัสผ่าน',
      errors: [],
      profileData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null,
        cardId: null,
      },
      password: {
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null,
      },
    };
  },
  methods: {
    async clickSubmit() {
      Swal.fire({
        title: 'ยืนยันการเปลี่ยนแปลงข้อมูลหรือไม่',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: `ยกเลิก`,
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            id: this.currentUser.id,
            firstName: this.profileData.firstName,
            lastName: this.profileData.lastName,
            phoneNumber: this.profileData.phoneNumber,
            cardId: this.profileData.cardId,
          };

          const updateData = await UserService.updateUserProfile(payload).then(
            (response) => {
              if (response.data.status == 'success') {
                Swal.fire({
                  icon: 'success',
                  text: 'เปลี่ยนแปลงข้อมูลเรียบร้อยแล้ว',
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  this.$router.go();
                });
              }
            },
            (error) => {
              console.log('error from update profile page : ', error.response);
              if (error.response.data) {
                Swal.fire({
                  icon: 'error',
                  text: 'เปลี่ยนแปลงข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง',
                  showConfirmButton: false,
                  timer: 4000,
                });
              }
            },
          );
        }
      });
    },
    fetchProfile() {
      UserService.getUserProfile(this.currentUser.id).then(
        (response) => {
          if (response) {
            this.profileData = response.data;
            console.log('data in profile => ', this.profileData);
          }
        },
        (error) => {
          console.log('error from profile page : ', error);
          if (error.response && error.response.status === 403) {
            EventBus.dispatch('logout');
          }
        },
      );
    },
    async changePassword() {
      Swal.fire({
        title: 'ยืนยันการเปลี่ยนแปลงรหัสผ่านหรือไม่',
        text: 'หลังจากเปลี่ยนแปลงรหัสผ่านแล้ว ระบบจะทำการออกจากระบบให้อัตโนมัติ',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'ยืนยัน',
        denyButtonText: `ยกเลิก`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            id: this.currentUser.id,
            currentPassword: this.password.currentPassword,
            newPassword: this.password.newPassword,
            confirmNewPassword: this.password.confirmNewPassword,
          };

          const updateData = await UserService.updateUserProfile(payload).then(
            (response) => {
              if (response.data.status == 'success') {
                Swal.fire({
                  icon: 'success',
                  text: 'เปลี่ยนแปลงรหัสผ่านเรียบร้อยแล้ว กำลังออกจากระบบ...',
                  showConfirmButton: false,
                  timer: 5000,
                }).then(() => {
                  EventBus.dispatch('logout');
                });
              }
            },
            (error) => {
              console.log('error from update profile page : ', error.response);
              if (
                error.response.data.message == 'Current password is incorrect.'
              ) {
                Swal.fire({
                  icon: 'error',
                  text: 'รหัสผ่านปัจจุบันไม่ถูกต้อง โปรดลองอีกครั้ง',
                  showConfirmButton: false,
                  timer: 4000,
                });
              } else if (error.response.data.message == 'Password not match') {
                Swal.fire({
                  icon: 'error',
                  text: 'กรุณากรอกรหัสผ่านใหม่ทั้งสองช่อง ให้ตรงกัน',
                  showConfirmButton: false,
                  timer: 4000,
                });
              } else if (
                error.response.data.message ==
                'Password require length more than 6'
              ) {
                Swal.fire({
                  icon: 'error',
                  text: 'กรุณากรอกรหัสผ่านใหม่อย่างน้อย 6 ตัวขึ้นไป',
                  showConfirmButton: false,
                  timer: 4000,
                });
              }
              // if (error.response && error.response.status === 403) {
              //   EventBus.dispatch('logout');
              // }
            },
          );
        }
      });
    },
    validEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style>
.swal2-title {
  font-size: 22px;
}
.swal2-html-container {
  font-size: 16px;
}
</style>
