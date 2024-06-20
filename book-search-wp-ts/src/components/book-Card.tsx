import React from 'react'
import '../styles/book-card.scss'
export default function BookCard() {
    return (
        <div className="bookCardContainer">
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
