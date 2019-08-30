<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <Posts :posts="posts" gridstyle="xs12 lg6" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import contentful from '@/plugins/contentful'
import Posts from '@/components/Posts.vue'
@Component({
  components: {
    Posts
  },
  async asyncData () {
    const posts = await contentful.getAllPosts(4)
    return { posts }
  }
})
export default class Index extends Vue {}
</script>
