import axios from 'axios';
import {
  ISigninAPIRequest,
  ISigninAPIResponseSuccess,
  ISigninAPIResponseFail
} from 'src/@types/signin';
import routes from './routes';

export default function signin(
  data: ISigninAPIRequest
): Promise<ISigninAPIResponseSuccess | ISigninAPIResponseFail> {
  return axios.post(routes.signin(), data).then(res => res.data);
}
