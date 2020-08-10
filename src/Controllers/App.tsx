import React from 'react';
import {connect} from 'react-redux';
import {IStore} from 'src/@types/store';
import {IUser} from 'src/@types/user';
import App from 'src/Components/App';

interface IProps {
  user: IUser | null;
}

function SigninController({user}: IProps) {
  return <App user={user}/>;
}

export default connect(
  (store: IStore): Partial<IProps> => ({
    user: store?.user
  })
)(SigninController);
