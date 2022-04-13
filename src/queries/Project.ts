import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ProjectTypes } from "../interface";
import {
  confirmProjectReport,
  ConfirmType,
  ConfirmValue,
  deleteProject,
  modifyProjectInfo,
  modifyProjectMember,
  ProjectInfo,
  ProjectMember,
  createProject,
  Member,
} from "../utils/api/Project";

export const useConfirmReport = (projectUuid: string, type: ConfirmType) => {
  const queryClient = useQueryClient();
  

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries(projectUuid);
  }, [projectUuid, queryClient]);

  return useMutation(
    (value: ConfirmValue) =>
      toast.promise(confirmProjectReport(projectUuid, type, value), {
        success: "승인 성공",
        error: "승인 중 오류 발생",
        loading: "승인 중...",
      }),
    { onSuccess }
  );
};
