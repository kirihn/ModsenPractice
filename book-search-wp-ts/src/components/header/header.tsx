import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetResponseFromBookApi } from '../../utils/urlGenerator';
import { SetSearchInfo } from '../../store/slices/foundSlice';
import { SetPage } from '../../store/slices/pageSlice';
import { HeaderProps } from './types';
import { GoogleBooksResponse } from '../../types/books.type';
import './header.scss';

export function Header(props: HeaderProps) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();
    
    const categories = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ];

    const handleSearch = async () => {
        dispatch(SetPage('loading-page'));

        const searchParams = {
            Search: search || '%20',
            Categories: category || 'all',
            Filter: filter || 'relevance',
            StartIndex: 0,
        };

        dispatch(SetSearchInfo(searchParams));

        const response: GoogleBooksResponse =
            await GetResponseFromBookApi(searchParams);

        if (response.items != undefined) {
            props.setBooks(response.items);
        } else {
            props.setBooks([]);
        }
        if (response.totalItems != undefined) {
            props.setTotalItems(response.totalItems);
        } else {
            props.setTotalItems(0);
        }

        dispatch(SetPage('book-list'));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    function ChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(event.target.value);
    }

    function ChangeFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(event.target.value);
    }

    function ChangeSearch(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }

    return (
        <header className="header">
            <div className="content">
                <h1 className="headerH1">Search for books</h1>

                <div className="filter">
                    <div className="searchBarContainer">
                        <input
                            className="searchBar"
                            type="text"
                            placeholder="BookName..."
                            onKeyDown={handleKeyDown}
                            onChange={ChangeSearch}
                            value={search}
                        />
                        <button onClick={handleSearch}>
                            <img src="./img/Search.png" alt="Search" />
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select onChange={ChangeCategory}>
                                {categories.map((item, key) => (
                                    <option value={item} key={key}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="selectItem">
                            <p>Sorting by</p>
                            <select onChange={ChangeFilter}>
                                <option value="relevance">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
