import Axios from './createAxios';
import { Method } from 'axios';

export type Props = {
  url: string;
  method: Method;
  data?: object | null;
  params?: any;
  rest?: any;
  headers?: any;
};

async function api({ url, method, data, params, ...rest }: Props) {
  const request = await Axios.request({
    url,
    data,
    method,
    params,
    ...rest
  });
  return request;
}

export default api;
