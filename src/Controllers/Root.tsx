import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {IStore} from 'src/@types/store';
import App from 'src/Controllers/App';
import Signin from 'src/Controllers/Signin';
import {Init} from 'src/Actions/init';

interface IProps {
  auth: boolean;
  init: () => void;
}

function Root({auth, init}: IProps) {
  useEffect(() => {
    init();
  }, []);
  if (auth) {
    return <App />;
  } else {
    return <Signin />;
  }
}

export default connect(
  (store: IStore): Partial<IProps> => ({
    auth: store?.auth
  }), {
    init: Init
  }
)(Root);
