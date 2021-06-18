import { FETCH_NEW_FLIX, FETCH_FLIX_INFO, FETCH_WATCHLISTS } from '../actions/types';

const initalState = {
  newFlix: [],
  watchlist: [],
  flixInfo: {},
}

// default to empty array for surveys
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_NEW_FLIX:
      return {...state, newFlix: [...action.payload]};
    case FETCH_WATCHLISTS:
      return {...state, watchlist: [...action.payload]};
    case FETCH_FLIX_INFO:
      return {...state, flixInfo: action.payload}
    default:
      return state;
  }
}