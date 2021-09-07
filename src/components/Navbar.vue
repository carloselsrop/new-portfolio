<template>
  <div
    id="Home"
    class="w-full flex justify-between lg:px-40 sm:px-12 py-6 items-center"
  >
    <!-- left-side -->
    <div
      class="
        select-none
        font-body font-extrabold
        text-xl
        transform
        hover:scale-110
        transition
        duration-300
      "
    >
      Carlos
    </div>
    <!-- right-side xl -->
    <div
      class="
        flex
        space-x-12
        select-none
        sm:hidden
        lg:flex
        lg:space-x-8
        font-body
      "
    >
      <a v-smooth-scroll="{ duration: 1000 }" href="#Home">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Home
        </button>
      </a>
      <a v-smooth-scroll="{ duration: 1000 }" href="#About">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          About
        </button>
      </a>
      <a v-smooth-scroll="{ duration: 1000 }" href="#Skills">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Skills
        </button>
      </a>
      <a v-smooth-scroll="{ duration: 1000 }" href="#Services">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Services
        </button>
      </a>
      <a v-smooth-scroll="{ duration: 1000 }" href="#Portfolio">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Portfolio
        </button>
      </a>
      <a v-smooth-scroll="{ duration: 1000 }" href="#Contact">
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Contact me
        </button>
      </a>
    </div>
    <!-- right-side sm -->
    <div
      class="sm:flex lg:hidden relative cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110
          2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1
          1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1
          0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <div
        :class="
          isOpen
            ? 'transform scale-100 transition-all duration-500'
            : 'transform scale-0 transition-all duration-300'
        "
        class="
          font-body
          absolute
          top-6
          right-0
          select-none
          rounded-md
          border-2 border-purple-500
          px-4
          flex flex-col
          space-y-4
          py-2
        "
      >
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Home
        </button>
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          About
        </button>
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Skills
        </button>
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Services
        </button>
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
          "
        >
          Portfolio
        </button>
        <button
          class="
            border-b-2 border-transparent
            hover:border-purple-500
            transition
            duration-300
            w-24
          "
        >
          Contact me
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>
