import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from './components/header/header'
import { BookList } from './components/book-list/books-list'
import { BookPage } from './components/book-page/book-page'
import { LoagingPage } from './components/loading-page/loading-page'
import { Volume } from './types/books.type'
import { RootState } from './store/store'

import './app.scss'

export function App() {
    const [totalItems, setTotalItems] = useState<number>(0)
    const [books, setBooks] = useState<Volume[]>()

    const currentPage = useSelector((state: RootState) => state.page.Page)

    const renderPage = () => {
        switch (currentPage) {
            case 'book-list':
                return <BookList books={books} setBooks={setBooks} totalItems={totalItems}/>;
            case 'book-page':
                return <BookPage />;
            case 'loading-page':
                return <LoagingPage />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header setBooks={setBooks} setTotalItems={setTotalItems} />
            {renderPage()}
        </>
    )
}
