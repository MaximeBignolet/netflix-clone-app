<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
    <div class="container mx-auto">
      <div class="mx-4">
        <h2 class="text-white">Filters</h2>
      </div>
      <div class="lg:grid lg:grid-cols-4 gap-3 my-10">
        <div
          v-for="movie in getAllMoviesFromStore.data?.results"
          class="text-white cursor-pointer font-semibold my-5"
        >
          <h2 class="text-sm mb-2">{{ movie.title }}</h2>
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
            :alt="movie.overview"
            class="lg:h-44 h-28 w-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
import { useMovieApiStore } from "~/store/apiStore";

const getAllMoviesFromStore = useMovieApiStore();
onMounted(async () => {
  await getAllMoviesFromStore.fetchData();
});
</script>
