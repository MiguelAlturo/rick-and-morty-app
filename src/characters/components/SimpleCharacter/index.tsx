import { useEffect, useState } from 'react'
import { Character } from '../../interfaces/character'
import { simpleEpisodie } from '../../interfaces/simple-episodie'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { getEpisodies } from '../../../api/services'
import { useAppDispatch, useAppSelector } from '../../../store'
import { toggleFavorite } from '../../../store/characters/charactersSlice'

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
        // console.log("character: ", character);
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
                    console.log("episodie: ", episodie);
                });
        }

    }

    const onToggle = () => {
        dispatch(toggleFavorite(character));
    }

    return (
        <>
            <article className="character">
                <div className="character_block">
                    <div className="character_avatar">
                        <article className="card__character_favorite">
                            <button className='btn-favorite' onClick={onToggle}>
                                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                            </button>
                        </article>
                        <img src={character.image} alt="" />
                        <h1>{character.name}</h1>
                    </div>
                    <div className="character_caracterist">
                        <article className="day-forecast">
                            <h2>{character.status}</h2>
                        </article>
                        <article className="day-forecast">
                            <h2>{character.gender}</h2>
                        </article>
                        <article className="day-forecast">
                            <h2>{character.created?.toString().split('T')[0]}</h2>
                        </article>
                    </div>
                </div>
                <article className="character_episodies">
                    <h2>Capitulos donde aparece</h2>
                    <ul>
                        {isLoad && episodies.length > 0 &&
                            episodies.map((epis, index) => <li key={index}><b>Capitulo:</b> {epis.name} <br /><b>Al aire: {epis.air_date}</b> <hr /></li>)
                        }
                    </ul>
                </article>
            </article>
        </>

    )
}
