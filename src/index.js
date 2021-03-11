// all of this is boilerplate from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// redux allows us to set up a state container
// to use across our app (as opposed to having a
// unique state for all of our components.

// createStore is what redux uses to hold the complete
// state tree of our app. You should only have one (cuz it's global,
// that's the whole point XD )
// applyMiddleware is what allows us to apply middleware (go figure)
// to store's dispatch method. As you can see below, 
// we use logger in order to have console feedback on what's happening
// with store (i.e. our app's state)
import { createStore, applyMiddleware } from 'redux';

// Provider is what actually ends up making our state-tree (store)
// available to our components nested within App.js.
// (see our ReactDOM.render() towards the bottom of this file)
import { Provider } from 'react-redux';

// createSagaMiddleware is a factory function
// that allows us to connect our sagas to the rest of our app.
import createSagaMiddleware from 'redux-saga';

// BTW, saga can be thought of as a middleware that allows
// us to handle side-effects (behaviors of functions
// that modify things outside of its local environment,
// like a state variable (or store, in our case))
// in a more organized way (similar to how redux
// gives us a "better" organization for our state tree)

// Redux is the state tree, Saga is what does stuff TO
// the state tree.

// logger is just a developer tool so that we can see
// changes to our redux state in our browser console.
import logger from 'redux-logger';

// simply importing the files that we use to organize
// our individual reducers and sagas.
import rootReducer from './Redux/reducers/_root.reducer';
import rootSaga from './Redux/sagas/_root.saga';

// makes the actual instance of our middleware.
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
// (also check the conditional render syntax) (terminology ???)

// in this conditional (using the ternary operator), we're just checking
// to see if we're in development mode -- if we are, then we're going
// to enable the logger (which will console.log in our browser
// when our reducers are changed / modified)
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// declares store with its actual "contents" (i.e. all of our reducers)
// which we will 'feed' into our <Provider> down below in our ReactDOM.render()
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

// this line is what actually allows us to use 
// the sagas that we write (all imported into
// our rootSaga file). It _starts_ the saga.
sagaMiddleware.run(rootSaga);

// This is where we actual render our react DOM tree;
// wrapping our App (the 'root' of all our components)
// in provider gives it (and all it's sub-components)
// access to store
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// (comment via create-react-app)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
