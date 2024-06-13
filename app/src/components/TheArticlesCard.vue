<template>
  <div class="article flex">
    <router-link :to="{ name: 'articles-page', params: { id: article.id } }">
      <h3>{{ article.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["article"]);
const snippet = computed(() => {
  return props.post.body.substring(0, 10) + "....";
});
</script>


