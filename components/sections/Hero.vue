<template>
  <div class="hero"></div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.hero {
  @apply relative w-full;
  background: var(--bg);
  &-body {
    @apply px-8 py-12;
    @apply flex justify-between mx-auto;
  }
}
</style>
