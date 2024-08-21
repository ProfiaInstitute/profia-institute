<template>
  <div class="py-5 ">
    <div class="!flex h-[90vh] w-full items-center justify-between px-10">
      <img
        src="../assets/images/Home/3f24080b2fa162ec33033ec532f2d727ad79b2ca73ccb0f0ab67f99d2e56c096.avif"
        alt="bg-img"
        class="absolute inset-0 ml-auto h-full lg:rounded-bl-[100px] object-cover object-center"
      />
      <div class="container mx-auto lg:mt-0">
        <div class="grid grid-cols-12 text-center lg:text-left">
          <div
            class="relative flex flex-col bg-clip-border lg:ml-20 text-gray-700 px-6 py-10 border border-white shadow-lg col-span-full rounded-xl bg-white/90 shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-6"
          >
            <h1
              class="antialiased tracking-normal font-sans font-semibold text-blue-gray-900 text-3xl !leading-snug lg:text-5xl"
            >
              Profia Institute <br />of technologies
            </h1>
            <p
              class="antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-10 mt-6 !text-gray-900"
            >
               Your First business college of choice
            </p>
            <div class="flex justify-center gap-4 mb-8 lg:justify-start">
              <router-link to="/contact">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary-color text-white shadow-md shadow-primary-color/10 hover:shadow-lg hover:shadow-primary-color/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                contact us
                </button>
              </router-link>
              <router-link to="/academics">
                <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-primary-color text-primary-color hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button"
              >
                read more
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 justify-items-center place-items-center gap-5 sm:gap-0">
      <div class="flex gap-1">
        <p class="skew-x-12 h-24 w-4 bg-primary-color rounded-l-md"></p>
        <button
          class="skew-x-12 h-24 w-48 bg-secondary-color text-white font-bold text-2xl rounded-r-md tracking-wide"
        >
          Courses
        </button>
        
      </div>
      <div class="flex gap-1">
        <p class="skew-x-12 h-24 w-4 bg-primary-color rounded-l-md"></p>
        <button
          class="skew-x-12 h-24 w-48 bg-secondary-color  text-white font-bold text-2xl rounded-r-md tracking-wide"
        >
          About
        </button>
        
      </div>
      <div class="flex gap-1">
        <button
          class="skew-x-12 h-24 w-48 bg-secondary-color text-white font-bold text-2xl rounded-l-md tracking-wide"
        >
          Campus Life
        </button>
        <p class="skew-x-12 h-24 w-4 bg-primary-color rounded-r-md"></p>
      </div>
      <div class="flex gap-1">
        <button
          class="skew-x-12 h-24 w-48 bg-secondary-color text-white font-bold text-2xl rounded-l-md tracking-wide"
        >
          Apply Today
        </button>
        <p class="skew-x-12 h-24 w-4 bg-primary-color rounded-r-md"></p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
