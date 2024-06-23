<template>
  <nav>
    <div class="nav">
        <div>
            <p v-if="user">{{user.displayName}}</p>
            <p class="email" v-if="user">Logged in as {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import getUser from '@/composables/getUser'
import { auth } from '../firebase/config';
import { ref } from 'vue';
export default {
    setup() {
        let error = ref(null);
        let {user} = getUser();
        let logout=async()=>{
            let user_data = auth.currentUser;
            console.log(user_data)
            try {
                await auth.signOut();
                    console.log('User logout');

            } catch (err) {
                error.value=err.message;
                console.log(err.message);
            }
        }

        // auth.onAuthStateChanged((_user) => {
        //     console.log("user state chnge.current user is",_user);
        //     user.value = _user;
        // })
        return{logout,user};
    }
}
</script>

<style>
    .nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 14px;
        color: #999;
    }
</style>