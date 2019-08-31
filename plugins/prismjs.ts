import { highlightAll } from 'prismjs'
import { Plugin } from '@nuxt/types'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'

declare module 'vue/types/vue' {
  interface Vue {
    $highlight: () => void
  }
}

const prismPlugin: Plugin = (_, inject) => {
  inject('highlight', highlightAll)
}

export default prismPlugin
