import React, { useState } from 'react'
import Header from './components/header/header'
import BookList from './components/book-list/books-list'
import BookPage from './components/book-page/book-page'
import './styles/app.scss'
import Counter from './components/example/example'

import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement, incrementByAmount } from './store/exampleSlice';
import { SetSearchInfo } from './store/foundSlice'
import { GetResponseFromBookApi } from './utils/urlGenerator'
import { GoogleBooksResponse } from './dto/books.dto'


export default function App() {
    const [books, setBooks] = useState<GoogleBooksResponse>();

    const dispatch = useDispatch(); 

    const currentPage = useSelector((state: RootState) => state.page.Page)

    const searchRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);
    const filterRef = useRef<HTMLSelectElement>(null);

    const handleSearch = async () => {
        const searchParams = {
            Search: searchRef.current?.value || ' ',
            Categories: categoryRef.current?.value || 'all',
            Filter: filterRef.current?.value || 'relevance',
            StartIndex: 0
        };

        dispatch(SetSearchInfo(searchParams));
        
        const response = await GetResponseFromBookApi(searchParams);
        setBooks(response.data);

        console.log(books); // Пример вывода полученных данных в консоль
    };

    return (
        <>
            <Header 
                handleSearch={handleSearch}
                searchRef={searchRef}
                categoryRef={categoryRef}
                filterRef={filterRef}
            ></Header>
            <main>
                {
                    currentPage == "book-list" ? 
                    <BookList books={books}></BookList> 
                    : 
                    <BookPage></BookPage>
                }

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
