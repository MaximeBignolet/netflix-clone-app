<template>
  <div>
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between container mx-auto py-4"
    >
      <div
        class="flex lg:justify-center justify-between pt-2 items-center lg:block cursor-pointer"
        @click="onClickGetBackToHome"
      >
        <NetlixTitle />
        <div v-show="!isLargeScreen">
          <User />
        </div>
      </div>
      <div class="lg:w-1/2">
        <nav>
          <ul
            class="flex justify-center lg:gap-10 gap-5 mt-4 text-sm lg:text-xl text-gray-400"
          >
            <li>
              <NuxtLink :to="RouteHelper.HOME" activeClass="text-white"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="RouteHelper.TV_SHOWS" activeClass="text-white"
                >TV Shows</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="RouteHelper.MOVIES" activeClass="text-white"
                >Movies</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="RouteHelper.MY_LIST" activeClass="text-white"
                >My List</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="RouteHelper.CATEGORY" activeClass="text-white"
                >Category</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div v-show="isLargeScreen">
        <User />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteHelper } from "~/helpers/route-helper";
import User from "./User.vue";

const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const onClickGetBackToHome = () => {
  navigateTo(RouteHelper.HOME);
};
</script>
