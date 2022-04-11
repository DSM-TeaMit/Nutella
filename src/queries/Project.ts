import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import {
  confirmProjectReport,
  ConfirmType,
  ConfirmValue,
  deleteProject,
  modifyProjectInfo,
  modifyProjectMember,
  ProjectInfo,
  ProjectMember,
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

export const useModifyProjectInfo = (
  projectUuid: string,
  data: ProjectInfo
) => {
  const onSuccess = () => {
    toast.success("프로젝트 정보 수정이 완료되었습니다.");
  };

  const onError = () => {
    toast.error("프로젝트 정보 수정이 실패되었습니다.");
  };

  return useMutation(() => modifyProjectInfo(projectUuid, data), {
    onSuccess,
    onError,
  });
};

export const useModifyProjectMember = (
  projectUuid: string,
  data: ProjectMember
) => {
  const onSuccess = () => {
    toast.success("프로젝트 멤버 수정이 완료되었습니다.");
  };

  const onError = () => {
    toast.error("프로젝트 멤버 수정이 실패되었습니다.");
  };

  return useMutation(() => modifyProjectMember(projectUuid, data), {
    onSuccess,
    onError,
  });
};

export const useDeleteProject = (projectUuid: string) => {
  const onSuccess = () => {
    toast.success("프로젝트 삭제가 완료되었습니다.");
  };

  const onError = () => {
    toast.error("프로젝트 삭제가 실패되었습니다.");
  };

  return useMutation(() => deleteProject(projectUuid), { onSuccess, onError });
};
