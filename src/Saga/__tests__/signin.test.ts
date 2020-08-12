import {call, put, takeEvery} from 'redux-saga/effects';
import {signin} from '../signin';
import {SigninTypes} from '../../../src/Actions/signin';
import signValidate from '../../Validate/signin';

describe('Saga', () => {
  describe('Signin', () => {
    test('Incorrect login', () => {
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: {
          login: '',
          password: ''
        }
      });
      expect(gen.next().value).toMatchObject(
        call(signValidate, {
          login: '',
          password: ''
        })
      );
    });
  });
});
