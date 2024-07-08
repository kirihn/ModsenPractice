import React from 'react'
import { useDispatch } from 'react-redux'
import { SetPage } from '../../store/slices/pageSlice'
import { BookCardProps } from './types'
import { setCurrentBook } from '../../store/slices/currentBookSlice'
import './book-card.scss'

export function BookCard(props: BookCardProps) {

    const { volumeInfo } = props.book;
    const { imageLinks, categories, title, authors } = volumeInfo;
    const dispatch = useDispatch()

    function ShowBookPage() {
        dispatch(setCurrentBook(props.book))
        dispatch(SetPage('book-page'))
    }

    return (
        <div
            className="bookCardContainer"
        >
            <div className="imgContainer">
                <img 
                    onClick={ShowBookPage} 
                    src={imageLinks?.thumbnail ? imageLinks.thumbnail : (imageLinks?.smallThumbnail ? imageLinks.smallThumbnail : "./img/EmptyAvatar.jpg")} 
                    alt="BookAvatar" 
                />
            </div>
            <div className="infoContainer">
                <p className="category">
                    {categories ? categories : "No category"}
                </p>
                <h2 className="bookName" onClick={ShowBookPage}>{title ? title : "No title"}</h2>
                <h3 className="authorName">
                    {authors ? authors : "No authors"}
                </h3>

            </div>
        </div>
    )
}
