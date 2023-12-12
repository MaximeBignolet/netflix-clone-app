<template>
  <div>
    <div class="z-0">
      <NetlixTitle />
      <LoginModal />
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";
import LoginModal from "~/components/login/LoginModal.vue";

definePageMeta({ layout: "login", middleware: "is-auth" });
</script>
