import React from 'react';
import cn from "classnames";
import  s from './ModalBody.module.scss'

const ModalBody = ( { modalContent } ) => {

  const toJsx = ( objEntries ) => objEntries.map( (objEntry, index) => {
      if( typeof objEntry[1] === 'object') {
        const newObj = Object.entries( objEntry[1])
        return toJsx( newObj )
      }
      return  (
        <div key={ index }>
          <p> { `${ objEntry[0] }: ${ objEntry[1] }` } </p>
        </div>
      )
    })


  return (
   <div className={ s.modal__body}>
     {
       toJsx(Object.entries(modalContent)).map(t => t)
     }
   </div>
  )
}

export default ModalBody