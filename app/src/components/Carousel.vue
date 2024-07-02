<template>
  <section class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="rounded-2xl p-6 border-2 border-gray-200 md:col-span-8">
        <h1
          class="mb-3 font-bold text-gray-900 text-2xl md:text-3xl text-center"
        >
          Faculty Staff
        </h1>
        <transition name="fade">
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
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Carousel items data
const carouselItems = ref([
  {
    image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    alt: "staff",
    text: "Welcome to faculty.",
  },
  {
    image:
      "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTk4NTM4MzN8MA&ixlib=rb-4.0.3",
    alt: "staff",
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
