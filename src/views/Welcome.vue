<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="show_login_form">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>You are not amenber? <span @click="show_login_form=!show_login_form">create account</span></p>
    </div>
    <div v-else>
      <Signup @enterChatroom="enterChatroom"></Signup>
      <p>Already menber? <span @click="show_login_form=!show_login_form">Login account</span></p>
    </div>
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { Signup, Login },
  setup() {
    let show_login_form = ref(true);
    let router = useRouter();
    let enterChatroom = () => {
      router.push({name:"Chatroom"})
    }

    return  {show_login_form,enterChatroom}
  }

}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
      width: 300px;
      margin: 20px auto;
    }
    .welcome label {
      display: block;
      margin: 20px 0 10px;
    }
    .welcome input {
      width: 90%;
      padding: 10px;
      border-radius: 12px;
      border: 1px solid #eee;
      outline:  none;
      color: #999;
      margin: 10px auto;
    }
    .welcome span {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
    .welcome button {
      margin: 20px auto;
    }
</style>