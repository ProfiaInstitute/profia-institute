<template>
  <footer class="bg-white">
    <div class="container px-6 py-16 mx-auto">
      <hr class="my-6 border-gray-200 md:my-10" />
      <div
        class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between"
      >
        <img src="@/assets/images/logo.png" alt="Company Logo" class="h-24" />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <div class="flex flex-col items-center mt-5 space-y-2">
            <router-link
              to="/aboutus"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >About us</router-link
            >
            <router-link
              to="/contact"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >Contact</router-link
            >
            <router-link
              to="/news"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >Events</router-link
            >
            <router-link
              to="/techhub"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >Tech hub</router-link
            >
            <router-link
              to="/contact"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >Enquiries</router-link
            >
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center mt-5 space-y-2">
            <router-link
              to="/academics"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >Academics</router-link
            >
            <router-link
              to="/schoolofict"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >School of ICT</router-link
            >
            <router-link
              to="/schoolofbusiness"
              class="text-gray-600 transition-colors duration-300 hover:text-primary-500"
              >School of Business</router-link
            >
            <router-link
              to="/schoolofhospitality"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >School of Hospitality</router-link
            >
            <router-link
              to="/schoolofengineering"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >School of Engineering</router-link
            >
            <router-link
              to="/schoolofconsmetology"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >School of Beauty/Cosmetology</router-link
            >
          </div>
        </div>

        <!-- <div>
          <div class="flex flex-col items-center mt-5 space-y-2">
            <router-link
              to="/staff"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >Staff</router-link
            >
            <router-link
              to="/students"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >Students</router-link
            >
            <router-link
              to="/admission"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >Admission</router-link
            >
            <router-link
              to="/administration"
              class="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              >Administration</router-link
            >
          </div>
        </div> -->
      </div>

      <div class="bg-white rounded-lg m-4">
        <div
          class="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between"
        >
          <span class="text-sm text-gray-500 sm:text-center"
            >© 2024.Profia Institute. All Rights Reserved
          </span>
          <ul
            class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 gap-5"
          >
            <li>
              <img src="../assets/icons/twitter.svg" class="w-5 h-5 hover:w-6 hover:h-6" alt="" />
              <!-- <a
                href="#"
                class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white me-4 md:me-6"
                >T</a
              > -->
            </li>
            <li>
              <img src="../assets/icons/whatsapp.svg" class="w-5 h-5 hover:w-6 hover:h-6" alt="" />

              <!-- <a
                href="#"
                class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white me-4 md:me-6"
                >W</a
              > -->
            </li>
            <li>
              <img src="../assets/icons/instagram.svg" class="w-5 h-5 hover:w-6 hover:h-6" alt="" />
              <!-- 
              <a
                href="#"
                class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white me-4 md:me-6"
                >I</a
              > -->
            </li>
            <li>
              <a href="https://www.facebook.com/profiainstitute/" aria-label="facebook link" target="_blank">
              <img src="../assets/icons/facebook.svg" class="w-5 h-5 hover:w-6 hover:h-6" alt="" />
            </a>
              <!-- <a
                href="#"
                class="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 bg-pink-300 border-3 border-black hover:bg-gray-900 hover:text-white me-4 md:me-6"
                >F</a
              > -->
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 md:my-10" />
      </div>
    </div>
  </footer>
</template>
