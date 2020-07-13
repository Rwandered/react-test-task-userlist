import React from 'react';
import s from './TableHead.module.scss'

const TableHead = () => {

  const handleHeaderClick = (event) => console.log('Event target: ', event.target)

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