import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './Redux/reducers/_root.reducer';
import rootSaga from './Redux/sagas/_root.saga';


import './index.css';
import App from './Components/App/App';
// import Navbar from './Components/NavBar/NavBar';
// import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
// (also check the conditional render syntax) (terminology ???)
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  // rootSaga,
  applyMiddleware(...middlewareList),

);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
