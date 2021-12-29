<template>
  <div class="hero">
    <div class="hero-body flex-col md:flex-row">
      <div
        class="flex lg:w-1/3 flex-col items-center md:items-start justify-center mb-8 lg:mb-0"
      >
        <div class="hero-left lg:pr-16">
          <div class="">
            <p class="hero-title text-left" data-aos="fade-up">WELCOME.</p>
            <p class="hero-title-sub mt-2 md:mt-0" data-aos="fade-down">
              私たちは、東京理科大学神楽坂硬式野球部です。
              新東京大学野球３部リーグに所属する野球チームです。
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative w-full lg:w-2/3 flex items-center justify-center"
        data-aos="fade-down"
      >
        <carousel
          :per-page="1"
          :autoplay="true"
          :loop="true"
          :pagination-enabled="false"
          :autoplay-timeout="4000"
        >
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289904/2021/S__3129384_ugce1f.jpg"
              alt="gallery-1"
            />
          </slide>
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289884/2021/S__3137551_osjdvt.jpg"
              alt="gallery-2"
            />
          </slide>
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289869/2021/S__3137560_j9vkgu.jpg"
              alt="gallery-3"
            />
          </slide>
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289903/2021/S__3129383_wydtvc.jpg"
              alt="gallery-4"
            />
          </slide>
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289869/2021/S__3137557_ndqacg.jpg"
              alt="gallery-5"
            />
          </slide>
          <slide>
            <img
              class="img"
              src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289885/2021/S__3137554_mvgryl.jpg"
              alt="gallery-6"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  components: {
    Carousel,
    Slide,
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.hero {
  @apply relative w-full;
  background: var(--bg);
  &-body {
    @apply px-4 pt-4 pb-8;
    @apply flex justify-between mx-auto;
    max-height: calc(100vh - 98px - 60px);
    @screen lg {
      padding-left: 6.7%;
      padding-right: 0;
    }
  }
  &-title {
    @apply font-bold;
    font-size: 40px;
    @screen lg {
      @apply text-7xl;
    }
    @media screen and (max-width: 370px) {
      @apply text-5xl;
    }
    &-sub {
      @apply font-semibold text-base;
      color: var(--86868b);
      @screen md {
        @apply text-xl;
      }
    }
  }
  &-img {
    @apply w-full;
    @screen md {
      @apply pr-0;
    }
    @media screen and (max-width: 1280px) {
      // max-height: 200px !important;
    }
  }
}

.img {
  border-radius: 10px !important;
  max-height: 500px;
}
.VueCarousel-slide {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
}
</style>
