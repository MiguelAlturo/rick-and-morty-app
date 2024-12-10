import { CharactersGrid, simpleCharacters } from "../../characters/index";
import { getCharacters } from "../../api/services";
import { useState, useEffect } from "react";

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
    <div>
      {<CharactersGrid characters={data} />}
    </div>
  );
};

export default Characters;
