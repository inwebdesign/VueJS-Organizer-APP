<template>
  <div class="about">
    <v-container>
      <v-tooltip top >
        <v-btn slot="activator" class="success my-3" @click="sortBy('title')">
          <v-icon left>folder</v-icon>
          <span>Sort by project</span>
        </v-btn>
        sort by project title
      </v-tooltip>
       <v-card class="pa-3" v-for="project in projects" :key="project.title" :class="`project ${project.status}`">
      <v-layout row wrap>
        <v-flex class="xs12 md6">
          <div class="caption">Project title</div>
          <v-card-text>{{ project.title }}</v-card-text>
        </v-flex>
        <v-flex class="xs6 md2">
          <div class="caption">Project author</div>
          <v-card-text>{{ project.person }}</v-card-text>
        </v-flex>
        <v-flex class="xs6 md2">
          <div class="caption">Project timeline</div>
          <v-card-text>{{ project.due }}</v-card-text>
        </v-flex>
        <v-flex class="xs6 md2">
          <v-chip :class="project.status" class="white--text">{{ project.status }}</v-chip>
        </v-flex>
      </v-layout>
    </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
       projects: [
        {title: 'Design new website', person: 'Vue Master', due: '1st Feb 2019', status: 'outgoing', content: "loerae adf afef a9f adf adsf"},
        {title: 'Code up the home page', person: 'Rocket', due: '10st Feb 2019', status: 'complete', content: "loerae adf afef a9f adf adsf"},
        {title: 'Design website thumbnail', person: 'Blaster', due: '15st Feb 2019', status: 'complete', content: "loerae adf afef a9f adf adsf"},
        {title: 'Create comunnity forum', person: 'Cobra', due: '21st Feb 2019', status: 'overdue', content: "loerae adf afef a9f adf adsf"},
      ],
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    },
  },
}
</script>

<style>
.project.complete {
  border-left: 4px solid #01579B;
}
.project.outgoing {
  border-left: 4px solid #AD1457;
}
.project.overdue {
  border-left: 4px solid #FFAB00;
}
.v-chip.complete {
  background: #01579B;
}
.v-chip.outgoing {
  background: #AD1457;
}
.v-chip.overdue {
  background: #FFAB00;
}
</style>
