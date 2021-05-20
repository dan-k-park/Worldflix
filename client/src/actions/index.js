// Action creator file
import axios from 'axios'; // used to make ajax requests
import { FETCH_USER } from './types';


// Redux thunk inspects the value returned by this action creator
// If redux thunk sees a function being returned, it will call it and pass in the dispatch function as an argument
// wait until promise is resolved, then once we have a response we dispatch an action
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

// export const submitLogin = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   history.push('/');
//   dispatch({ type: FETCH_USER, payload: res.data })
// }