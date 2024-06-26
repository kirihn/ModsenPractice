import React from 'react'
import Header from './components/header/header'
import BookList from './components/book-list/books-list'
import BookPage from './components/book-page/book-page'
import './styles/app.scss'
import Counter from './components/example/example'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement, incrementByAmount } from './store/exampleSlice';
import { SetCategories } from './store/foundSlice';

export default function App() {

    const categories = useSelector((state: RootState) => state.found.Categories)
    const count = useSelector((state: RootState) => state.example.value);
    const currentPage = useSelector((state: RootState) => state.page.Page)
    const dispatch = useDispatch(); 
    return (
        <>
            <Header></Header>
            <main>
                {/* <Counter></Counter> */}
                {
                    currentPage == "book-list" ? <BookList></BookList> : <BookPage></BookPage>
                }
                {/* <BookList></BookList>
                <BookPage></BookPage> */}
            </main>
            <footer></footer>
        </>
    )
}
