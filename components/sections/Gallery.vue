<template>
  <section id="gallery" class="w-full flex flex-col items-center">
    <h2 class="w-full lg:mt-16 mb-4" data-aos="fade-down">GALLERY</h2>

    <div class="section-body lg:px-0 lg:mt-16" data-aos="fade-down">
      <div
        class="relative w-full container flex items-center justify-center"
        data-aos="fade-down"
      >
        <div class="hidden lg:block">
          <carousel
            :per-page="3"
            :autoplay="true"
            :loop="true"
            :pagination-enabled="false"
            :autoplay-timeout="4000"
          >
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E5%84%AA%E4%BD%9C%E3%81%95%E3%82%93%E5%90%91%E5%B3%B6%E3%81%95%E3%82%93_l6gm4i.jpg"
                alt="gallery-1"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E9%9B%86%E5%90%88%E5%86%99%E7%9C%9F_n0x7h2.jpg"
                alt="gallery-2"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E5%85%A5%E3%82%8C%E6%9B%BF%E3%81%88%E6%88%A6%E7%AC%AC1%E8%A9%A6%E5%90%88_ird7cx.jpg"
                alt="gallery-3"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E7%9F%B3%E5%B7%9D_ipipxl.jpg"
                alt="gallery-4"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E6%B1%A0%E7%94%B0_ikp1ja.jpg"
                alt="gallery-5"
              />
            </slide>
          </carousel>
        </div>
        <div class="block lg:hidden">
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
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E5%84%AA%E4%BD%9C%E3%81%95%E3%82%93%E5%90%91%E5%B3%B6%E3%81%95%E3%82%93_l6gm4i.jpg"
                alt="gallery-1"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E9%9B%86%E5%90%88%E5%86%99%E7%9C%9F_n0x7h2.jpg"
                alt="gallery-2"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E5%85%A5%E3%82%8C%E6%9B%BF%E3%81%88%E6%88%A6%E7%AC%AC1%E8%A9%A6%E5%90%88_ird7cx.jpg"
                alt="gallery-3"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E7%9F%B3%E5%B7%9D_ipipxl.jpg"
                alt="gallery-4"
              />
            </slide>
            <slide>
              <img
                class="img"
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1641962965/2022/bbc-%E6%B1%A0%E7%94%B0_ikp1ja.jpg"
                alt="gallery-5"
              />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  data() {
    return {
      Slide,
      Carousel,
    }
  },
}
</script>
<style lang="scss" scoped>
section {
  @apply w-full mx-auto;
}
h2 {
  @apply text-3xl font-bold text-center;
  background: var(--primary);
  color: var(--fff);
  padding: 2rem 0;
  @screen lg {
    @apply text-5xl;
    padding: 5rem 0;
  }
}
.VueCarousel-slide {
  max-width: 1500px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
}
</style>
