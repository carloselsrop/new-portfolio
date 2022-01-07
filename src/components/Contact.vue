<template>
  <div id="Contact" class="w-full lg:px-40 sm:px-12 font-body">
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
    <div class="w-full flex justify-center py-24">
      <!-- Contact -->
      <div
        class="
          w-full
          lg:space-x-12
          space-y-12
          lg:space-y-0 lg:flex-row
          flex flex-col
          justify-center
          items-center
          py-12
        "
      >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.contactSize {
  height: 800px;
}
</style>
