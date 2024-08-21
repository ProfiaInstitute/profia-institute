<template>
  <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
    <h2 class="text-4xl font-bold text-center mb-12">Academics</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
        <img
          src="../assets/images/Accounts/kelly-sikkema-xoU52jUVUXA-unsplash.avif"
          alt="Night Lights"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF BUSINESS
            </h1>
            <p class="text-white py-3">
              offers a diverse range of undergraduate and graduate programs
              designed to meet the needs of aspiring business professionals.
            </p>
          </div>
          <router-link
            to="/schoolofbusiness"
            class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 2 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
        <img
          src="../assets/images/Hospitality/pexels-tima-miroshnichenko-6195120.avif"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF HOSPITALITY
            </h1>
            <p class="text-white py-3">
              Offers specialized education in various facets of the hospitality
              industry, equipping students with both theoretical and practical
              skills.
            </p>
          </div>
          <router-link
            to="/schoolofhospitality"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 3 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
        <img
          src="../assets/images/school-of-ict/web-design.avif"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">SCHOOL OF ICT</h1>
            <p class="text-white py-3">
              Committed to equipping our students with the skills and knowledge
              needed to excel in the fast-paced and ever-evolving world of ICT.
            </p>
          </div>
          <router-link
            to="/schoolofict"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 4 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
        <img
          src="../assets/images/school-of-engineering/electrical.avif"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF ENGINEERING
            </h1>
            <p class="text-white py-3">
              Programs dedicated to providing high-quality education in the
              fields of plumbing and electrical engineering.
            </p>
          </div>
          <router-link
            to="/schoolofengineering"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 5 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
        <img
          src="../assets/images/beauty/pexels-rdne-7697401.avif"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF COSMETOLOGY
            </h1>
            <p class="text-white py-3">
              Programs that blend creativity, technical skills, and business
              acumen, preparing our students for successful careers in the
              beauty industry.
            </p>
          </div>
          <router-link
            to="/schoolofcosmetology"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
