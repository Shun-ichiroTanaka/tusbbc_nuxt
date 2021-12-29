<template>
  <div>
    <div class="content">
      <Header />

      <main class="scroll-none w-full flex flex-col mx-auto">
        <Hero />

        <div class="main-content">
          <Member />
          <Schedule />
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
// layout
import Header from '~/components/layouts/header/Header'
import Footer from '~/components/layouts/Footer'
// sections
import Hero from '~/components/sections/Hero'
import Member from '~/components/sections/Member'
import Gallery from '~/components/sections/Gallery'
import Schedule from '~/components/sections/Schedule'

export default {
  components: {
    Header,
    Footer,
    Hero,
    Member,
    Gallery,
    Schedule,
  },
}
</script>
<style lang="scss" scoped>
.content {
  @apply m-0 p-0 mx-auto;
  // background: var(--bg);
}
main {
  @apply w-full h-full;
}
.main-content {
  @apply w-full mx-auto flex flex-col items-center;
}
</style>
