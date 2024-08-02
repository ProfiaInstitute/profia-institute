<template>
  <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
    <div
      class="w-full max-w-6xl flex justify-end px-8 mx-auto bg-secondary-color text-black text-center text-3xl font-semibold rounded-lg py-4 mb-10"
    >
      <h2 class="text-white">Reach out to us</h2>
    </div>
    <div class="flex justify-start ml-20 -mt- items-center -mt-16">
      <div class="bg-gray-200 p-4 rounded-lg shadow-lg">
        <div class="bg-white p-4 rounded-lg space-y-4 text-lg">
          <p>Profia Institute</p>
          <p>P.O Box 323-40300</p>
          <p>Homa Bay</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center sm:items-start pl-4 sm:pl-48 justify-center mt-7 text-center sm:text-left space-y-3 text-lg"
    >
      <p><span class="font-semibold">Email:</span> profiainstitute@gmail.com</p>
      <p>
        <span class="font-semibold">Phone Number:</span> 0710221122, 0793977991
      </p>
    </div>

    <div class="mx-2 sm:mx-12 mt-20 gap-8 flex">
      <form
        class="flex flex-col gap-4 w-[300px] sm:w-4/5 md:w-5/6 lg:w-3/6 mx-auto"
      >
        <input
          class="text-lg sm:text-xl p-2 sm:p-3 border-[1px] border-gray-400"
          type="text"
          placeholder="Full Name:"
        />
        <input
          class="text-lg sm:text-xl p-2 sm:p-3 border-[1px] border-gray-400"
          type="text"
          placeholder="Email:"
        />
        <input
          class="text-lg sm:text-xl p-2 sm:p-3 border-[1px] border-gray-400"
          type="number"
          placeholder="Number:"
        />
        <textarea
          class="text-lg sm:text-xl p-2 sm:p-3 h-32 sm:h-44 border-[1px] border-gray-400"
          name="comment"
          placeholder="Enter text here..."
        ></textarea>
        <button
          class="text-sm sm:text-lg text-white p-2 sm:p-3 bg-primary-color w-32 sm:w-44 rounded-xl"
        >
          Send message
        </button>
      </form>

      <div
        class="min-h-56 w-full lg:w-6/12 text-white justify-center items-center p-4 lg:p-8 hidden md:block lg:block"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.577394944372!2d34.4575996!3d-0.5350592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4d58bffe5db35%3A0x403b4b18e49e44b9!2sProfia%20Institute%20of%20Professionals!5e0!3m2!1sen!2ske!4v1719481692840!5m2!1sen!2ske"
          width="650"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-xl"
          title="map"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup></script>
