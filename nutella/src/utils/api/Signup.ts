import Uri from "../../constant/Uri";
import request from "../axios";

export interface TokenType {
  type: string;
  accessToken: string | any;
  refreshToken: string | any;
}

export const getOauthSignup = async (code: string | null) => {
  const uri = `auth/callback-google?code=${code}`;
  const response = await request.get<TokenType>(uri);
  localStorage.setItem("access_token", response.data.accessToken);
  localStorage.setItem("refresh_token", response.data.refreshToken);
  const token = localStorage.getItem("access_token");
  const reftoken = localStorage.getItem("refresh_token");
  console.log(token);
  console.log(reftoken);
};

export interface InfoType {
  studentNo: string;
  name: string;
  githubId: string;
}

export const postUserInfo = async (data: any) => {
  await request.post<InfoType>(Uri.defaultInfomation.get(data));
};

export const getOauthGithub = async (code: string | null) => {
  const uri = `/auth/callback-github?code=${code}`;
  await request.get(uri);
};
