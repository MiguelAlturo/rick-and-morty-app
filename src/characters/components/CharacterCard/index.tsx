import { IoHeartOutline, IoHeart, IoFitness } from 'react-icons/io5'
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
    <article className="card__character">
      <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name} width="200" height="200" />
      <div className='card__character_container'>
        <h2 className='card__character_name'>{name}</h2>
        <div className="card__character_specie">
          <b>Especie:</b>
          <p>{species}.</p>
        </div>
        <div className="card__character_status">
          <IoFitness className='card__character_status_icon' />
          <span className={'badge card__character_status--' + status.toLowerCase()}>{stts}</span>
        </div>
        <a href={`/character/${id}`}>Ver detalle</a>
        <article className="card__character_favorite">
          <button className='btn-favorite' onClick={() => { toggleFavorite(id) }}>
            {/* {favorites.filter((id: string) => id === id ? <IoHeart /> : <IoHeartOutline />)} */}
            <IoHeartOutline />
          </button>
        </article>
      </div>

    </article>
  )
}
