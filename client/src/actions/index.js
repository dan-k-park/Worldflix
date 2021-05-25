// Action creator file
import axios from "axios"; // used to make ajax requests
import { FETCH_USER, FETCH_LOCATION, FETCH_NEW_FLIX } from "./types";

// Redux thunk inspects the value returned by this action creator
// If redux thunk sees a function being returned, it will call it and pass in the dispatch function as an argument
// wait until promise is resolved, then once we have a response we dispatch an action
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getGeoInfo = () => async (dispatch) => {
  const res = await axios.get("https://ipapi.co/json/");
  dispatch({
    type: FETCH_LOCATION,
    payload: { country_code: res.data.country, country_name: res.data.country_name },
  });
};

export const fetchNewFlix = () => async (dispatch) => {
  const newFlix = await axios({
    method: "GET",
    url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
    headers: {
      "x-rapidapi-key": "4a02da76b1msh7288767abeb74e9p1b431bjsnff758910e2a3",
      "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    },
    params: {
      q: "get:new7:US",
      p: "1",
      t: "ns",
      st: "adv",
    },
  }).then(res => res['data']['ITEMS'])


  dispatch({ type: FETCH_NEW_FLIX, payload: newFlix });
};

// export const submitLogin = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   history.push('/');
//   dispatch({ type: FETCH_USER, payload: res.data })
// }
