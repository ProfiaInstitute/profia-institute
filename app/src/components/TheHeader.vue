<template>
  <div>
    <!-- Header section -->
    <header
      :class="{
        'h-14 lg:h-36 fixed w-full top-0 inset-0 z-20 bg-blue-500': isHomePage,
        'h-14 lg:h-24 fixed w-full top-0 inset-0 z-20 bg-blue-500': !isHomePage,
      }"
    >
      <!-- Navigation specific to homepage -->
      <section v-if="isHomePage" class="bg-yellow-500 py-4 lg">
        <div class="flex justify-end items-center list-none px-5 space-x-10">
          <li>
            <router-link to="/techhub" class="hover:text-gray-400"
              >Tech-hub</router-link
            >
          </li>
          <li>
            <router-link to="/enquiries" class="text-white hover:text-gray-400"
              >Enquiries</router-link
            >
          </li>
        </div>
      </section>

      <!-- Header content -->
      <div
        class="flex items-center justify-between mx-auto max-w-7xl h-full px-4 lg:px-0"
      >
        <!-- Logo and menu toggle button -->
        <div class="flex items-center gap-6 font-mono">
          <button
            class="text-2xl p-1 text-black hover:text-blue-500 lg:hidden"
            @click="toggleMenu2"
          >
            {{ close2 ? "☰" : "✘" }}
          </button>
          <router-link to="/" class="text-2xl text-black font-bold"
            >Logo</router-link
          >
        </div>

        <!-- Navigation menu -->
        <nav
          :class="{ hidden: close2, flex: !close2 }"
          class="bg-blue-500 lg lg:static lg:flex lg:items-center font-mono flex-1 justify-center absolute top-14 lg:top-0 left-0 w-full lg:w-auto"
        >
          <!-- Navigation items -->
          <ul
            class="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white lg:text-black font-mono mt-4 lg:mt-0 lg:items-center px-4 lg:px-0"
          >
            <!-- Navigation items -->
            <li>
              <router-link to="/" class="hover:text-gray-400">Home</router-link>
            </li>
            <!-- Academics dropdown -->
            <li class="relative group">
              <router-link
                to="academics"
                class="hover:text-gray-400 flex items-center"
              >
                <span>Academics</span>
                <span class="ml-1">&#9662;</span>
              </router-link>
              <div
                class="absolute hidden group-hover:block bg-blue-500 text-black p-4 rounded mt-2 lg:w-96 left-0 w-full"
              >
                <!-- Dropdown content -->
                <div class="grid grid-cols-3 gap-4">
                  <!-- School of Business -->
                  <div>
                    <h3 class="font-semibold">School of Business</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- School of ICT -->
                  <div>
                    <h3 class="font-semibold">School of ICT</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- School of Hospitality -->
                  <div>
                    <h3 class="font-semibold">School of Hospitality</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <!-- Other navigation items -->
            <li>
              <router-link to="aboutus" class="hover:text-gray-400"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link to="news" class="hover:text-gray-400"
                >News & updates</router-link
              >
            </li>
            <li>
              <router-link to="contact" class="hover:text-gray-400"
                >Contact Us</router-link
              >
            </li>
            <li>
              <router-link to="#" class="hover:text-gray-400 relative"
                >Admission
                <img
                  src="@/assets/Search.png"
                  alt="Search"
                  class="absolute left-48 top-0 h-6 w-6 cursor-pointer"
                />
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Empty div for spacing -->
        <div class="flex items-center gap-6 font-mono"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close2: true,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  methods: {
    toggleMenu2() {
      this.close2 = !this.close2;
    },
  },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
