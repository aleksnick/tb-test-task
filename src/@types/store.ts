import {IUserStore} from './user';
import {ISigninStore} from './signin';


export interface IStore {
  auth: boolean;
  user: IUserStore | null;
  signin: ISigninStore;
}
