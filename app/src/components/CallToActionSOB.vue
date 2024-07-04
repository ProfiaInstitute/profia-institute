<template>
  <div
    class="p-5 rounded-2xl border-[1px] border-gray-400 bg-people-img text-white"
  >
    <div class="bg-secondary-color opacity-90 px-4 py-10 text-left rounded-2xl">
      <h4 class="text-3xl font-semibold">
        Profia Institute of Professional Studies
      </h4>
      <p class="text-sm">offers you a challenge that is industry relevant</p>
      <div class="flex justify-center mt-2">
        <router-link to="/admission">
          <button
            class="flex items-center justify-center border-[1px] border-gray-500 py-2 px-4 rounded-full mt-2 bg-primary-color text-tertiary delay-100 ease-in-out"
            type="button"
          >
            Apply for the Course
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
