import axios, { AxiosRequestConfig } from 'axios';
import { instance } from './interceptor';

const AxiosInstance = (data: AxiosRequestConfig, token?: string) => {
  try {
    const request = instance({
      method: data.method,
      url: data.url,
      withCredentials: false,
      data: data.data,
      headers: {
        Authorization: token ? 'Bearer ' + token : null,
      },
      params: data.params,
    });
    return request;
  } catch (error) {
    return error;
  }
};

export default AxiosInstance;
