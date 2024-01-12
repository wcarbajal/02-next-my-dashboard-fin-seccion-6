import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const getInitialState = () => { 
    const favorites = JSON.parse( localStorage.getItem('favorites-pokemons')??'{}' );
    return favorites;
}

const initialState: PokemonsState = {
    ...getInitialState(),
}

const pokemonsSlice = createSlice({
    name: 'pokemonsFavorites',
    initialState,
    reducers: {
        toggleFavorites(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const {id } = pokemon;

            if ( !!state[id]) {
                delete state[id];
               // return;
            } else {
                state[id] = pokemon;
            }

            localStorage.setItem('favorites-pokemons', JSON.stringify( state) )
        }
    }
});

export const { toggleFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer