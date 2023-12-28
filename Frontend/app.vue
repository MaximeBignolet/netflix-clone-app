<template>
  <div>
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  title: "Devflix Clone App",
});
</script>
