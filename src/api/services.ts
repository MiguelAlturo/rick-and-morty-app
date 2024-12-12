import { simpleCharacters, CharactersResponse, Character, Episodie, simpleEpisodie } from "../characters";

const baseApiUrl = `https://rickandmortyapi.com/api`;

export const getCharacters = async (): Promise<simpleCharacters[]> => {
    const data: CharactersResponse = await fetch(`${baseApiUrl}/character`)
        .then(res => res.json());
    const characters = data.results.map(character => ({
        id: character.id,
        name: character.name,
        species: character.species,
        status: character.status
    }));

    return characters
};

export const getCharacter = async (id: number): Promise<simpleCharacters> => {
    const data: Character = await fetch(`${baseApiUrl}/character/${id.toString()}`)
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
    console.log("URL:", `${baseApiUrl}/episode/${ids}`);
    const data: Episodie[] = await fetch(`${baseApiUrl}/episode/${ids}`)
        .then(res => res.json());
    return data
};
