import { reactive, toRefs } from 'vue'

export default function useLogin() {
    const state_login = reactive({
        error: null,
        username: null,
        password: null,
        isAuth: false,
        loading: false
    });
    state_login.isAuth = JSON.parse(localStorage.getItem('authenticated'));

    const doLogout = () => {
        JSON.parse(localStorage.setItem('authenticated', false));
    }

    return { ...toRefs(state_login), doLogout }
}