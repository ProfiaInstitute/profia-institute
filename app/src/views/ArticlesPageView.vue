<template>
  <div>
    <h1 class="text-red-700">My Articles</h1>
    <div v-if="error">{{ error }}</div>
    <BlogReaderComponent :article="article" />
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import { getArticle } from "../providers/api/getArticles";
import BlogReaderComponent from "../components/BlogReaderComponent.vue";

const props = defineProps(["id"]);
const { article, error, load, isLoading } = getArticle(props.id);

onMounted(() => {
  load();
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
