<template>
  <div class="lg:pt-10">
    <h2
      class="text-white uppercase mt-5 mb-3 lg:mb-20 font-bold text-sm lg:text-lg"
    >
      Popular this week
    </h2>
    <carousel :items-to-show="3.5" :autoplay="4000" :breakpoints="breakpoints">
      <slide
        v-for="movie in getAllMoviesFromStore.data?.results"
        :key="movie.id"
      >
        <div class="border-white border-[0.8px] mr-4 cursor-pointer">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
            :alt="movie.overview"
            class="lg:h-44 h-28 aspect-square lg:aspect-auto object-cover opacity-80"
          />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { useMovieApiStore } from "~/store/apiStore";

const getAllMoviesFromStore = useMovieApiStore();

onMounted(async () => {
  await getAllMoviesFromStore.fetchData();
});

const breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: `start`,
  },
  1150: {
    itemsToShow: 8.5,
    snapAlign: `start`,
  },
});
</script>

<style scoped lang="css"></style>
