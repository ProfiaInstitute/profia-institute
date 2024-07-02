<template>
  <div class="px-4 sm:px-8">
    <Hero/>
    <AdverHero/>
    <HomeCards />
    <UpdateHero/>
    <PatnerHero/>
    
    
  </div>
</template>

<script setup>
import AdverHero from "../components/AdverHero.vue";
import PatnerHero from "../components/PatnerHero.vue";
import Hero from "../components/Hero.vue";
import HomeCards from "../components/HomeCards.vue";
import UpdateHero from "../components/UpdateHero.vue";
</script>

<style lang="scss" scoped></style>
