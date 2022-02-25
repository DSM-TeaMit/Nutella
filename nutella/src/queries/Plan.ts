import { useMutation, useQuery } from "react-query";
import {
  createPlanReport,
  getPlanReport,
  modifyPlanReport,
  ParsedPlanType,
} from "../utils/api/Plan";

export const useCreatePlanMutation = (projectUuid: string) =>
  useMutation(() => createPlanReport(projectUuid));

export const usePlanMutation = (projectUuid: string) =>
  useMutation((data: ParsedPlanType) => modifyPlanReport(projectUuid, data));

export const usePlan = (projectUuid: string) =>
  useQuery(["plan_detail", projectUuid], () => getPlanReport(projectUuid));
