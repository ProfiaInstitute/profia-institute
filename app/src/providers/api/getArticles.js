import { ref } from 'vue';
import { get } from './main';

export const getArticles = () => {
  const isLoading = ref(true);
  const articles = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await get('articles');
      articles.value = response.data;  // Ensure data exists in the response
      console.log(articles.value);
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

export const getArticle = (id) => {
  const isLoading = ref(true);
  const article = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await get(`articles/${id}`);
      article.value = response.data;  // Ensure data exists in the response
      console.log(article.value);
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
