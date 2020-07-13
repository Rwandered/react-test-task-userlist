import {ADD_USERS, HIDE_MODAL, SHOW_MODAL, SORT_USERS} from "./actionTypes";

export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users
  }
}

export const initUser = () => {
  return  async (dispatch) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      dispatch( addUsers(users) )
    } catch (e) {}
  }
}


export const showModal = (userId) => {
  return {
    type: SHOW_MODAL,
    payload: userId
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

export const sortUsers  = ( users ) => {
  return {
    type: SORT_USERS,
    payload: users
  }
}

