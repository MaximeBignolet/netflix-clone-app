<script setup lang="ts">
import {RouteHelper} from "~/helpers/route-helper";
const email= ref<string>('')
const password= ref<string>('')

const user = {
  email: "max@max.fr",
  password: 'password'
}

const handleSubmit = () => {
  if(email.value === user.email && password.value === user.password){
    navigateTo(RouteHelper.HOME)
  }
}

</script>

<template>
  <div>
    <div class="container mx-auto flex flex-col justify-center h-screen w-1/4">
      <div class="bg-black/80 rounded p-20">
      <p class="lg:text-white lg:font-semibold text-4xl">Sign In</p>
        <form @submit.prevent="handleSubmit" method="post">
          <div class="lg:flex lg:flex-col gap-2">
          <label for="email"></label>
          <input type="email" v-model="email" name="email" id="email" placeholder="Entrez votre addresse e-mail" class="rounded mt-10 h-12 w-full bg-gray-950 text-white placeholder:pl-2"/>
          </div>
          <div class="lg:flex lg:flex-col gap-2">
            <label for="password"></label>
            <input type="password"  v-model="password" name="password" id="password" placeholder="Password" class="rounded h-12  bg-gray-950 w-full text-white placeholder:pl-3"/>
          </div>
          <button type="submit" class="text-center text-white text-2xl bg-[#E50914] p-1 rounded mt-8 w-full">Sign In</button>
          <br>
          <div class="flex items-center mt-3 justify-between">
            <div>
              <input type="checkbox" name="rememberMe" id="rememberMe"  />
              <label for="rememberMe" class="text-gray-500 ml-2 text-xs">Remember me</label>
            </div>
            <div>
              <p class=" underline cursor-pointer text-gray-500 text-xs">Need help ?</p>
            </div>
          </div>
        </form>
        <div class="mt-14">
          <p class="text-gray-500 text-xs">New to Netflix ? <span class="text-white cursor-pointer">Sign up now</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
