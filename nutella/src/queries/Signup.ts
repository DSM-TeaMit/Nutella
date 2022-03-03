import { useMutation, useQueryClient, useQuery } from "react-query";
import {
  postUserInfo,
  InfoType,
  getOauthSignup,
  getOauthGithub,
} from "../utils/api/Signup";

export const useOauthGoogleSingup = (code: string | null) =>
  useQuery(["Signup", code], () => getOauthSignup(code), {
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data.data;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      
    },
  });

export const useUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: InfoType) => postUserInfo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["info"]);
    },
  });
};

export const useOauthGithubSignup = (code: string | null) =>
  useQuery(["GithubSignup", code], () => getOauthGithub(code));
