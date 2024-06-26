import React from 'react'
import Header from './components/header/header'
import BookList from './components/book-list/books-list'
import BookPage from './components/book-page/book-page'
import './styles/app.scss'
import Counter from './components/example/example'

export default function App() {
    return (
        <>
            <Header></Header>
            <main>
                {/* <Counter></Counter> */}
                <BookList></BookList>
                <BookPage></BookPage>
            </main>
            <footer></footer>
        </>
    )
}
