import { reactive, toRefs } from 'vue'

export default function usePokemonDetail() {
    const state_pokemon_detail = reactive({
        error: null,
        pokemon_detail: null,
        loaded: false,
        loading: false
    })
    const load = async(param) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/', param)
            state_pokemon_detail.pokemon_detail = await response.json();
            
        } catch (e) {
            state_pokemon_detail.error = e;
        }
    };

    return { ...toRefs(state_pokemon_detail), load }
}