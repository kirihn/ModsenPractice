import React from 'react'
import Header from './components/header'
import BookCard from './components/book-Card'
import './styles/main.scss'
import BookList from './components/books-list'
import BookPage from './components/book-page'
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
