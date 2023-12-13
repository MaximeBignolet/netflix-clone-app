<script setup lang="ts">
import Navbar from "~/components/homePage/Navbar.vue";
definePageMeta({ middleware: "auth" });
</script>

<template>
  <div class="bg-[url('/home-bg/home-bg.jpeg')] h-screen w-screen object-cover">
    <div>
      <Navbar />
    </div>
    <div></div>
  </div>
</template>

<!-- récupérer une image : https://image.tmdb.org/t/p/w500${path}-->
<!-- récupérer une image : https://image.tmdb.org/t/p/w500/1X7vow16X7CnCoexXh4H4F2yDJv.jpg-->
