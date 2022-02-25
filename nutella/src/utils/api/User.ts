import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import { ReportStatus, ReportTypes } from "../../interface/Report";
import request from "../axios";

export interface ReportType {
  uuid: string;
  projectName: string;
  type: ReportTypes;
  status: ReportStatus;
  thumbnailUrl: string;
}

export interface ProjectMember {
  uuid: string;
  name: string;
  thumbnailUrl: string;
}

export interface ProjectType {
  uuid: string;
  projectName: string;
  projectDescription: string;
  projectType: ProjectTypes;
  fields: string;
  members: ProjectMember[];
}

export interface MyProfileType {
  studentNo: number;
  name: string;
  email: string;
  githubId?: string;
  pendingCount: number;
  pendingProjects: ReportType[];
  projectCount: number;
  projects: ProjectType[];
}

export interface UserProfileType {
  studentNo: number;
  name: string;
  email: string;
  githubId?: string;
  projectCount: number;
  projects: ProjectType[];
}

export const getProfile = async <T>(userUuid: string) => {
  const uri = Uri.userProfile.get({ userUuid });

  return await request.get<T>(uri);
};

export interface UserProjects {
  count: number;
  projects: ProjectType[];
}

export const getUserProjects = async (userUuid: string) => {
  const uri = Uri.userProject.get({ userUuid });

  return await request.get<UserProjects>(uri);
};

export interface ReportList {
  uuid: string;
  projectName: string;
  type: ReportTypes;
  thumbnailUrl: string;
}

export interface Reports {
  count: number;
  projects: ReportList[];
}

export interface UserReports {
  accepted: Reports;
  rejected: Reports;
  pending: Reports;
}

export const getUserReports = async (userUuid: string) => {
  const uri = Uri.userReports.get({ userUuid });

  return await request.get<UserReports>(uri);
};
