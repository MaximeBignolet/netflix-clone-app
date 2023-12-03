<template>
  <div>
    <NetlixTitle/>
    <LoginModal/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import LoginModal from "~/components/login/LoginModal.vue";

definePageMeta({layout: 'login', middleware:'auth'})

</script>;
