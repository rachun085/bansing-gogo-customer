<template>
  <div>
    <Header />
    <Breadcrumbs title="ลืมรหัสผ่าน" />
    <section class="pwd-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <h2>{{title}}</h2>
            <form class="theme-form" @submit="checkForm" method="post">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
              </div>
              <div class="form-row">
                <div class="col-md-12">
                  <div v-if="messageError" class="p-3 mb-2 bg-danger text-white">
                  อีเมลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง
                </div>
                 <div v-if="sentSuccess" class="p-3 mb-2 bg-success text-white">
                  ระบบได้ทำการส่งลิงก์เพื่อรีเซ็ทรหัสผ่านแล้ว กรุณาเช็คเมลของท่าน
                </div>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="กรอกอีเมลของคุณ"
                    name="email"
                    required
                  />
                </div>
                <input type="submit" class="btn btn-solid" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      title: 'ลืมรหัสผ่าน?',
      errors: [],
      email: null,
      messageError: false,
      sentSuccess: false
    }
  },
    head() {
      return {
        title: `${this.title} | Bansing GO GO`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'forgot password page'
          }
        ]
      }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.errors.length){
        e.preventDefault()
        // console.log("submit")

        axios
            .post(`${process.env.baseUrlBackend}/auth/reset-password`, {email : this.email})
            .then((response) => {
              console.log("success response : ", response);
              if (response.data.status == "success") {
                this.sentSuccess = true;
                this.messageError = false;
              }
            })
            .catch((error) => {
              console.log("error response data : ", error.response.data);
                this.sentSuccess = false;
                this.messageError = true;
            });

        return true
       ;
      }
      
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
