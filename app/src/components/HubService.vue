<template>
  <!-- This is the section that holds the service of the hub -->
  <section class="w-full py-10 mx-auto lg:max-w-7xl">
    <div class="flex flex-col justify-center m-2">
      <!-- div that hold the service title -->
      <div class="justify-center flex mb-2">
        <h1
          class="py-1 px-5 border-2 rounded-xl text-2xl text-yellow-800 font-bold tracking-tighter lg:text-5xl"
        >
          Our Services
        </h1>
      </div>
      <h1 class="text-center sm:text-2xl lg:text-3xl tracking-tighter">
        Lorem ipsum dolor sit amet consectetur elit.
      </h1>
      <p class="text-center sm:text-xl lg:text-2xl tracking-tighter">
        Nam doloremque pariatur earum doloribus beatae quaerat mollitia nihil,
        saepe pariatur earum doloribus beatae quaerat mollitia nihil, saepe
        consectetur dolorem!
      </p>
    </div>
    <!-- This is the section that hold the three cards -->
    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="w-full h-[400px] relative bg-[url('https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover rounded-2xl"
        >
          <!-- Background color -->
          <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
            <div class="absolute inset-x-0 bottom-0 p-6">
              <h1 class="text-3xl font-semibold text-white">Lorem Ipsum</h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
              
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="w-full h-[400px] relative bg-[url('https://images.unsplash.com/photo-1716968921433-835ec227f847?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover rounded-2xl"
        >
          <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
            <div class="absolute inset-x-0 bottom-0 p-6">
              <h1 class="text-3xl font-semibold text-white">Lorem, ipsum dolor.</h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
    
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="w-full h-[400px] relative bg-[url('https://images.unsplash.com/photo-1643054136954-684629fedc90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover rounded-2xl"
        >
          <div class="absolute inset-0 bg-gray-900 bg-opacity-25 rounded-2xl">
            <div class="absolute inset-x-0 bottom-0 p-6">
              <h1 class="text-3xl font-semibold text-white">Lorem Ipsum</h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
