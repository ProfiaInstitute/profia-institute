<template>
  <section class="font-mono">
    <div>
      <div class="bg-dove bg-cover bg-center">
        <div class="max-w-5xl mx-auto flex justify-between items-center py-20">
          <h1 class="text-8xl text-primary-900">Admission</h1>
          <Button
            class="border-[1px] border-black bg-secondary-600 px-5 py-3 rounded-xl transition duration-700 ease-in-out hover:bg-black hover:rounded-full hover:text-white"
            >Click to Apply</Button
          >
        </div>
      </div>
      <div class="bg-gray-300">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-evenly items-center py-5">
            <div
              class="flex flex-col justify-center items-center text-4xl space-y-5"
            >
              <h2 class="text-primary-700">678 +</h2>
              <p>Intermediate</p>
            </div>
            <span class="h-[240px] w-[2px] bg-black"></span>
            <div
              class="flex flex-col justify-center items-center text-4xl space-y-5"
            >
              <h2 class="text-primary-700">9,078 +</h2>
              <p>Foundational</p>
            </div>
            <span class="h-[240px] w-[2px] bg-black"></span>

            <div
              class="flex flex-col justify-center items-center text-4xl space-y-5"
            >
              <h2 class="text-primary-700">5,678 +</h2>
              <p>Certificate</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="max-w-6xl mx-auto py-20 flex flex-col justify-evenly items-center space-y-5"
        >
          <div class="flex justify-evenly items-center gap-20">
            <div class="relative py-5 w-56 px-10 space-y-4 border border-black">
              <h1 class="text-2xl font-semibold">Intermediate</h1>
              <p>
                Intermediate education is a level of education that bridges the
                gap between primary and higher education.
              </p>
              <!-- <div class="absolute -left-40 top-48">
                <div class="flex">
                  <img
                    src="../assets/images/techhub-1.avif"
                    alt=""
                    class="w-24 h-36"
                  />
                  <img
                    src="../assets/images/techhub-2.avif"
                    alt=""
                    class="w-24 h-28"
                  />
                </div>
                <div>
                  <img
                    src="../assets/images/techhub-3.avif"
                    alt=""
                    class="w-48 h-28"
                  />
                </div>
                <div class="">
                  <img
                    src="../assets/images/techhub-4.avif"
                    alt=""
                    class="w-36 h-28"
                  />
                </div>
              </div> -->
            </div>
            <div class="py-5 w-72 px-5 space-y-4 border border-black">
              <h1 class="text-2xl font-semibold text-center">Certificate</h1>
              <p>
                Foundation degrees are at Level 5 in the Framework for Higher
                Education Qualifications, below bachelor's degrees at level 6.
              </p>
            </div>
          </div>
          <div class="py-4 flex justify-center items-center">
            <button
              class="border-[1px] border-black bg-secondary-500 px-5 py-3 text-3xl rounded-xl traansition duration-700 ease-in-out hover:bg-black hover:rounded-full hover:text-white"
            >
              Apply Now
            </button>
          </div>
          <div
            class="py-5 w-72 px-5 space-y-4 border border-black flex flex-col justify-center items-center"
          >
            <h1 class="text-2xl font-semibold">Foundational</h1>
            <p>
              A certificate education level refers to a type of educational
              program that provides specialized training or skills in a specific
              area.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
