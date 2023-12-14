
const { merge } = require('webpack-merge')
const pdfjsConfig = require('./pdfjs.config')

export default {
  server: {
    port: 3000, // default: 3000
    host: '0' // default: localhost
  },
  env: {
    baseUrl: process.env.BASE_URL || '10.104.11.171:3000',
    baseUrlBackend: process.env.BASE_URL_BACKEND || '10.104.8.251:4000'
  },
  ssr: false,
  subdirectory: '/multikart',
  /*
  ** Headers of the page
  */
  head: {
    title: 'BansingGoGo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/multikart/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: [
      // { src: 'https://checkout.stripe.com/checkout.js'}
    ]
  },
  static: {
    prefix: false
  },
  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
  /*
  ** Global CSS
  */
  css: [
    'swiper/css/swiper.css',
    '~/assets/scss/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~/plugins/plugin.js', ssr:false },
     { src: '~/plugins/localStorage.js', ssr:false },
     { src: '~/plugins/axios.js', ssr:false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    "/login": "http://10.104.8.251:4000/auth/login"
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.module.rules.push({
          test: /pdfjs-dist/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader',
                name: 'fonts/[name].[hash:8].[ext]',
                esModule: false,
              },
            },
          ],
        }, 
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        })
      }
    }
  }
}