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
  head: {
    title: '東京理科大学硬式野球部 | Tokyo University Of Science Baseball Club',

    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '東京理科大学野球部のオフィシャルサイトです。東京理科大学野球部の選手紹介、最新試合結果、試合詳細、戦績、個人成績、野球部のニュースやトピックス、お問い合わせ先など、東京理科大学野球部に関する情報をご覧頂けます。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '東京理科大学野球部,理科大野球部,理科大,大学野球,東京都,神楽坂,千葉県,野田,東京理科大学,野球部,理科大野球,新東京大学野球',
      },
    ],
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
