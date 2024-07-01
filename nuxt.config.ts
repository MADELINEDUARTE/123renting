// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    secretToken: process.env.SECRET_TOKEN,
    urlApi: 'https://123rentingespana.renthubsoftware.com',
    urlApiAction: "https://dev.api.123renting.es",
    secretTokenAction: process.env.SECRET_TOKEN_ACTION,
    idiomaAction: 1,
    regionAction: 1
  },
  devServer: {
      host: '0.0.0.0',
      port: 3000
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
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
        // { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: '#E94B28'},
        // Facebook
        { property: 'author', content: '123renting' },
        { property: 'og:site_name', content: '123renting' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: '123renting.ad' },
        { property: 'twitter:domain', content: '123renting.ad' },
        { property: 'twitter:creator', content: '123renting' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image:src', content: 'assets/img/logo/logoh.png' },
        { property: 'og:url', content: '123renting.ad' },
        { property: 'og:title', content: '123renting.ad' },
        { property: 'og:description', content: '123renting.ad' },
        { name: 'twitter:site', content: '123renting.ad' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '123renting.ad' },
        { property: 'og:image', content: 'assets/img/logo/logoh.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'canonical', href: 'https://123renting.ad' },
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
        { src: '/assets/js/main.js', }
      ]
    },
  },
  webpack:{
    plugins: [
      { src: '/assets/js/jquery-3.6.0.min.js', ssr: false },
      // { src: '~/plugins/Vue3Lottie.client', mode: 'client' },
    ]
  },
  experimental: {
    scanPageMeta: true
  },
  
})