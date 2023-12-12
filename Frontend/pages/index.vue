<script setup lang="ts">
import Navbar from "~/components/homePage/Navbar.vue";
import { useMovieApiStore } from "~/store/apiStore";

definePageMeta({ middleware: "auth" });

const movieApiStore = useMovieApiStore();

onMounted(async () => {
  await movieApiStore.fetchData();
});
</script>

<template>
  <div>
    <Navbar />
  </div>
</template>

<!-- récupérer une image : https://image.tmdb.org/t/p/w500${path}-->
