import Uri from "../../constant/Uri";
import request, { instance } from "../axios";
import { authGithubCode } from "./User";

export interface TokenType {
  type: "login" | "registration" | undefined;
  uuid: string;
  studentNo: number;
  name: string;
  userType: "user" | "admin";
  accessToken: string;
  refreshToken: string;
}

export const getOauthGoogle = async (code: string | null) => {
  const response = await instance.get<TokenType>(Uri.googleCallback.get(), {
    params: { code },
  });
  return response;
};

export interface InfoType {
  studentNo: number;
  name: string;
  githubId?: string;
}

export const postUserInfo = async (data: InfoType, code?: string) => {
  if (code) {
    await authGithubCode(code);
  }

  return await request.post(Uri.defaultInfomation.get(), data);
};
