<template>
  <div class="hero">
    <MainImg />
  </div>
</template>
<script>
import MainImg from '@/components/atoms/MainImg'
export default {
  components: {
    MainImg,
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.hero {
  @apply relative w-full;
  background: var(--bg);
}
</style>
