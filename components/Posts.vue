<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="post in posts" :key="post.id" :class="gridstyle" d-flex>
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 1"
            @click="$router.push(`/posts/${ post.slug }`)"
          >
            <v-card-title>
              {{ post.title }}
            </v-card-title>
            <v-card-text>
              <p>{{ post.text.substring(0, 150) }}</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Post } from '@/plugins/contentful'

@Component
export default class Posts extends Vue {
  @Prop({ type: Array, required: true })
  posts!: Post[]

  @Prop({ type: String, default: 'xs12 sm6 lg4 xl3' })
  gridstyle!: string
}
</script>
