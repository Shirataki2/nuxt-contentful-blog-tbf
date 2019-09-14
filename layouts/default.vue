<template>
  <v-app>
    <BlogHeader />
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BlogHeader from '@/components/BlogHeader.vue'
@Component({
  components: {
    BlogHeader
  }
})
export default class DefaultPage extends Vue {}
</script>
