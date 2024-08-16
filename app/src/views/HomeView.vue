<template>
  <div class="px-4 sm:px-8">
    <HomeHero />
    <HomeCarousel />
    <HomeAcademicsCards />
    <HomeNewsandUpdates />
    <HomeOurPartners />
  </div>
</template>

<script setup>
import HomeCarousel from "@/components/HomeCarousel.vue";
import HomeOurPartners from "@/components/HomeOurPartners.vue";
import HomeHero from "@/components/HomeHero.vue";
import HomeAcademicsCards from "@/components/HomeAcademicsCards.vue";
import HomeNewsandUpdates from "@/components/HomeNewsandUpdates.vue";
</script>

<style lang="scss" scoped></style>
