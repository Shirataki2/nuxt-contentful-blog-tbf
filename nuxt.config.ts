import { Configuration } from '@nuxt/types'
require('dotenv').config()

const config: Configuration = {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['@/assets/main.scss'],
  plugins: ['@/plugins/contentful.ts', '@/plugins/markdownit.ts', '@/plugins/prismjs.ts'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },
  dotenv: {
    systemvars: true
  },
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
        fiber: require('fibers')
      }
    }
  },
  transition: {
    name: 'layout'
  }
}

export default config
