import  { RECEIVE_PROFILE, ADD_TO_PROFILE, DELETE_FROM_PROFILE } from '../actions/profileAction';
import {sectionHandler, sectionHandlerDelete} from './sectionHandler'

export default function profileReducer(state={}, action) {
	switch(action.type) {
		case  RECEIVE_PROFILE: 
			return action.profile;
		case ADD_TO_PROFILE:
			return {
				...state,
				[action.section] : sectionHandler(action.data, action.section, state[action.section])
			}
		case DELETE_FROM_PROFILE:
		    return {
		    	...state,
		    	[action.section] : sectionHandlerDelete(action.index, state[action.section])
		    }

		default: 
			return state
	}
}