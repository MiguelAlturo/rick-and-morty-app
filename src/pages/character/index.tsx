import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/services";
import { Character } from "../../characters";
import { SimpleCharacter } from "../../characters";
import Header from "../../components/Header";

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

const CharacterPage = () => {
  const [character, setCharacter] = useState(simpleCharacterState)

  const { id }: any = useParams();

  useEffect(() => {

    getCharacter(id)
      .then((character) => {
        console.log(character);
        setCharacter(character)
      });
  }, [])



  return (
    <>
      <Header />
      <section>
        {
          <SimpleCharacter   {...character} />
        }
      </section>
    </>

  );
};
export default CharacterPage;
