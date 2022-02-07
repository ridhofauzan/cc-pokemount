<template>
    <div class="poke-detail-box">
        <div class="poke-detail-box-image">
            <img :src="pokemon.sprites.other.home.front_default" :alt="pokemon.name">
        </div>
        <div class="poke-detail-box__name">
            {{ convStrCamel(pokemon.name) }}
        </div>
        <PokedexDetailStatus v-for="status in pokemon.stats" :status="status" :key="status.name" />
    </div>
</template>

<script>
import StringFilter from '../mixins/string-filter'
import PokedexDetailStatus from './PokedexDetailStatus.vue'
export default {
    components: {PokedexDetailStatus},
    mixins: [StringFilter],
    props: {
        pokemon: Object
    },
    setup() {
        
    },
}
</script>

<style lang="scss">
.poke {
    &-detail {
        &-box {
            background: #fff;
            border-radius: 8px;
            margin: 16px;
            width: calc(100% - 64px);
            padding: 16px;
            &-image {
                img {
                    width: 150px;
                    height: 150px;
                    object-fit: contain;
                    margin: 0 auto;
                    display: block;
                }
            }
            &__name {
                color: #333;
                margin-top: 10px;
                text-align: center;
                text-transform: capitalize;
                font-weight: bold;
                font-size: 18px;
            }
        }
        
    }
}
</style>