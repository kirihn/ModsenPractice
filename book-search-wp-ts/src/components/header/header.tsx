import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { GetResponseFromBookApi } from '../../utils/urlGenerator'
import { SetSearchInfo } from '../../store/slices/foundSlice'
import { SetPage } from '../../store/slices/pageSlice'
import { HeaderProps } from './types'
import './header.scss'
import { GoogleBooksResponse } from '../../types/books.type'

export function Header(props: HeaderProps) {
    const dispatch = useDispatch()

    const categories = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ]
    const searchRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)
    const filterRef = useRef<HTMLSelectElement>(null)

    const handleSearch = async () => {
        dispatch(SetPage('loading-page'))

        const searchParams = {
            Search: searchRef.current?.value || '%20',
            Categories: categoryRef.current?.value || 'all',
            Filter: filterRef.current?.value || 'relevance',
            StartIndex: 0,
        }

        dispatch(SetSearchInfo(searchParams))

        const response: GoogleBooksResponse = await GetResponseFromBookApi(
            searchParams
        )

        if (response.items != undefined) {
            props.setBooks(response.items)
        } else {
            props.setBooks([])
        }
        if (response.totalItems != undefined) {
            props.setTotalItems(response.totalItems)
        } else {
            props.setTotalItems(0)
        }

        dispatch(SetPage('book-list'))
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
                        />
                        <button onClick={handleSearch}>
                            <img src="./img/Search.png" alt="Search" />
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select ref={categoryRef}>
                                {categories.map((item, key) => (
                                    <option value={item} key={key}>{item}</option>
                                ))}
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
