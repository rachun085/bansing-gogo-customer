<template>
  <div>
    <Header />
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical @input="onTabChange">
              <b-tab title="ข้อมูลส่วนตัว" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <!-- <div class="page-title">
                        <h2>My Dashboard</h2>
                      </div> -->
                      <!-- <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                      </div> -->
                      <div class="box-account box-info">
                        <!-- <div class="box-head">
                          <h2>ข้อมูลส่วนตัว</h2>
                        </div> -->
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>ข้อมูลส่วนตัว</h3>
                              <!-- <a href="#" @click="editProfile">แก้ไขข้อมูล</a> -->
                              <nuxt-link
                                :to="{ path: '/page/account/profile' }"
                                class="h6"
                                >แก้ไขข้อมูล</nuxt-link
                              >
                            </div>
                            <div class="row mt-2">
                              <div class="col-sm-6 h6">
                                <span>ชื่อ</span>
                                <span class="text-dark"
                                  >{{ profileData.firstName }}
                                  {{ profileData.lastName }}</span
                                >
                              </div>
                              <div class="col-sm-6 h6">
                                <span>อีเมล</span>
                                <span class="text-dark">{{
                                  profileData.email
                                }}</span>
                              </div>
                            </div>
                            <div class="row mt-2">
                              <div class="col-sm-6 h6">
                                <span>เบอร์โทรศัพท์มือถือ</span>
                                <span class="text-dark">{{
                                  profileData.phoneNumber
                                }}</span>
                              </div>
                              <div class="col-sm-6 h6">
                                <span>หมายเลขบัตรประจำตัวประชาชน</span>
                                <span class="text-dark">{{
                                  profileData.cardId
                                }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="การร่วมลงทุนของฉัน" @click="tabMyRegistered" lazy>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>การร่วมลงทุนของฉัน</h2>
                      </div>
                      <div class="welcome-msg">
                        <!-- <p>Hello, MARK JECNO !</p> -->
                      </div>
                      <div class="box-account box-info">
                        <div>
                          <b-table
                            striped
                            hover
                            :items="itemRegisterTable"
                            :fields="fields"
                          >
                            <template #cell(status)="data">
                              <b
                                class="text-danger"
                                v-if="data.value == 'ยังไม่สมบูรณ์'"
                                >{{ data.value }}</b
                              >
                              <b
                                class="text-success"
                                v-if="data.value == 'เสร็จสมบูรณ์'"
                                >{{ data.value }}</b
                              >
                              <b
                                class="text-danger"
                                v-if="data.value == 'หมดอายุ'"
                                >{{ data.value }}</b
                              >
                            </template>
                          </b-table>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab
                title="แจ้งยืนยันการชำระเงิน"
                @click="linkToPage('confirm-payment')"
              >
              </b-tab>
              <b-tab
                title="ใบสัญญา"
                @click="tabMyContract"
                lazy
                :active="$route.hash === '#contract'"
              >
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>รายละเอียดใบสัญญาการลงทุน</h2>
                      </div>
                      <div class="welcome-msg"></div>
                      <div class="box-account box-info">
                        <div>
                          <b-table
                            striped
                            hover
                            :items="itemContractTable"
                            :fields="fieldsContract"
                          >
                            <template #cell(contract)="data">
                              <span>
                                <i
                                  class="fa fa-eye"
                                  aria-hidden="true"
                                  @click="viewContract(data.value, data)"
                                ></i>
                              </span>
                              <!-- <b
                                class="text-danger"
                                v-if="data.value == 'ยังไม่สมบูรณ์'"
                                >{{ data.value }}</b
                              >
                               -->
                            </template>
                          </b-table>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="ออกจากระบบ" @click="linkToPage('logout')"></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <div></div>
      <b-modal
        id="modal-1"
        size="xl"
        title="ข้อมูลสัญญา"
        ref="view-pdf-modal"
        hide-footer
        no-close-on-backdrop
        @hidden="resetModal"
      >
        <div class="mb-3">
          <b-button
            v-b-modal.modal-sign-contract
            variant="primary"
            :disabled="editNo >= 2"
            ><i class="fa fa-pencil" aria-hidden="true"></i> เซ็นสัญญา</b-button
          >
          <span class="text-secondary ml-2"
            >แก้ไขลายเซ็นครั้งที่ ({{ editNo }} / 2)</span
          >
        </div>
        <Pdf :base64="base64PdfData" v-if="showModalViewPdf"></Pdf>
      </b-modal>
      <b-modal
        id="modal-sign-contract"
        title="เซ็นสัญญา"
        ref="sign-contract-modal"
        hide-footer
        no-close-on-backdrop
      >
        <Canvas v-model="canvas" :documentId="documentId"></Canvas>
      </b-modal>
      <b-modal
        id="confirm-password-modal"
        title="กรุณายืนยันรหัสผ่านเพื่อดูสัญญา"
        ref="confirm-password-modal"
        no-close-on-backdrop
        centered
        @hidden="closeModalValidatePassword"
        @ok="handleOk"
      >
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12">
              <form ref="form" @submit.stop.prevent="validate">
                <div class="col-md-12">
                  <div
                    v-if="requiredPassword"
                    class="p-3 mb-2 bg-danger text-white"
                  >
                    กรุณากรอกรหัสผ่าน
                  </div>
                  <div
                    v-if="passwordNotValid"
                    class="p-3 mb-2 bg-danger text-white"
                  >
                    รหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    id="validatePassword"
                    v-model="validatePassword"
                    placeholder=""
                    name="validatePassword"
                    required=""
                  />
                </div>
                <!-- <input
                    type="button"
                    class="btn btn-solid mt-3"
                    value="ยืนยัน"
                    @click="validate"
                  /> -->
              </form>
            </div>
          </div>
        </div>
      </b-modal>
    </section>

    <Footer />
  </div>
</template>
<script>
import Header from '../../../components/header/header1';
import Footer from '../../../components/footer/footer1';
import Breadcrumbs from '../../../components/widgets/breadcrumbs';
import axios from 'axios';
import { apiConstants } from '../../../src/constrants/const';
import UserService from '../../../src/services/user.service.js';
import EventBus from '../../../src/common/EventBus';
import RegisterService from '../../../src/services/register/register.service';
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';
import moment from 'moment';
moment.locale('th');
import Pdf from '../../../components/pdf/pdf-viewer.vue';
import Canvas from '../../../components/canvas/drawing-canvas.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Pdf,
    Canvas,
  },
  // head: {
  //   script: [
  //     {
  //       src: 'https://unpkg.com/downloadjs@1.4.7',
  //     },
  //   ],
  // },
  data() {
    return {
      title: 'Dashboard',
      profileData: {
        id: null,
        cardId: null,
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        roles: null,
        status: null,
        createdAt: null,
        updatedAt: null,
      },
      fields: [
        {
          key: 'id',
          label: 'ลำดับ',
        },
        {
          key: 'register_name',
          label: 'กิจกรรม',
        },
        {
          key: 'total_price',
          label: 'จำนวนเงิน',
        },
        {
          key: 'created_at',
          label: 'วันที่ทำรายการ',
        },
        {
          key: 'due_date',
          label: 'โปรดชำระเงินก่อน',
        },
        {
          key: 'status',
          label: 'สถานะการชำระเงิน',
        },
      ],
      itemRegisterTable: [],
      itemContractTable: [],
      fieldsContract: [
        {
          key: 'id',
          label: 'ลำดับ',
        },
        {
          key: 'register_name',
          label: 'กิจกรรม',
        },
        {
          key: 'created_at',
          label: 'สัญญาถูกสร้างเมื่อ',
        },
        {
          key: 'contract',
          label: 'ดูสัญญา',
        },
      ],
      showModalViewPdf: false,
      base64PdfData: '',
      canvas: null,
      editNo: null,
      documentId: null,
      validatePassword: null,
      requiredPassword: false,
      passwordNotValid: false,
    };
  },
  head() {
    return {
      title: `${this.title} | Bansing GoGo`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard page description',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/downloadjs@1.4.7',
        },
      ],
    };
  },
  computed: {
    currentUser() {
      // console.log('user : ', this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/page/account/login');
    }
    if (this.$route.hash == '#contract') {
      this.tabMyContract();
    }
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      UserService.getUserProfile(this.currentUser.id).then(
        (response) => {
          if (response) {
            this.profileData = response.data;
            if (response.data.cardId == null) this.profileData.cardId = '-';
            console.log('data => ', this.profileData);
          }
        },
        (error) => {
          console.log('error from dashboard page : ', error);
          if (error.response && error.response.status === 403) {
            EventBus.dispatch('logout');
          }
        },
      );
    },
    editProfile() {
      console.log(this.$refs.profile.show());

      // this.$router.push({
      //   path: '/page/account/profile',
      //   name: 'profile',
      //   props: (route) => ({
      //     profile: this.profileData
      //   }),
      // });
    },
    async tabMyRegistered() {
      if (this.itemRegisterTable.length == 0) {
        RegisterService.getRegisterByUserId(this.currentUser.id).then(
          (response) => {
            if (response) {
              if (response.data.data.length > 0) {
                let id = 1;
                for (const it of response.data.data) {
                  const item = {
                    id: id,
                    register_name: it.event.name,
                    total_price: this.numberWithCommas(it.totalPrice),
                    created_at: this.formatDate(it.createdAt),
                    due_date: this.formatDate(it.dueDate, 'LLL'),
                    status:
                      it.status == 'UNCOMPLETE'
                        ? 'ยังไม่สมบูรณ์'
                        : it.status == 'COMPLETE'
                        ? 'เสร็จสมบูรณ์'
                        : it.status == 'EXPIRED'
                        ? 'หมดอายุ'
                        : 'เสร็จสมบูรณ์',
                  };

                  this.itemRegisterTable.push(item);
                  id += 1;
                }
              }
              console.log('data registered => ', this.itemRegisterTable);
            }
          },
          (error) => {
            console.log('error from dashboard page : ', error);
            // if (error.response && error.response.status === 403) {
            //   EventBus.dispatch('logout');
            // }
          },
        );
      }
    },
    async tabMyContract() {
      if (this.itemContractTable.length == 0) {
        RegisterService.getRegisterWithContractByUserId(
          this.currentUser.id,
        ).then(
          (response) => {
            if (response) {
              if (response.data.data.length > 0) {
                let id = 1;
                console.log('dadd : ', response.data.data);
                for (const it of response.data.data) {
                  if (it.document) {
                    const item = {
                      id: id,
                      register_name: it.event.name,
                      created_at: this.formatDate(it.document.createdAt),
                      contract: it.document.fileData,
                      editNo: it.document.editNo,
                      documentId: it.document.id,
                    };

                    this.itemContractTable.push(item);
                    id += 1;
                  }
                }
              }
              console.log(
                'data register with contract => ',
                this.itemContractTable,
              );
            }
          },
          (error) => {
            console.log('error from dashboard page : ', error);
            // if (error.response && error.response.status === 403) {
            //   EventBus.dispatch('logout');
            // }
          },
        );
      }
    },
    formatDate(date, format = 'LL') {
      return moment(date).add(543, 'year').format(format);
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    linkToPage(urlPage) {
      if (urlPage == 'logout') {
        this.$store.dispatch('auth/logout');
        this.$router.push('/page/account/login');
      } else {
        this.$router.push(`/page/${urlPage}`);
      }
    },
    onTabChange(event) {
      const registeredEvent = 1;
      if (event != registeredEvent) {
        this.itemRegisterTable = [];
      }
    },
    async viewContract(base64Data, data) {
      // console.log('view data contract : ', data);
      this.$refs['confirm-password-modal'].show();

      // this.$refs['view-pdf-modal'].show();
      this.base64PdfData = base64Data;
      this.editNo = data.item.editNo;
      this.documentId = data.item.documentId;

      // this.showModalViewPdf = !this.showModalViewPdf;
    },
    resetModal() {
      console.log('reset modal');
      this.showModalViewPdf = false;
      this.base64PdfData = '';
      this.editNo = null;
      this.documentId = null;
      this.validatePassword = null;
      this.requiredPassword = false;
      this.passwordNotValid = false;
    },
    closeModalValidatePassword() {
      console.log('close modal validate password');
      this.validatePassword = null;
      this.requiredPassword = false;
      this.passwordNotValid = false;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.validate();
    },
    validate() {
      console.log('submit validate password');
      if (!this.validatePassword) {
        this.requiredPassword = true;
      }

      const payload = {
        password: this.validatePassword,
        userId: this.profileData.id,
      };

      UserService.validateContractPassword(payload).then((response) => {
        if (response.data.status == 'true') {
          this.$refs['confirm-password-modal'].hide();
          this.$refs['view-pdf-modal'].show();
          this.showModalViewPdf = !this.showModalViewPdf;
        } else {
          this.requiredPassword = false;
          this.passwordNotValid = true;
        }
      });
    },
  },
};
</script>
