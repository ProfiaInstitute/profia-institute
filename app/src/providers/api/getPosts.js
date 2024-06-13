import { ref } from 'vue';
import { get } from './main';

export const getPosts = () => {
  const isLoading = ref(true);
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await get('posts');
      posts.value = response.data;  // Ensure data exists in the response
      console.log(posts.value);
    } catch (err) {
      console.error(err);
      error.value = err;  // Store the error in the ref
    } finally {
      isLoading.value = false;  // Always set isLoading to false after the request
      console.log(isLoading.value);
    }
  };

  return { posts, error, load, isLoading };
};

export const getPost = (id) => {
  const isLoading = ref(true);
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await get(`posts/${id}`);
      post.value = response.data;  // Ensure data exists in the response
      console.log(post.value);
    } catch (err) {
      console.error(err);
      error.value = err;  // Store the error in the ref
    } finally {
      isLoading.value = false;  // Always set isLoading to false after the request
      console.log(isLoading.value);
    }
  };

  return { post, error, load, isLoading };
};
