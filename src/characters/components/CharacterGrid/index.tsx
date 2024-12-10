import { simpleCharacters } from '../../interfaces/simple-character';
import { CharacterCard } from '../CharacterCard';
import './characterGrid.scss'

interface Props {
    characters: simpleCharacters[];
}

export const CharactersGrid = ({ characters }: Props) => {
    return (
        <div className='container_characters'>
            {characters.map((character) => (
                <CharacterCard character={character} key={character.id} />
            ))}
        </div>
    )
}
