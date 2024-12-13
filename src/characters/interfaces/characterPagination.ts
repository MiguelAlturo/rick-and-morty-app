import { simpleCharacters } from "./simple-character"

export interface CharacterPagination {
    characters: simpleCharacters[],
    pagination: PaginationProps
}
export interface PaginationProps {
    previus?: string;
    next?: string;
    changePagination?: Function
}