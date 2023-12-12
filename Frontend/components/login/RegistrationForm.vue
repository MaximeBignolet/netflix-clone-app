<template>
  <div class="container mx-auto p-3">
    <div class="lg:flex lg:flex-col lg:items-center">
      <h2 class="text-lg lg:text-xl font-bold mt-10">
        Créer un mot de passe pour vous inscrire
      </h2>
      <p class="text-lg">
        Plus que quelques étapes et c'est fini ! Plus rien à remplir.
      </p>
      <form method="post" @submit.prevent="handleSubmit" class="lg:w-1/3">
        <div class="border rounded-md mt-5">
          <label for="email-registration"></label>
          <input
            type="email"
            name="email-registration"
            id="email-registration"
            class="h-10 lg:h-14 w-full"
            :value="email"
          />
        </div>
        <div class="border rounded-md mt-5">
          <label for="password-registration"></label>
          <input
            type="password"
            name="password-registration"
            id="password-registration"
            class="h-10 lg:h-14 w-full"
            placeholder="Entrez votre mot de passe ici"
            required
            v-model="formData.password"
          />
        </div>
        <button
          type="submit"
          class="text-center text-white text-xl bg-[#E50914] p-1 shadow rounded lg:w-44 mt-5"
        >
          S'inscrire
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteHelper } from "~/helpers/route-helper";
import { useEmailStore } from "~/store/emailStore";
import { useFetch } from "#app";

const store = useEmailStore();
const email = computed(() => store.email);

const formData = ref({
  password: "",
});

async function handleSubmit() {
  try {
    await useFetch("http://localhost:5000/api/auth/signup", {
      method: "post",
      body: {
        email: email.value,
        password: formData.value.password,
      },
    }).then((res: any) => res);

    navigateTo(RouteHelper.LOGIN);
  } catch (e) {
    console.log(e);
  }
}
</script>
