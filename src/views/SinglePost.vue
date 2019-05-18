<template>
  <div>
    <v-card >
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-card-text>
            {{ post.title }}
          </v-card-text>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-flex >
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    this.$store.dispatch('getSinglePostData', this.id);
  },
  mixins: [mixins],
}
</script>

