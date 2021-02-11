import axios from 'axios';
import { 
  put,
  // put, 
  takeLatest
} from 'redux-saga/effects';

function* sendEmail(action) {
  try {
    // do the axios thing here!
    // and then do the reducer thing
    // what does put do?
    // console.log('sending an email', action.payload.name)
    
    let response = yield axios.post( '/api/email', action.payload );
    
    yield console.log(response);

    yield put({type: 'SET_CONFIRMATION', payload: response.status});

  } catch (error) {
    console.log('error in sendEmail', error);
  }
}


function* confirmEmail(action) {
  try {
    
    // do the thing here!

  } catch (error) {

    console.log('error in confirmEmail', error);

  }
}

function* emailSaga() {
  yield takeLatest('SEND_EMAIL', sendEmail);
  yield takeLatest('CONFIRM_EMAIL', confirmEmail);
}

export default emailSaga;