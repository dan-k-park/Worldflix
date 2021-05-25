import { FETCH_NEW_FLIX } from '../actions/types';

const initalState = {
  newFlix: [],
  searchResult: {},
  similarResults: []
}

// default to empty array for surveys
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_NEW_FLIX:
      return {...state, newFlix: [...action.payload]};
    default:
      return state;
  }
}