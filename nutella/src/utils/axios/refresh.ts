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

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expire_at");
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken || !expireAt) {
    window.location.href = "/";
    localStorage.removeItem("expire_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }
  /* 이부분링크에code를담아서보내야하는데방법을잘모르겠어...!
   const uri = `auth/callback-google?code=${code}`;
  try {
    const { accessToken, refreshToken } = (await request.post(uri))
      .data;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("expire_at", getDateWithAddHour(2).toString());
  } catch {
    window.location.href = "/";
    localStorage.removeItem("expire_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }*/
  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export { refresh };
