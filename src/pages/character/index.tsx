import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter, getEpisodies } from "../../api/services";
import { Character, simpleEpisodie } from "../../characters";

interface Params {
  id: Promise<string>;
}
const simpleCharacterState: Character = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: { url: 'undefined', name: 'undefined' },
  location: { url: 'undefined', name: 'undefined' },
  image: "",
  episode: [],
  url: "",
  created: new Date()
};


const simpleEpisodieseState: simpleEpisodie[] = [];

const CharacterPage = () => {
  const [character, setCharacter] = useState(simpleCharacterState)
  const [episodies, setEpisodies] = useState(simpleEpisodieseState)
  const { id }: any = useParams();

  useEffect(() => {

    getCharacter(id)
      .then((character) => {
        console.log(character);
        setCharacter(character)
      });
  }, [])

  useEffect(() => {
    getEpisodiesId()
  }, [character])

  const getEpisodiesId = () => {
    // console.log("character: ", character);
    const { episode } = character
    const ids: Array<string> = []
    episode?.map((epi) => {
      ids.push(epi.split('/').at(-1))
    })
    console.log("ids: ", ids.toString());
    if (ids.length > 0) {
      getEpisodies(ids.toString())
        .then((episodie: simpleEpisodie[]) => {
          console.info('episodie <<<>>>', episodie);
          setEpisodies(episodie)
        });
    }

  }

  return (
    <article className="character">
      <div className="character_block">
        <div className="character_avatar">
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
            <h2>{character?.created}</h2>
          </article>
        </div>
      </div>
      <article className="character_episodies">
        <h2>Capitulos donde aparece</h2>
        <ul>
          {episodies.length > 0 &&
            episodies.map((epis, index) => <li key={index}><b>Capitulo:</b> {epis.name} <br /><b>creado: {epis.air_date}</b> <hr /></li>)
          }
        </ul>
      </article>
    </article>
  );
};
export default CharacterPage;
