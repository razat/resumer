import { SET_AUTH_USER } from '../actions/authUserAction'

export default function authUserReducer (state = {}, action) {
  switch (action.type) {
    case SET_AUTH_USER :
      return action.user
    default :
      return state
  }
}