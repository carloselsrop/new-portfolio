<template>
  <div id="About" class="w-full h-screen lg:px-40 sm:px-12 select-none">
    <div class="flex justify-center pt-12 font-body font-extrabold text-5xl">
      About me
    </div>
    <div class="flex justify-center pt-2 text-gray-500 font-body text-xl">
      My introduction
    </div>
    <div class="w-full aboutSize flex">
      <div class="w-1/2 h-full flex justify-end items-center pr-12">
        <img
          class="imgSize rounded-2xl"
          src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
      <div class="w-1/2 h-full flex justify-start items-center pl-12">
        <div class="flex flex-col space-y-16 font-body">
          <div class="text-xl">
            Web developer, with extensive knowledge <br />
            and months of experience, working on web<br />
            technologies and Ui / Ux design, delivering<br />
            quality work.
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
          <div>
            <a href="../assets/docs/cv.pdf" download>
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
