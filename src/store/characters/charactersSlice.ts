import { simpleCharacters } from '../../characters'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface charactersState {
    favorites: { [key: string]: simpleCharacters },

}

const initialState: charactersState = {
    favorites: {},
}

export const charactersSlice = createSlice({
    name: 'Characteres',
    initialState,
    reducers: {
        setFavoriteCharacters(state, action: PayloadAction<{ [key: string]: simpleCharacters }>) {
            state.favorites = action.payload
        },

        toggleFavorite(state, action: PayloadAction<simpleCharacters>) {
            const character = action.payload
            const { id } = character
            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = character
            }
            localStorage.setItem('favorite-characters', JSON.stringify(state.favorites));
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleFavorite, setFavoriteCharacters } = charactersSlice.actions

export default charactersSlice.reducer