import { simpleCharacters, Character, Episodie, simpleEpisodie, CharacterPagination } from "../characters";
import { CharacterPaginationResponse } from "../characters/interfaces/pagination-response";

const baseApiUrl = `https://rickandmortyapi.com/api`;

interface Props {
    page?: string;
    name?: string;
    status?: string;
    especie?: string
}

export const getCharacters = async ({ page, name, status, especie }: Props): Promise<CharacterPagination> => {
    const data: CharacterPaginationResponse = await fetch(`${baseApiUrl}/character/?page=${page}`)
        .then(res => res.json());
    const characters = data.results.map(character => ({
        id: character.id,
        name: character.name,
        species: character.species,
        status: character.status
    }));
    const dataObjet = {
        characters: characters,
        pagination: {
            previus: data.info.prev !== null ? data.info.prev.substring(data.info.prev.lastIndexOf('/') + 1).split('=')[1] : data.info.prev,
            next: data.info.next !== null ? data.info.next.substring(data.info.next.lastIndexOf('/') + 1).split('=')[1] : data.info.prev
        }
    }

    return dataObjet
};

export const getCharacter = async (id: string | undefined): Promise<simpleCharacters> => {
    if (!id) {
        throw "id should be valid";
    }

    const data: Character = await fetch(`${baseApiUrl}/character/${id}`)
        .then(res => res.json());
    const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        status: data.status,
        type: data.type,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
        episode: data.episode,
        url: data.url,
        created: data.created,
    }

    return character
};

export const getEpisodies = async (ids: string): Promise<simpleEpisodie[]> => {
    const data: Episodie[] | Episodie = await fetch(`${baseApiUrl}/episode/${ids}`)
        .then(res => res.json());
    if (Array.isArray(data)) {
        return data
    } else {
        return [data]
    }
};
