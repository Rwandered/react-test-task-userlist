import React from 'react';
import s from './TableHead.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {sortUsers} from "../../redux/actionCreators";

const TableHead = () => {
  const dispatch = useDispatch()
  const { users } = useSelector( state => state.users)

  const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1

  const handleHeaderClick = (event) => {
    const sortedUsers = [...users]
    sortedUsers.sort( byField(event.target.textContent) )
    dispatch( sortUsers(sortedUsers) )
  }

  return (
    <thead>
      <tr className={s.table__header} onClick={ handleHeaderClick }>
        <td>№</td>
        <td>Name</td>
        <td>UserName</td>
        <td>Email</td>
        <td>Website</td>
      </tr>
    </thead>
  )
}

export default TableHead