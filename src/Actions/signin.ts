import {IAction} from 'src/@types/action';
import {ISigninForm} from 'src/@types/signin';
import {IWithErrors} from 'src/@types/error';
import {IUser} from 'src/@types/user';

export enum SigninTypes {
  'SIGNIN_REQUEST' = 'SIGNIN_REQUEST',
  'SIGNIN_SUCCESS' = 'SIGNIN_SUCCESS',
  'SIGNIN_ERROR' = 'SIGNIN_ERROR'
}

export interface ISigninRequest extends IAction<ISigninForm> {
  type: SigninTypes.SIGNIN_REQUEST;
}

export interface ISigninSuccess extends IAction<IUser> {
  type: SigninTypes.SIGNIN_SUCCESS;
}

export interface ISigninError extends IAction<IWithErrors> {
  type: SigninTypes.SIGNIN_ERROR;
}

export const SigninRequest = (data: ISigninForm): ISigninRequest => ({
  type: SigninTypes.SIGNIN_REQUEST,
  payload: data
});

export const SigninSuccess = (data: IUser): ISigninSuccess => ({
  type: SigninTypes.SIGNIN_SUCCESS,
  payload: data
});

export const SigninError = (errors: string[]): ISigninError => ({
  type: SigninTypes.SIGNIN_ERROR,
  payload: {
    errors
  }
});
