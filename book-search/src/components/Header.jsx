import "../css/Header.css"

export default function Header(){



    return (
        <header className="header">

            <div className="content">
                
                <h1 className="headerH1">
                    Search for books
                </h1>

                <div className="filter">

                    <div className="searchBarContainer">
                        <input 
                            className="searchBar" 
                            type="text" 
                            placeholder="BookName..." 
                            //value={""} 
                        ></input>
                        <button>
                            Лупа
                        </button>
                    </div>

                    <div className="selectsContainer">
                        <div className="selectItem">
                            <p>Categories</p>
                            <select>

                            </select>
                        </div>
                        <div className="selectItem">
                            <p>Sorting by</p>
                            <select>
                                
                            </select>
                        </div>
                    </div>

                </div>   

            </div>
        </header>
    )
}
