<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of Business</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br />
          Non rerum dolorem totam voluptatum nihil excepturi <br /><br />
          odio itaque maiores laboriosam quia explicabo <br /><br />
          dolores velit quae blanditiis porro, a pariatur! <br /><br />
          Molestiae voluptates temporibus reiciendis fugiat <br /><br />
          maiores corrupti eos modi autem quasi id!
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col">
        <img
          src="https://media.istockphoto.com/id/2007398242/photo/businessman-uses-computer-with-pen-financial-graph-analysis-concepts-stock-market-information.webp?b=1&s=170667a&w=0&k=20&c=oxvPVTAPJvZ9B9apdYihCHC4k3fJT-0OUGYR7o3gYng="
          alt=""
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

    <nav
      class="bg-gray-100 py-2 flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-8 mt-4"
    >
      <a href="#" class="text-gray-600 mb-2 md:mb-0">Overview</a>
      <a href="#" class="text-gray-600 mb-2 md:mb-0">Syllabus</a>
      <a href="#" class="text-gray-600 mb-2 md:mb-0">Enrollment</a>
      <a href="#" class="text-gray-600 mb-2 md:mb-0">FAQs</a>
    </nav>

    <div class="flex flex-col items-center justify-center mt-12">
      <hr class="h-0.5 bg-black w-28" />
      <hr />
      <h3 class="text-gray-600 text-lg">Key Concepts</h3>
      <hr class="h-0.5 bg-black w-28" />
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-12">
      <div class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aliquam nulla corrupti quas libero architecto, <br />
        soluta veritatis totam recusandae modi tenetur.
      </div>

      <div class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quas sed id tempora reiciendis rerum, <br />
        debitis est inventore voluptas labore eos.
      </div>
    </div>

    <hr class="h-0.5 bg-black my-3" />

    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- card 1 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>

        <!-- card 2 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 3 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 4 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 5 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 6 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                CPA
              </h1>
              <p class="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odio pariatur cum corrupti dolorum tenetur...
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
