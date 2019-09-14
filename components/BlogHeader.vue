<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title @click="$router.push('/')">
        HighPsy Blog
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="$router.push('/posts')">
          全記事一覧
        </v-btn>
        <v-btn text @click="$router.push('/contact')">
          お問い合わせ
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogHeader extends Vue {}
</script>
