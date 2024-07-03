<template>
  <div>
    <!-- Header section -->
    <header
      :class="{
        'h-14 lg:h-36 fixed w-full top-0 inset-0 z-20 bg-gray-200': isHomePage,
        'h-14 lg:h-24 fixed w-full top-0 inset-0 z-20 bg-gray-200': !isHomePage,
      }"
    >
      <!-- Navigation specific to homepage -->
      <section v-if="isHomePage" class="bg-yellow-700 py-4 lg">
        <div class="flex justify-end items-center list-none px-5 space-x-10">
          <li>
            <router-link
              to="/techhub"
              class="text-white hover:text-gray-400"
              @click.native="closeMenu"
              >Tech-hub</router-link
            >
          </li>
          <li>
            <router-link
              to="/enquiries"
              class="text-white hover:text-gray-400"
              @click.native="closeMenu"
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
          <router-link
            to="/"
            class="flex items-center"
            @click.native="closeMenu"
          >
            <img src="@/assets/images/logo.png" alt="Logo" class="h-8 lg:h-12">
          </router-link>
        </div>

        <!-- Navigation menu -->
        <nav
          :class="{ hidden: close2, flex: !close2 }"
          class="bg-gray-200 lg lg:static lg:flex lg:items-center font-mono flex-1 justify-center absolute top-14 lg:top-0 left-0 w-full lg:w-auto"
        >
          <!-- Navigation items -->
          <ul
            class="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white lg:text-black font-mono mt-4 lg:mt-0 lg:items-center px-4 lg:px-0"
          >
            <li>
              <router-link
                to="/"
                class="hover:text-white"
                @click.native="closeMenu"
                >Home</router-link
              >
            </li>
            <li class="relative group">
              <router-link
                to="/academics"
                class="hover:text-white flex items-center"
                @click.native="closeMenu"
              >
                <span>Academics</span>
                <span class="ml-1">&#9662;</span>
              </router-link>
              <!-- <div
                class="absolute hidden group-hover:block lg:bg-gray-400 bg-blue-500 text-black p-4 rounded mt-2 lg:w-96 left-0 w-96"
              > -->
                <!-- <div class="grid grid-cols-3 lg:gap-4">
                  <div>
                    <h3 class="font-semibold">School of Business</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold">School of ICT</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold">School of Hospitality</h3>
                    <ul class="ml-4">
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 1</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 2</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="#"
                          class="block py-1 hover:bg-white"
                          @click.native="closeMenu"
                          >link 3</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div> -->
              <!-- </div> -->
            </li>
            <li>
              <router-link
                to="/aboutus"
                class="hover:text-white"
                @click.native="closeMenu"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link
                to="/news"
                class="hover:text-white"
                @click.native="closeMenu"
                >News & updates</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-white"
                @click.native="closeMenu"
                >Contact Us</router-link
              >
            </li>
            <li>
              <router-link
                to="/admission"
                class="hover:text-white relative"
                @click.native="closeMenu"
              >
                Admission
                <!-- <img
                  src="@/assets/Search.png"
                  alt="Search"
                  class="absolute left-48 top-0 h-6 w-6 cursor-pointer"
                /> -->
              </router-link>
            </li>
          </ul>
        </nav>

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
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.close2 = true;
      }
    },
  },
  methods: {
    toggleMenu2() {
      this.close2 = !this.close2;
    },
    closeMenu() {
      this.close2 = true;
    },
  },
  mounted() {
    if (this.isHomePage) {
      this.close2 = true;
    }
  },
};
</script>
