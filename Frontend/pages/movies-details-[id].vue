<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
    <div class="container mx-auto">
      <div class="text-white cursor-pointer font-semibold my-5">
        <h2 class="text-sm mb-2">{{ getMoviesById.movie?.title }}</h2>
        <img
          :src="`https://image.tmdb.org/t/p/w500${getMoviesById.movie?.poster_path}`"
          :alt="getMoviesById.movie?.overview"
          class="w-screen object-cover h-1/2 rounded-md shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
import { useMovieByIdStore } from "~/store/movieByIdStore";

const route = useRoute();

const getMoviesById = useMovieByIdStore();
const movieId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
});

onMounted(async () => {
  if (!isNaN(movieId.value)) {
    await getMoviesById.fetchData(movieId.value);
  }
});
</script>
