import { useMutation, useQuery } from "react-query";
import {
  createResultReport,
  getResultReport,
  modifyResultReport,
  ParsedResultReport,
  submitResultReport,
} from "../utils/api/Result";

export const useCreateResultMutation = (projectUuid: string) =>
  useMutation(() => createResultReport(projectUuid));

export const useResult = (projectUuid: string) =>
  useQuery(["result", projectUuid], () => getResultReport(projectUuid));

export const useResultMutation = (projectUuid: string) =>
  useMutation((data: ParsedResultReport) =>
    modifyResultReport(projectUuid, data)
  );

export const useSubmitResultMutation = (projectUuid: string) =>
  useMutation(() => submitResultReport(projectUuid));
