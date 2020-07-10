import React, {useEffect, useState} from 'react';
import s from './TableBody.module.scss'


const TableBody = () => {

  const [users, setUsers] = useState( [] )



  useEffect(  () => {
    ( async function getUserData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      console.log('User: ',users)
      setUsers( users )
    })()
  }, [])

  return (
    <tbody>
      { users.map( (user) => {
        return (
          <tr key={user.id} className={ s.userData }>
            <td className={ s.userId }> { user.id } </td>
            <td className={ s.name }> { user.name } </td>
            <td className={ s.username }> { user.username } </td>
            <td className={ s.email }> {user.email } </td>
            <td className={ s.website }> { user.website } </td>
            <td></td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
