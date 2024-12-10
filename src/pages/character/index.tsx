import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/services";
import { simpleCharacters } from "../../characters";

// interface Props {
//   params: Promise<{
//     id: string
//   }>;
// }

const Character = () => {
  const params: any = useParams();

  useEffect(() => {
    async function characters() {
      const characterData: simpleCharacters = await getCharacter(params.id);
      console.log(characterData + ' PARAMS:_' + params);

    };
    characters();
  }, [])


  return (
    <article className="forecast">
      <h1>Weather forecast for Seattle</h1>
      <article className="day-forecast">
        <h2>03 March 2018</h2>
        <p>Rain.</p>
      </article>
      <article className="day-forecast">
        <h2>04 March 2018</h2>
        <p>Periods of rain.</p>
      </article>
      <article className="day-forecast">
        <h2>05 March 2018</h2>
        <p>Heavy rain.</p>
      </article>
    </article>
  );
};
export default Character;
