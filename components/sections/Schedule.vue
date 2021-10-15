<template>
  <section id="schedule" class="w-full">
    <h2 class="w-full lg:mt-16 mb-4">SCHEDULE</h2>

    <div class="section-body">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&title=%E6%9D%B1%E4%BA%AC%E7%90%86%E7%A7%91%E5%A4%A7%E5%AD%A6%E9%87%8E%E7%90%83%E9%83%A8%20-%20%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB&showPrint=0&showNav=0&showDate=0&showTabs=0&showCalendars=0&src=dHVzLmJiYy5tYW5hZ2VyQGdtYWlsLmNvbQ&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
        style="border-width: 0"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
}
</script>
<style lang="scss" scoped>
section {
  @apply w-full mx-auto;
}
.section {
  &-title {
    width: 400px;
  }
  &-body {
    @apply mx-auto font-semibold py-12;
    color: var(--86868b);
    @screen lg {
      max-width: 800px;
    }
  }
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
</style>
