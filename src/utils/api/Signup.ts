import Uri from "../../constant/Uri";
import { instance } from "../axios";

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
