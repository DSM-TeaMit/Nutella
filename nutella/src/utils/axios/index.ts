import axios, { AxiosError } from "axios";
import { refresh } from "./refresh";

export const baseURL = "https://spectre-psnldev.dev:8202/";

const request = axios.create({
  baseURL,
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
