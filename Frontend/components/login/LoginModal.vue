<script setup lang="ts">
import { useCookie, useFetch } from "#app";
import { RouteHelper } from "~/helpers/route-helper";
import Footer from "~/components/Footer.vue";

const formData = ref({
  email: "",
  password: "",
});

const token = useCookie("token");
async function handleSubmit() {
  try {
    await useFetch("http://localhost:5000/api/auth/login", {
      method: "post",
      body: {
        email: formData.value.email,
        password: formData.value.password,
      },
    }).then((res: any) => (token.value = res.data.value.token));
    if (token.value) {
      navigateTo(RouteHelper.HOME);
    }
  } catch (e) {
    console.log(e);
  }
}

const onClickOnSignupNow = () => {
  navigateTo(RouteHelper.SIGNUP);
};
</script>

<template>
  <div class="lg:h-screen lg:flex lg:flex-col lg:justify-between">
    <div class="p-10 lg:flex lg:justify-center lg:items-center h-full lg:p-0">
      <div class="bg-black/80 mt-20 lg:w-1/4 lg:p-10">
        <p class="text-white p-5 text-4xl font-bold">Sign In</p>
        <form method="post" @submit.prevent="handleSubmit" class="px-4">
          <div class="flex flex-col">
            <label for="email"></label>
            <input
              type="email"
              v-model="formData.email"
              name="email"
              id="email"
              placeholder="Entrez votre addresse e-mail"
              class="rounded mt-3 h-12 bg-[#333] text-white placeholder:pl-2 placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col mt-3">
            <label for="password"></label>
            <input
              type="password"
              v-model="formData.password"
              name="password"
              id="password"
              placeholder="Password"
              class="rounded h-12 bg-[#333] text-white placeholder:pl-3 placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col">
            <button
              type="submit"
              class="text-center text-white text-2xl bg-[#E50914] p-1 rounded mt-8"
            >
              Sign In
            </button>
          </div>
          <br />
          <div class="flex items-center mt-3 justify-between">
            <div class="flex items-center">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label for="rememberMe" class="text-gray-500 ml-2 text-xs"
                >Remember me</label
              >
            </div>
            <div>
              <p class="underline cursor-pointer text-gray-500 text-xs">
                Need help ?
              </p>
            </div>
          </div>
        </form>
        <div class="p-3 mt-3">
          <p class="text-gray-500 text-xs">
            New to Netflix ?
            <span
              class="text-white cursor-pointer underline"
              @click="onClickOnSignupNow"
              >Sign up now</span
            >
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
