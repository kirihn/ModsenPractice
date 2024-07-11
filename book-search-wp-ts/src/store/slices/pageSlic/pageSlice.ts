import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoundState } from './types';

const initialState: FoundState = {
    Page: 'book-list'
};

const PageSlice = createSlice({
  name: 'PageSlice',
  initialState,
  reducers: {
    SetPage: (state, action: PayloadAction<string>) => {
        state.Page = action.payload ;
      },
  },
});

export const { SetPage } = PageSlice.actions;

export default PageSlice.reducer;
