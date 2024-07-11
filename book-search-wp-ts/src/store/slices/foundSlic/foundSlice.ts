import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FoundState from '../../../types/searchInfo.dto';

const initialState: FoundState = {
    Search: ' ',
    Categories: 'all',
    Filter: 'relevance',
    StartIndex: 0
};

const FoundSlice = createSlice({
  name: 'FoundSlice',
  initialState,
  reducers: {
    SetSearchInfo: (state, action: PayloadAction<FoundState>) => {
      state.Search = action.payload.Search;
      state.Categories = action.payload.Categories;
      state.Filter = action.payload.Filter;
      state.StartIndex = action.payload.StartIndex;

    },
    SetNewIndex: (state, action: PayloadAction<number>) => {
      state.StartIndex = action.payload; // state.StartIndex += 30 если урезать функционал пользователя, ТУТ ЕЩЕ НУЖНО РАЗОБРАТЬСЯ
    },
  },
});

export const { SetSearchInfo, SetNewIndex } = FoundSlice.actions;

export default FoundSlice.reducer;
