<template>
    <div class="poke-wrap">
        <PokeRegister />
    </div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
import PokeRegister from '@/components/PokeRegister.vue'

export default {
    components: {
        PokeRegister
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