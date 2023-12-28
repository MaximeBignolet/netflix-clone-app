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
            Devflix comme vous l'aimez pour seulement 5,99 €.
          </h2>
          <p class="text-white font-semibold text-xs lg:text-base">
            Profitez de notre offre avec pub, la plus économique.
          </p>
        </div>
        <button class="bg-gray-500 p-2 text-sm rounded-md text-white font-bold">
          Commencer
        </button>
      </div>
    </div>
    <div class="w-full bg-black">
      <div class="p-5 container mx-auto">
        <h2 class="font-bold lg:text-xl">
          Encore plus de raison de vous abonner
        </h2>
        <div class="flex flex-col lg:grid lg:grid-cols-4 pt-5 gap-5">
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg flex flex-col justify-between to-[#200E19] p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">Regardez Devflix sur votre TV</h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Regardez Devflix sur votre Smart TV, PlayStation, Xbox,
              Chromecast, Apple TV, lecteur Blu-ray et bien plus.
            </p>
            <div class="flex justify-end">
              <TvVue />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">
              Téléchargez vos séries pour les regarder hors connexion
            </h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Enregistrez vos programmes préférés et ayez toujours quelque chose
              à regarder.
            </p>
            <div class="flex justify-end">
              <Download />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">Où que vous soyez</h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Regardez des films et séries en accès illimité sur votre TV,
              smartphone, tablette et ordinateur.
            </p>
            <div class="flex justify-end">
              <Telescope />
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-[#1A2145] lg:rounded-lg to-[#200E19] flex flex-col justify-between p-3 rounded-md"
          >
            <h3 class="font-bold text-xl">
              Créez des profils pour les enfants
            </h3>
            <p class="text-gray-200 pt-5 text-sm w-[95%]">
              Les enfants découvrent de nouvelles aventures et retrouvent leurs
              personnages préférés dans un espace bien à eux, déjà inclus dans
              votre abonnement.
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
                <p class="text-lg">Devflix, qu'est-ce que c'est ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix est un service de streaming qui propose une vaste
                sélection de séries, films, animes, documentaires et autres
                programmes sur des milliers d'appareils connectés à Internet.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                Regardez tout ce que vous voulez, quand vous voulez, à un prix
                mensuel très attractif. Découvrez de nouveaux films et séries
                chaque semaine, il y en a pour tous les goûts !
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
                <p class="text-xl">Combien coûte Devflix ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Regardez Devflix sur votre smartphone, tablette, Smart TV,
                ordinateur ou appareil de streaming, le tout pour un tarif
                mensuel fixe. Les offres vont de 5,99 € à 19,99 € par mois. Pas
                de contrat ni de frais supplémentaires.
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
                <p class="text-xl">Où puis-je regarder Devflix ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix, c'est où vous voulez, quand vous voulez. Connectez-vous
                à votre compte pour regarder Devflix en ligne sur Devflix.com
                depuis votre ordinateur ou tout appareil connecté à Internet
                avec l'application Devflix, comme les Smart TV, smartphones,
                tablettes, lecteurs de streaming et consoles de jeu.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                Vous pouvez aussi télécharger vos séries préférées avec
                l'application iOS, Android ou Windows 10. Téléchargez des titres
                pour les regarder sur votre appareil mobile, même sans connexion
                Internet. Emportez Devflix partout avec vous.
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
                <p class="text-xl">Comment puis-je annuler mon offre ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix offre une grande souplesse. Pas de contrat compliqué.
                Sans engagement. Deux clics suffisent pour annuler votre compte
                en ligne. Pas de frais d'annulation : ouvrez ou fermez votre
                compte à tout moment.
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
                <p class="text-xl">Que puis-je regarder sur Devflix ?</p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix propose un vaste catalogue comprenant notamment des
                longs-métrages, des documentaires, des séries, des animes et des
                programmes originaux Devflix primés. Regardez Devflix à volonté,
                quand vous le voulez.
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
                <p class="text-xl">
                  Est-ce que Devflix est adapté aux enfants ?
                </p>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Devflix Jeunesse est inclus dans votre abonnement et offre un
                meilleur contrôle aux parents, ainsi qu'un espace dédié aux
                enfants, avec des films et des séries destinés à toute la
                famille.
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                Les profils Jeunesse comportent des fonctionnalités de contrôle
                parental avec code PIN permettant de modifier la catégorie d'âge
                des contenus que vos enfants peuvent regarder et de bloquer des
                titres spécifiques.
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
</script>

<style lang="css"></style>
