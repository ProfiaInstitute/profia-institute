<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of Business</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow space-y-6">
          <p>
            The School of Business is a dynamic and innovative institution
            dedicated to providing top-tier education and fostering the next
            generation of business leaders.
          </p>
          <p>
            Our comprehensive programs, expert faculty, and state-of-the-art
            facilities create an ideal environment for students to excel and
            thrive in the ever-evolving world of business.
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
      <a href="#" class="mb-2 md:mb-0">Courses</a>
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
        Our mission is to deliver exceptional business education that empowers
        <br />
        students with the knowledge, skills, and ethical foundation <br />
        necessary to succeed in today's global marketplace.
      </div>

      <div class="text-center md:text-left">
        We are committed to nurturing critical thinking, <br />
        leadership, and entrepreneurial <br />
        spirit in our students.
      </div>
    </div>

    <hr class="h-0.5 bg-black my-3" />

    <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <!-- <h2 class="text-3xl py-5">Courses</h2> -->
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
                Certified Public Accountant (CPA)
              </h1>
              <p class="text-white py-3">
                CPA is a globally recognized certification for accountants,
                focusing on skills in auditing, taxation, and business
                management.
              </p>
            </div>
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
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Chartered Secretary (CS)
              </h1>
              <p class="text-white py-3">
                Chartered Secretary is a professional qualification focusing on
                corporate governance, company law, and administration.
              </p>
            </div>
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
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Certified Investment and Financial Analyst (CIFA)
              </h1>
              <p class="text-white py-3">
                CIFA is a certification for finance professionals specializing
                in investment analysis, portfolio management, and financial
                advisory.
              </p>
            </div>
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
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Certified Credit Professional (CCP)
              </h1>
              <p class="text-white py-3">
                CCP is a certification for professionals in credit management
                and financial risk assessment.
              </p>
            </div>
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
              <h1 class="text-2xl font-semibold text-white flex items-center">
                Accounting Technician Diploma
              </h1>
              <p class="text-white py-3">
                This diploma provides foundational knowledge in accounting,
                preparing individuals for entry-level accounting roles.
              </p>
            </div>
          </div>
        </div>
        <!-- card 6 -->
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
                Certificate in Accounting and Management Skills
              </h1>
              <p class="text-white py-3">
                This certificate program offers training in both accounting
                principles and basic management skills, ideal for those looking
                to enhance their competency in business administration.
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
            <th class="bg-gray-300 border text-left px-8 py-4">
              1st Installment
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">
              2nd Installment
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">
              3rd Installment
            </th>
            <th class="bg-gray-300 border text-left px-8 py-4">Single Paper</th>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CAMS Level 1</td>
            <td class="border px-8 py-4">D+</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9250</td>
            <td class="border px-8 py-4">6650</td>
            <td class="border px-8 py-4">2100</td>
            <td class="border px-8 py-4">5000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CAMS Level 2</td>
            <td class="border px-8 py-4">D+</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9250</td>
            <td class="border px-8 py-4">6650</td>
            <td class="border px-8 py-4">2100</td>
            <td class="border px-8 py-4">5000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">ATD Level 1</td>
            <td class="border px-8 py-4">C-</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9250</td>
            <td class="border px-8 py-4">6650</td>
            <td class="border px-8 py-4">2100</td>
            <td class="border px-8 py-4">5000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">ATD Level 2</td>
            <td class="border px-8 py-4">C-</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9,250</td>
            <td class="border px-8 py-4">6,650</td>
            <td class="border px-8 py-4">2,100</td>
            <td class="border px-8 py-4">5,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">ATD Level 3</td>
            <td class="border px-8 py-4">C-</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9,250</td>
            <td class="border px-8 py-4">6,650</td>
            <td class="border px-8 py-4">2,100</td>
            <td class="border px-8 py-4">5,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Foundation Level 1</td>
            <td class="border px-8 py-4">C+</td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9,250</td>
            <td class="border px-8 py-4">6,650</td>
            <td class="border px-8 py-4">2,100</td>
            <td class="border px-8 py-4">7,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Foundation Level 2</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">17,000</td>
            <td class="border px-8 py-4">9,250</td>
            <td class="border px-8 py-4">6,650</td>
            <td class="border px-8 py-4">2,100</td>
            <td class="border px-8 py-4">7,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Intermediate Level 1</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">18,000</td>
            <td class="border px-8 py-4">9,500</td>
            <td class="border px-8 py-4">7,300</td>
            <td class="border px-8 py-4">2,200</td>
            <td class="border px-8 py-4">7,500</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Intermediate Level 2</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">18,000</td>
            <td class="border px-8 py-4">9,500</td>
            <td class="border px-8 py-4">7,300</td>
            <td class="border px-8 py-4">2,200</td>
            <td class="border px-8 py-4">7,500</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Advanced Level 1</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">19,000</td>
            <td class="border px-8 py-4">10,000</td>
            <td class="border px-8 py-4">7,700</td>
            <td class="border px-8 py-4">2,300</td>
            <td class="border px-8 py-4">8,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">CPA Advanced Level 2</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">19,000</td>
            <td class="border px-8 py-4">10,000</td>
            <td class="border px-8 py-4">7,700</td>
            <td class="border px-8 py-4">2,300</td>
            <td class="border px-8 py-4">8,000</td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="border px-8 py-4">Business Analytics(Practical Paper)</td>
            <td class="border px-8 py-4"></td>
            <td class="border px-8 py-4">8,000</td>
            <td class="border px-8 py-4">5,000</td>
            <td class="border px-8 py-4">3,000</td>
            <td class="border px-8 py-4">1,000</td>
            <td class="border px-8 py-4">9,000</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>
