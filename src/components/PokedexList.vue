<template>
    <div class="poke-wrap">
        <div v-if="error">{{ error }}</div>
        <AsyncPokemon v-for="(pokemon, index) in pokemons.results" :pokemon="pokemon" :key="index" :pokeId="index" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import usePokemon from '@/modules/usePokemon'
        
const AsyncPokemon = defineAsyncComponent({
  loader: () => import("./PokedexBox.vue" /* webpackChunkName: "user" */),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

export default {
    name: "PokedexList",
    components: {
        AsyncPokemon
    },
    async setup() {
        const { pokemons, error, load } = usePokemon()

        await load();

        return { pokemons, error }
    }
}
</script>

<style lang="scss">
$small: 325px;
$medium: 700px;
.poke {
    &-wrap {
        max-width: 100%;
        display: block;
        clear: both;
        &::after {
            content: "";
            display: block;
            clear: both;
        }
        @media screen and (max-width: $small) {
            max-width: 100%;
        }
        @media screen and (min-width: $medium) {
            max-width: 426px;                  
        }
       
        margin: 20px auto;
    }
    
}
</style>