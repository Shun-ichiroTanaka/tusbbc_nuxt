<template>
  <div
    data-aos="fade-down"
    class="flex items-center justify-center mx-auto p-4 lg:py-12"
  >
    <img
      v-lazy-load
      data-src="https://res.cloudinary.com/dgq5m1giu/image/upload/v1642318221/2022/main_lpdhtu.svg"
      alt="main-img"
    />
  </div>
</template>
<style lang="scss" scoped>
img {
  @apply w-full;
  max-width: 900px;
  max-height: 60vh;
}
</style>
