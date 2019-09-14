<template>
  <div>
    <h1 class="display-2 pa-5" style="text-align: center">
      {{ query }}の検索結果
    </h1>
    <v-pagination
      :value="page"
      :length="total"
      @input="pageChange($event)"
    />
    <template v-if="posts.length !== 0">
      <Posts :posts="posts" gridstyle="xs12 lg6" />
    </template>
    <template v-else>
      <p style="text-align: center">
        検索ワード{{ query }}の結果は見つかりませんでした
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import contentful, { Post } from '@/plugins/contentful'
import Posts from '@/components/Posts.vue'

@Component({
  components: {
    Posts
  },
  async asyncData ({ query, redirect }) {
    const postsPerPage = 12
    let page: number
    if (typeof query.page === 'string') {
      page = parseInt(query.page)
      if (Number.isNaN(page)) {
        page = 1
      }
      if (page < 1) {
        page = 1
      }
    } else {
      page = 1
    }
    if (typeof query.q === 'string') {
      const data = await contentful.searchPosts(
        query.q,
        postsPerPage,
        (page - 1) * postsPerPage
      )
      return {
        page,
        query: query.q,
        posts: data.posts,
        total: Math.ceil(data.length / postsPerPage)
      }
    } else {
      redirect(302, '/')
    }
  }
})
export default class Search extends Vue {
  posts: Post[] = []
  page = 1
  query: string = ''
  async pageChange (e: number) {
    const postsPerPage = 12
    const data = await contentful.searchPosts(
      this.query,
      postsPerPage,
      (e - 1) * postsPerPage
    )
    this.page = e
    this.posts = data.posts
    this.$router.push(`/search?q=${this.query}&page=${e}`)
  }
}
</script>
