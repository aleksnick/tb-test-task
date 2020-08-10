import {IAction} from 'src/@types/action';
import {IStore} from 'src/@types/store';

export enum InitTypes {
  'INIT_APP' = 'INIT_APP'
};

export interface IInit extends IAction<IStore> {
  type: InitTypes.INIT_APP;
}

export const Init = (): IInit => ({
  type: InitTypes.INIT_APP,
  payload: {
    auth: false,
    user: null,
    signin: {
      pending: false,
      errors: []
    }
  }
});
