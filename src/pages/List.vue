<template>
    <div>
        <!-- Item List -->
        <ItemList />
    </div>
</template>

<script>
import ItemList from './../components/ItemList.vue'
// import { reactive, toRefs } from 'vue'

export default {
    components: {
        ItemList: ItemList
    }
    // setup () {
    //     const state = reactive({
    //         count: 0,
    //     })
    
    //     return {
    //         ...toRefs(state),
    //     }
    // }
}
</script>

<style lang="scss" scoped>

</style>