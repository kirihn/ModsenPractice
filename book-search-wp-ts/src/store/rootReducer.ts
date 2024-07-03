import { combineReducers } from 'redux';
import foundReducer from './slices/foundSlice';
import pageReducer from './slices/pageSlice'
const rootReducer = combineReducers({
  found: foundReducer,
  page: pageReducer,
});

export default rootReducer;
