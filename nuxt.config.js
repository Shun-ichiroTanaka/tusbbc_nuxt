export default {
  pageTransition: 'page',

  target: 'static',

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
          '東京理科大学野球部,理科大野球部,理科大,大学野球,東京都,神楽坂,千葉県,野田,東京理科大学,野球部,理科大野球,新東京大学野球,野球,baseball,Baseball,大学,試合,match,tokyo,Tokyo',
      },

      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '東京理科大学野球部',
      },
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
          'https://res.cloudinary.com/dgq5m1giu/image/upload/v1634295536/2021/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A_2_vybyga.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens_iphone5_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_iphone6_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        href: 'static/splashscreens/splashscreens_iphoneplus_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        href: 'static/splashscreens/splashscreens_iphonex_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_iphonexr_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        href: 'static/splashscreens/splashscreens_iphonexsmax_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_ipad_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_ipadpro1_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_ipadpro3_splash.png',
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        href: 'static/splashscreens/splashscreens_ipadpro2_splash.png',
      },
    ],
  },

  css: ['ress', { src: '@/assets/sass/app.scss', lang: 'scss' }],

  plugins: [
    '~/plugins/vue-scrollto',
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/aos', ssr: false },
  ],

  components: true,

  loading: {
    color: '#16afaf',
    height: '5px',
  },

  modules: ['nuxt-lazy-load'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
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

  pwa: {
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      appleMobileWebAppTitle: '東京理科大学野球部',
    },
    manifest: {
      lang: 'ja',
      name: '東京理科大学野球部',
      short_name: '東京理科大学野球部',
      description:
        '東京理科大学野球部のオフィシャルサイトです。東京理科大学野球部の選手紹介、最新試合結果、試合詳細、戦績、個人成績、野球部のニュースやトピックス、お問い合わせ先など、東京理科大学野球部に関する情報をご覧頂けます。',
      display: 'standalone',
      theme_color: '#000',
      background_color: '#fff',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'static/icon_pwa.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    icon: {
      source: 'static/icon_pwa.png',
      fileName: 'icon_pwa.png',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '^https://polyfill.io/.*',
          handler: 'cacheFirst',
        },
        {
          urlPattern: `https://tus-bbc.com/.*`,
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'site-cache',
          },
          strategyPlugins: [
            {
              use: 'Expiration',
              config: {
                maxAgeSeconds: 24 * 60 * 60 * 30,
              },
            },
          ],
        },
      ],
    },
  },
}
