import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from ".";

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

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export { refresh };
