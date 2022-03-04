import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import storageKeys from "../constant/StorageKeys";
import useMessageContext from "../hooks/useMessageContext";
import {
  postUserInfo,
  InfoType,
  getOauthGoogle,
  getOauthGithub,
  TokenType,
} from "../utils/api/Signup";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const useOauthGoogle = (code: string | null) => {
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();

  const onSuccess = useCallback((data: AxiosResponse<TokenType, any>) => {
    const { accessToken, refreshToken } = data.data;
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem(
      storageKeys.expireAt,
      getDateWithAddHour(24).toString()
    );
  }, []);

  const onError = useCallback(() => {
    showMessage({
      type: "Denial",
      title: "학교 계정으로 인증해주세요.",
      content:
        "Teamit을 이용하려면 대덕소프트웨어마이스터고등학교 계정이 필요합니다.",
    });
    navigate("/");
  }, [showMessage, navigate]);

  return useQuery(["sign_up", code], () => getOauthGoogle(code), {
    onSuccess,
    onError,
    retry: false,
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
