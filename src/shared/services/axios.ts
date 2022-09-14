import axios from 'axios';

const AxiosInst = axios.create();

AxiosInst.defaults.baseURL = 'https://api4.bitlo.com';

AxiosInst.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        'x-bitlo': 'İstanbul',
      },
    };
  },
  err => {
    return Promise.reject(err);
  },
);

AxiosInst.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

export default AxiosInst;
