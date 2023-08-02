<template>
  <div>
    <Header />
    <Breadcrumbs title="แจ้งยืนยันการชำระเงิน" />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <div class="checkout-form">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <div class="row">
                  <div class="col-lg-8 col-sm-12 col-xs-12">
                    <div class="checkout-title"></div>
                    <div class="row check-out">
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">รายการที่ลงทะเบียน *</div>
                        <b-form-select
                          v-model="selectedRegisterOption"
                          :options="registerOptions"
                          @change="onChangeRegister()"
                        ></b-form-select>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">อีเมลที่ลงทะเบียน</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="email"
                        >
                          <input
                            type="text"
                            v-model="email"
                            name="email"
                            disabled
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="price"
                        >
                          <div class="field-label">จำนวนเงิน</div>
                          <input type="text" v-model="price" name="price" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-7 col-sm-12 col-xs-12">
                        <div class="field-label">ช่องทางการชำระเงิน</div>
                        <b-form-select
                          v-model="selectedBankOption"
                          :options="bankInformationOption"
                        ></b-form-select>
                      </div>
                      <div class="form-group col-md-5 col-sm-5 col-xs-12">
                        <div class="field-label">วัน-เวลาที่ชำระเงิน</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="payment_date"
                        >
                          <date-picker
                            v-model="paymentDate"
                            type="datetime"
                            placeholder="กรุณาเลือก"
                            :open.sync="open"
                            @change="handleChange"
                          ></date-picker>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">
                          แนบหลักฐานการชำระเงิน (ขนาดไฟล์ไม่เกิน 10 MB *)
                        </div>
                        <ValidationProvider
                          rules="required|image"
                          v-slot="{ errors }"
                          name="image"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            @change="previewImage"
                            class="form-control-file"
                            id="my-file"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">ตัวอย่างภาพที่อัพโหลด</div>
                        <template v-if="preview">
                          <img :src="preview" class="img-fluid" />
                          <!-- <p class="mb-0">file name: {{ image.name }}</p>
                          <p class="mb-0">size: {{ image.size / 1024 }}KB</p> -->
                        </template>
                      </div>
                      <div
                        class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"
                      >
                        <b-button
                          size="lg"
                          variant="success"
                          class="mt-2"
                          type="submit"
                          :disabled="invalid"
                          >แจ้งชำระเงิน</b-button
                        >
                        <!-- <nuxt-link
                  :to="{ path: '/page/account/register'}"
                >Create an Account?</nuxt-link> -->
                      </div>
                    </div>
                  </div>
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
import { mapGetters } from 'vuex';
import Header from '../../components/header/header1';
import Footer from '../../components/footer/footer1';
import Breadcrumbs from '../../components/widgets/breadcrumbs';
import RegisterService from '../../src/services/register/register.service';
import BankInformationService from '../../src/services/bank-information/bank.information.service';
import RegisterPaymentService from '../../src/services/register-payment/register-payment.service';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Swal from 'sweetalert2';

import moment from 'moment';
moment.locale('th');

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
    DatePicker,
  },
  computed: {
    ...mapGetters({
      order: 'products/getOrder'
    }),
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/page/account/login');
    }
    this.getRegisterData();
    this.getBankInformation();
  },
  data() {
    return {
      preview: null,
      image: null,
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue', // gold | blue | silver | black
      },
      bankInformationOption: [{ value: null, text: 'กรุณาเลือก' }],
      registerData: [],
      registerOptions: [{ value: null, text: 'กรุณาเลือก' }],
      selectedRegisterOption: null,
      selectedBankOption: null,
      email: null,
      price: null,
      paymentDate: null,
      open: false,
    };
  },
  methods: {
    onPaymentComplete: function (data) {
      this.$store.dispatch('products/createOrder', {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal,
      });
      this.$router.push('/page/order-success');
    },
    onCancelled() {
      console.log('You cancelled a window');
    },
    onSubmit() {
      console.log('Form has been submitted!');
    },
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        // console.log('name : ', input.files[0].name);
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    reset() {
      this.image = null;
      this.preview = null;
    },
    getRegisterData() {
      RegisterService.getRegisterByUserId(this.currentUser.id).then(
        (response) => {
          if (response) {
            this.registerData = response.data;
            console.log('data register => ', response.data);
            for (const it of this.registerData.data) {
              const item = {
                value: it.id,
                text: `${it.event.name} | ลงทะเบียนเมื่อ ${this.formatDate(
                  it.createdAt,
                )}`,
              };

              this.registerOptions.push(item);
            }
          }
        },
        (error) => {
          console.log('error from confirm-payment page : ', error);
        },
      );
    },
    getBankInformation() {
      BankInformationService.getAll().then(
        (response) => {
          if (response) {
            this.bankInformationData = response.data;
            for (const it of response.data) {
              const item = {
                value: it.id,
                text: `${it.accountNo} | ธนาคาร${it.bankName} | ชื่อบัญชี ${it.accountName}`,
              };

              this.bankInformationOption.push(item);
            }

            console.log('bank => ', this.bankInformationOption);
          }
        },
        (error) => {
          console.log('error fetch get bank information : ', error);
        },
      );
    },
    formatDate(date, format = 'LL') {
      return moment(date).add(543, 'year').format(format);
    },
    onChangeRegister() {
      console.log('selected value : ', this.selectedRegisterOption);
      const found = this.registerData.data.find(
        (elm) => elm.id == this.selectedRegisterOption,
      );
      if (found) {
        this.email = this.registerData.user.email;
        this.price = found.totalPrice;
      }
    },
    submit() {
      Swal.fire({
        title: 'ยืนยันการแจ้งชำระเงินหรือไม่',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: `ยกเลิก`,
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (this.image == null) {
            Swal.fire({
              icon: 'error',
              text: 'กรุณาแนบหลักฐานการชำระเงิน',
              showConfirmButton: false,
              timer: 3000,
            });
          } else {
            let formData = new FormData();
            formData.append('slip_image', this.image);
            formData.append('registerId', this.selectedRegisterOption);
            formData.append('bankId', this.selectedBankOption);
            formData.append('price', this.price);
            formData.append('paymentDate', moment(this.paymentDate).format());

            RegisterPaymentService.createRegisterPayment(formData).then(
              (response) => {
                if (response) {
                  console.log('created register payment : ', response);
                  if (response.data.status == 'success') {
                    Swal.fire({
                      icon: 'success',
                      text: 'บันทึกข้อมูลเรียบร้อยแล้ว',
                      showConfirmButton: false,
                      timer: 3000,
                    }).then(() => {
                      
                      this.$store.dispatch('products/clearOrder').then(() => {
                        this.$router.go();
                      });
                    });
                  }
                }
              },
              (error) => {
                console.log('error create register payment : ', error);
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
        }
      });
    },
    handleChange(value, type) {
      if (type === 'second') {
        this.open = false;
        console.log('value :', moment(this.paymentDate).format());
      }
    },
  },
};
</script>
