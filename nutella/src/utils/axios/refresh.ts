import axios, { AxiosRequestConfig } from "axios";
import { instance } from ".";
import baseURL from "../../constant/BaseUrl";
import storageKeys from "../../constant/StorageKeys";
import Uri from "../../constant/Uri";

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

interface Token {
  accessToken: string;
  refreshToken: string;
}

export const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem(storageKeys.expireAt);
  const accessToken = localStorage.getItem(storageKeys.accessToken);
  const refreshToken = localStorage.getItem(storageKeys.refreshToken);

  if (!refreshToken || !expireAt) {
    //리프레시 토큰이 없거나 만료 기간이 로컬 스토리지에 없을때
    window.location.href = "/"; //로그인으로 보내고 스토리지를 비운다
    localStorage.removeItem(storageKeys.accessToken);
    localStorage.removeItem(storageKeys.refreshToken);
    localStorage.removeItem(storageKeys.expireAt);

    return config;
  }

  const uri = Uri.refresh.get();

  try {
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = (
      await instance.put<Token>(uri, { refreshToken })
    ).data;

    localStorage.setItem(storageKeys.accessToken, newAccessToken);
    localStorage.setItem(storageKeys.refreshToken, newRefreshToken);
    localStorage.setItem(
      storageKeys.expireAt,
      getDateWithAddHour(2).toString()
    );
  } catch {
    window.location.href = "/";
    localStorage.removeItem(storageKeys.accessToken);
    localStorage.removeItem(storageKeys.refreshToken);
    localStorage.removeItem(storageKeys.expireAt);

    return config;
  }
  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};
