import { combineReducers } from 'redux';
import authReducer from './authReducer';
import countryReducer from './countryReducer';
import flixReducer from './flixReducer';

export default combineReducers({
  auth: authReducer,
  country: countryReducer,
  flix: flixReducer
})