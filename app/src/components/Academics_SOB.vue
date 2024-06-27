<template>
  <section class="max-w-7xl mx-auto py-5 mt-24">
    <div class="">
      <h1
        class="flex justify-center items-center text-4xl text-orange-900 font-bold mb-4"
      >
        ACADEMICS
      </h1>
      <div class="flex flex-row justify-center items-center">
        <div>
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
        />
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
            class="mt-4 text-center border rounded-xl w-auto h-auto space-y-5 p"
          >
            <h1 class="text-2xl font-bold py-5">Message From The Principal</h1>
            <p class="text-lg">
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
        <div class="col-span-4 mx-auto space-y-5 my-4">
          <CallToActionSOB />
          <!-- <div class="border border-black w-[400px] h-[200px] rounded-xl px-5">
            <h1 class="text-xl font-semibold">Lorem ipsum dolor!!</h1>
            <h2 class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              eligendi explicabo, repudiandae blanditiis quam magnam
            </h2>
            <input
              class="ml-1 border w-18 h-12"
              type="button"
              value="APPLY HERE"
            />
          </div> -->

          <div
            class="border-2 border-gray-200 rounded-2xl w-auto h-auto p-4 space-y-5"
          >
            <div class="py-5">
              <h1 class="text-xl font-bold">School of Business</h1>
              <p class="text-lg">
                Elevate your passion for beauty with our top-notch cosmetology
                programs.<br />
                Turn your creativity into a rewarding career in the beauty
                industry.
              </p>
            </div>
            <div class="">
              <h1 class="text-xl font-bold">School of Engineering</h1>
              <p class="text-lg">
                Shape the future with a engineering course.<br />
                Innovate and engineer solutions that make a difference by
                tackling real-world challenges
              </p>
            </div>
          </div>
          <div
            class="rounded-2xl p-4 border-2 border-gray-200 md:col-span-4 md:min-h-min"
          >
            <h1 class="mb-3 font-bold text-gray-900 text-xl md:text-2xl">
              Tech Hub
            </h1>
            <p class="text-lg text-gray-900">
              At the heart of Profia Institute lies our Tech Hub, where we
              explore the frontiers of innovation and technology. Our focus
              areas include Artificial Intelligence (AI), Data Categorization,
              3D & 2D Data Annotation, Training Data for Autonomous Driving,
              Natural Language Processing (NLP), and Video Annotation. Through
              our Tech Hub, we aim to drive technological advancements and
              foster a culture of innovation among our students and faculty.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
<script setup>
import CallToActionAcademic from "./CallToActionAcademic.vue";
import CallToActionProfia from "./CallToActionProfia.vue";
import CallToActionSOB from "./CallToActionSOB.vue";
</script>
