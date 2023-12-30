<template>
  <div class="flex gap-1">
    <div v-for="(star, index) in starsArray" :key="index">
      <FontAwesomeIcon
        v-if="star.type === 'full'"
        :icon="faStar"
        class="text-yellow"
      />
      <FontAwesomeIcon
        v-else-if="star.type === 'half'"
        :icon="faStarHalf"
        class="text-yellow"
      />
      <FontAwesomeIcon v-else :icon="falStar" />
    </div>
  </div>
</template>

<script setup lang="tsx">
import { faStar, faStarHalf } from "@fortawesome/pro-solid-svg-icons";
import { faStar as falStar } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineProps, ref } from "vue";

const props = defineProps({
  initialRating: {
    type: Number,
    default: 0,
  },
  stars: {
    type: Number,
    default: 5,
  },
});

const starsArray = ref<any[]>([]);

const initializeStars = () => {
  const fullStars = Math.floor(props.initialRating);
  const halfStars = props.initialRating - fullStars >= 0.25 ? 1 : 0;
  const emptyStars = props.stars - fullStars - halfStars;

  starsArray.value = [
    ...Array(fullStars).fill({ type: "full" }),
    ...(halfStars > 0 ? [{ type: "half" }] : []),
    ...Array(emptyStars).fill({ type: "empty" }),
  ];
};

initializeStars();
</script>
