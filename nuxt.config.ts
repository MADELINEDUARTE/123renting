// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    secretToken: process.env.SECRET_TOKEN,
    urlApi: 'https://123rentingespana.renthubsoftware.com'
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
      // Agrega la referencia al archivo CSS
      link: [
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
  }
})
