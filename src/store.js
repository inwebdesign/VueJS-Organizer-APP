import Vue from 'vue'
import Vuex from 'vuex'
import api from './api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    singlePost: {},
  },
  mutations: {
    getAllPosts: (state,item) => {
      state.posts = item;
    },
    getSinglePost: (state, item) => {
      state.singlePost = item;
    }
  },
  actions: {
    getPostsData: (context) => {
      api.getAllPosts().then((response) => {
        context.commit('getAllPosts', response.data.slice(0, 5));
      });
    },
    getSinglePostData: (context, id) => {
      api.getSinglePost(id).then((response) => {
        context.commit('getSinglePost', response.data)
      })
    }
  },
  getters: {
    showAllPosts(state) {
      return state.posts;
    },
    showSinglePost(state) {
      return state.singlePost;
    }
  }
})
