<template>
  <section class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="rounded-2xl p-6 border-2 border-gray-200 md:col-span-8">
        <h1
          class="mb-3 font-bold text-gray-900 text-2xl md:text-3xl text-center"
        >
          Faculty Staff
        </h1>
        <div class="carousel-container">
          <transition name="slide">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentItem * 100}%)` }"
            >
              <div
                v-for="(item, index) in carouselItems"
                :key="index"
                class="carousel-item"
              >
                <img
                  :src="item.image"
                  :alt="item.alt"
                  class="w-full sm:w-4/5 mx-auto my-4 object-cover aspect-square rounded-2xl"
                  loading="lazy"
                />
                <p class="text-lg text-gray-900 text-center">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
  {
    image:
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    alt: "staff",
    text: "Bird.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1719792000&semt=ais_user",
    alt: "staff",
    text: "Leaf.",
  },
]);

// Reactive variable for current item index
const currentItem = ref(0);

// Auto-slide logic
let interval;
const slideInterval = 3000;

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});

// Methods to navigate the carousel
const startCarousel = () => {
  interval = setInterval(nextItem, slideInterval);
};

const stopCarousel = () => {
  clearInterval(interval);
};

const prevItem = () => {
  stopCarousel();
  if (currentItem.value === 0) {
    currentItem.value = carouselItems.value.length - 1;
  } else {
    currentItem.value--;
  }
  startCarousel();
};

const nextItem = () => {
  stopCarousel();
  currentItem.value = (currentItem.value + 1) % carouselItems.value.length;
  startCarousel();
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
