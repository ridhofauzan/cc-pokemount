import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqzxFVVcATWX0Prj4CGicaNFCOVe5tYTI",
    authDomain: "vue-pokemon-dex.firebaseapp.com",
    projectId: "vue-pokemon-dex",
    storageBucket: "vue-pokemon-dex.appspot.com",
    messagingSenderId: "270306778642",
    appId: "1:270306778642:web:60156d4c793136f5ca42cb"
  };

firebase.initializeApp(firebaseConfig);

createApp(App).use(Router, VueAxios, axios).mount('#app')
