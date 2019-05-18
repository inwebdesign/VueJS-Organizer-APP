<template>
  <div>
    <v-card class="pa-3" v-for="post in info" :key='post.title'>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <router-link :to="`/posts/${post.id}`">
            <div class="caption">{{ post.id }}</div>
          </router-link>
          <v-card-text>{{ post.title }}</v-card-text>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';

export default {
  data() {
    return {
      allPosts: []
    }
  },
  mounted() {
    this.$store.dispatch('getPostsData');
  },
  mixins: [mixins],
}
</script>
