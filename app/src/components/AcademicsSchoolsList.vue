<template>
  <div
    class="border-[2px] border-gray-200 rounded-lg w-auto h-auto px-5 space-y-4 py-3"
  >
    <div class="">
      <router-link to="/sob">
        <h1 class="text-xl font-semibold underline">School of Business</h1>
      </router-link>
    </div>
    <div class="">
      <router-link to="/soi">
        <h1 class="text-xl font-semibold underline">School of ICT</h1>
      </router-link>
    </div>
    <div class="">
      <router-link to="/soh">
        <h1 class="text-xl font-semibold underline">School of Hospitality</h1>
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
        ><h1 class="text-xl font-semibold underline">School of Engineering</h1>
      </router-link>
    </div>
  </div>
  <div
    class="rounded-2xl p-4 border-2 border-gray-200 md:col-span-4 md:min-h-min"
  >
    <router-link to="/techhub">
      <h1 class="mb-3 font-bold text-gray-900 text-xl md:text-2xl">Tech Hub</h1>
    </router-link>
  </div>
  
</template>

<script setup></script>
