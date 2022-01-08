<template>
  <div
    class="
      lg:px-40
      sm:px-12
      py-24
      w-full
      flex flex-col
      justify-center
      lg:flex-row
      sm:py-48
      lg:py-16
      xl:py-28
      relative
      space-x-16
    "
  >
    <!-- left-side of home -->
    <div class="w-full lg:w-7/12 flex items-center select-none">
      <!-- presentation -->
      <div class="flex w-full flex-col justify-center">
        <div
          class="font-body space-y-2 flex flex-col items-center lg:items-start"
        >
          <div class="text-6xl font-semibold">Hi, I'm Carlos</div>
          <div class="text-3xl text-gray-400">Frontend Developer</div>
          <div class="pb-6 text-lg">
            Medium level experience in web design and <br />
            development knowwledge, producing quality work.
          </div>
          <div class="flex space-x-4">
            <a
              v-for="social in socialMedia"
              class="p-3 rounded-xl bg-purple-500 shadow-md"
              :key="social.name"
              :href="social.path"
              target="_blank"
            >
              <img class="w-6 h-6" :src="social.icon" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-12 flex items-center space-x-2">
        <div
          class="
            w-6
            h-8
            border-4 border-purple-500
            rounded-2xl
            flex
            items-center
            justify-center
            text-purple-500
            font-bold
          "
        >
          <div class="text-2xl pt-4 animate-bounce">'</div>
        </div>
        <div class="text-lg font-body font-semibold">Scroll Down</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
              text-purple-500
              transform
              hover:translate-y-2
              transition
              duration-500
            "
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
        </div>
      </div>
    </div>
    <!-- right-side of home -->
    <div
      class="
        w-full
        lg:w-5/12 lg:flex
        items-center
        justify-center
        relative
        hidden
      "
    >
      <div class="flex justify-center items-center">
        <svg
          class="blobSize transform hover:scale-110 transition duration-500"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#8A3FFC"
            d="M62.2,-43.4C76,-32.2,79.5,-6.6,74,16.6C68.5,
          39.9,53.9,60.8,36.2,65.8C18.4,70.7,-2.5,59.7,
          -21.5,48.9C-40.5,38.1,-57.5,27.6,-64.4,10.8C-71.3,
          -5.9,-68,-28.8,-55.6,-39.7C-43.2,-50.6,-21.6,
          -49.5,1.3,-50.5C24.2,-51.5,48.3,-54.7,62.2,-43.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          class="absolute ml-8 w-4/12 rounded-full"
          src="../assets/img/blood.gif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    socialMedia: [
      {
        name: 'Github',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        path: 'https://github.com/carloselsrop',
      },
      {
        name: 'Linkedin',
        icon: 'https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png',
        path: 'https://www.linkedin.com/in/carlos-guzm%C3%A1n-mart%C3%ADnez-7b670a203/',
      },
    ],
  }),
};
</script>

<style scoped>
.heightC {
  height: 861px;
}
.blobSize {
  width: 560px;
  height: 600px;
}
</style>
