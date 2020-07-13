import React from 'react';
import  s from './ModalBody.module.scss'

const ModalBody = ( { modalContent } ) => {

  const toJsx = ( objEntries ) => objEntries.map( (objEntry, index) => {
      if( typeof objEntry[1] === 'object') {
        const newObj = Object.entries( objEntry[1])
        return toJsx( newObj )
      }
      return  (
        <div key={ index } className={ s.userInfo }>
          <p className={ s.info__key }> { objEntry[0].toUpperCase() } </p>
          <p className={ s.info__value} > {  objEntry[1]  } </p>
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