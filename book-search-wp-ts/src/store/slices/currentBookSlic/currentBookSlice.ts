import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Volume } from "../../../types/books.type";
import { CurrentBook } from './types';

const initialState: CurrentBook = {
    Book: null
};

const currentBooksSlice = createSlice({
    name: 'currentBookSlice',
    initialState,
    reducers:{
        setCurrentBook(state, action: PayloadAction<Volume>) {
            state.Book = action.payload;
        },
        clearCurrentBook(state) {
            state.Book = null;
        }
    }
});

export const { setCurrentBook, clearCurrentBook } = currentBooksSlice.actions;

export default currentBooksSlice.reducer;
