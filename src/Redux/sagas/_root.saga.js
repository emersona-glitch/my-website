 import { all } from 'redux-saga/effects';
 import emailSaga from './email.saga';

// function* is a generator function, which means that it returns a generator
// object...???

// what does yield do?
// and done? it's like a sequence of things that happen when something is
// called. This is hard for me to explain

export default function* rootSaga() {
  yield all([
    emailSaga(),
  ])
} 