<template>
    <div class="poke-status">
        <div class="poke-status__label">{{ status.stat.name }} <strong>{{status.base_stat}}</strong></div>
        <div class="poke-status-bar">
            <div class="poke-status-perc" :style="`${bar_width}`"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: Object
    },
    setup(props) {
        let bar_width = 'width: ' + props.status.base_stat + '%';

        return {
            bar_width
        }
    }
}
</script>

<style lang="scss">
.poke {
    &-status {
        margin-top: 10px;
        &__label {
            color: #555;
            text-transform: capitalize;
            margin-bottom: 3px;
        }
        &-bar {
            position: relative;
            border-radius: 4px;
            height: 8px;
            width: 100%;
            background: #eee;
        }
        &-perc {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
            height: 8px;
            background: #665db3;
        }
    }
}
</style>