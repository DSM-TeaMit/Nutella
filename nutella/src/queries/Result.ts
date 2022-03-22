import { useMutation, useQuery } from "react-query";
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
  useQuery([queryKeys.result, projectUuid], async () => {
    const response = await getResultReport(projectUuid);

    setData(response.data);

    return response;
  });

export const useResultMutation = (projectUuid: string) =>
  useMutation((data: ParsedResultReport) =>
    modifyResultReport(projectUuid, data)
  );

export const useSubmitResultMutation = (projectUuid: string) =>
  useMutation(() => submitResultReport(projectUuid));
