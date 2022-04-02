import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  createPlanReport,
  getPlanReport,
  modifyPlanReport,
  ParsedPlanType,
  submitPlanReport,
} from "../utils/api/Plan";

export const useCreatePlanMutation = (projectUuid: string) =>
  useMutation(() => createPlanReport(projectUuid));

export const usePlanMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  const onMutateEnd = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.planDetail, projectUuid]);
  }, [projectUuid, queryClient]);

  return useMutation(
    (data: ParsedPlanType) =>
      toast.promise(modifyPlanReport(projectUuid, data), {
        loading: "저장 중",
        success: "저장 성공",
        error: "저장 실패",
      }),
    { onSettled: onMutateEnd }
  );
};

export const usePlan = (
  projectUuid: string,
  setPlan: React.Dispatch<React.SetStateAction<ParsedPlanType | undefined>>,
  onSuccess: () => void
) => {
  const queryFn = useCallback(async () => {
    const { data } = await getPlanReport(projectUuid);
    setPlan(data);

    return data;
  }, [projectUuid, setPlan]);

  return useQuery([queryKeys.planDetail, projectUuid], queryFn, {
    onSuccess,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};

export const useSubmitPlanMutation = (projectUuid: string) => {
  const onSuccess = useCallback(() => {
    toast.success("제출 완료.");
  }, []);

  const onError = useCallback(() => {
    toast.error("제출 실패. 다시 시도해주세요.");
  }, []);

  return useMutation(() => submitPlanReport(projectUuid), {
    onSuccess,
    onError,
  });
};
