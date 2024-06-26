import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoundState {
    Page: string,
}

const initialState: FoundState = {
    Page: 'book-list'
};

const PageSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    SetPage: (state, action: PayloadAction<string>) => {
        state.Page = action.payload ;
      },
  },
});

export const { SetPage } = PageSlice.actions;

export default PageSlice.reducer;
