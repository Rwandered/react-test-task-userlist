import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useSelector} from "react-redux";


const App =  () => {
  const { isModal, userId } = useSelector( state => state.modal )

  console.log('Modal?: ', isModal, userId)
  return (
    <div className={'wrapper'}>
      <Table/>
      {
        isModal && <ModalWindow userId={ userId } />
      }
    </div>
  )
}

export default App;