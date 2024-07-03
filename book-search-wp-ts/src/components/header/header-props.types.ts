import { GoogleBooksResponse } from "../../types/books.type";

export interface HeaderProps {
    setBooks: (books: GoogleBooksResponse) => void
}
