import React, { useState } from 'react'
import Header from './components/header/header'
import BookList from './components/book-list/books-list'
import BookPage from './components/book-page/book-page'
import './styles/app.scss'

import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { SetSearchInfo } from './store/foundSlice'
import { GetResponseFromBookApi } from './utils/urlGenerator'
import { GoogleBooksResponse } from './dto/books.dto'

export default function App() {
    const [books, setBooks] = useState<GoogleBooksResponse>()

    const currentPage = useSelector((state: RootState) => state.page.Page)

    return (
        <>
            <Header setBooks={setBooks}></Header>
            <main>
                {currentPage == 'book-list' ? (
                    <BookList books={books}></BookList>
                ) : (
                    <BookPage></BookPage>
                )}
            </main>
            <footer></footer>
            {/* {HandymanOrdersData.length == 0 ? (
              <h2>У вас пока нет заказов<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></h2>
            ) : (
                HandymanOrdersData.map((item, OrderId) => (
                <HandymanOrderComponent key={OrderId} OrderData={item}/>
              ))
            )} */}
        </>
    )
}
