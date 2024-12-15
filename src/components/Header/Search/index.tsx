import { useAppDispatch } from '../../../store';
import { setsearchText } from '../../../store/search/searchSlice';

export const Search = () => {

    const dispatch = useAppDispatch()
    const handletInputChange = (text: string) => {
        dispatch(setsearchText(text));
    }

    return (
        <section className='header_sticky_nav_search'>
            <form >
                <input name='search' placeholder='Buscar personaje' type="text" onChange={(e) => handletInputChange(e.target.value)} />
            </form>
        </section>
    )
}
