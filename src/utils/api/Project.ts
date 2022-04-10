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

  return await request.get(uri, { params });
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
  members: Member
) => {
  const uri = Uri.newProject.get();

  return await request.post<CreateProjectResponse>(uri, {
    name,
    field,
    type,
    members,
  });
};
