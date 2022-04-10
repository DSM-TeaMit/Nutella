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
  Member,
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

interface CreateProject {
  name: string;
  field: string;
  type: ProjectTypes;
  members: Member;
}

export const useCreateProject = () =>
  useMutation((data: CreateProject) =>
    toast.promise(
      createProject(data.name, data.field, data.type, data.members),
      {
        error: "프로젝트 생성 중 오류 발생",
        loading: "프로젝트 생성 중",
        success: "프로젝트 생성 성공",
      }
    )
  );
