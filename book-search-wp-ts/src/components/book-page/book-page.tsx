import React from 'react'
import { UseDispatch } from 'react-redux'
import './book-page.scss'
import { useDispatch } from 'react-redux'
import { SetPage } from '../../store/pageSlice'
export default function BookPage() {
    const dispatch = useDispatch()
    return (
        <div className="bookPageContainer">
            <div className="bookFace">
                <img src="./img/BookImg.png" alt="Book" />
            </div>
            <div className="bookinfo">
                <p className="bookMap" onClick={() => dispatch(SetPage("book-list"))}> {'>'} to book-list</p>
                <p className="bookMap">Art / General</p>
                <h2 className="bookName">
                    Node.js разработка серверных веб-приложений на JavaScript
                </h2>
                <h3 className="authorName">Дэвид Хэррон</h3>
                <div className="descriptionContainer">
                    <p className="description">
                        An open Score edition Bach's Doldberg Variations
                    </p>
                </div>
            </div>
        </div>
    )
}
