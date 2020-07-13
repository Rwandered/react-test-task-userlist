import React from 'react';
import cn from "classnames";
import {hideModal} from "../../redux/actionCreators";
import {useDispatch} from "react-redux";
import s from "./ModalHeader.module.scss";



const ModalHeader = ( { modalTitle } ) => {
  const dispatch = useDispatch()

  return (
    <div className={ cn( s.modal__header, s.modal__column) }>
      <span className={ s.modal__title }>{ modalTitle || 'Modal window' }</span>
      <span
        className={ s.modal__close }
        onClick={ () => dispatch( hideModal() )}
      > × </span>
    </div>
  )
}

export default ModalHeader