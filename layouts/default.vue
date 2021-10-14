<template>
  <div class="body">
    <Nuxt />
    <scroll-top/>
  </div>
</template>
<script>
import ScrollTop from '~/components/atoms/ScrollTop'
export default {
  components: {
    ScrollTop
  }
}
</script>
<style lang="scss" scoped>
.body {
  @apply m-0 p-0 relative w-full h-full;
}
</style>
