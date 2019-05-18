<template>
  <div>
    <v-container>
      <v-snackbar color="success" top v-model="snackbar" :timeout='4000'>
        <span>Bravo! You added a new project? </span>
      <v-btn flat dark>Close</v-btn>
    </v-snackbar>
    <v-toolbar app dark class="blue-grey darken-2">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-thin">todo</span>
        <span class="font-weight-bold">ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn
        slot="activator"
        flat>
          MENU
        </v-btn>
        <v-list>
          <v-list-tile v-for="route in routes" :key="route.path" routes :to="route.path">
            <v-list-tile-title>{{ route.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    <v-btn
        flat
        class="white--text"
      >
      <v-icon left >exit_to_app</v-icon>
        <span class="mr-2">Sign out</span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo lighten-1"
    >
      <v-layout column align-center>
        <v-flex xs12>
          <v-avatar size="120" class="mt-3">
            <img src="/avatar-1.png" alt="">
          </v-avatar>
        </v-flex>
        <Popup />
      </v-layout>
      <v-list>
        <v-list-tile v-for="route in routes" :key="route.path" routes :to="route.path">
          <v-list-tile-title>
            <v-icon class="white--text" left>{{ route.icon }}</v-icon>
            <span class="white--text">{{ route.text }}</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
import Popup from '@/components/Popup';

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
       routes: [
      {path: '/', icon: 'dashboard', text: 'Dashobard'},
      {path: '/team', icon: 'person', text: 'Team'},
      {path: '/projects', icon: 'folder', text: 'Projects'},
      {path: '/posts', icon: 'edit', text: 'Posts'},
    ],
    snackbar: false,
    }
  },
  created(){
    this.$eventBus.$on('newProject', () => {
      this.snackbar = true;
    })
  }
}
</script>


