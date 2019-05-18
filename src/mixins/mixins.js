import format from 'date-fns/format';
export default {
  computed: {
    post() {
      return this.$store.getters.showSinglePost;
    },
    info() {
      return this.$store.getters.showAllPosts;
    },
    formattedDate() {
      return this.newProject.due ? format(this.newProject.due, 'Do MMM YYYY') : '';
    },
    myProjects() {
      return this.projects.filter(item => {
        return item.person === 'Vue Master';
      });
    },
  }
}
  