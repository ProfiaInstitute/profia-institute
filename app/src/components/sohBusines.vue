<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of Hospitality</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow space-y-6">
          <p>
            The School of Hospitality offers specialized education in various
            facets of the hospitality industry, equipping students with both
            theoretical knowledge and practical skills.
          </p>
          <p>
            The curriculum is designed to ensure that graduates are
            well-prepared for diverse roles in the hospitality sector, fostering
            professional growth and career readiness.
          </p>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col">
        <img
          src="../assets/images/Hospitality/pexels-tima-miroshnichenko-6195120.jpg"
          alt=""
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

    <nav
      class="bg-secondary-color py-2 flex flex-row md:flex-row flex-wrap justify-start md:justify-start gap-4 md:gap-8 mt-4 px-5 text-gray-200"
    >
      <a href="#" class="mb-2 md:mb-0">Overview</a>
      <a href="#" class="mb-2 md:mb-0">Syllabus</a>
      <a href="#enrollment" class="mb-2 md:mb-0">Enrollment</a>
      <a href="#faqs" class="mb-2 md:mb-0">FAQs</a>
    </nav>

    <div class="flex flex-col items-center justify-center mt-12">
      <hr class="h-0.5 bg-black w-28" />
      <hr />
      <h3 class="text-gray-600 text-lg">Key Concepts</h3>
      <hr class="h-0.5 bg-black w-28" />
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-12">
      <div class="text-center md:text-left">
        Our mission is to provide exceptional education in hospitality
        <br />
        managementempowering students to become innovative leaders <br />
        and professionals in the global hospitality industry.
      </div>

      <div class="text-center md:text-left">
        We are committed to fostering a passion for service <br />
        leadership, and ethical business practices. <br />
        debitis est inventore voluptas labore eos.
      </div>
    </div>

    <hr class="h-0.5 bg-black my-3" />

    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- card 1 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/Hospitality/pexels-meruyert-gonullu-6243688.jpg"
            alt="Night Lights"
            class="w-full h-2/3 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Food and Beverage Production
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Description: </span> This course focuses
                on the preparation and production of food and beverages.
                Students learn culinary techniques, kitchen management, menu
                planning, and food safety standards.
              </p>
            </div>
          </div>
        </div>

        <!-- card 2 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/Hospitality/pexels-rdne-7363123.jpg"
            alt="Night Lights"
            class="w-full h-2/3 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Food and Beverage Services
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Description: </span> This course trains
                students in the art of serving food and beverages. It covers
                customer service, table setting, order taking, and beverage
                preparation.
              </p>
            </div>
          </div>
        </div>
        <!-- card 3 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/Hospitality/pexels-tima-miroshnichenko-6195120.jpg"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Housekeeping
              </h1>
              <p class="text-white py-3">
                This course covers the maintenance and upkeep of guest rooms and
                public areas in hospitality establishments. Students learn
                cleaning techniques, room setup, and guest service standards.
              </p>
            </div>
          </div>
        </div>
        <!-- card 4 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/Hospitality/pexels-andres-ayrton-6578868.jpg"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Baking and Pastry
              </h1>
              <p class="text-white py-3">
                This course delves into the art and science of baking and pastry
                making. Students learn to create a variety of baked goods, from
                bread to intricate pastries, along with bakery management.
              </p>
            </div>
          </div>
        </div>
        <!-- card 5 -->
        <!-- <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
        </div> -->
        <!-- card 6 -->
        <!-- <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
        </div> -->
      </div>
    </section>

    <!-- Fees Table -->
    <section class="max-w-7xl mx-auto">
      <div>
        <h1 class="text-secondary-color text-3xl font-bold mb-8 text-center">
          Fees Structure
        </h1>
      </div>
      <div class="overflow-x-auto">
        <table
          class="shadow-lg bg-white border-collapse mx-auto w-full text-lg"
        >
          <tr>
            <th class="bg-gray-300 border text-left px-8 py-4">Course Name</th>
            <th class="bg-gray-300 border text-left px-8 py-4">Exam Body</th>
            <th class="bg-gray-300 border text-left px-8 py-4">
              Duration(months)
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">
              Minimum Requirements
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">Monthly Fee</th>
            <th class="bg-gray-300 border text-left px-8 py-4">Term Fee</th>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">
              Food and beverage Production (grade I-III)
            </td>
            <td class="border px-8 py-4">NITA</td>
            <td class="border px-8 py-4">3 months</td>
            <td class="border px-8 py-4">KCPE/KCSE Certificate</td>
            <td class="border px-8 py-4">5,500</td>
            <td class="border px-8 py-4">15,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">
              Food and beverage services (grade I-III)
            </td>
            <td class="border px-8 py-4">NITA</td>
            <td class="border px-8 py-4">3 months</td>
            <td class="border px-8 py-4">KCPE/KCSE Certificate</td>
            <td class="border px-8 py-4">5,500</td>
            <td class="border px-8 py-4">15,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">
              Housekeeping & accommodation (grade I-III)
            </td>
            <td class="border px-8 py-4">NITA</td>
            <td class="border px-8 py-4">3 months</td>
            <td class="border px-8 py-4">KCPE/KCSE Certificate</td>
            <td class="border px-8 py-4">5,500</td>
            <td class="border px-8 py-4">15,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">Baking and Pastry (grade I-III)</td>
            <td class="border px-8 py-4">NITA</td>
            <td class="border px-8 py-4">3 months</td>
            <td class="border px-8 py-4">KCPE/KCSE Certificate</td>
            <td class="border px-8 py-4">5,500</td>
            <td class="border px-8 py-4">15,000</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>
