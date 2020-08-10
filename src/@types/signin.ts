import {IAPIRequest, IAPIResponseSuccess, IAPIResponseFail} from './api';
import {IWithErrors} from './error';
import {IUser} from './user';

export interface ISigninForm {
  login: string;
  password: string;
}

export interface ISigninAPIRequest extends ISigninForm, IAPIRequest {}

export interface ISigninAPIResponseSuccess extends IAPIResponseSuccess<IUser> {}

export interface ISigninAPIResponseFail extends IAPIResponseFail {}

export interface ISigninStore extends IWithErrors {
  pending: boolean;
}
