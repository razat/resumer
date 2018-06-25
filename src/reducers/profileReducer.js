import  { RECEIVE_PROFILE, UPDATE_PROFILE } from '../actions/profileAction';
import sectionHandler from './sectionHandler'

export default function profileReducer(state={}, action) {
	switch(action.type) {
		case  RECEIVE_PROFILE: 
			return action.profile;
		case UPDATE_PROFILE:
			return {
				...state,
				[action.section] : sectionHandler(action.data, action.section, state[action.section])
			} 
		default: 
			return state
	}
}