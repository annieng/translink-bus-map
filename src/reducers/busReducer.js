import initState from './initState'
// import an action to get updated busses
import { RECEIVE_BUSSES } from '../actions/actionTypes';

// busses function needs to get inital state, take in busses and set a newState that will
// be returned when it receives bus information
export default function busses(state = initState.busses, action) {
  let newState;
  switch(action.type) {
    case RECEIVE_BUSSES:
      newState = action.busses;
      return newState;
    default: 
      return state
  }
}