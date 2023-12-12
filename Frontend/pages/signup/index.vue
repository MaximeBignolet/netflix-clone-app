<template>
  <SignUp />
</template>
<script setup lang="ts">
import SignUp from "~/components/login/SignUp.vue";
definePageMeta({ middleware: "is-auth" });
</script>
