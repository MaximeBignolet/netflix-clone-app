<template>
  <div>
    <div class="z-20 relative">
      <NetlixTitle class="absolute top-10 h-20 w-auto lg:pl-5" />
      <p
        class="bg-[#E50914] shadow text-white lg:p-1.5 p-1 lg:text-lg text-sm font-bold rounded-md lg:w-1/12 absolute lg:right-8 lg:top-16 right-2 top-16 cursor-pointer text-center"
        @click="onClickNavigateToLoginPage"
      >
        Login
      </p>
    </div>
    <div class="relative">
      <div
        class="absolute bottom-1/4 z-20 mx-4 lg:pl-28 lg:bottom-[27%] lg:w-2/3"
      >
        <SignupForm />
      </div>
      <v-carousel
        height="1024"
        hide-delimiters
        :show-arrows="false"
        cycle
        :interval="4000"
      >
        <v-carousel-item src="/carousel-signup/signup_bg.png" cover class="z-0">
          <div class="h-full flex flex-col justify-center mx-3">
            <h2
              class="text-white lg:text-5xl text-2xl lg:w-1/3 lg:pl-28 font-semibold"
            >
              Unlimited movies and series, and much more.
            </h2>
            <p
              class="text-white lg:text-xl lg:w-1/3 lg:pl-28 font-semibold mt-5"
            >
              Starting at $5.99. Cancel at any time."
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item
          src="/carousel-signup/christmas_series.webp"
          cover
          class="z-0"
        >
          <div class="h-full flex flex-col justify-center mx-3">
            <div>
              <p
                class="text-lg lg:ml-28 bg-[#040F03]/50 rounded-lg w-fit p-2 font-semibold"
              >
                <font-awesome-icon
                  icon="fire"
                  class="text-[#FF8A15] mr-2"
                /><span class="text-white">Current trends</span>
              </p>
              <img
                src="/carousel-signup/carousel-christmas-paragraph.webp"
                alt="Fête de Noël"
                class="h-20 lg:pl-28 my-3"
              />
              <p class="text-white text-base my-3 lg:w-[38%] lg:pl-28 mt-5">
                When fate brings their families together for Christmas,
                Charlotte seizes the opportunity to prove that her old friend
                Jackie's life is too good to be true.
              </p>
            </div>
            <div class="lg:w-2/5 lg:pl-28 mt-2"></div>
          </div>
        </v-carousel-item>
        <v-carousel-item
          src="/carousel-signup/the_crown.webp"
          cover
          class="z-0"
        >
          <div class="h-full flex flex-col justify-center mx-3">
            <div>
              <p
                class="text-lg lg:ml-28 bg-[#040F03]/50 rounded-lg w-fit p-2 font-semibold"
              >
                <font-awesome-icon
                  icon="fire"
                  class="text-[#FF8A15] lg:mr-2"
                /><span class="text-white">Current trends</span>
              </p>
              <img
                src="/carousel-signup/the_crown_paragraph.webp"
                alt="Fête de Noël"
                class="lg:pl-28 h-14 py-3"
              />
              <p class="text-white text-base my-3 lg:w-[38%] lg:pl-28 mt-5">
                Inspired by real events, this adaptation recounts the story of
                Queen Elizabeth II, highlighting the political and personal
                events that have marked her reign.
              </p>
            </div>
            <div class="lg:w-2/5 lg:pl-28 mt-2"></div>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div
        class="absolute z-10 lg:h-[252px] lg:w-[130%] w-full lg:left-[-15%] -bottom-36 after-signup"
      ></div>
      <div
        class="absolute z-10 lg:h-[250px] lg:w-[130%] ] w-full lg:left-[-15%] -bottom-36 signup"
      ></div>
    </div>
    <CardSignup />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SignupForm from "~/components/login/SignupForm.vue";
import { RouteHelper } from "~/helpers/route-helper";
import CardSignup from "./CardSignup.vue";
const onClickNavigateToLoginPage = () => {
  navigateTo(RouteHelper.LOGIN);
};
</script>

<style lang="css">
.after-signup,
.signup {
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  background: radial-gradient(
      50% 500% at 50% -420%,
      rgba(64, 97, 231, 0.4) 80%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    black;
}

.after-signup::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  background: linear-gradient(
    to right,
    rgba(33, 13, 22, 1) 16%,
    rgba(184, 40, 105, 1),
    rgba(229, 9, 20, 1),
    rgba(184, 40, 105, 1),
    rgba(33, 13, 22, 1) 84%
  );
}
</style>
