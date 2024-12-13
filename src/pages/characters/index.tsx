import { CharacterPagination, CharactersGrid, PaginationProps, simpleCharacters } from "../../characters/index";
import { getCharacters } from "../../api/services";
import { useState, useEffect } from "react";
import { Pagination } from "../../characters/index";

const simpleCharacteresState: simpleCharacters[] = [];
const pagination: PaginationProps = {};

const Characters = () => {
  const [data, setData] = useState(simpleCharacteresState)
  const [paginationState, setPaginationState] = useState(pagination)


  useEffect(() => {
    changePagination("1");
  }, [])

  const changePagination = (page: string) => {
    getCharacters(page)
      .then(({ characters, pagination }: CharacterPagination) => {
        setData(characters)
        setPaginationState(pagination)
      });
  }

  return (
    <>
      {<CharactersGrid characters={data} />}
      {<Pagination {
        ...paginationState
      }
        changePagination={changePagination.bind(this)} />}
    </>

  );
};

export default Characters;
