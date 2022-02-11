<template>
    <div>
        <div class="poke-logo">
            <img class="poke-logo__img" src="./../assets/logo/pokemon.png" alt="">
        </div>
        <h3 class="poke-title" v-if="isLogedIn">Welcome, {{ name }}</h3>
        <ul class="poke-menu">
            <li ><router-link to="/">Pokedex</router-link></li>
            <li v-if="isLogedIn"><a href="#" @click="doLogout">Logout</a></li>
            <li v-if="!isLogedIn"><router-link to="/login">Login</router-link></li>
        </ul> 
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue"
import firebase from 'firebase'

export default {
  setup() {
    const name = ref("")
    const isLogedIn = ref(false)

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;

      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          isLogedIn.value = false
        } else {
          isLogedIn.value = true
        }
      })

      if(user) {
        name.value = user.email.split('@')[0]
      }
    })

    const doLogout = () =>  {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out..."))
        .catch(err => alert(err.message))
    }

    return { name, isLogedIn, doLogout }
  }
}
</script>

<style lang="scss">
.poke {
  &-logo {
    padding: 20px;
    &__img {
      width: 200px;
      margin: 0 auto;
      display: block;
    }
  }
  &-title {
    text-align: center;
  }
  &-menu {
    margin-top: 20px;
    margin: 0 auto;
    padding: 0;
    display: table;
    li {
      display: inline-flex;
      flex-wrap: wrap;
      padding: 16px 32px;
      color: #FFFFFF;
      a {
        color: #FFFFFF;
        text-decoration: none;
      }
      &:hover {
        background: #c4ead8;
        border-radius: 4px;
        color: #43b781;
        cursor: pointer;
        a {
          color: #43b781;
        }
      }
    }
  }
}
</style>