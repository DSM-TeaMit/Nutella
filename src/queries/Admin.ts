import { useCallback } from "react";
import toast from "react-hot-toast";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import LIMIT from "../constant/Limit";
import queryKeys from "../constant/QueryKeys";
import { List } from "../hooks/usePagination";
import Page from "../interface/Page";
import {
  AccountData,
  getCreatedAccount,
  postAccount,
  LoginType,
  postAdminLogin,
  deleteAdminAccount,
  AccountType,
} from "../utils/api/Admin";

export const useAdminLogin = () => useMutation((data: LoginType) => postAdminLogin(data), {});

export const useCreatedAccount = (initPage: number) =>
  useInfiniteQuery(
    [queryKeys.accounts],
    async ({ pageParam = initPage }) => {
      const data = await getCreatedAccount(LIMIT, pageParam);

      const p: Page<List<AccountType>> = {
        data: { list: data.data.accounts, count: data.data.count },
        page: pageParam,
      };

      return p;
    },
    { getNextPageParam: (lastPage) => lastPage.page + 1 }
  );

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

export const useDeleteAdminMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.accounts]);
  }, [queryClient]);

  return useMutation(
    (adminUuid: string) =>
      toast.promise(deleteAdminAccount(adminUuid), {
        loading: "선택한 계정 삭제 중",
        success: "선택한 계정 삭제 성공",
        error: "계정 삭제 실패. 다시 시도해주세요.",
      }),
    {
      onSuccess,
    }
  );
};
