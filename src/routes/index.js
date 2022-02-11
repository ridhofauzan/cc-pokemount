import { createWebHistory, createRouter } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Pokedex from '../pages/Pokedex.vue'
import PokedexDetail from '../pages/PokedexDetail.vue'

const routes = [
    {
        path: "/",
        name: "Pokedex",
        component: Pokedex,
        meta: {
            title: "POKEMOUNT | Pokedex"
        }
    },
    {
        path: "/pokedex/:pokeId",
        props: true,
        component: PokedexDetail,
        meta: {
            title: "POKEMOUNT | Pokedex"
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "POKEMOUNT | Login"
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "POKEMOUNT | Register"
        },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from, next) => {
    // const isAuth = JSON.parse(localStorage.getItem('authenticated'));
    document.title = `${to.meta.title}`;
    // if(to.name !== "Login" && !isAuth) next({ name: "Login" });
    // if(to.name === "Login" && isAuth) next({ name: "Pokedex" });
     next();
    
});

export default router