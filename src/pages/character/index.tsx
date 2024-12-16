import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/services";
import { Character } from "../../characters";
import { SimpleCharacter } from "../../characters";

const simpleCharacterState: Character = {} as Character;

const CharacterPage = () => {
  const [character, setCharacter] = useState(simpleCharacterState)

  const { id } = useParams();

  useEffect(() => {

    getCharacter(id)
      .then((character) => {
        setCharacter(character)
      });
  }, [])



  return (
    <>
      <section>
        {
          <SimpleCharacter   {...character} />
        }
      </section>
    </>

  );
};
export default CharacterPage;
