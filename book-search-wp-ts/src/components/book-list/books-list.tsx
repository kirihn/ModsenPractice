import React from 'react'
import BookCard from '../book-card/book-Card'
import './books-list.scss'
import { GoogleBooksResponse } from '../../dto/books.dto'

interface Props {
    books?: GoogleBooksResponse
}
export default function BookList(props: Props) {
    return (
        <>
            {props.books ? (
                <p className="booksCount">found {props.books.totalItems} results</p>
            ) : (
                <p className="booksCount">No results...</p>
            )}
            <div className="booklistContainer">
                {
                    props.books?.items?.map((item, id) => <BookCard key={id} book={item}></BookCard>)
                }
            </div>
        </>
    )
}
