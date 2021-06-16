// Action creator file
import axios from "axios"; // used to make ajax requests
import {
  FETCH_USER,
  FETCH_LOCATION,
  FETCH_NEW_FLIX,
  FETCH_FLIX_INFO,
} from "./types";

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
    payload: { code: res.data.country, name: res.data.country_name },
  });
};

export const fetchNewFlix = (country) => async (dispatch) => {
  const newFlix = await axios({
    method: "GET",
    url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_UNOGS_API_KEY}`,
      "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    },
    params: {
      q: `get:new7:${country}`,
      p: "1",
      t: "ns",
      st: "adv",
    },
  }).then((res) => res["data"]["ITEMS"].slice(0, 12));

  dispatch({ type: FETCH_NEW_FLIX, payload: newFlix });
};

// Figure out why this doesn't work
export const fetchFlixInfo = (id) => async (dispatch) => {
  const flixInfo = await axios({
    method: "GET",
    url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_UNOGS_API_KEY}`,
      "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    },
    params: {
      q: `${id}`,
      t: "loadvideo",
    },
  });
  dispatch({ type: FETCH_FLIX_INFO, payload: flixInfo["data"]["RESULT"] });
};

// export const submitLogin = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   history.push('/');
//   dispatch({ type: FETCH_USER, payload: res.data })
// }
