import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './book-card.scss'
import { SetPage } from '../../store/pageSlice'

export default function BookCard() {
    const dispatch = useDispatch()
    return (
        <div className="bookCardContainer" onClick={() => dispatch(SetPage('book-page'))}>
            <div className="imgContainer">
                <img src="./img/BookImg.png" alt="Book" />
            </div>
            <div className="infoContainer">
                <p className="category">computer</p>
                <h2 className="bookName">
                    Node.js разработка серверных веб-приложений на JavaScript
                </h2>
                <h3 className="authorName">Дэвид Хэррон</h3>
            </div>
        </div>
    )
}
