// store/emailStore.js
import { defineStore } from "pinia";

export const useEmailStore = defineStore("emailStore", {
  state: () => ({
    email: "",
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
  },
});
