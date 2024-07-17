<template>
  <div class="container mx-auto p-4">
    <nav
      class="text-5xl font-bold text-secondary-color leading-loose tracking-wide mt-4"
    >
      <h1>School of ICT</h1>
    </nav>

    <div class="flex flex-col md:flex-row justify-center md:gap-8 p-4">
      <div
        class="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2 flex flex-col"
      >
        <div class="text-black flex-grow">
          The School of ICT is a premier institution dedicated to fostering
          excellence in the field of Information and Communication Technology.
          Our mission is to equip students with cutting-edge skills and
          knowledge essential for navigating and thriving in today’s fast-paced
          digital world. We offer a diverse range of programs, from foundational
          courses like Computer Foundation Skills to software development. Our
          curriculum is designed to be both comprehensive and practical,
          incorporating the latest industry trends and technologies. With a team
          of experienced faculty, state-of-the-art facilities, and a strong
          emphasis on hands-on learning, the School of ICT is committed to
          producing innovative, skilled, and adaptable professionals ready to
          meet the demands of the global ICT landscape. Join us and be part of a
          community that is shaping the future of technology.
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
                Computer foundational skills
              </h1>
              <p class="text-white py-3">
                Welcome to the Computer Foundation Skills course offered by the
                School of ICT. This course is designed to provide students with
                a solid grounding in essential computer skills, ensuring they
                have the knowledge and capabilities required to succeed in
                today’s digital world. Whether you are a beginner or looking to
                rzskills needed for effective computer use.
                <br /><span class="font-semibold text-xl">Course Duration</span
                ><br />
                This is a 8-week course, with classes held daily. Each session
                will last approximately 2 hours, with additional time allocated
                for lab work and project collaboration.
                <br /><span class="font-semibold text-xl">Enrollment</span
                ><br />
                Enrollment is open to all students with a basic understanding of
                high school-level mathematics. No prior computer knowledge is
                required. Interested individuals can sign up through the School
                of ICT’s online portal.
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
                Certificate in ICT
              </h1>
              <p class="text-white py-3">
                The Certificate in ICT is an immersive and practical course
                meticulously designed to furnish students with a robust
                foundation in Information and Communication Technology. Ideal
                for beginners aiming to enter the ICT field or professionals
                seeking to bolster their skills, the program covers a diverse
                array of fundamental topics. Graduates emerge well-equipped to
                meet the challenges of today's technology-driven workplace,
                ready to apply their knowledge effectively in various ICT roles.

                <br /><span class="font-semibold text-xl"
                  >Admission Requirements</span
                ><br />
                Basic knowledge of high school-level mathematics. No prior ICT
                experience required, making it accessible to beginners.
                Applicants should have a keen interest in technology and
                problem-solving.

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
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
                Diploma in ICT
              </h1>
              <p class="text-white py-3">
                The Diploma in ICT is a comprehensive program designed to equip
                students with advanced skills and knowledge in Information and
                Communication Technology. This diploma bridges the gap between
                foundational understanding and specialized expertise, preparing
                graduates for a wide range of professional roles in the ICT
                sector. With a balanced mix of theoretical concepts and
                practical applications, this program is ideal for those aspiring
                to become proficient ICT professionals.

                <br /><span class="font-semibold text-xl"
                  >Duration and Schedule</span
                ><br />
                The Diploma in ICT is a 1-year full-time program or a 2-year
                part-time program. Classes are held four times a week, with each
                session lasting 3 hours. Additional lab sessions and project
                work will be scheduled as required.

                <br /><span class="font-semibold text-xl">How to Apply </span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
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
                Graphics Design
              </h1>
              <p class="text-white py-3">
                The Graphic Design course is a dynamic program designed to
                cultivate creative and technical skills in the field of visual
                communication. This program provides students with a
                comprehensive understanding of graphic design principles, tools,
                and techniques. Through a combination of theoretical study and
                hands-on practice, students will learn to create visually
                compelling designs that effectively communicate messages across
                various media. Duration is what they should tell us how long and
                what is the weight of certification is it dip or cert or degree
                they need to specify

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
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
                AI & Machine Learning
              </h1>
              <p class="text-white py-3">
                The Course in AI & Machine Learning is an advanced program aimed
                at equipping students with a deep understanding of artificial
                intelligence and machine learning technologies. It covers
                essential theories, tools, and practical applications, preparing
                students for dynamic roles in the rapidly evolving tech
                industry. Graduates emerge with the skills to design, develop,
                and implement AI and machine learning solutions across diverse
                sectors, making them highly sought-after professionals in the
                field.

                <br /><span class="font-semibold text-xl"
                  >Teaching Methods </span
                ><br />
                Lectures and Seminars: Comprehensive coverage of theoretical
                concepts. Hands-on Labs: Practical sessions to apply AI and
                machine learning techniques. Group Projects: Collaborative
                projects to develop real-world AI solutions. Case Studies:
                Analysis of successful AI implementations. Assessments: Quizzes,
                assignments, and a final capstone project to evaluate
                proficiency.

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
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
                Statistical Languages
              </h1>
              <p class="text-white py-3">
                The Course in Statistical Languages is a specialized program
                designed to empower students with skills in utilizing
                statistical programming languages for data analysis, modeling,
                and visualization. Tailored for aspiring professionals in data
                science, analytics, and research, the curriculum provides a
                comprehensive understanding of statistical methods and their
                practical application using widely adopted languages such as R
                and Python. Graduates are equipped to employ advanced
                statistical techniques to derive insights and solutions from
                complex datasets, making them well-prepared for diverse roles in
                analytical fields. ask for the duration of this course.

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
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
                Diploma in Data Management and Analytics.
              </h1>
              <p class="text-white py-3">
                The Diploma in Data Management and Analytics is an intensive and
                comprehensive program tailored to equip students with the
                essential skills and knowledge in data management, analysis, and
                business intelligence. Ideal for aspiring data analysts and
                managers, the curriculum spans the entire data lifecycle—from
                collection and storage to thorough analysis and impactful
                visualization. Graduates emerge well-prepared to lead
                data-driven decision-making processes across diverse industries,
                leveraging their expertise to navigate and harness the power of
                data effectively..

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
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
                Website Development
              </h1>
              <p class="text-white py-3">
                At Our School of ICT, the Website Development program is
                meticulously crafted to empower students with the skills and
                knowledge essential for building modern, responsive, and dynamic
                websites. This comprehensive curriculum spans a broad spectrum
                of topics, encompassing HTML, CSS, JavaScript, front-end
                frameworks, back-end development, and database management. Our
                students gain proficiency in creating visually appealing and
                user-friendly websites that operate seamlessly across diverse
                devices and browsers.

                <br /><span class="font-semibold text-xl">How to Apply</span
                ><br />
                Interested candidates can apply through the School of ICT’s
                online application portal. For more information, visit our
                admissions page or contact our admissions office.
              </p>
            </div>
            <router-link
              to="#"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl self-start"
              >Read More</router-link
            >
          </div>
        </div>
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
                Software Development
              </h1>
              <p class="text-white py-3">
                Our Software Development program at the School of ICT is crafted
                to equip students with a solid foundation in creating, testing,
                and maintaining software applications. We emphasize hands-on
                learning through projects that replicate real-world scenarios,
                ensuring our students gain practical skills highly valued in the
                tech industry. Throughout the program, students delve into
                essential programming languages such as Python, Java, and C++,
                alongside mastering modern software development methodologies
                like Agile and DevOps. By graduation, our students are
                proficient in developing scalable, efficient, and secure
                software solutions.
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
