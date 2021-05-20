import { FETCH_USER } from '../actions/types'

// eslint-disable-next-line 
export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
      // auth reducer will return null (hasn't determined whether user is logged in yet aka request is still pending), a user model in the payload (user logged in), or false (logged out)
      return action.payload || false;
    default: 
      return state;
  }
}