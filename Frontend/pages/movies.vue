<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
    <div class="container mx-auto">
      <div class="mt-10 mx-4">
        <h2 class="text-white font-bold text-4xl">Movies</h2>
        <p class="text-white pt-4 lg:w-1/3 w-full">
          Whether it's scary, funny, dramatic, romantic, or other, cinema knows
          how to awaken our senses. And with so many titles available, there's
          so much to discover!
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-4 gap-5 my-10 mx-4">
        <div
          v-for="movie in getAllMoviesFromStore.data?.results"
          class="text-white cursor-pointer font-semibold my-5"
        >
          <NuxtLink :to="`${RouteHelper.MOVIE_DETAILS}${movie.id}`">
            <div class="relative group">
              <img
                :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
                :alt="movie.overview"
                class="w-full object-cover shadow-md opacity-80 group-hover:opacity-20 transition-all duration-300"
              />
              <p
                class="absolute top-10 left-2 opacity-0 line-clamp-4 group-hover:opacity-100 transition-opacity duration-300 text-gray-200 font-medium px-4 text-center"
              >
                {{ movie.overview }}
              </p>
            </div>
            <h2 class="text-sm mb-2 text-center pt-2 min-h-[40px]">
              {{ movie.title }}
            </h2>
          </NuxtLink>
          <div class="w-full flex justify-center">
            <StarsRating :initialRating="movie.vote_average / 2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
import StarsRating from "~/components/homePage/StarsRating.vue";
import { RouteHelper } from "~/helpers/route-helper";
import { useMovieApiStore } from "~/store/apiStore";

definePageMeta({ middleware: "auth" });

const getAllMoviesFromStore = useMovieApiStore();
onMounted(async () => {
  await getAllMoviesFromStore.fetchData();
});
</script>
