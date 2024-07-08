import { GoogleBooksResponse, Volume } from "../../types/books.type"

export interface BookListProps {
    books?: Volume[]
    totalItems?: number
    setBooks: (books: Volume[]) => void

}