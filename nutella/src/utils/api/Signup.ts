import Uri from "../../constant/Uri";
import request, { instance } from "../axios";

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
  studentNo: string;
  name: string;
  githubId?: string;
}

export const postUserInfo = async (data: unknown) => {
  await request.post<InfoType>(Uri.defaultInfomation.get(), data);
};
