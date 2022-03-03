import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { Admin, User } from "../context/UserContext";
import useUserContext from "../hooks/useUserContext";
import {
  postUserInfo,
  InfoType,
  getOauthGoogle,
  getOauthGithub,
  TokenType,
} from "../utils/api/Signup";

export const useOauthGoogle = (code: string | undefined) => {
  const [, setUser] = useUserContext();

  const onSuccess = useCallback(
    (data: AxiosResponse<TokenType, any>) => {
      const { accessToken, refreshToken, uuid, name, studentNo, userType } =
        data.data;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      const userData: User | Admin =
        userType === "user"
          ? { uuid, name, studentNo, userType }
          : { uuid, name, userType };

      setUser(userData);
    },
    [setUser]
  );

  return useQuery(["sign_up", code], () => getOauthGoogle(code), {
    onSuccess: onSuccess,
  });
};

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
