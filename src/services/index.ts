import FetchApi from './FetchApi';
import { URL_PATHS, UsersProps } from './constants';
import { errorMessageCreator } from '../utils';
import { Method } from 'axios';

export async function users(
  method: Method,
  { values, params, id }: UsersProps
) {
  try {
    const url = `${URL_PATHS.users}${id ? `${id}/` : ''}`;
    const { data } = await FetchApi({ method, url, data: values, params });

    return { data, loading: false };
  } catch (e) {
    errorMessageCreator(e);
    return { loading: false, error: true, data: null };
  }
}
