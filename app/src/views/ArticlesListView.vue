<template>
  <div>
    <h1 class="text-red-700">Articles</h1>
  </div>
  <div v-for="article in articles" :key="article.id">
    <TheArticlesCard :article="article" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import TheArticlesCard from "../components/TheArticlesCard.vue";

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>
