import Fiber from 'fibers'
import Sass from 'sass'
export default {
  pageTransition: 'page',

  target: 'static',
  ssr: true,

  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },

    title: '東京理科大学硬式野球部 | Tokyo University Of Science Baseball Club',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      { hid: 'og:site_name', property: 'og:site_name', content: '東京理科大学野球部' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.tus-bbc.com/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          '東京理科大学硬式野球部 | Tokyo University Of Science Baseball Club',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '東京理科大学野球部のオフィシャルサイトです。東京理科大学野球部の選手紹介、最新試合結果、試合詳細、戦績、個人成績、野球部のニュースやトピックス、お問い合わせ先など、東京理科大学野球部に関する情報をご覧頂けます。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/reshelf/image/upload/v1619870944/ogp_rzf3q1.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['ress', { src: '@/assets/sass/app.scss', lang: 'scss' }],

  plugins: ['~/plugins/vue-scrollto'],

  components: true,

  styleResources: {
    scss: [
      '~/assets/sass/foundation/_variables.scss',
    ],
  },
  loading: {
    color: '#3173F7',
    height: '5px',
  },

  modules: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
  ],

  styleResources: {
    scss: ['@/assets/sass/_variables.scss'],
  },

  build: {
    cache: true,
    parallel: true,
    hardSource: true,
    standalone: true,
    // analyze: true,

    // Sass変換
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },

    // 保存時にESlintの実行
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  generate: {
    dir: 'public',
  },
}
