import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from './components/header/header'
import { BookList } from './components/book-list/books-list'
import { BookPage } from './components/book-page/book-page'
import { GoogleBooksResponse } from './types/books.type'
import { RootState } from './store/store'

import './app.scss'

export function App() {
    const [books, setBooks] = useState<GoogleBooksResponse>()

    const currentPage = useSelector((state: RootState) => state.page.Page)

    return (
        <>
            <Header setBooks={setBooks} />

            {currentPage == 'book-list' ? (
                <BookList books={books} />
            ) : (
                <BookPage />
            )}
        </>
    )
}
