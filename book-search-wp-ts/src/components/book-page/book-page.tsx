import React from 'react'
import { useDispatch } from 'react-redux'
import { SetPage } from '../../store/slices/pageSlice'
import './book-page.scss'

export function BookPage() {
    const dispatch = useDispatch()

    function ShowBookListPage() {
        dispatch(SetPage('book-list'))
    }

    return (
        <main>
            <div className="bookPageContainer">
                <div className="bookFace">
                    <img src="./img/BookImg.png" alt="Book" />
                </div>
                <div className="bookinfo">
                    <p className="bookMap" onClick={ShowBookListPage}>
                        {'>'} to book-list
                    </p>
                    <p className="bookMap">Art / General</p>
                    <h2 className="bookName">
                        Node.js разработка серверных веб-приложений на
                        JavaScript
                    </h2>
                    <h3 className="authorName">Дэвид Хэррон</h3>
                    <div className="descriptionContainer">
                        <p className="description">
                            An open Score edition Bach's Doldberg Variations
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
