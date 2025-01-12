import { IoHeartOutline, IoHeart, IoFitness } from 'react-icons/io5'
import { simpleCharacters } from '../../interfaces/simple-character'
import { useAppDispatch, useAppSelector } from '../../../store'
import { toggleFavorite } from '../../../store/characters/charactersSlice'
import './characterCard.scss'
import { Link } from 'react-router-dom'


interface Props {
  character: simpleCharacters
}
export const CharacterCard = ({ character }: Props) => {
  const { id, status, name, species } = character
  const stts = status === "Alive" ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido'

  const isFavorite = useAppSelector(state => !!state.characters.favorites[id]);
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch(toggleFavorite(character));
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
          <IoFitness title='Estado' className='card__character_status_icon' />
          <span className={'badge card__character_status--' + status.toLowerCase()}>{stts}</span>
        </div>
        <Link className='card__character_more' to={`/character/${id}`}>Ver detalle</Link>
        <article className="card__character_favorite">
          <button className='btn-favorite' onClick={onToggle}>
            {isFavorite ? <IoHeart title='Favorito' /> : <IoHeartOutline title='No Favorito' />}
          </button>
        </article>
      </div>

    </article>
  )
}
