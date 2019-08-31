import { Plugin } from '@nuxt/types'
import MarkdownIt from 'markdown-it'

declare module 'vue/types/vue' {
  interface Vue {
    $md: MarkdownIt
  }
}

const markdownItPlugin: Plugin = (_, inject) => {
  const md = new MarkdownIt({
    langPrefix: 'language-',
    linkify: true,
    breaks: true,
    html: true,
    typographer: true
  })
  md.use(require('markdown-it-footnote'))
  md.use(require('markdown-it-sanitizer'))
  md.use(require('@leetcode/markdown-it-anchor'))
  md.use(require('@iktakahiro/markdown-it-katex'))
  md.use(require('markdown-it-table-of-contents'))
  inject('md', md)
}

export default markdownItPlugin
