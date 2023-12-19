<template>
  <div
    class="h-screen w-screen bg-cover"
    :class="[
      isLargeScreen
        ? 'bg-[url(/home-bg/home-bg.jpeg)]'
        : 'bg-[url(/home-bg/home-bg.png)]',
    ]"
  >
    <Navbar />
    <div v-for="show in tvShowsByNameStore.shows.slice(0, 1)" :key="show.id">
      <div class="container mx-auto py-4">
        <div class="mx-5 mt-16">
          <h3 class="text-white text-4xl lg:text-6xl font-bold">
            {{ show.original_name }}
          </h3>
          <div class="flex flex-col lg:flex-row lg:items-center lg:my-10 gap-5">
            <p class="text-white lg:text-xl font-semibold">
              {{ format(new Date(show.first_air_date), "yyyy") }}
              <span
                class="text-xl font-bold text-white ml-5"
                v-show="isLargeScreen"
                >|</span
              >
            </p>
            <p class="text-white lg:text-xl font-bold">
              DIRECTOR: <span class="text-gray-500">Shawn Levy</span>
              <span
                class="text-xl font-bold text-white ml-5"
                v-show="isLargeScreen"
                >|</span
              >
            </p>
            <p class="text-white font-bold lg:text-xl">
              Seasons: <span class="text-gray-500">3 (5 Episodes)</span>
            </p>
          </div>
          <p class="text-gray-500 mr-10 mt-5 lg:w-2/5">{{ show.overview }}</p>
          <StarsRating :initialRating="show.vote_average / 2" class="pt-2" />
          <HomePageCarouselHome />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import Navbar from "~/components/homePage/Navbar.vue";
import { useTvShowByNameStore } from "~/store/tvShowsByNameStore";
import { useMediaQuery } from "@vueuse/core";
import { format } from "date-fns";
import StarsRating from "~/components/homePage/StarsRating.vue";

definePageMeta({ middleware: "auth" });

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const tvShowsByNameStore = useTvShowByNameStore();

onMounted(async () => {
  await tvShowsByNameStore.fetchData("stranger things");
});
</script>
