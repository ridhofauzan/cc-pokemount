import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(Router, VueAxios, axios).mount('#app')
