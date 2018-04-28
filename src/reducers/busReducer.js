import initState from './initState'
import { RECEIVE_BUSSES } from '../actions/actionTypes';

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