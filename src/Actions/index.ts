import {IInit} from './Init';
import {ISigninRequest, ISigninSuccess, ISigninError} from './signin';

export type Actions = IInit | ISigninRequest | ISigninSuccess | ISigninError;
