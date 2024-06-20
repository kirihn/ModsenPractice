import React from 'react'
import BookCard from './book-Card'
import '../styles/books-list.scss'
export default function BookList() {
    
    return (
        <>
            <p className="booksCount">Found 446 results</p>
            <div className="booklistContainer">
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
            </div>
        </>
    )
}
