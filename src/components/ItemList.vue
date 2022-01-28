<template>
    <div class="poke-wrap">
        <ItemBox :poke_name="'bulbasaur'" />
        <ItemBox :poke_name="'bulbasaur'" />
        <ItemBox :poke_name="'bulbasaur'" />
        <ItemBox :poke_name="'bulbasaur'" />
        <ItemBox :poke_name="'bulbasaur'" />
    </div>
</template>

<script>
// import { ref, reactive, onMounted } from 'vue'
import ItemBox from './../components/ItemBox.vue'
        
export default {
    components: {
        ItemBox: ItemBox
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