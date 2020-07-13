import React from 'react';
import  s from './Table.module.scss'
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";


const Table = () => {

  return (
    <div className={ s.table__wrapper}>
      <table className={ s.table__container}>
        <TableHead/>
        <TableBody/>
      </table>
    </div>
  )
}
export default Table
