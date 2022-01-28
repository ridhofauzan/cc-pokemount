import { createWebHistory, createRouter } from 'vue-router'

// import Login from '../pages/Login.vue'
import List from '../pages/List.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: List
    },
    {
        path: "/list",
        name: "List",
        component: List
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router