import { reactive, toRefs } from 'vue'

export default function useUser() {
    const state_user = reactive({
        error: null,
        username: null,
        password: null,
        loaded: false,
        loading: false
    })
    const validateUser = (user, pass) => {
        console.log(user, pass)
    }

    return { ...toRefs(state_user), validateUser }
}