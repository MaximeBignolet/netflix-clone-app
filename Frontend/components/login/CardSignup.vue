<template>
  <div class="relative z-20">
    <div
      class="flex flex-col lg:flex-row lg:rounded-xl items-center transition-all hover:scale-105 duration-300 container mx-auto"
    >
      <div
        class="bg-gradient-to-r lg:bg-none from-[#261733] w-full lg:w-auto to-[#151a3f]"
      >
        <SvgPopcorn />
      </div>
      <div
        class="w-full lg:p-7 p-2 flex pb-10 flex-col lg:flex-row lg:justify-between items-start lg:items-center px-5 bg-gradient-to-r from-[#261733] lg:rounded-lg to-[#151a3f] hover:bg-gradient-to-r hover:from-[#472465] hover:to-[#181E53] transition-all duration-300 cursor-pointer"
      >
        <div class="flex flex-col lg:max-h-10 my-3 lg:my-0">
          <h2 class="text-white font-semibold lg:text-xl text-sm">
            Devflix, just the way you like it, for only $5.99.
          </h2>
          <p class="text-white font-semibold text-xs lg:text-base">
            Take advantage of our most economical offer with advertising.
          </p>
        </div>
        <button
          class="bg-gray-500 p-2 text-sm rounded-md text-white font-bold"
          @click="onClickNavigateToRegistrationPage"
        >
          Start now
        </button>
      </div>
    </div>
    <div class="w-full bg-black">
      <div class="p-5 container mx-auto">
        <h2 class="font-bold lg:text-xl">Even more reason to subscribe</h2>
        <div class="flex flex-col lg:grid lg:grid-cols-4 pt-5 gap-5">
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg flex flex-col justify-between to-[#200E19] p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">Watch Devflix on your TV.</h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Watch Devflix on your Smart TV, PlayStation, Xbox, Chromecast,
              Apple TV, Blu-ray player, and more.
            </p>
            <div class="flex justify-end">
              <TvVue />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">
              Download your shows to watch offline
            </h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Record your favorite shows and always have something to watch.
            </p>
            <div class="flex justify-end">
              <Download />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">Wherever you are</h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Watch unlimited movies and series on your TV, smartphone, tablet,
              and computer.
            </p>
            <div class="flex justify-end">
              <Telescope />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">Create profiles for children</h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Children discover new adventures and reunite with their favorite
              characters in a space all their own, already included in your
              subscription.
            </p>
            <div class="flex justify-end">
              <Children />
            </div>
          </div>
        </div>
        <div class="py-5 lg:w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-lg">What is Devflix ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix is a streaming service that offers a vast selection of
                series, movies, anime, documentaries, and other programs on
                thousands of internet-connected devices.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                Watch whatever you want, whenever you want, at a very attractive
                monthly price. Discover new movies and series each week, there's
                something for everyone!
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="lg:w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-xl">How much is Devflix?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Watch Devflix on your smartphone, tablet, Smart TV, computer, or
                streaming device, all for a fixed monthly fee. Plans range from
                $5.99 to $19.99 per month. No contracts or additional fees.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="py-5 lg:w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-xl">Where can I watch Devflix?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix, it's where you want, when you want. Log in to your
                account to watch Devflix online at Devflix.com from your
                computer or any internet-connected device using the Devflix app,
                such as Smart TVs, smartphones, tablets, streaming players, and
                game consoles.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                You can also download your favorite series with the iOS,
                Android, or Windows 10 app. Download titles to watch on your
                mobile device, even without an internet connection. Take Devflix
                with you wherever you go.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="lg:w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-xl">How can I cancel my bid?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix offers great flexibility. No complicated contracts. No
                commitments. Just two clicks are enough to cancel your account
                online. No cancellation fees: open or close your account at any
                time.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="py-5 lg:w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-xl">What can I watch on Devflix?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix offers an extensive catalog that includes feature films,
                documentaries, series, anime, and award-winning Devflix original
                programs. Watch Devflix as much as you want, whenever you want.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="w-3/4">
          <v-expansion-panels>
            <v-expansion-panel bg-color="#2D2D2D">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="font-bold"
              >
                <p class="text-xl">Is Devflix suitable for children?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix Kids is included in your subscription and offers better
                parental control, as well as a dedicated space for children,
                featuring movies and series suitable for the whole family.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                Youth profiles include parental control features with a PIN code
                that allows you to change the age category of content your
                children can watch and to block specific titles.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="mt-5">
          <SignupForm />
        </div>
        <div class="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TvVue from "../svg/Tv.vue";
import Telescope from "../svg/Telescope.vue";
import Download from "../svg/Download.vue";
import Children from "../svg/Children.vue";
import SignupForm from "~/components/login/SignupForm.vue";
import { RouteHelper } from "~/helpers/route-helper";

const onClickNavigateToRegistrationPage = () => {
  navigateTo(RouteHelper.REGISRATION);
};
</script>

<style lang="css"></style>
