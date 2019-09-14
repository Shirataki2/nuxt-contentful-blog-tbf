<template>
  <div>
    <h1 class="display-2 pa-5" style="text-align: center">
      記事一覧
    </h1>
    <v-pagination
      :value="page"
      :length="total"
      @input="pageChange($event)"
    />
    <Posts :posts="posts" gridstyle="xs12 lg6" />
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
  async asyncData ({ query, error }) {
    const postsPerPage = 4
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
    const data = await contentful.getPagePosts(
      postsPerPage,
      (page - 1) * postsPerPage
    )
    if (data.posts.length !== 0) {
      return {
        page,
        posts: data.posts,
        total: Math.ceil(data.length / postsPerPage)
      }
    } else {
      error({
        statusCode: 404,
        message: 'No such page'
      })
    }
  }
})
export default class PostPage extends Vue {
  posts: Post[] = []
  page = 1
  async pageChange (e: number) {
    const postsPerPage = 4
    const data = await contentful.getPagePosts(
      postsPerPage,
      (e - 1) * postsPerPage
    )
    this.page = e
    this.posts = data.posts
    this.$router.push(`/posts?page=${e}`)
  }
}
</script>
