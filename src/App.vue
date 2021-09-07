<template>
  <div class="w-full">
    <Navbar
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-800 text-white' : ''"
    />
    <!-- DarkMode button -->
    <div class="absolute right-24 sm:hidden xl:flex top-6">
      <button @click="darkMode = !darkMode" class="flex items-center">
        <svg
          :class="darkMode ? 'transform scale-100 text-white' : 'hidden'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:text-blue-800 transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646
            3.646 9.003 9.003 0 0012 21a9.003
            9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          :class="darkMode ? 'hidden' : 'transform scale-100'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:text-yellow-300 transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364
            6.364l-.707-.707M6.343
            6.343l-.707-.707m12.728 0l-.707.707M6.343
            17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
    <Home
      :class="
        darkMode
          ? 'dark:bg-gray-800 text-white transition duration-300'
          : 'transition duration-300'
      "
    />
    <About
      :class="
        darkMode
          ? 'dark:bg-gray-800 text-white transition duration-300'
          : 'transition duration-300'
      "
    />
    <Skills
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-800 text-white' : ''"
    />
    <Services
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-800 text-white' : ''"
    />
    <Portfolio
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-800 text-white' : ''"
    />
    <Contact
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-800 text-white' : ''"
    />
    <Footer
      class="transition duration-300"
      :class="darkMode ? 'dark:bg-gray-900 text-white' : 'bg-purple-500'"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Services,
    Portfolio,
    Contact,
    Footer,
  },
  data: () => ({
    darkMode: true,
  }),
};
</script>
