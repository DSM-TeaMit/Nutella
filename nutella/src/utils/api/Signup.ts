import Uri from "../../constant/Uri";
import request from "../axios";

interface TokenType {
  type: string;
  accessToken: string | any;
  refreshToken: string | any;
}

export const getOauthSignup = async (code: string | null) => {
  const uri = `auth/callback-google?code=${code}`;
  try {
    const response = await request.get<TokenType>(uri);
    localStorage.setItem("access_token", response.data.accessToken);
    localStorage.setItem("refresh_token", response.data.refreshToken);
    const token = localStorage.getItem("access_token");
    const reftoken = localStorage.getItem("refresh_token");
    console.log(token);
    console.log(reftoken);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export interface InfoType {
  studentNo: string;
  name: string;
  githubId: string;
}

export const postUserInfo = async (data: any) => {
  try {
    const response = await request.post<InfoType>(
      Uri.defaultInfomation.get({
        "Content-Type": "application/json",
      }),

      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const githubOauth = async (code: string | null) => {
  const uri = `/auth/callback-github?code=${code}`;
  try {
    const response = await request.get(uri);
    console.log("rltgjqmehehlteksmsd");
  } catch (error) {
    console.log(error);
  }
};
