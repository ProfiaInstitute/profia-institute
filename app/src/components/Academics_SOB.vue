<template>
  <section class="max-w-7xl mx-auto py-5 mt-24">
    <div class="">
      <h1
        class="flex justify-center items-center text-4xl text-secondary-color font-bold mb-4"
      >
        ACADEMICS
      </h1>
      <div class="flex flex-row justify-center items-center">
        <CallToActionProfia />
        <!-- <div>
          <h1 class="text-2xl font-semibold">Lorem ipsum dolor!!</h1>
          <h2 class="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            eligendi explicabo, repudiandae blanditiis quam magnam
          </h2>
        </div>
        <input
          class="mt-6 ml-10 border w-28 h-12"
          type="button"
          value="APPLY HERE"
        /> -->
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
        <div class="w lg:col-span-8 mx-auto">
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
              training across various fields. Whether you are pursuing a career
              in ICT, Business, Engineering, Hospitality, or Beauty/Cosmetology,
              our programs are designed to equip you with the skills and
              knowledge needed to succeed. Our faculty are committed to your
              growth and excellence, ensuring you are prepared for the dynamic
              and ever-evolving job market. Join us and embark on a journey
              towards a bright and fulfilling future.
            </p>
            <p>
              Sincerely,<br />
              Mr/Mrs<br />
              Profia Institute
            </p>
          </div>
        </div>
        <!-- sticky section -->
        <div
          class="lg:fixed lg:ml-[1000px] lg:max-w-md col-span-4 mx-auto space-y-10 my-4 px-5"
        >
          <CallToActionSOB />

          <div
            class="border-[2px] border-gray-200 rounded-lg w-auto h-auto px-5 space-y-4 py-3"
          >
            <div class="">
              <router-link to="/sob"
                ><h1 class="text-xl font-semibold underline">
                  School of Business
                </h1></router-link
              >
              <!-- <h1 class="text-xl font-semibold">School of Business</h1> -->
              <!-- <p class="text-lg">
              Transform your career with our diverse business programs.<br />
              our courses provide the skills and knowledge to excel in the corporate world. <br />
              
            </p> -->
            </div>
            <div class="">
              <router-link to="/soi"
                ><h1 class="text-xl font-semibold underline">
                  School of ICT
                </h1></router-link
              >

              <!-- <p class="text-lg">
              Unlock the power of technology with our comprehensive ICT programs.<br />
              our courses are designed to prepare you for a dynamic career in the tech industry.
            </p> -->
            </div>
            <div class="">
              <router-link to="/soh"
                ><h1 class="text-xl font-semibold underline">
                  School of Hospitality
                </h1></router-link
              >

              <!-- <p class="text-lg">
              Learn the art of exceptional service, Create memorable experiences and thrive in
              the vibrant hospitality industry.
            </p> -->
            </div>
            <div class="">
              <router-link to="/soc"
                ><h1 class="text-xl font-semibold underline">
                  School of Beauty/Cosmetology
                </h1></router-link
              >

              <!-- <p class="text-lg">
                Elevate your passion for beauty with our top-notch cosmetology
                programs.<br />
                Turn your creativity into a rewarding career in the beauty
                industry.
              </p> -->
            </div>
            <div class="">
              <router-link to="/soe"
                ><h1 class="text-xl font-semibold underline">
                  School of Engineering
                </h1></router-link
              >

              <!-- <p class="text-lg">
                Shape the future with a engineering course.<br />
                Innovate and engineer solutions that make a difference by
                tackling real-world challenges
              </p> -->
            </div>
          </div>
          <div
            class="rounded-2xl p-4 border-2 border-gray-200 md:col-span-4 md:min-h-min"
          >
            <router-link to="/techhub">
              <h1 class="mb-3 font-bold text-gray-900 text-xl md:text-2xl">
                Tech Hub
              </h1></router-link
            >

            <!-- <p class="text-lg text-gray-900">
              At the heart of Profia Institute lies our Tech Hub, where we
              explore the frontiers of innovation and technology. Our focus
              areas include Artificial Intelligence (AI), Data Categorization,
              3D & 2D Data Annotation, Training Data for Autonomous Driving,
              Natural Language Processing (NLP), and Video Annotation. Through
              our Tech Hub, we aim to drive technological advancements and
              foster a culture of innovation among our students and faculty.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl">
    <Carousel />
  </section>
  <section class="">
    <!-- <div class="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
      <div class="md:col-span-8">
        <h1 class="mb-5 font-bold text-gray-900 text-2xl md:text-3xl">
          Programs on offer
        </h1>
        <ul class="text-lg text-gray-900 space-y-5">
          <li>&rarr; School of Business</li>
          <li>&rarr; School of ICT</li>
          <li>&rarr; School of Hospitality</li>
          <li>&rarr; School of Beauty/Cosmetology</li>
          <li>&rarr; School of Engineering</li>
        </ul>
      </div>
    </div> -->
  </section>
  <section class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
      <div class="md:col-span-8">
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
                  <span class="font-semibold text-xl py-2">{{
                    faq.question
                  }}</span>
                  <span class="text-2xl">{{ faq.open ? "-" : "+" }}</span>
                </summary>

                <div
                  v-show="faq.open"
                  class="m-4 p-4 rounded-2xl text-gray-500"
                >
                  <p>
                    {{ faq.answer }}
                  </p>
                </div>
              </details>
            </li>
          </ul>
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
    question: "School of Business",
    answer:
      "The most in-demand programming languages often include Python, JavaScript, Java, C++, and others. However, the specific demand can vary depending on industry and region.",
    open: false,
  },
  {
    question: "School of ICT",
    answer:
      "The most in-demand programming languages often include Python, JavaScript, Java, C++, and others. However, the specific demand can vary depending on industry and region.",
    open: false,
  },
  {
    question: "School of Hospitality",
    answer:
      "Improving cybersecurity skills involves staying updated with the latest security threats and technologies, participating in relevant training courses, practicing hands-on exercises like ethical hacking, and joining cybersecurity communities for knowledge sharing.",
    open: false,
  },
  {
    question: "School of Beauty/Cosmetology",
    answer:
      "Emerging trends in artificial intelligence include deep learning, natural language processing, reinforcement learning, and the convergence of AI with other technologies like edge computing and blockchain.",
    open: false,
  },
  {
    question: "School of Engineering",
    answer:
      "Emerging trends in artificial intelligence include deep learning, natural language processing, reinforcement learning, and the convergence of AI with other technologies like edge computing and blockchain.",
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
