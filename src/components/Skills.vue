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
    <div class="w-full flex pt-16 px-4 justify-around">
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
          class="absolute z-10 w-full py-2"
        >
          <div class="flex justify-center w-full pt-4">
            <div class="grid grid-flow-row grid-cols-2 gap-8">
              <div v-for="item in fdItems" :key="item.name">
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    p-4
                    rounded-full
                    w-24
                    h-24
                    bg-purple-500
                  "
                >
                  <img class="w-14" :src="item.img" alt="" />
                </div>
              </div>
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
          class="absolute z-10 w-full py-2"
        >
          <div class="flex justify-center w-full pt-4">
            <div class="grid grid-flow-row grid-cols-2 gap-8">
              <div v-for="item in wbItems" :key="item.name">
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    p-4
                    rounded-full
                    w-24
                    h-24
                    bg-purple-500
                  "
                >
                  <img class="w-14" :src="item.img" alt="" />
                </div>
              </div>
            </div>
          </div>
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
    wbItems: [
      {
        name: 'figma',
        img: 'https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png',
      },
      {
        name: 'UI/UX',
        img: 'https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg',
      },
      {
        name: 'SASS',
        img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png',
      },
      {
        name: 'Tailwind CSS',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      },
    ],
    fdItems: [
      {
        name: 'HTML',
        img: 'https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png',
      },
      {
        name: 'CSS',
        img: 'https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png',
      },
      {
        name: 'JS',
        img: 'https://cdn.freebiesupply.com/logos/large/2x/javascript-logo-png-transparent.png',
      },
      {
        name: 'REACT',
        img: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
      },
      {
        name: 'VUE',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png',
      },
    ],
  }),
};
</script>

<style scoped>
.skillSize {
  height: 800px;
}
</style>
