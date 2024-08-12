<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of Engineering</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow space-y-6">
          <p>
            Get ready to power up your future with the School of Engineering!
            Our cutting-edge Plumbing and Electrical Programs are designed to
            give you the skills and hands-on experience you need to crush it in
            these high-demand fields.
          </p>
          <p>
            Whether you want to become a master plumber or an electrical whiz,
            we've got the perfect program for you.
          </p>
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
        Our mission is to deliver exceptional education in plumbing and
        electrical <br />
        engineering, equipping students with the expertise and <br />
        hands-on experience needed to succeed in their careers.
      </div>

      <div class="text-center md:text-left">
        We aim to develop skilled professionals who can contribute <br />
        to the advancement of the engineering field and meet the <br />
        demands of modern infrastructure and technology.
      </div>
    </div>

    <hr class="h-0.5 bg-black my-3" />

    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- card 1 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/plumbing.avif"
            alt="Night Lights"
            class="w-full object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Plumbing Program
              </h1>
              <p class="text-white py-3">
                Our Electrical Program provides a thorough education in
                electrical theory and practical skills, preparing students for a
                variety of roles in the electrical industry.
              </p>
            </div>
          </div>
        </div>

        <!-- card 2 -->
        <div class="w-full relative rounded-2xl overflow-hidden flex flex-col">
          <img
            src="../assets/images/electrical.avif"
            alt="Night Lights"
            class="w-full object-cover"
          />
          <div
            class="bg-gray-900 bg-opacity-30 p-6 flex-grow rounded-b-2xl flex flex-col justify-between"
          >
            <div>
              <h1 class="text-2xl font-semibold text-white justify-start">
                Electrical Program
              </h1>
              <p class="text-white py-3">
                Our Plumbing Program covers all aspects of the plumbing trade,
                from basic principles to advanced techniques.
              </p>
            </div>
          </div>
        </div>
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
            <th class="bg-gray-300 border text-left px-8 py-4">
              Minimum Requirements
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">Tution Fee</th>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">Plumbing and Elecricals</td>
            <td class="border px-8 py-4">KCPE/ KCSE Certificate</td>
            <td class="border px-8 py-4">15,000</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>
