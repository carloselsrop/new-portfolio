<template>
  <div id="Portfolio" class="w-full h-screen lg:px-40 sm:px-12 font-body">
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
      Portfolio
    </div>
    <div class="w-full portfolioSize text-white">
      <carousel :items-to-show="1">
        <slide v-for="slide in imgs" :key="slide">
          <div
            :style="{
              'background-image': 'url(' + slide.img + ')',
              'background-repeat': 'no-repeat',
              'background-position': 'top',
              'background-size': 'cover',
            }"
            class="
              w-full
              min-h-screen
              carousel__item
              flex
              justify-center
              items-center
            "
          >
            <div
              class="
                flex flex-col
                items-center
                justify-center
                w-full
                group
                hover:bg-black hover:bg-opacity-80
                transition
                duration-700
                hBox
                rounded-md
              "
            >
              <div
                class="
                  flex flex-col
                  justify-center
                  items-center
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                  select-none
                  w-full
                  h-full
                "
              >
                <div class="text-3xl pb-4">{{ slide.name }}</div>
                <div class="description pb-2">{{ slide.description }}</div>
                <a :href="slide.button" target="_blank">
                  <button
                    class="
                      transform
                      hover:scale-105
                      transition-transform
                      duration-300
                      xxs:py-2
                      bg-purple-500
                      xxs:px-1
                      sm:px-4
                      lg:py-2
                      items-center
                      rounded-lg
                      flex
                      focus:outline-none
                      xxs:mb-8
                      sm:-mb-8
                    "
                  >
                    <img class="w-6 h-6" :src="slide.icon" alt="" />
                    <div class="pl-2">Take a view</div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    imgs: [
      {
        img: 'https://i.ibb.co/Ctb9J9v/carlos.png',
        name: 'Carlos +',
        description: 'This is a "copy" (non-profit) of the famous DISNEY + movie streaming platform, this is a work for learning purposes.',
        button: 'https://disney-plus-carlos.herokuapp.com/',
        icon: 'https://img.icons8.com/ios-filled/452/heroku.png',
      },
      {
        img: 'https://i.ibb.co/2Mj9gbd/tiendaSV.png',
        name: 'Tienda SV',
        description: 'This is a national E-commerce taking inspiration (without plagiarism purposes) from other E-commerce`s in the country, such as Mercandu or Urra.',
        button: 'https://tienda-sv.herokuapp.com/',
        icon: 'https://img.icons8.com/ios-filled/452/heroku.png',
      },
      {
        img: 'https://i.ibb.co/Vj9GWSG/sca.png',
        name: 'SCA',
        description: 'Accident control system, it is a system made with React.js, its function is to manage and store the different accidents that happen in any industrial company, currently only used by the BIMBO company.',
        button: 'https://github.com/stevenbdf/control-accidentes-web',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      },
      {
        img: 'https://i.ibb.co/gZ8620f/rick.png',
        name: 'Rick And Morty App',
        description: 'This is a website that I made for learning purposes on how to consume the information provided by the REST API by implementing the information in views with AXIOS and handle state using VUEX.',
        button: 'https://competent-visvesvaraya-c0824e.netlify.app/',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/netlify-3627172-3029580.png',
      },
      {
        img: 'https://i.ibb.co/k92W6tg/Captura.png',
        name: 'IBANK',
        description: 'This is a website that I made for learning purposes on how to consume the information provided by the REST API by implementing the information in views with AXIOS and handle state using VUEX.',
        button: 'https://infallible-kirch-1013f0.netlify.app/',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/netlify-3627172-3029580.png',
      },
    ],
  }),
};
</script>

<style scoped>
.portfolioSize {
  height: 800px;
}

.hBox {
  height: 700px;
}

.description {
  width: 500px;
}

.imgSize {
  width: 500px;
}

.carousel__item {
  min-height: 700px;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
