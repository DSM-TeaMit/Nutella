import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  confirmProjectReport,
  ConfirmType,
  ConfirmValue,
} from "../utils/api/Project";

export const useConfirmReport = (projectUuid: string, type: ConfirmType) => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.planDetail, projectUuid]);
  }, [projectUuid, queryClient]);

  const onError = useCallback((_, variables: ConfirmValue) => {
    toast.error(`보고서 ${variables === "approval" ? "승인" : "거절"} 실패`);
  }, []);

  return useMutation(
    (value: ConfirmValue) => confirmProjectReport(projectUuid, type, value),
    { onSuccess, onError }
  );
};
