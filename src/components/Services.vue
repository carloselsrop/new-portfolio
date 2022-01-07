<template>
  <div
    id="Services"
    class="w-full h-screen lg:px-40 sm:px-12 font-body select-none"
  >
    <div class="flex justify-center pt-12 font-body font-extrabold text-5xl">
      Services
    </div>
    <div
      class="
        w-full
        serviceSize
        flex flex-wrap
        justify-around
        items-center
        text-white
      "
    >
      <div
        class="
          py-12
          cursor-pointer
          cardService
          bg-purple-500
          rounded-xl
          transform
          hover:scale-105
          transition
          duration-500
          shadow-xl
          flex flex-col
          justify-around
          items-center
          space-y-4
        "
      >
        <div><img class="w-96 h-80" src="@/assets/img/web.png" alt="" /></div>
        <div class="px-6">
          <div class="text-2xl pb-4">Web Design</div>
          <div>
            I consider myself a person who likes to design templates and
            recreate them with the use of different design tools.
          </div>
        </div>
      </div>
      <div
        class="
          cardService
          bg-purple-500
          rounded-xl
          transform
          hover:scale-105
          transition
          duration-500
          shadow-xl
        "
      >
        <div
          class="
            py-12
            cursor-pointer
            cardService
            bg-purple-500
            rounded-xl
            transform
            hover:scale-105
            transition
            duration-500
            shadow-xl
            flex flex-col
            justify-around
            items-center
            space-y-4
          "
        >
          <div>
            <img class="w-96 h-80" src="@/assets/img/frontend.png" alt="" />
          </div>
          <div class="px-6">
            <div class="text-2xl pb-4">Frontend Developer</div>
            <div>
              I found one of the things that I enjoy doing the most which is the
              development and design of web applications
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.serviceSize {
  height: 800px;
}

.cardService {
  width: 300px;
  height: 600px;
}
</style>
