export interface IAPIRequest {}
import {IWithErrors} from './error';

export interface IAPIResponseSuccess<T> {
  data: T;
}

export interface IAPIResponseFail extends IWithErrors {}
