<template>
  <div>
    <Header />
    <Breadcrumbs title="ยืนยันอีเมล" />
    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="success-text" v-if="text == 'success'">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <h2>การยืนยันอีเมลเสร็จสมบูรณ์</h2>
              <p class="mb-4">
                การลงทะเบียนเสร็จสมบูรณ์ ขณะนี้ท่านสามารถเข้าสู่ระบบเพื่อร่วมลงทุนกับเราได้เลย
              </p>
              <nuxt-link :to="{ path: '/page/account/login'}" class="btn btn-solid">ไปยังหน้าเข้าสู่ระบบ</nuxt-link>
            </div>
            <div class="success-fail" v-if="text == 'fail'">
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
              <h2>การยืนยันอีเมลเกิดข้อผิดพลาด</h2>
              <p class="mb-4">
                กรุณากดลิ้งค์เพื่อขอการยืนยันอีเมลใหม่อีกครั้งที่หน้าเข้าสู่ระบบ
              </p>
              <nuxt-link :to="{ path: '/page/account/login'}" class="btn btn-solid">ไปยังหน้าเข้าสู่ระบบ</nuxt-link>
            </div>
            <div class="success-fail" v-if="text == 'already confirmed'">
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
              <h2>การยืนยันอีเมลเกิดข้อผิดพลาด</h2>
              <p class="mb-4">
                อีเมลนี้ได้ทำการยืนยันเรียบร้อยแล้ว กรุณาเข้าสู่ระบบ
              </p>
              <nuxt-link :to="{ path: '/page/account/login'}" class="btn btn-solid">ไปยังหน้าเข้าสู่ระบบ</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/header/header1.vue'
import Footer from '../components/footer/footer1'
import Breadcrumbs from '../components/widgets/breadcrumbs'
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      text: ""
    };
  },
  head() {
    return {
      title: `BansingGoGo | ยืนยันอีเมลเสร็จสมบูรณ์`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard page description',
        },
      ],
    };
  },
  mounted() {
    if (!this.$route.query.token) {
      this.$router.push('/page/account/login');
    }
    this.confirmationEmail();
  },
  methods: {
    async confirmationEmail(){
      const response = await axios.post('/api/email-confirmation/confirm', {token : this.$route.query.token});
      console.log("response : ", response.data);
      if(response.data.statusCode == 200){
        this.text = "success";
      }else if(response.data.statusCode == 400 && response.data.data == "Email already confirmed"){
        this.text = "already confirmed";
      }
      else{
        this.text = "fail";
      }
    }
  }
}
</script>
