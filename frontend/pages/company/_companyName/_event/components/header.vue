<template>
  <div>
    <header>
      <div class="mobile-fix-option"></div>
      <!-- <TopBar/> -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="navbar">
                  <a @click="left_sidebar">
                    <div class="bar-style">
                      <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                    </div>
                  </a>
                  <LeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
                </div>
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/shop/fashion'}">
                    <img :src='"@/assets/images/icon/logo.png"' class="img-fluid" alt />
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                  <Nav/>
                  <HeaderWidgets/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import TopBar from '../../../../../components/widgets/topbar.vue'
import LeftSidebar from '../../../../../components/widgets/left-sidebar'
import Nav from '../../../../../components/widgets/navbar'
import HeaderWidgets from '../../../../../components/widgets/header-widgets'
export default {
  data() {
    return {
      leftSidebarVal: false
    }
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
