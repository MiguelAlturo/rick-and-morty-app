import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {

        next(action)
        console.log({ action });
        if (action.type === 'Characteres/toggleFavorite') {
            const { characters } = state.getState() as RootState;
            localStorage.setItem('favorite-characters', JSON.stringify(characters))
        }
    }
}