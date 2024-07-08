<template>
  <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
    <h2 class="text-4xl font-bold text-center mb-12">Academics</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div
        class="w-full relative rounded-2xl overflow-hidden flex flex-col"
      >
        <img
          src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Night Lights"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF BUSINESS
            </h1>
            <p class="text-white py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              excepturi odio pariatur cum corrupti dolorum tenetur...
            </p>
          </div>
          <router-link
            to="#"
            class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="w-full relative rounded-2xl overflow-hidden flex flex-col"
      >
        <img
          src="https://images.unsplash.com/photo-1716968921433-835ec227f847?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">
              SCHOOL OF HOSPITALITY
            </h1>
            <p class="text-white py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              excepturi odio pariatur cum corrupti dolorum tenetur...
            </p>
          </div>
          <router-link
            to="#"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="w-full relative rounded-2xl overflow-hidden flex flex-col"
      >
        <img
          src="https://images.unsplash.com/photo-1716968921433-835ec227f847?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div
          class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
        >
          <div>
            <h1 class="text-2xl font-semibold text-white">SCHOOL OF ICT</h1>
            <p class="text-white py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              excepturi odio pariatur cum corrupti dolorum tenetur...
            </p>
          </div>
          <router-link
            to="#"
            class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-end"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
