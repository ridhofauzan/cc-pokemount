import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
import Login from './pages/Login.vue'
import List from './pages/List.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
         {path: '/', name: "login", component: List},
         {path: '/list', name: "list", component: List},
    ]
})

createApp(App).mount('#app')
