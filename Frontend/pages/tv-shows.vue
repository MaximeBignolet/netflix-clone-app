<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
    <div class="container mx-auto">
      <div class="mt-10 mx-4">
        <h2 class="text-white font-bold text-4xl">TV Shows</h2>
        <p class="text-white pt-4 lg:w-1/3 w-full">
          Whether they're thrilling, humorous, heartfelt, or adventurous, TV
          series have a unique way of immersing us in their worlds. With an
          endless array of genres and stories, there's always a new journey
          waiting at the click of a button!
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-4 gap-5 my-10 mx-4">
        <div
          v-for="tvShows in tvShowsFromStore.tvShows?.results"
          class="text-white cursor-pointer font-semibold my-5"
        >
          <div class="relative group">
            <img
              :src="`https://image.tmdb.org/t/p/w500${tvShows.backdrop_path}`"
              :alt="tvShows.overview"
              class="anim_container w-full object-cover shadow-md opacity-80 group-hover:opacity-20 transition-all duration-300"
            />
            <p
              class="overview_anim absolute top-10 left-2 opacity-0 line-clamp-4 group-hover:opacity-100 transition-opacity duration-300 text-gray-200 font-medium px-4 text-center"
            >
              {{ tvShows.overview }}
            </p>
          </div>
          <h2 class="text-sm mb-2 text-center pt-2 min-h-[45px]">
            {{ tvShows.name }}
          </h2>
          <div class="w-full flex justify-center" v-if="tvShows.vote_average">
            <v-tooltip :text="`(${tvShows.vote_count}) reviews`">
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="bg-transparent border-none">
                  <StarsRating :initialRating="tvShows.vote_average / 2" />
                </div>
              </template>
            </v-tooltip>
          </div>
          <div v-else class="w-full flex justify-center">
            <p>No reviews yet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
import StarsRating from "~/components/homePage/StarsRating.vue";
import { useTvShowsStore } from "~/store/getAllTvShows";
definePageMeta({ middleware: "auth" });

const tvShowsFromStore = useTvShowsStore();
onMounted(async () => {
  await tvShowsFromStore.fetchData();
});
</script>
