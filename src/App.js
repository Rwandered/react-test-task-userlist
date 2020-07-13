import React, {useEffect} from 'react';
import Table from "./components/Table/Table";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import s from './App.module.scss'
import {initUser} from "./redux/actionCreators";


const App =  () => {
  const { isModal, userId } = useSelector( state => state.modal )

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( initUser() )
  }, [dispatch])

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