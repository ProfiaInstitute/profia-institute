<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of Beauty/Cosmetology</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow">
          Cosmetology is the study and application of beauty treatments.<br /><br />
          Comprehensive Training: A cosmetology school provides comprehensive
          training in various beauty treatments, including practical and
          theoretical knowledge. <br /><br />
          Licensing and Certification: Graduates often need to pass state or
          national licensing exams to practice professionally. <br /><br />
          Career Opportunities: Cosmetologists can work in salons, spas, beauty
          schools, or as freelance professionals.
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col">
        <img
          src="https://media.istockphoto.com/id/2007398242/photo/businessman-uses-computer-with-pen-financial-graph-analysis-concepts-stock-market-information.webp?b=1&s=170667a&w=0&k=20&c=oxvPVTAPJvZ9B9apdYihCHC4k3fJT-0OUGYR7o3gYng="
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
      <a href="#" class="mb-2 md:mb-0">Enrollment</a>
      <a href="#" class="mb-2 md:mb-0">FAQs</a>
    </nav>

    <div class="flex flex-col items-center justify-center mt-12">
      <hr class="h-0.5 bg-black w-28" />
      <hr />
      <h3 class="text-gray-600 text-lg">Key Concepts</h3>
      <hr class="h-0.5 bg-black w-28" />
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-12">
      <div class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aliquam nulla corrupti quas libero architecto, <br />
        soluta veritatis totam recusandae modi tenetur.
      </div>

      <div class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quas sed id tempora reiciendis rerum, <br />
        debitis est inventore voluptas labore eos.
      </div>
    </div>

    <hr class="h-0.5 bg-black my-3" />

    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- card 1 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1716276590903-f7703efa9177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Night Lights"
            class="w-full h-1/2 object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Beauty Therapy
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Definition:</span> Beauty therapy
                involves treatments that enhance the skin and overall
                appearance, including facials, waxing, and body treatments
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Care:</span> Training includes knowledge
                about different skin types, conditions, and treatments to
                improve skin health and appearance.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Aesthetics:</span> Techniques such as
                facials, exfoliation, and anti-aging treatments are taught.
              </p>
              <p class="text-white py-3">
                <span class="font-bold"> Wellness:</span> Emphasis on holistic
                wellness and relaxation techniques that contribute to a client's
                overall well-being.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>

        <!-- card 2 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
                Hair Dressing
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Definition:</span> Hairdressing involves
                cutting, coloring, styling, and treating hair to enhance a
                person’s appearance.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Hair Cutting:</span> Techniques for
                various styles and lengths, understanding face shapes, and
                personalizing cuts to suit clients.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Coloring and Chemical Treatments:</span>
                Knowledge of color theory, application of dyes, and treatments
                like perming and straightening.
              </p>
              <p class="text-white py-3">
                <span class="font-bold"> Styling:</span> Skills in creating
                different hairstyles for everyday wear or special occasions.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 3 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
                Nail Technology
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Definition:</span> Nail technology
                focuses on the care and decoration of nails, including
                manicures, pedicures, and nail art.
              </p>
              <h1 class="font-bold text-white">Explanation:</h1>
              <p class="text-white py-3">
                <span class="font-bold">Manicures and Pedicures:</span> Techniques for shaping, cleaning, and
                painting nails, as well as hand and foot care.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Nail Enhancements:</span> Application of artificial nails, gel,
                acrylic, and other nail enhancements.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Nail Art:</span> Creative designs and decorations applied to nails,
                requiring precision and artistic skills.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 4 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
                Barbering
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Definition:</span> Barbering specializes
                in cutting, grooming, and styling men's hair and facial hair.
              </p>
              <h1 class="font-bold text-white">Explanation:</h1>
              <p class="text-white py-3">
                <span class="font-bold">Hair Cutting:</span> Techniques specific to men's hairstyles, including
                fades, undercuts, and classic cuts.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Shaving and Grooming:</span> Proper methods for shaving, beard
                trimming, and maintaining facial hair.
              </p>
              <p class="text-white py-3">
                <span class="fontsp">Client Interaction:</span> Building rapport with clients and
                understanding their grooming preferences.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- card 5 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
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
                Hot Stone Massage
              </h1>
              <p class="text-white py-3">
                <span class="font-bold">Definition:</span> A hot stone massage
                is a type of massage therapy that involves using heated stones
                to relax and ease tense muscles.
              </p>
              <h1 class="font-bold text-white">Explanation:</h1>
              <p class="text-white py-3">
                <span class="font-bold">Techniques:</span> Proper placement of smooth, heated stones on the
                body, combined with traditional massage techniques.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Benefits:</span> Promotes relaxation, improves blood circulation, and
                relieves muscle tension and pain.
              </p>
              <p class="text-white py-3">
                <span class="font-bold">Training:</span> Learning the correct temperatures, stone types, and
                safety measures to provide an effective and safe massage.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
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
  </div>
</template>
