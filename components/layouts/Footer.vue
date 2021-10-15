<template>
  <!-- component -->
  <footer class="footer relative pt-1">
    <div class="footer-bottom lg:mt-16 container">
      <div
        class="footer-bottom-content flex flex-col justify-center items-center"
      >
        <p class="text-sm mb-2 cursor-default">
          ©
          <span ref="year"></span>
          - 東京理科大学硬式野球部
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  mounted() {
    let today = new Date()
    let year = today.getFullYear()
    this.$refs.year.innerHTML = year
  },
}
</script>
<style lang="scss" scoped>
.footer {
  &-bottom {
    @apply mx-auto p-6 flex justify-end;
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
