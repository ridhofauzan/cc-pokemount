<template>
    <div class="poke-detail-box">
        {{ pokemon.name }}
    </div>
</template>

<script>
export default {
    props: {
        pokemon: Object
    },
    setup() {
        
    },
}
</script>