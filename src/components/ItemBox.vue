<template>
    <div class="poke-item" @click="showDetail">
        <div class="poke-item-box" >
            <div class="poke-item__title">
                {{ pokemon.name }}
            </div>
        </div>
        <!-- <ItemDetail v-if=""/> -->
    </div>
</template>

<script>
// import ItemDetail from './ItemDetail.vue'
import usePokemonDetail from '@/modules/usePokemonDetail'
export default {
    props: {
        pokemon: Object
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
            padding: 16px;
            width: 100%;
            border-radius: 8px;
            background: #ffffff;
            box-shadow: 2px 2px 5px #888888;
            border: none;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            text-transform: capitalize;
        }
    }
}
</style>