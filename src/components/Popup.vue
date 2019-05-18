<template>
  <div>
    <h2 class="white--text">The Ninja Master</h2>
    <v-dialog max-width="400" >
      <v-btn slot="activator" class="white--text pink darken-2">
        Add New Project
      </v-btn>
      <v-card class="px-3">
        <v-card-title>Add new project</v-card-title>
        <v-text-field placeholder="title" prepend-icon="folder" v-model="newProject.title"></v-text-field>
        <v-text-field placeholder="author" prepend-icon="person" v-model="newProject.person"></v-text-field>
        <v-menu>
          <v-text-field slot="activator" :value="formattedDate" prepend-icon="schedule"></v-text-field>
          <v-date-picker v-model="newProject.due"></v-date-picker>
        </v-menu>
        <v-textarea placeholder="content" prepend-icon="edit" v-model="newProject.content"> </v-textarea>
        <v-text-field placeholder="status" prepend-icon="check" v-model="newProject.status"></v-text-field>
        <v-btn class="success mb-4" @click='addProject'>Add project</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';

export default {
  data() {
    return {
      newProject: {
        title: '',
        person: '',
        due: '',
        content: '',
        status: '',
      }
    }
  },
  mixins: [mixins],
  methods: {
    addProject() {
      this.$eventBus.$emit('newProject', this.newProject);
      this.newProject = {};
      this.snackbar = true;
    }
  }
}
</script>
