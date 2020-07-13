import React from 'react';
import s from './ModalWindow.module.scss'
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalBody from "../ModalBody/ModalBody";
import {useSelector} from "react-redux";

const ModalWindow = ( { userId } ) => {

  const users = useSelector(state => state.users.users)
  const needUser = users.find( user => user.id === userId)

  return (
    <div className={s.modal__layer}>
      <div className={s.modal__window}>
        <div className={s.modal__row}>
          <ModalHeader modalTitle={ needUser.name } />
          <ModalBody modalContent={ needUser }/>
          <ModalFooter/>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow



