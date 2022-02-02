import { reactive, toRefs } from 'vue'

export default function usePokemons() {
    const state_pokemon = reactive({
        error: null,
        pokemons: null,
        loaded: false,
        loading: false
    })
    const load = async() => {
        if(!state_pokemon.loaded) {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon')
                state_pokemon.pokemons = await response.json();

            } catch (e) {
                state_pokemon.error = e;
            }
        }
    };

    return { ...toRefs(state_pokemon), load }
}