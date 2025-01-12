import { configureStore } from '@reduxjs/toolkit'
import charactersReducers from './characters/charactersSlice'
import filterReducers from './filter/filterSlice'
import searchReducers from './search/searchSlice'
import { useDispatch, useSelector } from 'react-redux'


export const store = configureStore({
    reducer: {
        characters: charactersReducers,
        filter: filterReducers,
        search: searchReducers
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()