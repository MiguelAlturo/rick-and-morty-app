import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface filterState {
    status: string;
    specie: string;
}

const initialState: filterState = {
    status: "",
    specie: ""
}

export const filterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        setFilterStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
        setFilterSpecies(state, action: PayloadAction<string>) {
            state.specie = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setFilterStatus, setFilterSpecies } = filterSlice.actions

export default filterSlice.reducer