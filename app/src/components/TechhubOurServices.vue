<template>
  <!-- This is the section that holds the service of the hub -->
  <section class="w-full py-10 mx-auto md:py-16 lg:max-w-7xl">

    <div class="flex flex-col justify-center">
      <!-- div that hold the service title -->
      <div class="justify-center flex mb-2">
        <h1
          class="py-1 px-5 rounded-xl text-2xl text-secondary-color font-bold tracking-tighter lg:text-4xl"
        >
          Our Services
        </h1>
      </div>
      
      <p class="text-center px-2 sm:text-xl lg:text-2xl tracking-tighter">
        Profia Institute's Tech Hub drives innovation in AI, Data
        Categorization, 3D & 2D Annotation, Autonomous Driving Training Data,
        NLP, and Video Annotation, inspiring advancement across our community.
      </p>
    </div>
  </section>
  <!-- This is the section that hold the three cards -->
  <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Card 1 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/tech-hub/our-services-1.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <!-- Background color -->
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-6">
            <h1 class="text-3xl font-semibold text-white">
              Artificial Intelligence (AI)
            </h1>
            <p class="text-white text-center py-3">
              Immerse yourself in the world of AI, where you'll learn to develop
              computer systems capable of performing tasks that typically
              require human intelligence. Master techniques in reasoning,
              learning, problem-solving, perception, and language understanding
              to create groundbreaking AI applications.
            </p>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/tech-hub/our-services-2.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-6">
            <h1 class="text-3xl font-semibold text-white">
              Data Categorization
            </h1>
            <p class="text-white text-center py-3">
              Become adept at organizing data into meaningful categories to
              enhance its accessibility and usability. Learn to group text,
              images, and database entries efficiently, and improve data-driven
              decision-making processes in any field. Become proficient in AI
              techniques like machine learning, neural networks, and deep
              learning, making you a sought-after expert in the AI industry.
            </p>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/tech-hub/our-services-3.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-25 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-6">
            <h1 class="text-3xl font-semibold text-white">
              3D & 2D Data Annotation
            </h1>
            <p class="text-white text-center py-3">
              Gain expertise in labeling data within images and videos to
              provide context for machine learning models. Our program covers:
              2D Annotation: Learn to label objects in 2D images, essential for
              facial recognition, object detection, and image segmentation. 3D
              Annotation: Explore labeling objects in 3D space, crucial for
              autonomous driving, AR/VR, and robotics.
            </p>
          </div>
        </div>
      </div>
      <!-- card 4 -->
      <div
        class="w-full h-[450px] relative bg-[url('../assets/images/tech-hub/our-services-4.avif')] bg-no-repeat bg-cover rounded-2xl sm:h-[400px]"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-25 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-6">
            <h1 class="text-3xl font-semibold text-white">
              Training Data for Autonomous Driving
            </h1>
            <p class="text-white text-center py-3">
              Prepare for a future in autonomous vehicle technology. Our
              curriculum includes creating and annotating extensive datasets
              essential for training and testing self-driving cars. You'll work
              with diverse data types to ensure accuracy and reliability in
              various driving conditions. Play a pivotal role in advancing
              autonomous driving technology by ensuring the accuracy and
              diversity of training data, leading to safer and more reliable
              self-driving cars.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
