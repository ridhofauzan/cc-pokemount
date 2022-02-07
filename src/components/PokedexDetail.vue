<template>
    <div class="poke-wrap">
        <!-- {{ pokemon_detail.name }} -->
        <AsyncPokemonDetail :pokemon="pokemon_detail" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
// import usePokemonDetail from '@/modules/usePokemonDetail'
import { useRoute } from 'vue-router'

const AsyncPokemonDetail = defineAsyncComponent({
  loader: () => import("./PokedexDetailBox.vue"),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});
export default {
    name: "PokedexDetail",
    components: {
        AsyncPokemonDetail
    },
    async setup() {
        const { 
            params: { pokeId },
        } = useRoute()

        // const { pokemon_detail, error, load } = usePokemonDetail()

        // load(pokeId)

        // return { pokemon_detail, error }
        const pokemon_detail = await fetch("https://pokeapi.co/api/v2/pokemon/" + 
            pokeId, {
              method: "get",
            }).then(r => r.json());

        return { pokemon_detail }
    }
}
</script>

<style lang="scss">
.poke {
    
}
</style>