<template>
    <div class="poke-detail-box">
        <div class="poke-detail-box__title">
            Login
        </div>
        <form @submit.prevent="doLogin">
            <div class="poke-detail-box-group">
                <div class="poke-detail__label">Email</div>
                <input type="text" class="poke-detail__input" placeholder="Masukkan Email" v-model="email">
            </div>
            <div class="poke-detail-box-group">
                <div class="poke-detail__label">Password</div>
                <input type="password" class="poke-detail__input" placeholder="Masukkan Password" v-model="password">
            </div>
            <div class="poke-detail-box-group">
                <input type="submit" class="poke-detail__btn" value="Login">
            </div>
        </form>
        <p class="poke-bottom">Not registered yet? <router-link to="/register">Register Here</router-link></p>
    </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'
// import { useRouter } from 'vue-router'
export default {
    setup() {
        const email = ref('')
        const password = ref('')
        // const router = useRouter();

        const doLogin = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message))
        }

        return { doLogin, email, password }
    }
}
</script>

<style lang="scss">
.poke {
    &-bottom {
        text-align: center;
        color: #333;
    }
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