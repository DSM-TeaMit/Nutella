import Uri from "../../constant/Uri";
import { ProjectTypes } from "../../interface";
import request from "../axios";

export type ConfirmType = "plan" | "report";
export type ConfirmValue = "approval" | "return";

export const confirmProjectReport = async (
  projectUuid: string,
  reportType: ConfirmType,
  value: ConfirmValue
) => {
  const uri = Uri.projectConfirm.get({ projectUuid });

  const params = {
    type: reportType,
    value: value === "approval",
  };

  return await request.patch(uri, {}, { params });
};

export interface Member {
  uuid: string;
  role: string;
}

interface CreateProjectResponse {
  uuid: string;
}

export const createProject = async (
  name: string,
  field: string,
  type: ProjectTypes,
  members: Member[],
  role: string
) => {
  const uri = Uri.newProject.get();

  return await request.post<CreateProjectResponse>(uri, {
    name,
    field,
    type,
    members,
    role,
  });
};

export interface ProjectInfo {
  name: string;
  description: string;
  field: string;
}

export const modifyProjectInfo = async (
  projectUuid: string,
  data: ProjectInfo
) => {
  return await request.patch(Uri.project.get({ projectUuid }), data);
};

export interface Member {
  uuid: string;
  role: string;
}
export interface ProjectMember {
  role: string;
  member: Member[];
}

export const modifyProjectMember = async (
  projectUuid: string,
  data: ProjectMember
) => {
  return await request.patch(
    Uri.modifyProjectMember.get({ projectUuid }),
    data
  );
};

export const deleteProject = async (projectUuid: string) => {
  return await request.delete(Uri.project.get({ projectUuid }));
};
