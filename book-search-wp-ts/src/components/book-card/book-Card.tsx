import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './book-card.scss'
import { SetPage } from '../../store/pageSlice'
import { Volume } from '../../dto/books.dto'
interface Props {
    book: Volume
}

export default function BookCard(props: Props) {
    const dispatch = useDispatch()
    return (
        <div
            className="bookCardContainer"
            onClick={() => dispatch(SetPage('book-page'))}
        >
            <div className="imgContainer">
                {props.book.volumeInfo.imageLinks?.thumbnail ? (
                    <img
                        src={props.book.volumeInfo.imageLinks.thumbnail}
                        alt="Book"
                    />
                ) : (
                    <img src="./img/EmptyAvatar.jpg" alt="Placeholder" />
                )}
            </div>
            <div className="infoContainer">
                {props.book.volumeInfo.categories ? (
                    <p className="category">
                        {props.book.volumeInfo.categories}
                    </p>
                ) : (
                    <p className="category">No category</p>
                )}

                {props.book.volumeInfo.title ? (
                    <h2 className="bookName">{props.book.volumeInfo.title}</h2>
                ) : (
                    <h2 className="bookName">No title</h2>
                )}

                {props.book.volumeInfo.authors ? (
                    <h3 className="authorName">
                        {props.book.volumeInfo.authors}
                    </h3>
                ) : (
                    <h3 className="authorName">No authors</h3>
                )}
            </div>
        </div>
    )
}
