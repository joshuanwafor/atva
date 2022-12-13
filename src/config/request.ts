import axios from 'axios';
import {API_URI} from './config';

const request = axios.create({
  baseURL: API_URI,
});

request.defaults.baseURL = API_URI;
request.defaults.headers.common['Content-Type'] = 'application/json';

export let GLOBAL_FETCH_HEADER = {
  'Content-Type': 'application/json',
  Authorization: '',
};

export const setHeaderToken = (token: string) => {
  if (token) {
    request.defaults.headers.common.Authorization = `Bearer ${token}`;
    GLOBAL_FETCH_HEADER.Authorization = `Bearer ${token}`;
  }
};

request.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response) {
      return Promise.reject({
        data: error.response.data,
        status: error.response.status,
      });
    }
    return Promise.reject(error);
  },
);

export default request;
