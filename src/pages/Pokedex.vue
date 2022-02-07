<template>
    <div>
        <Suspense>
            <template #default>
                <PokedexList />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<script>
import PokedexList from './../components/PokedexList.vue'
import Loading from './../components/Loading.vue'
import { ref, onErrorCaptured } from "vue";

export default {
    components: {
        PokedexList,
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