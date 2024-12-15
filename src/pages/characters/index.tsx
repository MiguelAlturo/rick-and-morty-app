import { CharacterPagination, CharactersGrid, Loading, PaginationProps, simpleCharacters } from "../../characters/index";
import { getCharacters } from "../../api/services";
import { useState, useEffect } from "react";
import { Pagination, Filter } from "../../characters/index";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilterSpecies, setFilterStatus } from "../../store/filter/filterSlice";

const simpleCharacteresState: simpleCharacters[] = [];
const pagination: PaginationProps = {};

interface dataFilter {
  type: string;
  value: string
}

const Characters = () => {
  const [isLoad, setIsload] = useState(false)
  const [data, setData] = useState(simpleCharacteresState)
  const [paginationState, setPaginationState] = useState(pagination)

  const filterState = useAppSelector(state => state.filter.status);
  const filterSpecie = useAppSelector(state => state.filter.specie);
  const searchText = useAppSelector(state => state.search.text);
  const dispatch = useAppDispatch()



  useEffect(() => {
    changePagination("1");
  }, [])

  useEffect(() => {
    getCharacters({ name: searchText })
      .then(({ characters, pagination }: CharacterPagination) => {
        setData(characters)
        setPaginationState(pagination)
      });
  }, [searchText,])

  const changePagination = (page: string) => {
    setIsload(false)
    getCharacters({ page })
      .then(({ characters, pagination }: CharacterPagination) => {
        setData(characters)
        setPaginationState(pagination)
      });
    setIsload(true)
  }

  useEffect(() => {
    getCharacters({ especie: filterSpecie, status: filterState })
      .then(({ characters, pagination }: CharacterPagination) => {
        setData(characters)
        setPaginationState(pagination)
      });
  }, [filterState, filterSpecie])

  const handleFilter = ({ type, value }: dataFilter) => {

    if (type === "status") {
      dispatch(setFilterStatus(value));
    } else {
      dispatch(setFilterSpecies(value));
    }
  }

  return (
    <>
      {!isLoad ?
        <Loading />
        :
        <>
          {<Filter handleFilter={handleFilter.bind(this)} />}
          {<CharactersGrid characters={data} />}
          {filterState === "" && filterSpecie === "" && searchText === "" && <Pagination {...paginationState} changePagination={changePagination.bind(this)} />}
        </>
      }

    </>

  );
};

export default Characters;
