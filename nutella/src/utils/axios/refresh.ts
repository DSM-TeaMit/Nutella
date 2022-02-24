import axios, { AxiosRequestConfig } from "axios";
import baseURL from "../../constant/BaseUrl";

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expire_at");
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  /*
    토큰 리프레시 작업...
  */

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export { refresh };
