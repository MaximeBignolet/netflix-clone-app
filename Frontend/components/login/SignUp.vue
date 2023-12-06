<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SignupForm from "~/components/login/SignupForm.vue";
</script>

<template>
  <div class="z-20">
    <NetlixTitle />
  </div>
  <div class="relative">
    <v-carousel height="" hide-delimiters show-arrows="hover">
      <v-carousel-item src="/carousel-signup/signup_bg.png" cover class="z-0">
        <div class="h-full flex flex-col justify-center">
          <h2 class="text-white text-5xl w-1/3 pl-28 font-semibold">
            Films et séries en illimité, et bien plus
          </h2>
          <p class="text-white text-xl w-1/3 pl-28 font-semibold mt-5">
            À partir de 5,99€. Annulez à tout moment.
          </p>
          <SignupForm />
        </div>
      </v-carousel-item>
      <v-carousel-item
        src="/carousel-signup/christmas_series.png"
        cover
        class="z-0"
      >
        <div class="h-full flex flex-col justify-center">
          <div>
            <p
              class="text-lg ml-28 bg-[#040F03]/50 rounded-lg w-fit p-2 font-semibold"
            >
              <font-awesome-icon icon="fire" class="text-[#FF8A15] mr-2" /><span
                class="text-white"
                >Tendances actuelles</span
              >
            </p>
            <img
              src="/carousel-signup/carousel-christmas-paragraph.webp"
              alt="Fête de Noël"
              class="h-20 pl-28 my-3"
            />
            <p class="text-white text-base my-3 w-[38%] pl-28 mt-5">
              Lorsqu'un coup du destin réunit leurs familles pour Noël,
              Charlotte saisit l'occasion de démontrer que la vie de sa vieille
              amie Jackie est trop belle pour être vraie.
            </p>
          </div>
          <SignupForm />
        </div>
      </v-carousel-item>
      <v-carousel-item
        src="/carousel-signup/the_crown.jpeg"
        fill
        class="z-0"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
