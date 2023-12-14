<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="!bg-gray-200 !aspect-square !rounded-full !flex !justify-center !items-center !cursor-pointer"
        >
          <font-awesome-icon icon="user" size="lg" class="text-gray-500" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title @click="handleItemClick(item)">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: "My profil" },
  { title: "Settings" },
  { title: "Confidentiality" },
  { title: "Logout", id: 4 },
];

const logout = () => {
  const token = useCookie("token");
  token.value = "";
  window.location.reload();
};

const handleItemClick = (item: any) => {
  if (item.id === 4) {
    logout();
  }
};
</script>
