import Axios from 'axios';

const headers = { 'Content-Type': 'application/json' };

const createAxios = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const newAxios = Axios.create({
    baseURL
  });

  newAxios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  newAxios.defaults.headers = { ...newAxios.defaults.headers, ...headers };

  newAxios.interceptors.request.use(
    config => {
      const newConfig = { ...config };

      if (localStorage.getItem('token')) {
        newConfig.headers['Authorization'] = `Token ${
          localStorage.getItem('token') || ''
        }`;
      }
      return newConfig;
    },
    error => Promise.reject(error)
  );

  newAxios.interceptors.response.use(
    response => response,
    error => {
      const {
        status,
        config: { url },
        data
      } = error.response;

      if (
        (status === 401 && url !== 'login') ||
        data?.detail?.includes('Invalid token')
      ) {
        localStorage.removeItem('token');
        window.location.pathname = 'sign-in';
      }

      return Promise.reject(error);
    }
  );

  return newAxios;
};

export default createAxios();
