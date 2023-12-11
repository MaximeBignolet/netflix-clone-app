<script setup lang="ts"></script>

<template>
  <p class="text-[#B8B7B5] text-lg font-light">
    Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner
    ou réactiver votre abonnement.
  </p>
  <form method="post">
    <div class="flex items-center mt-2 gap-2">
      <input
        type="email"
        name="email"
        id=""
        placeholder="Adresse email"
        class="placeholder:text-[#B7BAB8] lg:w-72 text-white"
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
