import { useCallback } from "react";
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

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.planDetail, projectUuid]);
  }, [projectUuid, queryClient]);

  return useMutation(
    (data: ParsedPlanType) => modifyPlanReport(projectUuid, data),
    { onSuccess }
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

  return useQuery([queryKeys.planDetail, projectUuid], queryFn, { onSuccess });
};

export const useSubmitPlanMutation = (projectUuid: string) =>
  useMutation(() => submitPlanReport(projectUuid));
