<template>
  <div class="relative z-20 container mx-auto lg:px-3 cursor-pointer">
    <div
      class="flex flex-col lg:flex-row lg:rounded-xl items-center hover:scale-105 transition-all duration-300"
    >
      <div class="lg:pl-10 lg: absolute -top-20 left-0 lg:block">
        <SvgPopcorn />
      </div>
      <div
        class="w-full lg:p-7 p-2 lg:ml-8 flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-[#261733] lg:rounded-lg to-[#151a3f] hover:bg-gradient-to-r hover:from-[#472465] hover:to-[#181E53] transition-all duration-300"
      >
        <div class="flex flex-col lg:max-h-10 my-3 lg:my-0">
          <h2 class="text-white font-semibold lg:text-xl text-sm">
            Netflix comme vous l'aimez pour seulement 5,99 €.
          </h2>
          <p class="text-white font-semibold text-xs lg:text-base">
            Profitez de notre offre avec pub, la plus économique.
          </p>
        </div>
        <button class="bg-gray-500 p-2 text-sm rounded-md text-white font-bold">
          Commencer
        </button>
      </div>
    </div>
    <h2>Encore plus de raison de vous abonner</h2>
  </div>
</template>

<script lang="ts" setup></script>
