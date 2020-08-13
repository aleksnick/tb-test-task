import {call, put, takeEvery} from 'redux-saga/effects';
import signinRequest from 'src/API/signin';
import {SigninSuccess, SigninError, ISigninRequest, SigninTypes} from '../Actions/signin';
import signValidate from '../Validate/signin';
import {l8n} from 'src/l8n';
import sleep from '../Utils/sleep';

export const API_RQUEST_TS = 1000;

export function* signin(action: ISigninRequest) {
  const errors = yield call(signValidate, action.payload);
  if (!errors || errors.length === 0) {
    try {
      const res = yield call(signinRequest, action.payload);
      yield call(sleep, API_RQUEST_TS);
      if (res.errors) {
        yield put(SigninError(res.errors));
      } else {
        yield put(SigninSuccess(res.data));
      }
    } catch (e) {
      yield put(SigninError([l8n('signin.error.server')]));
    }
  } else {
    yield put(SigninError(errors));
  }
}

export default function* signinSaga() {
  yield takeEvery(SigninTypes.SIGNIN_REQUEST, signin);
}
