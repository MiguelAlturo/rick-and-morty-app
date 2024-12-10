import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { simpleCharacters } from '../../interfaces/simple-character'
import './characterCard.scss'
import { useState } from 'react'

interface Props {
  character: simpleCharacters
}
export const CharacterCard = ({ character }: Props) => {
  const [favorites, setFavorites] = useState({})
  const { id, status, name, species } = character
  const stts = status === "Alive" ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'

  // debugger
  // const isFavorite = favorites.filter((id) => id === [id]);
  const toggleFavorite = (id: string) => {
    setFavorites({ ...favorites, id })
    localStorage.setItem('favorite-pokemons', JSON.stringify(favorites))
  }

  return (
    <article className="card_caracter">
      <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name} width="200" height="200" />
      <div className='card__character-container'>
        <h3 className='card_caracter_name'>{name}</h3>
        <div className="card_caracter_specie">
          <b>Especie:</b>
          <p>{species}.</p>
        </div>
        <div className="card_caracter_status">
          <b>Estado:</b>
          <span className={'badge card_caracter_status--' + status.toLowerCase()}>{stts}</span>
        </div>
        <article className="card_caracter_favorite">
          <button className='btn-favorite' onClick={() => { toggleFavorite(id) }}>
            {/* {favorites.filter((id: string) => id === id ? <IoHeart /> : <IoHeartOutline />)} */}
            <IoHeart />

          </button>
        </article>
      </div>

    </article>
  )
}
