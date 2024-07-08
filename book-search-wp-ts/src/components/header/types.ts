import { Volume } from "../../types/books.type";

export interface HeaderProps {
    setBooks: (books: Volume[]) => void
    setTotalItems: (totalItems: number) => void
}
