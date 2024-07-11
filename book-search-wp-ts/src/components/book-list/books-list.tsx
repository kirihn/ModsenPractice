import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BookCard } from '../book-card/book-card'
import { BookListProps } from './types'
import { SetNewIndex } from '../../store/slices/foundSlice'
import { GetResponseFromBookApi } from '../../utils/urlGenerator'
import { RootState } from '../../store/store'
import FoundState from '../../types/searchInfo.dto'
import { GoogleBooksResponse} from '../../types/books.type'
import './books-list.scss'

export function BookList(props: BookListProps) {
    const dispatch = useDispatch()

    const [startIndex, setstartindex] = useState<number>(30)

    const { books, totalItems, setBooks } = props || { books: [], totalItems: 0 }

    const searchParamsObj = useSelector((state: RootState) => state.found)

    const LoadMoreBookCard = async () => {

        dispatch(SetNewIndex(startIndex))

        const searchParams: FoundState = {
            Search: searchParamsObj.Search || '%20',
            Categories: searchParamsObj.Categories || 'all',
            Filter: searchParamsObj.Filter || 'relevance',
            StartIndex: startIndex || 0,
        }

        const response: GoogleBooksResponse = await GetResponseFromBookApi(
            searchParams
        )

        if (books != undefined && response.items != undefined)
            setBooks(books?.concat(response.items))

        setstartindex(startIndex + 30)
    }

    return (
        <main>
            <p className="booksCount">
                {totalItems !== undefined && totalItems > 0
                    ? 'found ' + totalItems + ' results'
                    : 'No results'}
            </p>

            <div className="booklistContainer">
                {books?.map((book, id) => (
                    <BookCard key={id} book={book} />
                ))}
            </div>
            <div className="moreButtonContainer">
                <button className='moreButton' onClick={LoadMoreBookCard}>Load more</button>
            </div>
        </main>
    )
}
