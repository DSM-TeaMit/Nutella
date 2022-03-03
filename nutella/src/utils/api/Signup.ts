import Uri from "../../constant/Uri";
import request from "../axios";

export interface TokenType {
  type: "login" | "registration" | undefined;
  uuid: string;
  studentNo: number;
  name: string;
  userType: "user" | "admin";
  accessToken: string;
  refreshToken: string;
}

export const getOauthSignup = async (code: string | null) => {
  const response = await request.get<TokenType>(Uri.googleCallback.get(), {
    params: { code },
  });
  return response;
};

export interface InfoType {
  studentNo: string;
  name: string;
  githubId: string;
}

export const postUserInfo = async (data: any) => {
  await request.post<InfoType>(Uri.defaultInfomation.get(), data);
};

export const getOauthGithub = async (code: string | null) => {
  const uri = `/auth/callback-github?code=${code}`;
  await request.get(uri);
};
