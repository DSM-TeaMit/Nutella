import axios, { AxiosRequestConfig } from "axios";
import baseURL from "../../constant/BaseUrl";

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

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expire_at");
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const code = localStorage.getItem("google_code");
  if (!refreshToken || !expireAt) {
    window.location.href = "/";
    localStorage.removeItem("expire_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }

  const uri = `auth/callback-google`;

  try {
    const { accessToken, refreshToken } = (
      await request.post<Token>(uri, null, {
        params: { code },
      })
    ).data;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("expire_at", getDateWithAddHour(2).toString());
  } catch {
    window.location.href = "/";
    localStorage.removeItem("expire_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }
  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export { refresh };
