import { createApp } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';
import store from './store';

createApp(App)
  .use(VueSmoothScroll)
  .use(store)
  .use(router)
  .mount('#app');
