import Reducer from '../';
import {InitTypes} from '../../../src/Actions/init';
import {SigninTypes, ISigninRequest, ISigninError, ISigninSuccess} from '../../../src/Actions/signin';

describe('Reducer', () => {
  describe('Init App', () => {
    test('Init App', () => {
      const action = {
        type: InitTypes.INIT_APP,
        payload: {
          auth: false,
          user: null,
          signin: {
            pending: false,
            errors: []
          }
        }
      };
      const state = {
        auth: true,
        user: null,
        signin: {
          pending: false,
          errors: []
        }
      };
      expect(Reducer({...state}, action)).toEqual({
        auth: false,
        user: null,
        signin: {
          pending: false,
          errors: []
        }
      });
    });
  });

  describe('Signin', () => {
    test('SIGNIN_REQUEST', () => {
      const action = {
        type: SigninTypes.SIGNIN_REQUEST,
        payload: {
          login: '123',
          password: '456'
        }
      } as ISigninRequest;
      const state = {
        auth: false,
        user: null,
        signin: {
          pending: false,
          errors: ['error']
        }
      };
      expect(Reducer({...state}, action)).toEqual({
        auth: false,
        user: null,
        signin: {
          pending: true,
          errors: []
        }
      });
    });

    test('SIGNIN_ERROR', () => {
      const action = {
        type: SigninTypes.SIGNIN_ERROR,
        payload: {
          errors: ['one', 'two']
        }
      } as ISigninError;
      const state = {
        auth: false,
        user: null,
        signin: {
          pending: true,
          errors: ['error']
        }
      };
      expect(Reducer({...state}, action)).toEqual({
        auth: false,
        user: null,
        signin: {
          pending: false,
          errors: ['one', 'two']
        }
      });
    });

    test('SIGNIN_SUCCESS', () => {
      const action = {
        type: SigninTypes.SIGNIN_SUCCESS,
        payload: {
          email: '123@mail.ru',
          name: 'den',
          age: 23
        }
      } as ISigninSuccess;
      const state = {
        auth: false,
        user: null,
        signin: {
          pending: true,
          errors: ['error']
        }
      };
      expect(Reducer({...state}, action)).toEqual({
        auth: true,
        user: {
          email: '123@mail.ru',
          name: 'den',
          age: 23          
        },
        signin: {
          pending: false,
          errors: []
        }
      });
    });
  });
});
