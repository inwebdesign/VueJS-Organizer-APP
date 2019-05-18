<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.role">
          <v-card class="deep-orange darken-1 ma-3 text-md-center">
            <v-avatar size="64" class="mt-3">
              <img :src="person.avatar" alt="">
            </v-avatar>
            <v-card-text class="white--text font-weight-bold text-md-center">{{ person.name }}</v-card-text>
            <v-card-text class="white--text font-weight-thin text-md-center">{{ person.role }}</v-card-text>
            <v-btn flat outline class="white--text mb-4">message</v-btn>
          </v-card>
        </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
       team: [
        {name: 'VueAssassin', role: 'Web developer', avatar: '/avatar-1.png'},
        {name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
        {name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
        {name: 'Gouken', role: 'Social media', avatar: '/avatar-4.png'},
        {name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'},
      ],
    }
  }
}
</script>
