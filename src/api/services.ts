import { simpleCharacters, CharactersResponse } from "../characters";

const baseApiUrl = `https://rickandmortyapi.com/api`;

export const getCharacters = async (): Promise<simpleCharacters[]> => {
    const data: CharactersResponse = await fetch(`${baseApiUrl}/character`)
        .then(res => res.json());
    console.log(data);

    const characters = data.results.map(character => ({
        id: character.id.toString(),
        name: character.name,
        species: character.species,
        status: character.status
    }));
    // console.table(characters);

    return characters
};

export const getCharacter = async ({ id }: String): Promise<simpleCharacters> => {
    const data: CharactersResponse = await fetch(`${baseApiUrl}/character/${id}`)
        .then(res => res.json());
    console.log(data);

    const characters = data.results.map(character => ({
        id: character.id.toString(),
        name: character.name,
        species: character.species,
        status: character.status
    }));
    console.table(characters);

    return characters
};