import './header.scss'
import React, {useRef} from 'react'
import { GetResponseFromBookApi } from '../../utils/urlGenerator'
import { useDispatch } from 'react-redux'
import FoundState from '../../dto/searchInfo.dto'
import { SetSearchInfo } from '../../store/foundSlice'
import { GoogleBooksResponse } from '../../dto/books.dto'

interface Props{
    handleSearch: () => void;
    searchRef: React.RefObject<HTMLInputElement>;
    categoryRef: React.RefObject<HTMLSelectElement>;
    filterRef: React.RefObject<HTMLSelectElement>;
}

export default function Header(props: Props) {
    // const searchRef = useRef<HTMLInputElement>(null);
    // const categoryRef = useRef<HTMLSelectElement>(null);
    // const filterRef = useRef<HTMLSelectElement>(null);

    // let books: GoogleBooksResponse;

    // const handleSearch = async () => {
    //     // debugger;
    //     const searchParams: FoundState = {   
    //         Search: searchRef.current?.value || ' ',
    //         Categories: categoryRef.current?.value || 'all',
    //         Filter: filterRef.current?.value || 'relevance',
    //         StartIndex: 0
    //     }

    //     dispatch(SetSearchInfo(searchParams))
    //     books = await GetResponseFromBookApi(searchParams) as GoogleBooksResponse;

    // }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.handleSearch();
        }
    };

    return (
        <header className="header">
            <div className="content">
                <h1 className="headerH1">Search for books</h1>

                <div className="filter">
                    <div className="searchBarContainer">
                        <input ref={props.searchRef}
                            className="searchBar"
                            type="text"
                            placeholder="BookName..."
                            onKeyDown={handleKeyDown}
                        ></input>
                        <button onClick={props.handleSearch}>
                            <img src="./img/Search.png" alt="Search" />
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select ref={props.categoryRef}>
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="history">medical</option>
                                <option value="history">poetry</option>
                            </select>
                        </div>
                        <div className="selectItem">
                            <p>Sorting by</p>
                            <select ref={props.filterRef}>
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
