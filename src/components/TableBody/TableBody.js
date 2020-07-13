import React from 'react';
import s from './TableBody.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showModal} from "../../redux/actionCreators";


const TableBody = () => {
  const dispatch = useDispatch()
  const users = useSelector( state => state.users.users)


  return (
    <tbody className={ s.table__body }>
      { users.map( (user) => {
        const { id, name, username, email, website} = user
        return (
          <tr
            key={ id }
            className={ s.userData }
            onClick={ () => dispatch( showModal(id) ) }
          >
            <td className={ s.userId }> { id } </td>
            <td className={ s.name }> { name } </td>
            <td className={ s.username }> { username } </td>
            <td className={ s.email }> { email } </td>
            <td className={ s.website }> { website } </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
