<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Hello World!</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          {{ post.title }}
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import contentful from '@/plugins/contentful'
@Component({
  async asyncData () {
    const posts = await contentful.getAllPosts()
    return { posts }
  }
})
export default class Index extends Vue {}
</script>
