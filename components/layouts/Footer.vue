<template>
  <!-- component -->
  <footer class="footer relative pt-1">
    <div class="footer-bottom lg:mt-16 container">
      <div class="flex flex-col lg:flex-row">
        <nuxt-link to="/agree" class="mr-4 link my-4 lg:my-0">
          事前登録規約
        </nuxt-link>
        <nuxt-link to="/privacy" class="link">プライバシーポリシー</nuxt-link>
      </div>
      <div
        class="footer-bottom-content flex flex-col justify-center items-center"
      >
        <p class="text-sm mb-2 cursor-default">© 2021 - Reshelf</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer {
  &-bottom {
    @apply mx-auto p-6 flex justify-between;
    border-top: 2px solid var(--eee);
  }
}
.link {
  @apply text-xs;
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-5px);
    color: var(--primary);
  }
}
</style>
