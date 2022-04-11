import Uri from "../../constant/Uri";
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

  return await request.get(uri, { params });
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
