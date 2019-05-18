<template>
  <div>
    <v-container>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.person">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text>{{ project.content }}</v-card-text>
            <v-card-text>{{ project.due }}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';

export default {
  data() {
    return {
      projects: [
        {title: 'Design new website', person: 'Vue Master', due: '1st Feb 2019', status: 'outgoing', content: "loerae adf afef a9f adf adsf"},
        {title: 'Code up the home page', person: 'Rocket', due: '10st Feb 2019', status: 'complete', content: "loerae adf afef a9f adf adsf"},
        {title: 'Design website thumbnail', person: 'Blaster', due: '15st Feb 2019', status: 'complete', content: "loerae adf afef a9f adf adsf"},
        {title: 'Create comunnity forum', person: 'Cobra', due: '21st Feb 2019', status: 'overdue', content: "loerae adf afef a9f adf adsf"},
        {title: 'Update mobile app', person: 'Vue Master', due: '10st Feb 2019', status: 'outgoing', content: "fds dsfds e fefd a adf adsf"},
      ],
    }
  },
  mixins: [mixins],
   created() {
    this.$eventBus.$on('newProject', (data => {
      this.projects.push(data);
    }))
  }
};
</script>
