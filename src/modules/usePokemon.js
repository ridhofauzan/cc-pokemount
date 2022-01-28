import { reactive, getCurrentInstance } from 'vue'

export default function usePokemon() {
    const internalInstance = getCurrentInstance()

    const axios =internalInstance.appContext.config.globalProperties.axios;

    const state_pokemon = reactive({
        error: null,
        data: []
    })
    const load = (async() => {
        try {
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon')
            state_pokemon.data = response.data
        } catch (e) {
            // state_pokemon.error = e.response.data
        }
    })
    
    load()

    return { state_pokemon }
}