<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="!bg-gray-200 !w-10 !aspect-square !rounded-full !flex !justify-center !items-center !cursor-pointer"
        >
          <font-awesome-icon icon="user" size="lg" class="text-gray-500" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: "Mon profil" },
  { title: "Paramètres" },
  { title: "Confidentialité" },
];
</script>
