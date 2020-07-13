import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import App from './App';
import rootReducer from './redux/reducers';
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider> , root
)

