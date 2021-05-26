import { FETCH_NEW_FLIX, FETCH_FLIX_INFO } from '../actions/types';

const initalState = {
  newFlix: [],
  flixInfo: null,
  similarResults: []
}

// default to empty array for surveys
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_NEW_FLIX:
      return {...state, newFlix: [...action.payload]};
    case FETCH_FLIX_INFO:
      return {...state, flixInfo: action.payload}
    default:
      return state;
  }
}