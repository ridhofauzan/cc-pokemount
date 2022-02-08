<template>
    <div class="poke-detail-box">
        <div class="poke-detail-box__title">
            Login
        </div>
        <div class="poke-detail-box-group">
            <div class="poke-detail__label">Username</div>
            <input type="text" class="poke-detail__input" placeholder="Masukkan Username" v-model="username">
        </div>
        <div class="poke-detail-box-group">
            <div class="poke-detail__label">Password</div>
            <input type="password" class="poke-detail__input" placeholder="Masukkan Password" v-model="password">
        </div>
        <div class="poke-detail-box-group">
            <button @click="doLogin" class="poke-detail__btn">Login</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter();

        const doLogin = () => {
            localStorage.setItem('authenticated', true)
            router.push({ name: "Pokedex" })
        }

        return { doLogin }
    }
}
</script>

<style lang="scss">
.poke {
    &-detail {
        &-box {
            background: #fff;
            border-radius: 8px;
            margin: 16px;
            width: calc(100% - 64px);
            padding: 16px;
            &__title {
                color: #333;
                margin-bottom: 10px;
                text-align: left;
                text-transform: capitalize;
                font-weight: bold;
                font-size: 18px;
            }
            &-group {
                display: block;
                margin-bottom: 10px;
            }
        }
        &__label {
            color: #aaa;
            margin-bottom: 5px;
            text-align: left;
            text-transform: capitalize;
            font-size: 12px;
        }
        &__input {
            width: calc(100% - 30px);
            border: 1px solid #dedede;
            box-shadow: none;
            outline: none;
            padding: 10px 15px;
            color: #333;
            border-radius: 4px;
        }
        &__btn {
            display: block;
            width: 100%;
            padding: 16px;
            border: none;
            margin-top: 20px;
            color: #fff;
            background: #43b781;
            font-weight: bold;
            border-radius: 4px;
        }
    }
}
</style>