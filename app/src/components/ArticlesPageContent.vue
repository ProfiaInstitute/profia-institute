<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="article">
      <h3>{{ article.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import { getArticle } from "../providers/api/getArticles";

const props = defineProps(["id"]);

const { Article, error, load } = getArticle(props.id);

/**Load data after mount */
onMounted(() => {
  load();
});
</script>
