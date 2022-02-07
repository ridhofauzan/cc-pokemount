<template>
    <router-link class="poke-item" :to="`/pokedex/${pokemon.name}`">
        <div class="poke-item-box" >
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId + 1}.png`" alt="">
            <div class="poke-item__title">
                {{ convStrCamel(pokemon.name) }}
            </div>
        </div>
        <!-- <ItemDetail v-if=""/> -->
    </router-link>
</template>

<script>
// import ItemDetail from './ItemDetail.vue'
import usePokemonDetail from '@/modules/usePokemonDetail'
import StringFilter from '../mixins/string-filter'
export default {
    mixins: [StringFilter],
    props: {
        pokemon: Object,
        pokeId: Number
    },
    components: {
        // ItemDetail
    },
    async setup(props) {
        const { pokemon_detail, error, load } = usePokemonDetail()

        function showDetail() { 
            load(props.pokemon.name)
        }

        return { pokemon_detail, error, showDetail }
    }
}
</script>

<style lang="scss">
$small: 325px;
$medium: 700px;
.poke {
    &-item {
        padding: 5px;
        display: block;
        text-decoration: none;
        @media screen and (max-width: $small) {
            display: block;
        }
        @media screen and (min-width: $medium) {
            display: inline-flex;                 
        }
        &-box {
            @media screen and (max-width: $small) {
                width: calc(100% - 40px);
            }
            @media screen and (min-width: $medium) {
                width: 100px;               
            }
            text-decoration: none;
            color: #333;
            padding: 16px;
            width: 100%;
            border-radius: 16px;
            background: #ffffff;
            border: none;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            text-transform: capitalize;
        }
    }
}
</style>