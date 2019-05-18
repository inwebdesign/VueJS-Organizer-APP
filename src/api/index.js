import Axios from 'axios';

export default {
  getAllPosts() {
    return Axios.get('https://jsonplaceholder.typicode.com/posts');
  },
  getSinglePost(id) {
    return Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}