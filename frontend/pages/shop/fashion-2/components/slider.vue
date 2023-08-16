<template>
  <!-- Home slider -->
  <section class="p-0">
    <div class="slide-1 home-slider">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div
              class="home text-center"
              :class="item.alignclass"
              v-bind:style="{
                'background-image': 'url(' + item.imagePath + ')',
              }"
            >
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4>{{ item.title }}</h4>
                        <h1>{{ item.subTitle }}</h1>
                        <nuxt-link
                          :to="{ path: `${item.urlName}` }"
                          class="btn btn-solid"
                          >ลงทะเบียนทันที</nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end retrive -->
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </section>
  <!-- Home slider end -->
</template>

<script>
import BannerImage from '../../../../src/services/setting/banner-image.service';
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      items: [
        // {
        //   imagepath: require('@/assets/images/home-banner/1.jpg'),
        //   title: 'TITLE',
        //   subtitle: 'SUB TITLE',
        //   alignclass: 'p-left',
        // },
        // {
        //   imagepath: require('@/assets/images/home-banner/1.jpg'),
        //   title: 'welcome to fashion',
        //   subtitle: 'Top Collection',
        //   alignclass: 'p-left',
        // },
      ],
    };
  },
  mounted() {
    this.fetchBannerData();
  },
  methods: {
    fetchBannerData() {
      BannerImage.getAllBannerImage().then((response) => {
        if (response.data.length > 0) {
          for (const it of response.data) {
            const item = {
              imagePath: this.getImgUrl(it.base64Data),
              title: it.title,
              subTitle: it.subTitle,
              urlName: it.urlName,
              alignclass: 'p-left'
            };

            this.items.push(item);
          }
        }else{
          const item = {
              imagePath: require('@/assets/images/home-banner/1.jpg'),
              title: 'welcome to bansing gogo',
              subTitle: '',
              urlName: '/',
              alignclass: 'p-left'
            };

            this.items.push(item);
        }
      });
    },
    getImgUrl(path) {
      return `data:image/png;base64,${path}`;
    },
  },
};
</script>
