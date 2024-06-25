import './header.scss'
import React from 'react'
export default function Header() {
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
                            //value={""}
                        ></input>
                        <button>
                            <img src="./img/Search.png" alt="Search" />
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select>
                                <option value="option1">all</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="selectItem">
                            <p>Sorting by</p>
                            <select>
                                <option value="option1">relevance</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
