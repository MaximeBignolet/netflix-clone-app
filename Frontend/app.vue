<template>
  <div >
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

useHead({
  link: [{rel: 'icon', type: 'image/png', href:'/favicon.png'}],
  title: 'Netflix Clone App'
})

</script>