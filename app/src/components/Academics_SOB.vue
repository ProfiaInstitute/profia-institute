<template>
  <section class="flex flex-col lg:flex-row mx-auto max-w-7xl">
    <div class="w-full lg:w-8/12">
      <section class="max-w-7xl mx-auto py-5">
        <div class="">
          <h1
            class="flex justify-center items-center text-4xl text-secondary-color font-bold mb-4"
          >
            ACADEMICS
          </h1>
          <div class="mt-10">
            <div class="w-full lg:col-span-8 mx-auto">
              <div>
                <img
                  src="@/assets/images/photo-faculty.avif"
                  alt="staff"
                  class="w-full sm:w-4/5 mx-auto my-4 object-cover aspect-square rounded-2xl"
                  loading="lazy"
                />
              </div>

              <div
                class="mt-4 text-center border rounded-xl w-auto h-auto space-y-5 py-5"
              >
                <h1 class="text-4xl font-bold py-5 text-primary-900">
                  Message From The Principal
                </h1>
                <p class="text-lg max-w-2xl mx-auto">
                  Welcome to our esteemed institution! At our school, we are
                  dedicated to providing high-quality education and practical
                  training across various fields. Whether you are pursuing a
                  career in ICT, Business, Engineering, Hospitality, or
                  Beauty/Cosmetology, our programs are designed to equip you
                  with the skills and knowledge needed to succeed. Our faculty
                  are committed to your growth and excellence, ensuring you are
                  prepared for the dynamic and ever-evolving job market. Join us
                  and embark on a journey towards a bright and fulfilling
                  future.
                </p>
                <p>
                  Sincerely,<br />
                  Mr/Mrs<br />
                  Profia Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Carousel -->
      <section class="mx-auto max-w-7xl">
        <Carousel />
      </section>
      <!-- Programs -->
      <section class="mx-auto max-w-7xl">
        <div class="py-12">
          <div class="">
            <h1
              class="mb-4 text-4xl font-semibold tracking-tight leading-none text-secondary-color md:text-5xl lg:text-6xl"
            >
              Programs
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

                    <div
                      v-show="faq.open"
                      class="m-4 p-4 rounded-2xl text-gray-600"
                    >
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
      </section>
    </div>

    <!-- sticky section -->
    <div class=" my-4 px-5 w-full lg:w-4/12">
      <div class="sticky top-24 space-y-10">
        <CallToActionSOB />
        <div
          class="border-[2px] border-gray-200 rounded-lg w-auto h-auto px-5 space-y-4 py-3"
        >
          <div class="">
            <router-link to="/sob">
              <h1 class="text-xl font-semibold underline">
                School of Business
              </h1>
            </router-link>
          </div>
          <div class="">
            <router-link to="/soi">
              <h1 class="text-xl font-semibold underline">School of ICT</h1>
            </router-link>
          </div>
          <div class="">
            <router-link to="/soh">
              <h1 class="text-xl font-semibold underline">
                School of Hospitality
              </h1>
            </router-link>
          </div>
          <div class="">
            <router-link to="/soc">
              <h1 class="text-xl font-semibold underline">
                School of Beauty/Cosmetology
              </h1>
            </router-link>
          </div>
          <div class="">
            <router-link to="/soe"
              ><h1 class="text-xl font-semibold underline">
                School of Engineering
              </h1>
            </router-link>
          </div>
        </div>
        <div
          class="rounded-2xl p-4 border-2 border-gray-200 md:col-span-4 md:min-h-min"
        >
          <router-link to="/techhub">
            <h1 class="mb-3 font-bold text-gray-900 text-xl md:text-2xl">
              Tech Hub
            </h1>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import CallToActionProfia from "./CallToActionProfia.vue";
import CallToActionSOB from "./CallToActionSOB.vue";
import Carousel from "./Carousel.vue";
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
