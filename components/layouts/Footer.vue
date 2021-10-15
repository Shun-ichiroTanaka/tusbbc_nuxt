<template>
  <div class="mt-32">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1950.1139095626734!2d139.91201505401003!3d35.92186342847694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1634277173791!5m2!1sja!2sjp"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <footer class="footer relative">
      <div class="footer-bottom container">
        <div
          class="
            footer-bottom-content
            flex flex-col
            justify-center
            items-center
          "
        >
          <p class="text-sm mb-2 cursor-default">
            ©
            <span ref="year"></span>
            - 東京理科大学硬式野球部
          </p>
        </div>
      </div>
    </footer>
  </div>
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
