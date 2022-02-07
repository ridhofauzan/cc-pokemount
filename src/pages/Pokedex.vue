<template>
    <div>
        <Suspense>
            <template #default>
                <PokedexList />
            </template>
            <template #fallback>
                <div>Loading Pokemon...</div>
            </template>
        </Suspense>
    </div>
</template>

<script>
import PokedexList from './../components/PokedexList.vue'
import { ref, onErrorCaptured } from "vue";

export default {
    components: {
        PokedexList: PokedexList
    },
    setup() {
        const error = ref(null);
        onErrorCaptured(e => {
            error.value = e;
        });
        return { error };
    },
}
</script>

<style lang="scss" scoped>

</style>