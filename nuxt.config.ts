// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    secretToken: process.env.SECRET_TOKEN,
    urlApi: process.env.URL_API,
    urlApiAction: "https://dev.api.123renting.es",
    secretTokenAction: process.env.SECRET_TOKEN_ACTION,
    idiomaAction: process.env.IDIOMA_ACTION,
    regionAction: process.env.REGION_ACTION,
    public:{
      idiomaAction: process.env.IDIOMA_ACTION,
      regionAction: process.env.REGION_ACTION,
      namePage: process.env.NAME_PAGE,
      gtmContainerId1: process.env.GTM_CONTAINER_ID1, // Primer contenedor GTM
      gtmContainerId2: process.env.GTM_CONTAINER_ID2,
      gtmContainerId3: process.env.GTM_CONTAINER_ID3,
    }
  },
  devServer: {
      host: '0.0.0.0',
      port: 3000
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-gtag'],
  gtag: {
    id: 'G-70LPTXQ1HZ',
    config: {
      page_title: '123Renting'
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  app:{
    head: {
      title: '123Renting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '123Renting empresa con el mejor precio del mercado en alquiler de vehiculo o coches' },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'keywords', content: '123renting, alquiler furgonetas, alquiler furgonetas valencia, furgonetas de alquiler, alquiler de furgonetas baratas, furgonetas 123renting, alquiler furgonetas madrid, renting coches, furgonetas segunda mano, coches segunda mano, coches ocasión, coches baratos, Audi, Bmw, Mercedes Benz, Tesla, Porsche' },
        // { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: '#E94B28'},
        // Facebook
        { property: 'author', content: '123renting' },
        { property: 'og:site_name', content: '123renting' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: '123renting.es' },
        { property: 'twitter:domain', content: '123renting.es' },
        { property: 'twitter:creator', content: '123renting' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image:src', content: 'assets/img/logo/logoh.png' },
        { property: 'og:url', content: '123renting.es' },
        { property: 'og:title', content: '123renting.es' },
        { property: 'og:description', content: '123renting.es' },
        { name: 'twitter:site', content: '123renting.es' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '123renting.es' },
        { property: 'og:image', content: 'assets/img/logo/logoh.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'canonical', href: 'https://123renting.es' },
        { rel: 'stylesheet', href: '/assets/css/all-fontawesome.min.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
        { rel: 'stylesheet', href: '/assets/css/magnific-popup.min.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery-ui.min.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery.timepicker.min.css' },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' }
      ],
      script: [
        { src: '/assets/js/jquery-3.6.0.min.js',  },
        { src: '/assets/js/modernizr.min.js',  },
        { src: '/assets/js/bootstrap.bundle.min.js',  },
        { src: '/assets/js/imagesloaded.pkgd.min.js',  },
        { src: '/assets/js/jquery.magnific-popup.min.js',  },
        { src: '/assets/js/isotope.pkgd.min.js',  },
        { src: '/assets/js/jquery.appear.min.js',  },
        { src: '/assets/js/jquery.easing.min.js',  },
        { src: '/assets/js/owl.carousel.min.js',  },
        { src: '/assets/js/counter-up.js',  },
        { src: '/assets/js/jquery-ui.min.js',  },
        { src: '/assets/js/jquery.timepicker.min.js',  },
        { src: '/assets/js/wow.min.js',  },
        { src: '/assets/js/main.js', },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7902445689940188",
          async: true,
          crossorigin: "anonymous"
        },
      ]
    },
  },
  webpack:{
    plugins: [
      '~/plugins/gtm-new.client.ts',
      '~/plugins/gtm.client.ts',
      { src: '/assets/js/jquery-3.6.0.min.js', ssr: false },
        // { src: '~/plugins/Vue3Lottie.client', mode: 'client' },
    ]
  },
  experimental: {
    scanPageMeta: true
  },
  
})