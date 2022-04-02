import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  AccountData,
  getCreatedAccount,
  postAccount,
  LoginType,
  postAdminLogin,
} from "../utils/api/Admin";

export const useAdminLogin = () =>
  useMutation((data: LoginType) => postAdminLogin(data), {});

export const useCreatedAccount = () =>
  useQuery([queryKeys.accounts], () => getCreatedAccount());

export const useAccountMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.accounts]);
  }, [queryClient]);

  return useMutation(
    (data: AccountData) =>
      toast.promise(postAccount(data), {
        loading: "계정 추가 중",
        success: "계정 추가 성공",
        error: "계정 추가 실패. 다시 시도해주세요.",
      }),
    {
      onSuccess,
    }
  );
};
