const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: "https://cdn.emailjs.com/sdk/2.3.2/email.min.js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Lobster|Abril+Fatface|Anton' },
      { }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
    // '@/plugins/vue-pure-lightbox'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'vue-sweetalert2/nuxt'
  ],
  generate: {
    subFolders: false,
    routes: function () {
      return [
        '/',
        'about',
        '/services/full-service',
        '/services/consultation',
        '/services/rentals',
        '/services/cart',
        '/events-productions',
        '/events-productions/rose-in-america',
        '/events-productions/events',
        '/events-productions/in-the-heights',
        '/events-productions/the-amen-corner',
        '/events-productions/peter-and-the-starcatcher',
        '/events-productions/the-heathers',
        '/events-productions/the-mystery-of-edwin-drood',
        '/events-productions/this-is-our-youth'
      ]
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options\
    baseURL: process.env.NODE_ENV == 'production' ? 'https://www.hilightproductions.com' : 'http://localhost:3000'
  },
  /* Proxy Module */
  // proxy: {
  //   '/events-productions/': 'https://www.hilightproductions.com'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
