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
    question: "How do you stay current in your field?",
    answer:
      "I stay current by regularly reading academic journals, attending conferences, and collaborating with other researchers. I also participate in professional organizations and keep an eye on the latest developments in the industry.",
    open: false,
  },
  {
    question: "What are the core subjects in the ICT curriculum?",
    answer:
      "Core subjects typically include programming, database management, networking, cybersecurity, web development, and information systems. You may also study mathematics and communications as foundational courses.",
    open: false,
  },
  {
    question: "What are the admission requirements for the engineering program?",
    answer:
      "Admission requirements typically include a strong academic record with a focus on math and science subjects, particularly calculus and physics. We also look for high SAT or ACT scores, letters of recommendation, a personal statement, and involvement in extracurricular activities related to engineering or problem-solving.",
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style lang="scss" scoped></style>
