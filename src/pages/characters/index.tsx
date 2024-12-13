import { CharactersGrid, simpleCharacters } from "../../characters/index";
import { getCharacters } from "../../api/services";
import { useState, useEffect } from "react";
import Header from "../../components/Header";

const simpleCharacteresState: simpleCharacters[] = [];

const Characters = () => {
  const [data, setData] = useState(simpleCharacteresState)

  useEffect(() => {
    getCharacters()
      .then((characteres: simpleCharacters[]) => {
        setData(characteres)
      });
  }, [])

  return (
    <>
      {<CharactersGrid characters={data} />}
    </>

  );
};

export default Characters;
