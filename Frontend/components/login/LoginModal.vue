<script setup lang="ts">
import {useCookie, useFetch} from "#app";
import {RouteHelper} from "~/helpers/route-helper";
import Footer from "~/components/Footer.vue";

const formData = ref({
  email: '',
  password: ''

})

const token = useCookie('token')
async function handleSubmit(){
  try{
   await useFetch('http://localhost:5000/api/auth/login', {
    method: 'post',
    body: {
      email: formData.value.email,
      password: formData.value.password
    },
  }).then((res: any) => token.value = res.data.value.token)
    if(token.value){
      navigateTo(RouteHelper.HOME)
    }
  }catch(e) {
    console.log(e)
  }
}

const onClickOnSignupNow = () => {
  navigateTo(RouteHelper.SIGNUP)
}

</script>

<template>
  <div class="lg:h-screen">
    <div class="container mx-auto flex flex-col h-[80%] justify-center  lg:w-1/4">
      <div class="bg-black/80 rounded p-20">
      <p class="text-white lg:font-semibold text-4xl">Sign In</p>
        <form  method="post" @submit.prevent="handleSubmit">
          <div class="lg:flex lg:flex-col">
          <label for="email"></label>
          <input type="email" v-model="formData.email" name="email" id="email" placeholder="Entrez votre addresse e-mail" class="rounded mt-10 h-12 w-full bg-[#333] text-white placeholder:pl-2 placeholder:text-xs"/>
          </div>
          <div class="lg:flex lg:flex-col gap-2 mt-3">
            <label for="password"></label>
            <input type="password"  v-model="formData.password" name="password" id="password" placeholder="Password" class="rounded h-12  bg-[#333] w-full text-white placeholder:pl-3 placeholder:text-xs"/>
          </div>
          <button type="submit" class="text-center text-white text-2xl bg-[#E50914] p-1 rounded mt-8 w-full">Sign In</button>
          <br>
          <div class="flex items-center mt-3 justify-between">
            <div class="flex items-center">
              <input type="checkbox" name="rememberMe" id="rememberMe"  />
              <label for="rememberMe" class="text-gray-500 ml-2 text-xs">Remember me</label>
            </div>
            <div>
              <p class=" underline cursor-pointer text-gray-500 text-xs">Need help ?</p>
            </div>
          </div>
        </form>
        <div class="mt-14">
          <p class="text-gray-500 text-xs">New to Netflix ? <span class="text-white cursor-pointer underline" @click="onClickOnSignupNow">Sign up now</span></p>
        </div>
      </div>
    </div>
  <Footer />
  </div>
</template>
