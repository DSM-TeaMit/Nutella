import axios, { AxiosError } from "axios";
import baseURL from "../../constant/BaseUrl";
import { refresh } from "./refresh";


const request = axios.create({
  baseURL: baseURL,
  timeout: 100000,
});

request.interceptors.request.use(refresh, function (error: AxiosError) {
  return Promise.reject(error);
});

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default request;
