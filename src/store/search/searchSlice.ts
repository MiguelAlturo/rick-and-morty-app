import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface searchState {
    text: string;
}

const initialState: searchState = {
    text: ""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setsearchText(state, action: PayloadAction<string>) {
            state.text = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setsearchText } = searchSlice.actions

export default searchSlice.reducer