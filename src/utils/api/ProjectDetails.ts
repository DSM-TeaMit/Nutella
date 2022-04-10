import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import RequestorType from "../../interface/RequestorType";
import request from "../axios";

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
  projectStatus: string; // 한번 type 만들어 보기
  projectResult: string;
  thumbnailUrl: string;
  emoji?: string;
  requestorType: RequestorType;
  members: Members[];
}

export const getProject = async (projectUuid: string) => {
  return await request.get<Project>(Uri.project.get({ projectUuid }));
};