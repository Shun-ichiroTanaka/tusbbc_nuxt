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
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289904/2021/S__3129384_ugce1f.jpg"
                alt="gallery-1"
              />
            </slide>
            <slide>
              <img
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289884/2021/S__3137551_osjdvt.jpg"
                alt="gallery-2"
              />
            </slide>
            <slide>
              <img
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289869/2021/S__3137560_j9vkgu.jpg"
                alt="gallery-3"
              />
            </slide>
            <slide>
              <img
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289903/2021/S__3129383_wydtvc.jpg"
                alt="gallery-4"
              />
            </slide>
            <slide>
              <img
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289869/2021/S__3137557_ndqacg.jpg"
                alt="gallery-5"
              />
            </slide>
            <slide>
              <img
                src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1634289885/2021/S__3137554_mvgryl.jpg"
                alt="gallery-6"
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

.img {
  // border-radius: 10px !important;
  // max-height: 500px;
  @apply p-6;
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
