<template>
  <div
    id="Skills"
    class="w-full h-screen lg:px-40 sm:px-12 font-body select-none"
  >
    <div class="flex justify-center pt-12 font-body font-extrabold text-5xl">
      Skills
    </div>
    <div class="flex justify-center pt-2 text-gray-500 font-body text-xl">
      My Abilities
    </div>
    <div class="w-full skillSize flex pt-16 justify-around">
      <div class="relative">
        <div
          class="
            flex
            border-2 border-purple-500
            items-center
            px-4
            py-2
            rounded-lg
          "
        >
          <div class="pr-16 text-2xl">Frontend Developer</div>
          <button @click="fdIsOpen = !fdIsOpen">
            <svg
              :class="
                fdIsOpen === true
                  ? 'transform -rotate-180 transition duration-300'
                  : 'transition duration-300'
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </button>
        </div>
        <div
          :class="
            fdIsOpen
              ? 'transform translate-y-6 transition duration-300'
              : 'transform scale-0 transition duration-300'
          "
          class="absolute z-10 w-full px-2 space-y-8 py-2"
        >
          <div>
            <div class="flex justify-between py-1">
              <div>HTML</div>
              <div>90%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-11/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>CSS</div>
              <div>75%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-10/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>JS</div>
              <div>60%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-8/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>VUE</div>
              <div>70%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-9/12 h-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div
          class="
            flex
            border-2 border-purple-500
            items-center
            px-4
            py-2
            rounded-lg
          "
        >
          <div class="pr-16 text-2xl">Web Design</div>
          <button @click="wdIsOpen = !wdIsOpen">
            <svg
              :class="
                wdIsOpen === true
                  ? 'transform -rotate-180 transition duration-300'
                  : 'transition duration-300'
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </button>
        </div>
        <div
          :class="
            wdIsOpen
              ? 'transform translate-y-6 transition duration-300'
              : 'transform scale-0 transition duration-300'
          "
          class="absolute z-10 w-full px-2 space-y-8 py-2"
        >
          <div>
            <div class="flex justify-between py-1">
              <div>TAILWIND</div>
              <div>90%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-11/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>FIGMA</div>
              <div>65%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-9/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>SASS</div>
              <div>40%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-5/12 h-full bg-gray-500"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-1">
              <div>UI / UX</div>
              <div>80%</div>
            </div>
            <div class="w-full h-2 border-2 border-gray-500 rounded-lg">
              <div class="w-10/12 h-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div
          class="
            flex
            border-2 border-purple-500
            items-center
            px-4
            py-2
            rounded-lg
          "
        >
          <div class="pr-16 text-2xl">Backend Developer</div>
          <button @click="bdIsOpen = !bdIsOpen">
            <svg
              :class="
                bdIsOpen === true
                  ? 'transform -rotate-180 transition duration-300'
                  : 'transition duration-300'
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </button>
        </div>
        <div
          :class="
            bdIsOpen
              ? 'transform translate-y-6 transition duration-300'
              : 'transform scale-0 transition duration-300'
          "
          class="absolute z-10 w-full px-2 space-y-8 py-2"
        >
          <div>Aun no se nada PERRO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fdIsOpen: false,
    wdIsOpen: false,
    bdIsOpen: false,
  }),
};
</script>

<style scoped>
.skillSize {
  height: 800px;
}
</style>
