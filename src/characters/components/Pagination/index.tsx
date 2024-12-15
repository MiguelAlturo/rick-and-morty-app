import { PaginationProps } from "../../interfaces/characterPagination"
import './paginations.scss'
export const Pagination = ({ next, previus, changePagination }: PaginationProps = {}) => {
    return (
        <>
            {
                changePagination &&
                <nav className="pagination">
                    <ul className="pagination_list">
                        <li className={`pagination_list_btn ${!previus && 'disabled'}`}>
                            <button onClick={() => changePagination(previus)}>Anterior</button>
                        </li>
                        <li className="pagination_list_page">{next ? parseInt(next) - 1 : previus ? parseInt(previus) - 1 : 0}</li>
                        <li className={`pagination_list_btn ${!next && 'disabled'}`}>
                            <button onClick={() => changePagination(next)}>Siguiente</button>
                        </li>
                    </ul>
                </nav>
            }
        </>

    )
}
