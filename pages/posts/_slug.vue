<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.tags }}</p>
    <!-- eslint-disable-next-line -->
    <div class="md" v-html="$md.render(post.text)" />
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
