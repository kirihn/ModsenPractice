import { combineReducers } from 'redux';
import foundReducer from './foundSlice';
import pageReducer from './pageSlice'
const rootReducer = combineReducers({
  found: foundReducer,
  page: pageReducer,
});

export default rootReducer;
