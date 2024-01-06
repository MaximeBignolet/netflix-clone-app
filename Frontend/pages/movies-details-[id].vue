<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
    <div class="container mx-auto">
      <div class="text-white cursor-pointer font-semibold my-5 mx-5 lg:mx-0">
        <h2 class="mb-2 text-2xl">
          {{ getMoviesById.movie?.title }}
        </h2>
        <div class="lg:flex gap-5">
          <img
            :src="`https://image.tmdb.org/t/p/w500${getMoviesById.movie?.poster_path}`"
            :alt="getMoviesById.movie?.overview"
            class="object-cover max-h-screen rounded-md shadow-md"
          />
          <div>
            <p class="lg:text-xl lg:w-2/3 pt-5">
              {{ getMoviesById.movie?.overview }}
            </p>
            <div
              v-for="movieVideo in getMoviesVideos.movieVideos?.results.slice(
                0,
                1
              )"
              :key="movieVideo.id"
              class="pt-16"
            >
              <iframe
                width="80%"
                height="580"
                :src="`https://www.youtube.com/embed/${movieVideo.key}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
import { useMovieVideoByIdStore } from "~/store/getMovieVideos";
import { useMovieByIdStore } from "~/store/movieByIdStore";
definePageMeta({ middleware: "auth" });

const route = useRoute();

const getMoviesById = useMovieByIdStore();
const getMoviesVideos = useMovieVideoByIdStore();
const movieId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
});

onMounted(async () => {
  if (!isNaN(movieId.value)) {
    await getMoviesById.fetchData(movieId.value);
    await getMoviesVideos.fetchData(movieId.value);
  }
});
</script>
