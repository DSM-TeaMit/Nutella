import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import queryKeys from "../constant/QueryKeys";
import storageKeys from "../constant/StorageKeys";
import { postUserInfo, InfoType, getOauthGoogle, TokenType } from "../utils/api/Signup";
import toast from "react-hot-toast";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const useOauthGoogle = (code: string | null) => {
  const navigate = useNavigate();

  const onSuccess = useCallback((data: AxiosResponse<TokenType, unknown>) => {
    const { accessToken, refreshToken } = data.data;
    localStorage.setItem(storageKeys.accessToken, accessToken);
    localStorage.setItem(storageKeys.refreshToken, refreshToken);
    localStorage.setItem(storageKeys.expireAt, getDateWithAddHour(24).toString());
  }, []);

  const onError = useCallback(
    (err: unknown) => {
      if (!axios.isAxiosError(err)) {
        toast.error("로그인 인증 오류. 다시 시도해주세요.");
        navigate("/");
        return;
      }

      if (err.response?.status === 403) {
        toast.error("학교 계정으로 인증해주세요.");
      } else if (err.response?.status === 422) {
        toast.error("탈퇴한 계정으로 서비스 이용은 불가능합니다.");
      } else {
        toast.error("인증 오류.");
      }
      navigate("/");
    },
    [navigate]
  );

  return useQuery([queryKeys.googleOauth, code], () => getOauthGoogle(code), {
    onSuccess,
    onError,
    retry: false,
  });
};

export const useUserInfo = () =>
  useMutation(({ data, code }: { data: InfoType; code?: string }) => postUserInfo(data, code));
