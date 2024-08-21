<template>
  <section class="mx-auto max-w-7xl">
    <div class="">
      <div class="rounded-2xl p-6 md:col-span-8">
        <div class="carousel-container">
          <div
            class="carousel-track"
            :style="{
              transform: `translateX(-${currentPosition}px)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }"
            @transitionend="handleTransitionEnd"
          >
            <div
              v-for="(item, index) in extendedCarouselItems"
              :key="index"
              class="carousel-item"
            >
              <img
                :src="item.image"
                :alt="item.alt"
                class="w-full sm:w-4/5 mx-auto my-4 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import tree from "../assets/images/Home/bOvf94dPRxWu0u3QsPjF_tree.avif"
import bird from "../assets/images/Home/bird-8788491_1280.avif"
import mountain from "../assets/images/Home/painting-mountain-lake-with-mountain-background_188544-9126.avif"
import leaf from "../assets/images/Home/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.avif"

// Carousel items data
const carouselItems = ref([
  {
    image:
    leaf,
    alt: "staff",
  },
  {
    image:
      bird,
    alt: "staff",
  },
  {
    image:
      tree,
    alt: "staff",
  },
  {
    image:
      mountain,
    alt: "staff",
  },
]);

// Duplicate the carousel items to create a seamless loop
const extendedCarouselItems = ref([
  ...carouselItems.value,
  ...carouselItems.value,
]);

// Variables for carousel position and transition
const currentPosition = ref(0);
const isTransitioning = ref(true);
const itemWidth = ref(0); // Width of each carousel item

// Auto-slide logic
let interval;
const slideInterval = 3000;

onMounted(() => {
  // Calculate the width of each carousel item
  itemWidth.value = document.querySelector(".carousel-item").offsetWidth;
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

const nextItem = () => {
  currentPosition.value += itemWidth.value;
  isTransitioning.value = true;
};

const handleTransitionEnd = () => {
  if (currentPosition.value >= itemWidth.value * carouselItems.value.length) {
    currentPosition.value = 0;
    isTransitioning.value = false;
  }
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100%;
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
