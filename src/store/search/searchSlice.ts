import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface searchState {
    searchText: string,

}

const initialState: searchState = {
    searchText: "",
}

export const searchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        setSearchCharacters(state, action: PayloadAction<string>) {
            state.searchText = action.payload
        },

        toggleSearch(state, action: PayloadAction<[]>) {
            const text = action.payload
            // const { id } = text
            state.searchText = text.toLocaleString()
            // if (!!state.search[id]) {
            //     delete state.search[id];
            // } else {
            //     state.search[id] = character
            // }
            localStorage.setItem('search-characters', JSON.stringify(state.searchText));
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleSearch, setSearchCharacters } = searchSlice.actions

export default searchSlice.reducer