import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { GetResponseFromBookApi } from '../../utils/urlGenerator'
import { SetSearchInfo } from '../../store/slices/foundSlice'
import { GoogleBooksResponse } from '../../types/books.type'
import './header.scss'

interface Props {
    setBooks: (books: GoogleBooksResponse) => void
}

export function Header(props: Props) {
    const dispatch = useDispatch()

    const searchRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)
    const filterRef = useRef<HTMLSelectElement>(null)

    const handleSearch = async () => {
        const searchParams = {
            Search: searchRef.current?.value || '%20',
            Categories: categoryRef.current?.value || 'all',
            Filter: filterRef.current?.value || 'relevance',
            StartIndex: 0,
        }

        dispatch(SetSearchInfo(searchParams))

        const response = await GetResponseFromBookApi(searchParams)
        props.setBooks(response.data)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <header className="header">
            <div className="content">
                <h1 className="headerH1">Search for books</h1>

                <div className="filter">
                    <div className="searchBarContainer">
                        <input
                            ref={searchRef}
                            className="searchBar"
                            type="text"
                            placeholder="BookName..."
                            onKeyDown={handleKeyDown}
                        ></input>
                        <button onClick={handleSearch}>
                            <img src="./img/Search.png" alt="Search" />
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select ref={categoryRef}>
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="medical">medical</option>
                                <option value="poetry">poetry</option>
                            </select>
                        </div>
                        <div className="selectItem">
                            <p>Sorting by</p>
                            <select ref={filterRef}>
                                <option value="relevance">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
