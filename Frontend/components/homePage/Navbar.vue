<template>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <NetlixTitle />
    </div>
    <nav>
      <ul class="flex justify-around mt-4 text-sm">
        <li><NuxtLink :to="RouteHelper.HOME">Home</NuxtLink></li>
        <li><NuxtLink :to="RouteHelper.TV_SHOWS">TV Shows</NuxtLink></li>
        <li><NuxtLink :to="RouteHelper.MOVIES">Movies</NuxtLink></li>
        <li>
          <NuxtLink :to="RouteHelper.NEW_AND_POPULAR">New / Popular</NuxtLink>
        </li>
        <li><NuxtLink :to="RouteHelper.MY_LIST">My List</NuxtLink></li>
        <li><NuxtLink :to="RouteHelper.CATEGORY">Category</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouteHelper } from "~/helpers/route-helper";
</script>
