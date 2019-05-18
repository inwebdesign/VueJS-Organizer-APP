import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Team from './views/Team'
import Project from './views/Project'
import Posts from './views/Posts'
import SinglePost from './views/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/projects',
      name: 'project',
      component: Project
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: SinglePost
    }
  ]
})
