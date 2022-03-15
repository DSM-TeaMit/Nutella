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

export const useSubmitPlanMutation = (projectUuid: string) =>
  useMutation(() => submitPlanReport(projectUuid));
