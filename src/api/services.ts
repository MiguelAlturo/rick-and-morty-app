import { simpleCharacters, Character, Episodie, simpleEpisodie, CharacterPagination, CharacterPaginationResponse } from "../characters";

const baseApiUrl = `https://rickandmortyapi.com/api`;

interface Props {
    page?: string;
    name?: string;
    status?: string;
    especie?: string
}

const getQueryString = (props: Props) => {
    const searchParams: Record<string, any> = new URLSearchParams();
    if (!!props.page) {
        searchParams.append("page", props.page);
    }
    if (!!props.name) {
        searchParams.append("name", props.name);
    }
    if (!!props.status) {
        searchParams.append("status", props.status);
    }
    if (!!props.especie) {
        searchParams.append("species", props.especie);
    }
    return searchParams.toString();
}

// const getSpecies = async () => {
//     let data: string[] = [];
//     for (let index = 0; index < 42; index++) {
//         await new Promise(r => setTimeout(r, 1000))
//         const result: CharacterPaginationResponse = await fetch(`${baseApiUrl}/character/?page=${index}`)
//             .then(res => res.json());
//         const characters = result.results.map(character => (character.species));
//         let uniqueItems = [...new Set(characters.concat(data))]
//         data = [...uniqueItems]
//     }

//     console.log(data)

//     let results = [...new Set(data)]

//     console.log(results);
// }

export const getCharacters = async (props: Props): Promise<CharacterPagination> => {

    // getSpecies(); función para obtener todas las especies

    let query = getQueryString(props);
    let url = query != "" ? `${baseApiUrl}/character/?${query}` : `${baseApiUrl}/character/?page=1`
    const data: CharacterPaginationResponse = await fetch(`${url}`)
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
