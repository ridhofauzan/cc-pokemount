<template>
    <div>
        <Suspense>
            <template #default>
                <PokedexDetail />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<script>
import PokedexDetail from './../components/PokedexDetail.vue'
import Loading from './../components/Loading.vue'
import { ref, onErrorCaptured } from "vue";

export default {
    components: {
        PokedexDetail,
        Loading
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