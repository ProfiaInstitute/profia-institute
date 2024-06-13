<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    <div class="mt-4">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style scoped></style>
