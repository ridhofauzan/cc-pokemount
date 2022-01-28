<template>
    <div class="poke-wrap">
        <ItemBox v-for="(v, index) in state_pokemon.data" :poke_name="state_pokemon.data.name" :key="index" />
    </div>
</template>

<script>
// import { ref, reactive, onMounted } from 'vue'
import ItemBox from './../components/ItemBox.vue'
import usePokemon from '@/modules/usePokemon'
        
export default {
    components: {
        ItemBox: ItemBox
    },
    setup() {
        const { state_pokemon } = usePokemon()

        return { state_pokemon }
    }
}
</script>

<style lang="scss">
.poke {
    &-wrap {
        width: 426px;
        margin: 20px auto;
    }
    
}
</style>