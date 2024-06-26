import { combineReducers } from 'redux';
import exampleReducer from './exampleSlice';
import foundReducer from './foundSlice';
import pageReducer from './pageSlice'
const rootReducer = combineReducers({
  example: exampleReducer,
  found: foundReducer,
  page: pageReducer,
});

export default rootReducer;
