<template>
  <v-app dark>
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs12
          offset-sm2
        >
          <h1 class="display-4">
            {{ error.statusCode }}
          </h1>
          <h2 class="display-2">
            {{ error.message }}
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface ErrorProp {
  statusCode: number
  message: string
}

@Component({
  layout: 'empty'
})
export default class Error extends Vue {
  @Prop({
    type: Object,
    default: {
      statusCode: 400,
      message: 'An Error Occured'
    }
  })
  error!: ErrorProp
}
</script>
