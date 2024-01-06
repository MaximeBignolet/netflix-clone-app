<template>
  <div class="bg-gradient-to-r from-[#080A15] to-[#1E2C35] min-h-screen">
    <NavbarVue />
  </div>
</template>

<script setup lang="ts">
import NavbarVue from "~/components/homePage/Navbar.vue";
definePageMeta({ middleware: "auth" });
</script>
