import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { setsearchText } from '../../../store/search/searchSlice';
import { IoCloseCircle, IoSearchSharp } from "react-icons/io5";

export const Search = () => {
    const [isSearchble, setIsSearchble] = useState(false)
    const dispatch = useAppDispatch()
    const handletInputChange = (text: string) => {
        dispatch(setsearchText(text));
    }
    const resetSearch = (isReset: Boolean) => {
        if (isReset) {
            setIsSearchble(true)
        } else {
            setIsSearchble(false)
        }
        dispatch(setsearchText(""));
    }
    return (
        <section className='header_sticky_nav_search'>
            <div className='header_sticky_nav_search_container'>

                {isSearchble ?
                    <>
                        <form >
                            <input name='search' placeholder='Buscar personaje' type="text" onChange={(e) => handletInputChange(e.target.value)} />
                        </form>
                        <IoCloseCircle onClick={() => resetSearch(false)} />
                    </> :
                    <IoSearchSharp onClick={() => resetSearch(true)} />
                }
            </div>

        </section>
    )
}
