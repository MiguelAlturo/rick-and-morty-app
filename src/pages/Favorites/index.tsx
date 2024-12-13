
import { CharactersGrid } from "../../characters";
import { useAppSelector } from "../../store";
import { IoHeartOutline } from 'react-icons/io5'

const Favorites = () => {
  const charactersFavorites = Object.values(useAppSelector(state => state.characters.favorites))
  console.log(charactersFavorites);


  return (
    <>
      {charactersFavorites.length ?
        <section>
          <h2>Lista de favoritos</h2>
          <CharactersGrid characters={charactersFavorites} />
        </section>
        :
        <NoFavorite />
      }
    </>
  )
};


export const NoFavorite = () => {
  return (
    <section className="">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </section>

  )
}

export default Favorites;
