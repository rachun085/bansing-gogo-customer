<template>
  <!-- collection banner -->
  <section class="banner-padding banner-furniture">
    <div class="container-fluid">
      <div class="row partition3">
        <div class="col-md-6" v-for="(item,index) in items" :key="index"> 
          <nuxt-link :to="{ path: `company/${item.urlName}` }">
            <div class="collection-banner p-left text-left">
              <div class="img-part">
                <img :src="item.img" alt class="img-fluid">
              </div>
              <div class="contain-banner rounded">
                <div>
                  <h4>{{item.description}}</h4>
                  <h2>{{item.name}}</h2>
                </div>
              </div>
            </div> 
      </nuxt-link>

        </div>
      </div>
    </div>
  </section>
  <!-- collection banner end -->
</template>

<script>
import CompanyService from '../../../../src/services/company/company.service'
export default {
  data() {
    return {
      items: []
    }
  },
  computed: {
    defaultData(){
      // console.log("default data : ", this.$store.state.company.company);
      return this.$store.state.company.company;
    }
  },
  created() {
    if (!this.defaultData) {
      this.fetchCompanyData();
    }else{
      this.loadDataToArray(this.$store.state.company.company);
    }
  },
  mounted() {
    
  },
  methods: {
    fetchCompanyData(){
      this.$store.dispatch('company/all').then(
        () => {
          console.log("re-fetch data success");
          console.log("company data : ", this.$store.state.company.company);
        }
      )
    },
    loadDataToArray(companyData){
      console.log("company data: ", companyData);
      for (const it of companyData) {
        const item = {
          description: it.description,
          name: it.name,
          urlName: it.urlName,
          img: require('@/assets/images/uploads/company/' + it.image[0].alt)
        }
        this.items.push(item)
      }
    }
  }
}
</script>
