import axios, { Method } from 'axios';
import queryString from 'query-string';

export const ApiCall = async (
  endpoint: string,
  method: Method,
  options?: {
    data?: Object;
    params?: Object;
    needToken?: boolean;
  }
) => {
  let header = {
    'content-type': 'application/json',
  };
  try {
    const response = await axios.request({
      baseURL: 'https://reqres.in/api/',
      url: endpoint,
      method,
      data: options?.data,
      params: options?.params,
      timeout: 5000,
    });
    return response;
  } catch (err) {
    // add handle error
    console.log(err);
  }
};
