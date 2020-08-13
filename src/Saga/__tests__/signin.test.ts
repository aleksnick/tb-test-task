import {call, put, takeEvery} from 'redux-saga/effects';
import {signin, API_RQUEST_TS} from '../signin';
import {SigninTypes, SigninError, SigninSuccess} from '../../../src/Actions/signin';
import signValidate from '../../Validate/signin';
import signinRequest from 'src/API/signin';
import sleep from '../../Utils/sleep';

describe('Saga', () => {
  describe('Signin', () => {
    test('Incorrect login', () => {
      const data = {
        login: '',
        password: ''
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      expect(gen.next().value).toMatchObject(call(signValidate, data));
      const errors = signValidate(data);
      expect(gen.next(errors).value).toMatchObject(put(SigninError(errors)));
      expect(gen.next().done).toBeTruthy();
    });

    test('Incorrect password', () => {
      const data = {
        login: 'login',
        password: ''
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      expect(gen.next().value).toMatchObject(call(signValidate, data));
      const errors = signValidate(data);
      expect(gen.next(errors).value).toMatchObject(put(SigninError(errors)));
      expect(gen.next().done).toBeTruthy();
    });

    test('Incorrect password 2', () => {
      const data = {
        login: 'login',
        password: 'pass'
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      expect(gen.next().value).toMatchObject(call(signValidate, data));
      const errors = signValidate(data);
      expect(gen.next(errors).value).toMatchObject(put(SigninError(errors)));
      expect(gen.next().done).toBeTruthy();
    });

    test('Wrong password', () => {
      const data = {
        login: 'login',
        password: 'password'
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      expect(gen.next().value).toMatchObject(call(signValidate, data));
      const errors = signValidate(data);
      expect(gen.next(errors).value).toMatchObject(call(signinRequest, data));
      const res = {
        errors: ['wrong password']
      };
      expect(gen.next(res).value).toMatchObject(call(sleep, API_RQUEST_TS));
      expect(gen.next().value).toMatchObject(put(SigninError(res.errors)));
      expect(gen.next().done).toBeTruthy();
    });

    test('Server error', () => {
      const data = {
        login: 'login',
        password: 'password'
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      try {
        gen.throw('');
      } catch (e) {
        expect(gen.next().value).toMatchObject(put(SigninError(['signin.error.server'])));
      }
    });

    test('Success', () => {
      const data = {
        login: 'login',
        password: 'password'
      };
      const gen = signin({
        type: SigninTypes.SIGNIN_REQUEST,
        payload: data
      });
      expect(gen.next().value).toMatchObject(call(signValidate, data));
      const errors = signValidate(data);
      expect(gen.next(errors).value).toMatchObject(call(signinRequest, data));
      const res = {
        data: {
          id: 1,
          name: 'name',
          email: '123@mail.ru',
          age: 18
        }
      };
      expect(gen.next(res).value).toMatchObject(call(sleep, API_RQUEST_TS));
      expect(gen.next().value).toMatchObject(put(SigninSuccess(res.data)));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
