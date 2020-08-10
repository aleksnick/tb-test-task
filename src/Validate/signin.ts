import {l8n} from 'src/l8n';
import {ISigninForm} from 'src/@types/signin';

function validateLogin(v: string) {
  const err = new Array<string>();
  if (!v) {
    err.push(l8n('signin.error.login.none'));
    return err;
  }
  v = v.toString();
  if (v.length > 256) {
    err.push(l8n('signin.error.login.long'));
  }
  return err;
}

function validatePassword(v: string) {
  const err = new Array<string>();
  if (!v) {
    err.push(l8n('signin.error.password.none'));
    return err;
  }
  v = v.toString();
  if (v.length < 6 || v.length > 256) {
    err.push(l8n('signin.error.password.long'));
  }
  return err;
}

export default function validate(data: ISigninForm) {
  const err = new Array<string>();
  const loginErr = validateLogin(data.login);
  if (loginErr && loginErr.length) {
    return loginErr;
  }
  const passwordErr = validatePassword(data.password);
  if (passwordErr && passwordErr.length) {
    return passwordErr;
  }
  return [];
}
