import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  createResultReport,
  downloadFile,
  getFileExists,
  getResultReport,
  modifyResultReport,
  ParsedFullResultReport,
  ParsedResultReport,
  submitResultReport,
  uploadFile,
} from "../utils/api/Result";

export const useCreateResultMutation = (projectUuid: string) =>
  useMutation(() => createResultReport(projectUuid));

export const useResult = (projectUuid: string, setData: (data: ParsedFullResultReport) => void) =>
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
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

export const useResultMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  const onError = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.result, projectUuid]);
  }, [projectUuid, queryClient]);

  return useMutation(
    (data: ParsedResultReport) =>
      toast.promise(modifyResultReport(projectUuid, data), {
        loading: "저장 중",
        success: "저장 성공",
        error: "저장 실패",
      }),
    { onError }
  );
};

export const useSubmitResultMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.result]);
  }, [queryClient]);

  return useMutation(
    () =>
      toast.promise(submitResultReport(projectUuid), {
        success: "제출 성공.",
        error: "제출 실패. 다시 시도해주세요.",
        loading: "제출 중...",
      }),
    {
      onSuccess,
    }
  );
};

export const useFileMutation = (projectUuid: string) => {
  const upload = useMutation((file: File) =>
    toast.promise(uploadFile(projectUuid, file), {
      loading: "파일 업로드중...",
      error: "파일 업로드 실패. 파일 크기를 확인해주세요.",
      success: "파일 업로드 성공",
    })
  );

  const download = useMutation(() => downloadFile(projectUuid));

  return { upload, download };
};

export const useFileExists = (projectUuid: string) =>
  useQuery([queryKeys.file, projectUuid], () => getFileExists(projectUuid));
