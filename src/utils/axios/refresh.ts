import axios, { AxiosRequestConfig } from "axios";
import { instance } from ".";
import baseURL from "../../constant/BaseUrl";
import storageKeys from "../../constant/StorageKeys";
import Uri from "../../constant/Uri";
import { RefreshError } from "../../interface";

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

export const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem(storageKeys.expireAt);
  let accessToken = localStorage.getItem(storageKeys.accessToken);
  const refreshToken = localStorage.getItem(storageKeys.refreshToken);

  if (!refreshToken || !expireAt) {
    //리프레시 토큰이 없거나 만료 기간이 로컬 스토리지에 없을때
    throw new RefreshError("NO_TOKEN");
  }

  const uri = Uri.refresh.get();

  if (new Date() >= new Date(expireAt)) {
    //현재 시간이 엑세스 토큰 만료 시간을 지났을 때

    try {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = (
        await instance.put<Token>(uri, { refreshToken })
      ).data;

      localStorage.setItem(storageKeys.accessToken, newAccessToken);
      localStorage.setItem(storageKeys.refreshToken, newRefreshToken);
      localStorage.setItem(storageKeys.expireAt, getDateWithAddHour(24).toString());

      accessToken = newAccessToken;
    } catch (error) {
      //토큰 리프레시시 오류 발생 (토큰 만료 등)
      if (axios.isAxiosError(error)) {
        if (error.response && error.response?.status === 401) {
          //토큰 만료
          throw new RefreshError("EXPIRED_TOKEN");
        }
      }
      //다른 오류
      throw new RefreshError("NETWORK_ERROR");
    }
  }

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};
