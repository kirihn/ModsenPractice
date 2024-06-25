import React from 'react'
import './book-page.scss'
export default function BookPage() {
    return (
        <div className="bookPageContainer">
            <div className="bookFace">
                <img src="./img/BookImg.png" alt="Book" />
            </div>
            <div className="bookinfo">
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
