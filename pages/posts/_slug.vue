<template>
  <div>
    <v-layout fill-height align-center justify-center mt-5>
      <h1 class="display-1 mt-5 mb-5 ml-3 mr-3">
        {{ post.title }}
      </h1>
    </v-layout>
    <v-container>
      <div style="text-align:center;" class="mt-4 mb-3">
        <v-chip
          v-for="tag in post.tags"
          :key="tag"
          color="blue darken-3"
          dark
          link
          @click="go(`/tags/${tag}`)"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <!-- eslint-disable-next-line -->
        <v-flex xs12 md8 offset-md2 class="md" v-html="$md.render(post.text)" />
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import contentful, { Post } from '@/plugins/contentful'

@Component({
  async asyncData ({ params }) {
    const post: Post = await contentful.getPost(params.slug)
    return { post }
  }
})
export default class PostPage extends Vue {}
</script>

<style lang="scss">
@charset "UTF-8";

@media only screen and (max-width: 667px) {
  .display-1 {
    font-size: 30px !important;
  }
}
.date {
  position: relative;
  bottom: 3px;
}
.md {
  //text-align: justify;
  background-color: transparent !important;
  img {
    object-fit: contain;
    max-height: 50vh;
    padding: 1vh;
    max-width: 100%;
    //min-width: 100px;
  }
  p,
  li {
    font-size: 16px;
    line-height: 1.7em;
  }
  h1 {
    ::before {
      content: '#';
    }
    line-height: 3rem;
    font-size: 2.5rem;
    margin: 0.5em 0 1.75rem;
    padding: 0.25em 0.5em;
    border-left: double 5px #7db4e6;
  }
  h2 {
    line-height: 2.3rem;
    font-size: 2rem;
    margin: 0.5em 0 1rem;
    padding: 0.25em 0.5em;
    border-left: solid 5px #7db4e6;
  }
  h3 {
    line-height: 2rem;
    font-size: 1.8rem;
    margin: 0 0 0.8rem;
    padding: 0.25em 0.5em;
    border-left: solid 5px #7db4e6;
  }
  h4 {
    line-height: 1.8rem;
    font-size: 1.6rem;
    margin: 0 0 0.8rem;
    padding: 0.25em 0.5em;
    border-left: solid 5px #7db4e6;
  }
  h5 {
    line-height: 1.7rem;
    font-size: 1.5rem;
    margin: 0 0 0.8rem;
  }
  h6 {
    line-height: 1.5rem;
    font-size: 1.3rem;
    margin: 0 0 0.6rem;
  }
  blockquote {
    margin: 0em auto;
    padding: 0.5em 0 0.5em 1em;
    border-left: 5px solid #999;
    :before {
      display: '"';
    }
    :not(:first-of-type) {
      margin-top: 0.5em;
    }
    * {
      color: #555;
    }
    p {
      font-size: 12pt;
      line-height: 1;
    }
  }
  hr {
    margin: 1em 0;
  }
  pre {
    font-size: 12px !important;
  }
  pre[class*='language-'] {
    margin: 0.3em;
    padding: 0.4em;
  }
  pre code {
    width: 100%;
    padding: 0.4em;
    margin: 0.5em;
  }
  @media only screen and (max-width: 667px) {
    h1 {
      line-height: 2.5rem;
      font-size: 1.8rem;
      margin: 0.2em 0 0.3rem;
      padding: 0em 0.3em;
      border-left: double 10px #7db4e6;
    }
    h2 {
      line-height: 2rem;
      font-size: 1.75rem;
      margin: 0.3em 0 0.4rem;
      padding: 0 0.3em;
      border-left: solid 4px #7db4e6;
    }
    h3 {
      line-height: 2rem;
      font-size: 1.5rem;
      margin: 0.3em 0 0.4rem;
      padding: 0 0.3em;
      border-left: solid 4px #7db4e6;
    }
    h4 {
      line-height: 1.8rem;
      font-size: 1.25rem;
      margin: 0.3em 0 0.4rem;
      padding: 0 0.3em;
      border-left: solid 4px #7db4e6;
    }
    h5 {
      line-height: 1.4rem;
      font-size: 1.2rem;
      margin: 0 0 0.8rem;
    }
    h6 {
      line-height: 1.4rem;
      font-size: 1rem;
      margin: 0 0 0.6rem;
    }
  }
  .footnotes {
    color: rgb(100, 100, 100);
    a {
      color: rgb(0, 81, 202);
      padding: 16px 17px;
    }
    li,
    p {
      font-size: 14px;
      line-height: 2em;
    }
  }
  .table-of-contents {
    ul:first-child::before {
      content: '目次';
      text-align: center;
      font-weight: normal;
      font-size: 118%;
      position: absolute;
      left: 0;
      right: 0;
      margin: -2em auto 0;
    }
    ul li::before {
      margin-top: 0.5em;
      padding: 0;
      margin: 0;
      width: 0;
      height: 0;
      background: none;
      box-shadow: none;
    }
    @media only screen and (max-width: 667px) {
      padding: 40px 1em 10px;
      min-width: auto;
      width: 100% !important;
      p.toc_title + ul.toc_list {
        padding: 20px 0 0;
      }
      ul.toc_list > li > ul {
        margin-left: 30px;
      }
    }
    margin: 20px auto 30px;
    background-color: rgba(44, 153, 181, 0.04);
    border: 3px solid rgba(64, 105, 144, 0.2);
    border-radius: 3px;
    box-sizing: border-box;
    padding: 50px 40px;
    display: table;
    min-width: 68%;
    counter-reset: li;
    div.code-toolbar > .toolbar span {
      background-color: #00000340;
      color: #fff;
    }
  }
}
</style>
