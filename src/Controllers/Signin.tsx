import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {IStore} from 'src/@types/store';
import {ISigninStore, ISigninForm} from 'src/@types/signin';
import Signin from 'src/Components/Signin';
import {SigninRequest} from 'src/Actions/signin';

interface IProps extends ISigninStore {
  signinRequest: (data: ISigninForm) => void;
}

function SigninController({errors, pending, signinRequest}: IProps) {
  const onSubmit = useCallback(async (form: ISigninForm) => {
    signinRequest(form);
  }, []);
  return <Signin error={errors?.[0]} pending={pending} onSubmit={onSubmit} />;
}

export default connect(
  (store: IStore): Partial<IProps> => ({
    pending: store?.signin?.pending,
    errors: store?.signin?.errors
  }),
  {
    signinRequest: SigninRequest
  }
)(SigninController);
