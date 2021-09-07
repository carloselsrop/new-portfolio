<template>
  <div id="Contact" class="w-full h-screen lg:px-40 sm:px-12 font-body">
    <div
      class="
        flex
        justify-center
        pt-12
        font-body font-extrabold
        text-5xl
        select-none
      "
    >
      Contact Me
    </div>
    <div
      class="
        flex
        justify-center
        pt-2
        text-gray-500
        font-body
        text-xl
        select-none
      "
    >
      Get in touch
    </div>
    <div class="contactSize w-full flex pt-12">
      <!-- Contact -->
      <div class="w-3/12 space-y-24 flex flex-col items-start">
        <!-- Number -->
        <div class="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0
                01.948.684l1.498 4.493a1 1 0 01-.502
                1.21l-2.257 1.13a11.042 11.042 0
                005.516 5.516l1.13-2.257a1 1 0
                011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2
                2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div class="flex flex-col">
            <div class="text-2xl select-none">Call Me</div>
            <a href="tel:+50377402681">
              <div>+503 7740-2681</div>
            </a>
          </div>
        </div>
        <!-- Email -->
        <div class="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2
                2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0
                0l3-3m-3 3L9 8m-5 5h2.586a1 1 0
                01.707.293l2.414 2.414a1 1 0
                00.707.293h3.172a1 1 0
                00.707-.293l2.414-2.414a1
                1 0 01.707-.293H20"
              />
            </svg>
          </div>
          <div class="flex flex-col">
            <div class="text-2xl select-none">Email</div>
            <a href="mailto:karlosmiguel144@gmail.com">
              <div>karlosmiguel144@gmail.com</div>
            </a>
          </div>
        </div>
        <!-- Location -->
        <div class="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414
                20.9a1.998 1.998 0 01-2.827
                0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div class="flex flex-col">
            <div class="text-2xl select-none">Location</div>
            <div class="select-none">El Salvador - San Salvador</div>
          </div>
        </div>
      </div>
      <!-- Send a email -->
      <div class="w-9/12 px-36 space-y-16 select-none">
        <!-- Name and email -->
        <div class="flex">
          <div
            class="
              bg-gray-700
              flex flex-col
              w-6/12
              px-8
              py-4
              rounded-lg
              space-y-1
              mr-1
            "
          >
            <div class="text-white">Name</div>
            <input
              class="
                bg-transparent
                focus:outline-none
                border-b-2 border-transparent
                focus:border-white
                transition
                duration-300
                text-white
              "
              type="text"
            />
          </div>
          <div
            class="
              bg-gray-700
              flex flex-col
              px-8
              py-4
              rounded-lg
              space-y-1
              w-6/12
              ml-1
            "
          >
            <div class="text-white">Email</div>
            <input
              class="
                bg-transparent
                focus:outline-none
                border-b-2 border-transparent
                focus:border-white
                transition
                duration-300
                text-white
              "
              type="email"
            />
          </div>
        </div>
        <!-- Name of the project -->
        <div
          class="
            bg-gray-700
            flex flex-col
            px-8
            py-4
            rounded-lg
            space-y-1
            w-full
          "
        >
          <div class="text-white">Project</div>
          <input
            class="
              bg-transparent
              focus:outline-none
              border-b-2 border-transparent
              focus:border-white
              transition
              duration-300
              text-white
            "
            type="email"
          />
        </div>
        <!-- Big Message -->
        <div
          class="
            bg-gray-700
            flex flex-col
            px-8
            py-4
            rounded-lg
            space-y-1
            w-full
          "
        >
          <div class="text-white">Message</div>
          <textarea
            name=""
            class="
              resize-none
              bg-transparent
              focus:outline-none
              border-b-2 border-transparent
              focus:border-white
              transition
              duration-300
              text-white
            "
            id=""
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <!-- Button contact me -->
        <div>
          <button class="py-4 bg-purple-500 rounded-lg flex items-center px-4">
            <div class="text-white text-xl font-semibold">Contact Me</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                ml-1
                h-6
                w-6
                font-semibold
                text-white
                transform
                hover:translate-x-1
                transition
                duration-300
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13
                0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contactSize {
  height: 800px;
}
</style>
