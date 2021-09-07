<template>
  <div class="font-body w-full py-16 flex select-none">
    <!-- my name -->
    <div class="w-1/3 flex justify-end items-center">
      <div>
        <div class="text-4xl font-extrabold pb-2">Carlos</div>
        <div class="text-2xl">Frontend Developer</div>
      </div>
    </div>
    <!-- Greetings -->
    <div class="w-1/3 flex flex-col justify-between items-center space-y-16">
      <div class="pb-16 flex space-x-12">
        <a v-smooth-scroll="{ duration: 1000 }" href="#About">
          <button
            class="
              border-b-2 border-transparent
              hover:border-white
              transition
              duration-300
            "
          >
            About Me
          </button>
        </a>
        <a v-smooth-scroll="{ duration: 1000 }" href="#Services">
          <button
            class="
              border-b-2 border-transparent
              hover:border-white
              transition
              duration-300
            "
          >
            Services
          </button> </a
        ><a v-smooth-scroll="{ duration: 1000 }" href="#Portfolio">
          <button
            class="
              border-b-2 border-transparent
              hover:border-white
              transition
              duration-300
            "
          >
            Portfolio
          </button>
        </a>
      </div>
      <div>Made with ♥</div>
    </div>
  </div>
</template>
