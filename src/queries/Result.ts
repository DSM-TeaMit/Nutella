import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  createResultReport,
  getResultReport,
  modifyResultReport,
  ParsedFullResultReport,
  ParsedResultReport,
  submitResultReport,
} from "../utils/api/Result";

export const useCreateResultMutation = (projectUuid: string) =>
  useMutation(() => createResultReport(projectUuid));

export const useResult = (
  projectUuid: string,
  setData: (data: ParsedFullResultReport) => void
) =>
  useQuery(
    [queryKeys.result, projectUuid],
    async () => {
      const response = await getResultReport(projectUuid);

      setData(response.data);

      return response;
    },
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

export const useResultMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  const onMutateEnd = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.result, projectUuid]);
  }, [projectUuid, queryClient]);

  return useMutation(
    (data: ParsedResultReport) =>
      toast.promise(modifyResultReport(projectUuid, data), {
        loading: "저장 중",
        success: "저장 성공",
        error: "저장 실패",
      }),
    { onSettled: onMutateEnd }
  );
};

export const useSubmitResultMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.result, projectUuid]);
  }, [projectUuid, queryClient]);

  return useMutation(() => submitResultReport(projectUuid), { onSuccess });
};
