import { useMutation, useQuery } from "react-query";
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
  useQuery(["plan_detail", projectUuid], () => getPlanReport(projectUuid));

export const useSubmitPlanMutation = (projectUuid: string) =>
  useMutation(() => submitPlanReport(projectUuid));
