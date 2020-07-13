import {ADD_USERS, HIDE_MODAL, SHOW_MODAL, SORT_USERS} from './actionTypes'
import { combineReducers } from 'redux'

const initialUserState = {
  users: []
}
const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: action.users }
    case SORT_USERS:
      return { ...state, users: action.payload }
    default:
        return state
  }
}

const modalReducer = (state= { isModal: false, userId: null }, action ) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, isModal: true, userId: action.payload}
    case HIDE_MODAL:
      return {...state, isModal: false,  userId: null}
    default:
      return state
  }
}


export const rootReducer = combineReducers( {
 users: usersReducer,
  modal: modalReducer,
})

export default rootReducer
