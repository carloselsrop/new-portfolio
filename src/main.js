import { createApp } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';

createApp(App)
  .use(VueSmoothScroll)
  .use(router)
  .mount('#app');
