import Uri from "../../constant/Uri";
import { ProjectStatus } from "../../interface";
import ProjectTypes from "../../interface/ProjectTypes";
import RequestorType from "../../interface/RequestorType";
import request from "../axios";
import { ReportType } from "./User";

export interface Members {
  thumbnailUrl: string;
  uuid: string;
  studentNo: number;
  name: string;
  role: string;
}

export interface Project {
  uuid: string;
  projectName: string;
  projectDescription: string;
  projectView: string;
  projectType: ProjectTypes;
  projectField: string;
  projectStatus: ProjectStatus;
  projectResult: string;
  thumbnailUrl: string;
  emoji?: string;
  requestorType: RequestorType;
  members: Members[];
  plan?: ReportType;
  report?: ReportType;
}

export const getProject = async (projectUuid: string) => {
  return await request.get<Project>(Uri.project.get({ projectUuid }));
};

export const uploadImg = async (projectUuid: string, image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  return await request.post(Uri.uploadingThumbnails.get({ projectUuid }), formData);
};
