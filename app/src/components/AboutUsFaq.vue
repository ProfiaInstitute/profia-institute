<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-8 lg:px-0">
        <h1
          class="mb-4 text-3xl font-semibold tracking-tight leading-none text-secondary-color md:text-5xl"
        >
          Frequently Asked Questions
        </h1>
        <p
          class="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
        >
          Exploring Tech: Answers to Your Frequently Asked Questions
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <ul class="mt-0 divide-y-2 rounded-2xl">
          <li v-for="(faq, index) in faqs" :key="index">
            <details class="group">
              <summary
                @click="toggleAccordion(index)"
                class="flex items-center justify-between px-4 sm:px-8 py-3 font-medium hover:cursor-pointer"
              >
                <span class="font-semibold text-xl py-2">{{
                  faq.question
                }}</span>
                <span class="text-2xl">{{ faq.open ? "-" : "+" }}</span>
              </summary>

              <div v-show="faq.open" class="m-4 p-4 rounded-2xl text-gray-500">
                <p>
                  {{ faq.answer }}
                </p>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is the campus culture like?",
    answer:
      "Campus culture can vary greatly. Some colleges have a strong sense of community, with lots of school spirit and traditions, while others may be more diverse and cosmopolitan. It’s a good idea to visit the campus or talk to current students to get a feel for the atmosphere.",
    open: false,
  },
  {
    question: "How safe is the campus?",
    answer:
      "Campus safety is a top priority for colleges. Many have campus security, emergency alert systems, and policies to ensure student safety. It’s helpful to review the college’s annual security report or ask about safety measures.",
    open: false,
  },
  {
    question: "What support services are available for students?",
    answer:
      "Support services may include academic advising, tutoring, counseling services, disability services, and health services. These resources are designed to help students succeed academically and personally.",
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style lang="scss" scoped></style>
