import React from 'react'
import { BookCard } from '../book-card/book-card'
import { BookListProps } from './book-list-props.types'
import './books-list.scss'

export function BookList(props: BookListProps) {

    const { items, totalItems } = props.books || { items: [], totalItems: 0 };

    return (
        <main>
            <p className="booksCount">
                {totalItems !== undefined && totalItems > 1 ? "found " + totalItems + " results" : "No results"}
            </p>

            <div className="booklistContainer">
                {items?.map((item, id) => (
                    <BookCard key={id} book={item} />
                ))}
            </div>
        </main>
    )
}
