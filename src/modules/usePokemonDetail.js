import { reactive, toRefs } from 'vue'

export default function usePokemonDetail() {
    const state_pokemon_detail = reactive({
        error: null,
        pokemon_detail: null,
        loaded: false,
        loading: false
    })
    const load = async (param) => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + 
                                        param, {
                                            method: "get",
                                        })
                                    .then(
                                        r => r.json()
                                    );
            //fetch(`https://pokeapi.co/api/v2/pokemon/${param}`, )
            state_pokemon_detail.pokemon_detail = response;
            // console.log(state_pokemon_detail.pokemon_detail)
    };

    return { ...toRefs(state_pokemon_detail), load }
}