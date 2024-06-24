<template>
  <header class="h-14 lg:h-20 w-full top-0 inset-0 z-20 bg-blue-500">
    <div class="container mx-auto max-w-7xl px-4 lg:px-6">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center gap-6 font-mono">
          <router-link
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white"
            >F</router-link
          >
          <router-link
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white"
            >T</router-link
          >
          <router-link to="#" class="text-white">profia@gmail.com</router-link>
        </div>
        <nav class="flex items-center gap-6 lg:gap-8">
          <router-link to="/" class="text-white">Enquiries</router-link>
          <router-link to="techhub" class="text-black bg-white border-2 border-black"
            >Tech-hub</router-link
          >
          <router-link
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white"
            >X</router-link
          >
          <router-link
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white"
            >I</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>
