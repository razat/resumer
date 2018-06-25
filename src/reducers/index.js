import { combineReducers } from "redux";

import authUser from './authUserReducer';
import profile from './profileReducer';


export default combineReducers({
	authUser,
	profile
});