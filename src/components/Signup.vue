<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composables/useSignup"
// import { createUserWithEmailAndPassword } from "firebase/auth"; //verson 10
export default {
  emits: ["enterChatroom"],
    setup(props,context) {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let {error,createAccount} = useSignup ()
        let signUp =async () => {
          let res = await createAccount(email.value,password.value,displayName.value)
          if (res) {
            context.emit("enterChatroom")
            console.log(res.user,context)
          }
      // try {
      //   const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
      //   console.log (email.value, password.value)
      //   console.log("User created:", res.user);
      // } catch (error) {
      //   console.error("Error signing up:", error.message);
      // }
    }

        return{displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>