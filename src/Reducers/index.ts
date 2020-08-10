import {Actions} from 'src/Actions';
import {IStore} from 'src/@types/store';

export default function reducer(state: IStore, action: Actions) {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        ...action.payload
      };
    case 'SIGNIN_REQUEST':
      return {
        ...state,
        signin: {
          pending: true,
          errors: []
        }
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        auth: true,
        signin: {
          pending: false,
          errors: []
        }
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        auth: false,
        signin: {
          pending: false,
          errors: action.payload.errors
        }
      };
    default:
      return state;
  }
}
