import React from 'react'
import Header from './components/header/header'
import './styles/app.scss'
import BookList from './components/book-list/books-list'
import BookPage from './components/book-page/book-page'
export default function App() {
    return (
        <>
            <Header></Header>
            <main>
                <BookList></BookList>
                <BookPage></BookPage>
            </main>
            <footer></footer>
        </>
    )
}
