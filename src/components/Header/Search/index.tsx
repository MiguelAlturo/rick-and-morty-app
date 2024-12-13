import { useEffect, useState } from 'react'

const initialText: string = ""
export const Search = () => {
    const [text, setTtext] = useState(initialText)

    // const handletInputChange = (e) => {
    //     e.preventDefault()
    //     console.log(text)
    // }
    useEffect(() => {
        console.log(text)
    }, [text])

    return (
        <section className='header_sticky_nav_search'>
            <form >
                <input name='search' placeholder='Buscar personaje' type="text" onChange={(e) => setTtext(e.target.value)} />
            </form>
        </section>
    )
}
