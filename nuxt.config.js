import Fiber from 'fibers';
import Sass from 'sass';
export default {

  pageTransition: 'page',

  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },

    title: 'Reshelf【リシェルフ】| アップデートするオンライン学習マーケットプレイス',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description',
        content: 'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい生徒と、教えたい講師をオンラインでつなぐお手伝いをします。'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Reshelf' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.reshelf.jp/' },
      { hid: 'og:title', property: 'og:title', content: 'Reshelf【リシェルフ】| アップデートするオンライン学習マーケットプレイス' },
      { hid: 'og:description', property: 'og:description', content: 'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい生徒と、教えたい講師をオンラインでつなぐお手伝いをします。' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/reshelf/image/upload/v1619870944/ogp_rzf3q1.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'ress',
    { src: '@/assets/sass/app.scss', lang: 'scss' },
  ],

  plugins: [
    '~/plugins/vuesax',
    '~/plugins/vue-scrollto',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  modules: [],

  styleResources: {
    scss: [
      '@/assets/sass/_variables.scss',
    ]
  },

  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },

  generate: {
    dir: 'public'
  },
}
