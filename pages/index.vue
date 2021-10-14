<template>
  <div>
    <div class="content">
      <Header />

      <main class="scroll-none w-full flex flex-col mx-auto">
        <Hero />

        <div class="main-content">
          <!-- <What/> -->
          <!-- <Howto/> -->
          <Qa />
          <!-- <Register/> -->
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
import Qa from '~/components/sections/Qa'

export default {
  components: {
    Header,
    Footer,
    Hero,
    Qa,
  },
}
</script>
<style lang="scss" scoped>
.content {
  @apply m-0 p-0 mx-auto;
  // background: var(--fcfcfc);
}
main {
  @apply w-full h-full;
}
.main-content {
  @apply w-full mx-auto flex flex-col items-center;
}
</style>
