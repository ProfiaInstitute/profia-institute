<template>
  <div>
    <header
      class="h-14 lg:h-20 fixed w-full top-0  inset-0 z-20 bg-white"
    >
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
          :class="{ hidden: close2, flex: open2 }"
          class="bg-blue-500 lg:bg-white lg:static lg:flex lg:items-center font-mono flex-1 justify-center"
        >
          <ul
            class="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white lg:text-black font-mono mt-4 lg:mt-0"
          >
            <!-- Navigation items -->
            <li>
              <router-link to="/" class="hover:text-gray-400">Home</router-link>
            </li>
            <!-- Academics dropdown -->
            <li class="relative group">
              <router-link to="academics" class="hover:text-gray-400"
                >Academics</router-link
              >
              <div
                class="absolute hidden group-hover:block bg-blue-500 text-black p-4 rounded shadow-lg mt-2 lg:mt-0"
              >
                <!-- Dropdown content -->
                <ul>
                  <!-- School of Business -->
                  <li class="mb-2">
                    <h3 class="font-semibold">School of Business</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Undergraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Postgraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >PhD</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <!-- School of ICT -->
                  <li class="mb-2">
                    <h3 class="font-semibold">School of ICT</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Undergraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Postgraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >PhD</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <!-- School of Hospitality -->
                  <li>
                    <h3 class="font-semibold">School of Hospitality</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Undergraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >Postgraduate</router-link
                        >
                      </li>
                      <li>
                        <router-link to="#" class="block py-1 hover:bg-gray-100"
                          >PhD</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <!-- Other navigation items -->
            <li>
              <router-link to="/techhub" class="hover:text-gray-400"
                >Tech-hub</router-link
              >
            </li>
            <li>
              <router-link to="news" class="hover:text-gray-400"
                >News & updates</router-link
              >
            </li>
            <li>
              <router-link to="#" class="hover:text-gray-400"
                >Research</router-link
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
      close2: true, // Variable to control menu visibility on small screens
      open2: false, // Variable to control menu visibility on large screens
    };
  },
  methods: {
    toggleMenu2() {
      this.close2 = !this.close2;
      this.open2 = !this.open2;
    },
  },
};
</script>
