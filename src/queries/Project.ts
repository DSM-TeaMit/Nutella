import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
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

interface CreateProject {
  name: string;
  field: string;
  role: string;
  type: ProjectTypes;
  members: Member[];
}

export const useCreateProject = () =>
  useMutation((data: CreateProject) =>
    toast.promise(
      createProject(data.name, data.field, data.type, data.members, data.role),
      {
        error: "프로젝트 생성 중 오류 발생",
        loading: "프로젝트 생성 중",
        success: "프로젝트 생성 성공",
      }
    )
  );
