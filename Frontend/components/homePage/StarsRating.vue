<template>
  <div class="star-rating flex gap-1">
    <span v-for="star in totalStars" :key="star" class="star">
      <font-awesome-icon
        :class="{ 'full-star': star <= rating, 'empty-star': star > rating }"
        icon="star"
      />
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  initialRating: {
    type: Number,
    default: 0,
  },
  totalStars: {
    type: Number,
    default: 5,
  },
});

const rating = ref(props.initialRating);
</script>
<style scoped>
.star-rating .star {
  color: gold;
  cursor: pointer;
}

.star-rating .star .empty-star {
  opacity: 0.4;
}
</style>
