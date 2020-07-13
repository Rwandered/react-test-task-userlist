import React from 'react';
import Table from "./components/Table/Table";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useSelector} from "react-redux";
import s from './App.module.scss'


const App =  () => {
  const { isModal, userId } = useSelector( state => state.modal )

  console.log('Modal?: ', isModal, userId)
  return (
    <div className={ s.wrapper }>
      <Table/>
      {
        isModal && <ModalWindow userId={ userId } />
      }
    </div>
  )
}

export default App;