import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoundState {
    Search: string,
    Categories: string,
    SortingBy: string
}

const initialState: FoundState = {
    Search: '',
    Categories: 'all',
    SortingBy: 'relevance'
};

const FoundSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    SetSearch: (state, action: PayloadAction<string>) => {
      state.Search = action.payload ;
    },
    SetCategories: (state, action: PayloadAction<string>) => {
        state.Categories = action.payload ;
      },
    SetSortingBy: (state, action: PayloadAction<string>) => {
        state.SortingBy = action.payload ;
      },
  },
});

export const { SetSearch, SetCategories, SetSortingBy } = FoundSlice.actions;

export default FoundSlice.reducer;
