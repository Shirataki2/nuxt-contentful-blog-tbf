<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <Posts :posts="posts" gridstyle="xs12 lg6" />
      </v-flex>
      <v-flex xs12 sm4>
        <v-text-field
          v-model="query"
          name="query"
          label="検索"
        >
          <template v-slot:append>
            <v-btn color="primary" text @click="search">
              GO!
            </v-btn>
          </template>
        </v-text-field>
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
export default class Index extends Vue {
  query: string = ''

  search () {
    this.$router.push(`/search?q=${this.query}&page=1`)
  }
}
</script>
