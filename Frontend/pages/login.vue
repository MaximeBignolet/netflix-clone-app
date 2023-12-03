<template>
  <div>
    <div class="z-0">
    <NetlixTitle/>
    <LoginModal/>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import LoginModal from "~/components/login/LoginModal.vue";
import Footer from "~/components/Footer.vue";

definePageMeta({layout: 'login'})

</script>;
P