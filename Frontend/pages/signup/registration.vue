<template>
  <div class="flex items-center justify-between mt-5 lg:pl-10">
    <NetlixTitle />
    <div
      class="flex justify-end pr-2 font-bold lg:mt-5 -mt-2 cursor-pointer lg:text-xl lg:mr-5"
    >
      <p @click="onClickNavigateToLoginPage" class="z-20">S'identifier</p>
    </div>
  </div>
  <div class="border-b pt-20"></div>
  <RegistrationForm />
</template>

<script setup lang="ts">
import { RouteHelper } from "~/helpers/route-helper";
import RegistrationForm from "~/components/login/RegistrationForm.vue";

const onClickNavigateToLoginPage = () => {
  navigateTo(RouteHelper.LOGIN);
};
</script>
