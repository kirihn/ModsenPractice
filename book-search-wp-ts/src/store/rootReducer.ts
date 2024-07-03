import { combineReducers } from 'redux';
import foundReducer from './slices/foundSlice';
import pageReducer from './slices/pageSlice'
import currentBookReducer from './slices/currentBookSlice'
const rootReducer = combineReducers({
  found: foundReducer,
  page: pageReducer,
  currentBook: currentBookReducer
});

export default rootReducer;
