<script setup lang="ts">
import { RouteHelper } from "~/helpers/route-helper";
import { useEmailStore } from "~/store/emailStore";

const store = useEmailStore();
const email = computed({
  get: () => store.email,
  set: (value) => store.setEmail(value),
});

const onClickGoToRegistration = () => {
  navigateTo(RouteHelper.REGISRATION);
};
</script>

<template>
  <p class="text-[#C9C8C7] text-lg font-light">
    Prêt à regarder Devflix ? Saisissez votre adresse e-mail pour vous abonner
    ou réactiver votre abonnement.
  </p>
  <form method="post" @submit.prevent="onClickGoToRegistration">
    <div class="flex items-center mt-2 gap-2">
      <input
        type="email"
        name="email"
        id=""
        placeholder="Adresse email"
        class="placeholder:text-[#B7BAB8] lg:w-72 text-white"
        required
        v-model="email"
      />
      <button
        type="submit"
        class="text-center text-white text-2xl bg-[#E50914] p-1.5 shadow rounded lg:w-44"
      >
        Commencer
      </button>
    </div>
  </form>
</template>

<style scoped lang="css">
input[type="email"] {
  border: 1px solid #5e615f;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  background-color: rgb(18, 25, 18);
}
</style>
