<script setup lang="ts">
import Navbar from "~/components/homePage/Navbar.vue";
import { useMovieByIdStore } from "~/store/movieByIdStore";

definePageMeta({ middleware: "auth" });

const movieByIdApiStore = useMovieByIdStore();

onMounted(async () => {
  await movieByIdApiStore.fetchData(466420);
});
</script>

<template>
  <div>
    <Navbar />
  </div>
  {{ movieByIdApiStore.movie?.title }}
</template>

<!-- récupérer une image : https://image.tmdb.org/t/p/w500${path}-->
<!-- récupérer une image : https://image.tmdb.org/t/p/w500/1X7vow16X7CnCoexXh4H4F2yDJv.jpg-->
