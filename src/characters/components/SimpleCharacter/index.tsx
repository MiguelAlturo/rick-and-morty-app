import { useEffect, useState } from 'react'
import { Character } from '../../interfaces/character'
import { simpleEpisodie } from '../../interfaces/simple-episodie'
import { IoHeartOutline, IoHeart, IoFilm, IoCreate, IoFitness, IoHelpCircleSharp } from 'react-icons/io5'
import { SiOrigin } from "react-icons/si";
import { MdPersonPin } from "react-icons/md";
import { getEpisodies } from '../../../api/services'
import { useAppDispatch, useAppSelector } from '../../../store'
import { toggleFavorite } from '../../../store/characters/charactersSlice'
import { Loading } from '../Loading'
import './character.scss'
const simpleEpisodieseState: simpleEpisodie[] = [];

export const SimpleCharacter = (character: Character) => {
    const isFavorite = useAppSelector(state => !!state.characters.favorites[character.id]);
    const dispatch = useAppDispatch()
    const [episodies, setEpisodies] = useState(simpleEpisodieseState)
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        getEpisodiesId()

    }, [character])

    const getEpisodiesId = () => {
        const { episode } = character
        const ids: Array<string> = []
        episode?.map((epi) => {
            ids.push(epi.substring(epi.lastIndexOf('/') + 1))
        })
        if (ids.length > 0) {
            getEpisodies(ids.toString())
                .then((episodie: simpleEpisodie[]) => {

                    setEpisodies(episodie)
                    setIsLoad(true)
                });
        }

    }

    const onToggle = () => {
        dispatch(toggleFavorite(character));
    }

    return (
        <>
            {!isLoad ?
                <Loading />
                :
                <article className="character">
                    <div className='character_container'>
                        <div className="character_block">
                            <div className="character_block_avatar">
                                <h1>{character.name}</h1>
                                <img src={character.image} alt="" />
                            </div>
                            <div className="character_block_caracterist">
                                <article className="character_block_caracterist_item">
                                    <h2><IoFitness title="Estado" />{character.status}</h2>
                                </article>
                                <article className="character_block_caracterist_item">
                                    <h2><MdPersonPin title="Genero" /> {character.gender}</h2>
                                </article>
                                <article className="character_block_caracterist_item">
                                    <span>{isFavorite ? 'Favorito' : 'No es favorito'}</span>
                                    <button className='btn-favorite' onClick={onToggle}>
                                        {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                                    </button>
                                </article>
                                <article className="character_block_caracterist_item">
                                    <h2><IoCreate title="Creado" />{character.created?.toString().split('T')[0]}</h2>
                                </article>
                                <article className="character_block_caracterist_item">
                                    <h2><SiOrigin title='Origen' />{character.origin ? character.origin.name : 'Indefinido'}</h2>
                                </article>
                                {character.type !== "" &&
                                    <article className="character_block_caracterist_item">
                                        <h2><IoHelpCircleSharp title='Tipo' />{character.type}</h2>
                                    </article>
                                }

                            </div>
                        </div>
                        <article className="character_episodies">
                            <h2><IoFilm title='Capitulos donde aparece' /></h2>
                            <ul>
                                {isLoad && episodies.length > 0 &&
                                    episodies.map((epis, index) => <li key={index}><b>Capitulo:</b> {epis.name} <br /><b>Al aire: {epis.air_date}</b></li>)
                                }
                            </ul>
                        </article>
                    </div>
                </article>}

        </>

    )
}
