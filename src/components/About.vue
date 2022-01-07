<template>
  <div id="About" class="w-full py-12 lg:px-40 sm:px-12 select-none">
    <div class="flex justify-center pt-12 font-body font-extrabold text-5xl">
      About me
    </div>
    <div class="flex justify-center pt-2 text-gray-500 font-body text-xl pb-4">
      My introduction
    </div>
    <div
      class="
        w-full
        flex flex-col
        py-8
        lg:flex-row lg:space-x-8
        items-center
        lg:items-center
        px-8
        space-y-8
      "
    >
      <div
        class="w-full lg:w-6/12 lg:justify-end flex justify-center items-center"
      >
        <img
          class="imgSize rounded-2xl"
          src="https://i.ibb.co/JrT0R4j/Whats-App-Image-2022-01-07-at-14-48-17.jpg"
          alt=""
        />
      </div>
      <div
        class="
          w-full
          lg:w-6/12
          xl:w-3/12
          flex
          justify-center
          lg:justify-start
          items-center
        "
      >
        <div class="flex flex-col space-y-8 font-body">
          <div class="text-xl text-center lg:text-left">
            Web developer, with extensive knowledge and months of experience,
            working on web technologies and Ui / Ux design, delivering quality
            work.
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <div class="font-extrabold text-5xl">+09</div>
              <div class="text-center text-gray-600">
                Months <br />
                of experience
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-extrabold text-5xl">+06</div>
              <div class="text-center text-gray-600">
                Completed <br />
                projects
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-extrabold text-5xl">+01</div>
              <div class="text-center text-gray-600">
                Companies <br />
                worked
              </div>
            </div>
          </div>
          <div class="flex justify-center lg:justify-start">
            <a :href="IMG" download="carlosCV">
              <button class="flex bg-purple-500 px-8 py-6 rounded-lg">
                <div class="text-white font-semibold text-xl pr-4">
                  Download CV
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-6
                    w-6
                    text-white
                    transform
                    hover:translate-y-2
                    transition
                    duration-300
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3
                  3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg></button
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgSize {
  height: 400px;
  width: 400px;
}

.aboutSize {
  height: 800px;
}
</style>

<script>
import IMG from '../assets/docs/cv.png';

export default {
  data: () => ({
    IMG,
  }),
};
</script>
