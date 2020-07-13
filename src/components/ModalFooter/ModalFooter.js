import React from 'react';
import cn from "classnames";
import {hideModal} from "../../redux/actionCreators";
import {useDispatch} from "react-redux";
import s from './ModalFooter.module.scss'


const ModalFooter = () => {
  const dispatch = useDispatch()

  return (
    <div className={cn( s.modal__footer, s.modal__column) }>
      <div className={ s.modal__ok_btn }/>
      <div
        className={ s.modal__cancel_btn }
        onClick={ () => dispatch( hideModal() )}
      />
    </div>
  )
}

export default ModalFooter