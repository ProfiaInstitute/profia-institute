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
        <div class="text-black flex-grow">
          <span class="text-2xl font-semibold"
            >Welcome to the School of Engineering</span
          >
          <br />
          <br />
          <span class="font-semibold text-xl">
            Dive Into Our Dynamic Plumbing and Electrical Programs</span
          ><br /><br />

          Get ready to power up your future with the School of Engineering! Our
          cutting-edge Plumbing and Electrical Programs are designed to give you
          the skills and hands-on experience you need to crush it in these
          high-demand fields. Whether you want to become a master plumber or an
          electrical whiz, we've got the perfect program for you.
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
                Plumbing Program
              </h1>
              <p class="text-white py-3">
                <span class="font-semibold text-xl"
                  >Ready to Make a Splash in Your Career?</span
                ><br />
                Our Plumbing Program is your ticket to a rewarding and essential
                career. From the basics to advanced techniques, we've got you
                covered.
                <br /><span class="font-semibold text-xl"
                  >Why Choose Our Plumbing Program?</span
                ><br />
                <br /><span class="font-semibold text-xl"
                  >Learn from the Best:</span
                ><br />Our expert instructors bring real-world experience to the
                classroom. <br /><span class="font-semibold text-xl"
                  >Next-Level Facilities:</span
                >
                <br />Train in state-of-the-art labs that mimic real-life
                plumbing scenarios. <br /><span class="font-semibold text-xl"
                  >Get Certified:</span
                ><br />
                Prepare for top industry certifications that make you a hot
                commodity. <br /><span class="font-semibold text-xl"
                  >Hands-On Action:</span
                ><br />
                Dive into workshops, internships, and on-the-job training.
                <br /><span class="font-semibold text-xl">Career Boost:</span
                ><br />
                Our dedicated career services help you land your dream job.
                <br /><span class="font-semibold text-xl"
                  >What You’ll Learn:</span
                ><br />
                <br /><span class="font-semibold text-xl">Plumbing 101:</span
                ><br />
                Master the fundamentals, including materials, tools, and safety
                practices. <br /><span class="font-semibold text-xl"
                  >Home Sweet Home:</span
                ><br />
                Learn to install, maintain, and repair plumbing systems in
                homes. <br /><span class="font-semibold text-xl"
                  >Big League Plumbing:</span
                ><br />
                Tackle commercial plumbing with confidence and know-how.
                <br /><span class="font-semibold text-xl">Water Works:</span
                ><br />
                Understand water supply systems from source to tap. <br /><span
                  class="font-semibold text-xl"
                  >Drain Game:</span
                ><br />
                Get the scoop on drainage, waste, and vent systems. <br /><span
                  class="font-semibold text-xl"
                  >Gas Guru:</span
                ><br />
                Become an expert in gas piping systems and safety protocols.
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
                Electrical Program
              </h1>
              <p class="text-white py-3">
                <span class="font-semibold text-xl"
                  >Amp Up Your Career with Our Electrical Program!</span
                ><br />
                Want to light up your future? Our Electrical Program gives you
                everything you need to succeed in the electrifying world of
                electrical work.
                <br /><span class="font-semibold text-xl"
                  >Why Our Electrical Program Rocks:</span
                ><br />
                <br /><span class="font-semibold text-xl"
                  >Top-Notch Instructors:</span
                ><br />
                Learn from seasoned pros who know the industry inside out.
                <br /><span class="font-semibold text-xl">High-Tech Labs:</span>
                <br />
                Train with the latest tools and technology in our modern
                facilities. <br /><span class="font-semibold text-xl"
                  >Be Certified:</span
                ><br />
                Get prepped for key industry certifications that open doors.
                <br /><span class="font-semibold text-xl"
                  >Hands-On Experience:</span
                ><br />
                Gain practical skills through labs, internships, and co-ops.
                <br /><span class="font-semibold text-xl"
                  >Career Kickstart:</span
                ><br />
                Use our career resources to jumpstart your job search

                <br /><span class="font-semibold text-xl"
                  >What You’ll Learn:</span
                ><br />

                <br /><span class="font-semibold text-xl"
                  >Electric Essentials</span
                ><br />
                Grasp the basics of circuits, voltage, current, and resistance.
                <br /><span class="font-semibold text-xl"
                  >Home Wiring Hero:</span
                ><br />
                Master residential wiring and installation techniques.
                <br /><span class="font-semibold text-xl"
                  >Commercial Powerhouse:</span
                ><br />
                Navigate the complexities of commercial electrical systems.
                <br /><span class="font-semibold text-xl">Code Mastery:</span
                ><br />Learn national and local electrical codes and safety
                standards <br /><span class="font-semibold text-xl"
                  >Control Savvy:</span
                ><br />
                Dive into electrical control systems and how they work.
                <br /><span class="font-semibold text-xl"
                  >Green Energy Guru</span
                ><br />Get ahead with knowledge about renewable energy systems
                like solar and wind power.
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
        </div>
      </div>
    </section>
  </div>
</template>
