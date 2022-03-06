import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import queryKeys from "../constant/QueryKeys";
import storageKeys from "../constant/StorageKeys";
import {
  postUserInfo,
  InfoType,
  getOauthGoogle,
  getOauthGithub,
  TokenType,
} from "../utils/api/Signup";
import toast from "react-hot-toast";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const useOauthGoogle = (code: string | null) => {
  const navigate = useNavigate();

  const onSuccess = useCallback((data: AxiosResponse<TokenType, any>) => {
    const { accessToken, refreshToken } = data.data;
    localStorage.setItem(storageKeys.accessToken, accessToken);
    localStorage.setItem(storageKeys.refreshToken, refreshToken);
    localStorage.setItem(
      storageKeys.expireAt,
      getDateWithAddHour(24).toString()
    );
  }, []);

  const onError = useCallback(() => {
    toast.error("학교 계정으로 인증해주세요.");
    navigate("/");
  }, [navigate]);

  return useQuery([queryKeys.googleOauth, code], () => getOauthGoogle(code), {
    onSuccess,
    onError,
    retry: false,
  });
};

export const useUserInfo = () =>
  useMutation((data: InfoType) => postUserInfo(data));

export const useOauthGithubSignup = (code: string | null) =>
  useQuery([queryKeys.githubOauth, code], () => getOauthGithub(code));
