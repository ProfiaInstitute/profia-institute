<template>
  <div class="py-12">
    <div class="">
      <h1
        class="mb-4 text-4xl font-semibold tracking-tight leading-none text-secondary-color md:text-5xl lg:text-6xl"
      >
        Schools
      </h1>
      <div class="">
        <ul class="mt-0 divide-y-2 rounded-2xl">
          <li v-for="(faq, index) in faqs" :key="index">
            <details class="group">
              <summary
                @click="toggleAccordion(index)"
                class="flex items-center justify-between px-4 sm:px-8 py-3 font-medium hover:cursor-pointer"
              >
                <span class="font-semibold text-xl sm:text-2xl py-2">{{
                  faq.school
                }}</span>
                <span class="text-2xl">{{ faq.open ? "-" : "+" }}</span>
              </summary>

              <div v-show="faq.open" class="m-4 p-4 rounded-2xl text-gray-600">
                <p
                  v-for="(program, index) in faq.programs"
                  :key="index"
                  class="text-lg sm:text-xl"
                >
                  {{ program }}
                </p>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    school: "School of Business",
    programs: [
      "Certified Public Accountant (CPA)",
      "Chartered Secretary (CS)",
      "Certified Investment and Financial Analyst (CIFA)",
      "Certified Credit Professional (CCP)",
      "Accounting Technician Diploma",
      "Certificate in Accounting and Management Skills",
    ],
    open: false,
  },
  {
    school: "School of ICT",
    programs: [
      "Computer foundational skills",
      "Certificate in ICT",
      "Diploma in ICT",
      "Graphics Design",
      "AI & Machine Learning",
      "Website Development",
      "Software Development",
      "Statistical Languages",
      "Diploma in Data Management and analytics",
    ],
    open: false,
  },
  {
    school: "School of Hospitality",
    programs: [
      "Food and Beverage Production:",
      "Food and Beverage Services",
      "Housekeeping",
      "Baking and Pastry",
    ],
    open: false,
  },
  {
    school: "School of Beauty/Cosmetology",
    programs: [
      "Beauty Therapy",
      "Hair Dressing",
      "Nail Technology",
      "Barbering",
      "Hot Stone Massage",
    ],
    open: false,
  },
  {
    school: "School of Engineering",
    programs: ["Plumbing Program", "Electrical Program"],
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
