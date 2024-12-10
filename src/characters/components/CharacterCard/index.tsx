import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { simpleCharacters } from '../../interfaces/simple-character'
import './characterCard.scss'

interface Props {
  character: simpleCharacters
}
export const CharacterCard = ({ character }: Props) => {
  const { id, status, name, species } = character
  const stts = status === "Alive" ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'

  return (
    <article className="card_caracter">
      <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name} width="200" height="200" />
      <h2 className='card_caracter_name'>{name}</h2>
      <article className="card_caracter_specie">
        <b>Especie:</b>
        <p>{species}.</p>
      </article>
      <article className="card_caracter_status">
        <b>Estado:</b>
        <span className={'badge card_caracter_status--' + status.toLowerCase()}>{stts}</span>
      </article>
      <article className="card_caracter_favorite">
        <button className='btn-favorite' onClick={() => { }}>
          {/* <IoHeart /> */}
          <IoHeartOutline />
        </button>
      </article>
    </article>
  )
}
