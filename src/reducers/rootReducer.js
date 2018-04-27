import { combineReducers } from 'redux';
import busses from './busReducer';

const rootReducer = combineReducers({
  busses
});

export default rootReducer;