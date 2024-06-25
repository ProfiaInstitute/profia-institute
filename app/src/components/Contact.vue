<template>
  <section class="py-10 lg:py-20 max-w-full mx-auto px-4 sm:px-8 mx-20">
    <div
      class="w-full flex justify-end px-8 mx-auto bg-blue-400 text-black text-center text-3xl font-semibold rounded-lg py-4 mb-10"
    >
      Reach out to us
    </div>
    <div class="flex justify-start ml-20 -mt-5 items-center -ml-11 -mt-16">
      <div class="bg-gray-200 p-4 rounded-lg shadow-lg">
        <div class="bg-white p-4 rounded-lg">
          <p>Profia Institute</p>
          <p>P.O Box 1234</p>
          <p>Kisumu</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center sm:items-start pl-4 sm:pl-48 justify-center mt-7 text-center sm:text-left"
    >
      <p>Email: Profia@gmail.com</p>
      <p>Phone Number: 0712345345</p>
    </div>

    <div class="mx-24 mt-20 gap-8 flex">
      <form
        class="flex flex-col gap-4 w-full sm:w-4/5 md:w-5/6 lg:w-3/6 mx-auto"
      >
        <input
          class="text-lg sm:text-xl p-2 sm:p-3"
          type="text"
          placeholder="Full Name:"
        />
        <input
          class="text-lg sm:text-xl p-2 sm:p-3"
          type="text"
          placeholder="Email:"
        />
        <input
          class="text-lg sm:text-xl p-2 sm:p-3"
          type="number"
          placeholder="Number:"
        />
        <textarea
          class="text-lg sm:text-xl p-2 sm:p-3 h-32 sm:h-44"
          name="comment"
          placeholder="Enter text here..."
        ></textarea>
        <button
          class="text-xs sm:text-sm p-2 sm:p-3 bg-gray-400 w-32 sm:w-44 mx-auto"
        >
          Send message
        </button>
      </form>

      <div
        class="min-h-56 w-full lg:w-6/12 bg-green-500 flex text-white justify-center items-center p-4 lg:p-8 hidden md:block lg:block"
      >
        map goes here <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae,
        deleniti quaerat harum quisquam, incidunt nulla cupiditate excepturi
        quibusdam nemo repellendus nesciunt cum maiores. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Adipisci omnis cum dolores aut
        repellat laboriosam at delectus hic nemo ipsa, est, neque modi
        recusandae vel maxime ipsum iure dignissimos illum beatae nulla
        excepturi. Earum quis molestiae aut culpa maxime deleniti accusantium
        reiciendis sunt? Voluptates deleniti debitis natus ab provident nostrum?
        <br />
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      </div>
    </div>
  </section>
</template>

<script setup></script>
