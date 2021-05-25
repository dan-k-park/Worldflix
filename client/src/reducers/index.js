import { combineReducers } from 'redux';
import authReducer from './authReducer';
import locationReducer from './locationReducer';
import flixReducer from './flixReducer';

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
  flix: flixReducer
})