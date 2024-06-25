import React from 'react'
import BookCard from '../book-card/book-Card'
import './books-list.scss'
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
