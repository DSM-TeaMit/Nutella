import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { ProjectTypes } from "../interface";
import {
  confirmProjectReport,
  ConfirmType,
  ConfirmValue,
  createProject,
  deleteProject,
  Member,
  modifyProjectInfo,
  modifyProjectMember,
  ProjectInfo,
  ProjectMember,
} from "../utils/api/Project";

export const useConfirmReport = (projectUuid: string, type: ConfirmType) => {
  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries([queryKeys.planDetail]);
    queryClient.invalidateQueries([queryKeys.result]);
  }, [queryClient]);

  return useMutation(
    (value: ConfirmValue) =>
      toast.promise(confirmProjectReport(projectUuid, type, value), {
        success: `${value === "approval" ? "승인" : "거절"} 성공`,
        error: `${value === "approval" ? "승인" : "거절"} 실패`,
        loading: `${value === "approval" ? "승인" : "거절"} 중...`,
      }),
    { onSuccess }
  );
};

interface CreateProject {
  name: string;
  field: string;
  role: string;
  type: ProjectTypes;
  members: Member[];
}

export const useCreateProject = () =>
  useMutation((data: CreateProject) =>
    toast.promise(createProject(data.name, data.field, data.type, data.members, data.role), {
      error: "프로젝트 생성 중 오류 발생",
      loading: "프로젝트 생성 중",
      success: "프로젝트 생성 성공",
    })
  );

export const useModifyProjectInfo = (projectUuid: string) => {
  return useMutation((data: ProjectInfo) => modifyProjectInfo(projectUuid, data), {});
};

export const useModifyProjectMember = (projectUuid: string) => {
  return useMutation((data: ProjectMember) => modifyProjectMember(projectUuid, data), {});
};

export const useDeleteProject = (projectUuid: string) => {
  return useMutation(() => deleteProject(projectUuid || ""));
};
