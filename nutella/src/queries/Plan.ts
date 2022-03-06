import { useMutation, useQuery } from "react-query";
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

export const usePlanMutation = (projectUuid: string) =>
  useMutation((data: ParsedPlanType) => modifyPlanReport(projectUuid, data));

export const usePlan = (projectUuid: string) =>
  useQuery([queryKeys.planDetail, projectUuid], () =>
    getPlanReport(projectUuid)
  );

export const useSubmitPlanMutation = (projectUuid: string) =>
  useMutation(() => submitPlanReport(projectUuid));
