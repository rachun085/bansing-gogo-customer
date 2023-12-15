<template>

  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li>
          <a href="/">หน้าหลัก</a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('company')">บริษัท
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('company') }">
            <li>
              <a href="/company/bansing-event-group">บ้านสิงห์ อีเว้นท์ กรุ๊ป</a>
            </li>
            <li>
              <a href="/company/heet-hoy-film">ฮีตฮอยฟิล์ม</a>
            </li>
            <li>
              <a href="/company/bansing-family">บ้านสิงห์ แฟมิลี่</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/page/account/dashboard/">แดชบอร์ด</a>
        </li>
        <li>
          <a href="/page/confirm-payment">แจ้งยืนยันการชำระเงิน</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      activeItem: 'clothing'
    }
  },
  methods: {
    closeLeftBar(val) {
      val = false
      this.$emit('closeVal', val)
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    }
  }
}
</script>
