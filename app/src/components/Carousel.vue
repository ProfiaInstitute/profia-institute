<template>
  <section class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="rounded-2xl p-6 border-2 border-gray-200 md:col-span-8">
        <h1
          class="mb-3 font-bold text-gray-900 text-2xl md:text-3xl text-center"
        >
          Faculty Staff
        </h1>
        <transition name="carousel-fade">
          <div :key="currentItem" class="carousel-item">
            <img
              :src="currentItemData.image"
              :alt="currentItemData.alt"
              class="w-full sm:w-4/5 mx-auto my-4 object-cover aspect-square rounded-2xl"
              loading="lazy"
            />
            <p class="text-lg text-gray-900 text-center">
              {{ currentItemData.text }}
            </p>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <button @click="prevItem" class="mr-4 px-4 py-2 bg-gray-200 rounded">
        Prev
      </button>
      <button @click="nextItem" class="px-4 py-2 bg-gray-200 rounded">
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Carousel items data
const carouselItems = ref([
  {
    image: require("@/assets/images/photo-faculty.avif"),
    alt: "staff",
    text: "Welcome to faculty.",
  },
  {
    image: require("@/assets/images/techhub-6.avif"),
    alt: "another",
    text: "This is Faculty.",
  },
]);

// Reactive variable for current item index
const currentItem = ref(0);

// Computed property to get current item data
const currentItemData = computed(() => carouselItems.value[currentItem.value]);

// Methods to navigate the carousel
const prevItem = () => {
  currentItem.value =
    (currentItem.value - 1 + carouselItems.value.length) %
    carouselItems.value.length;
};

const nextItem = () => {
  currentItem.value = (currentItem.value + 1) % carouselItems.value.length;
};

// Auto-slide logic
let interval;
onMounted(() => {
  interval = setInterval(nextItem, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.5s;
}
.carousel-fade-enter,
.carousel-fade-leave-to {
  opacity: 0;
}
</style>
