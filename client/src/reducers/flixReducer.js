import { FETCH_NEW_FLIX, FETCH_FLIX_INFO, FETCH_FLIX_ID, FETCH_SEARCH_RESULTS } from '../actions/types';

const initalState = {
  newFlix: [],
  flixInfo: {},
  flixID: null,
  searchResults: []
}

// default to empty array for surveys
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_NEW_FLIX:
      return {...state, newFlix: [...action.payload]};
    case FETCH_FLIX_INFO:
      return {...state, flixInfo: action.payload}
    case FETCH_SEARCH_RESULTS:
      return {...state, searchResults: [...action.payload]};
    case FETCH_FLIX_ID:
      return {...state, flixID: action.payload}
    default:
      return state;
  }
}