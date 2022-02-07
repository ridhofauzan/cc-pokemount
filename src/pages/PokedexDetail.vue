<template>
    <div>
        <Suspense>
            <template #default>
                <PokedexDetail />
            </template>
            <template #fallback>
                <div>Loading Pokemon...</div>
            </template>
        </Suspense>
    </div>
</template>

<script>
import PokedexDetail from './../components/PokedexDetail.vue'
import { ref, onErrorCaptured } from "vue";

export default {
    components: {
        PokedexDetail: PokedexDetail
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