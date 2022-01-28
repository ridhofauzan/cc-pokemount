<template>
    <div class="poke-item">
        <div class="poke-item-box">
            <div class="poke-item__title">
                {{ poke_name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        poke_name: String
    }
}
// import { ref } from 'vue'

// defineProps({
// //   msg: String
// })

// const count = ref(0)
</script>

<style lang="scss">
.poke {
    &-item {
        padding: 5px;
        display: inline-flex;
        &-box {
            padding: 16px;
            width: 100px;
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