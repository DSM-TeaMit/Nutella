import axios, { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import { ReportStatus, ReportTypes } from "../../interface/Report";
import ReportPathType from "../../interface/ReportPathType";
import request from "../axios";

export interface ReportType {
  uuid: string;
  projectName: string;
  type: ReportTypes;
  status: ReportStatus;
  thumbnailUrl?: string;
}

export interface ProjectMember {
  uuid: string;
  name: string;
  thumbnailUrl?: string;
}

export interface ProjectType {
  uuid: string;
  projectName: string;
  projectDescription: string;
  projectType: ProjectTypes;
  fields: string;
  members: ProjectMember[];
  thumbnailUrl?: string;
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
  thumbnailUrl?: string;
}

export interface UserProfileType {
  studentNo: number;
  name: string;
  email: string;
  githubId?: string;
  projectCount: number;
  projects: ProjectType[];
  thumbnailUrl?: string;
}

export const getProfile = async (userUuid: string) => {
  const uri = Uri.userProfile.get({ userUuid });

  return await request.get<UserProfileType>(uri);
};

export const getMyProfile = async () => {
  const uri = Uri.myProfile.get();

  return await request.get<MyProfileType>(uri);
};

export const LIMIT = 20 as const;

export interface Pagination {
  limit: number;
  page: number;
}

export interface UserProjects {
  count: number;
  projects: ProjectType[];
}

export const getUserProjects = async (userUuid: string, page: number) => {
  const uri = Uri.userProject.get({ userUuid });

  const params: Pagination = {
    limit: LIMIT,
    page,
  };

  return await request.get<UserProjects>(uri, { params });
};

export const getMyProjects = async (page: number) => {
  const uri = Uri.myProjects.get();

  const params: Pagination = {
    limit: LIMIT,
    page,
  };

  return await request.get<UserProjects>(uri, { params });
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

interface EachReportPagination extends Pagination {
  type: ReportPathType;
}

export const getUserReports = async (userUuid: string, page: number) => {
  const uri = Uri.userReports.get({ userUuid });

  const params: Pagination = {
    limit: LIMIT,
    page,
  };

  return await request.get<UserReports>(uri, { params });
};

export const getEachReports = async (
  type: ReportPathType,
  page: number,
  userUuid?: string
) => {
  let uri = "";

  if (userUuid) {
    uri = Uri.userReports.get({ userUuid });
  } else {
    uri = Uri.eachMyReports.get();
  }

  const params: EachReportPagination = {
    limit: LIMIT,
    page,
    type,
  };

  return await request.get<UserReports>(uri, { params });
};

export const getMyReports = async (page: number) => {
  const uri = Uri.myReports.get();

  const params: Pagination = {
    limit: LIMIT,
    page,
  };

  return await request.get<UserReports>(uri, { params });
};

export const getUserGithub = async (githubId: string) => {
  const uri = `https://raw.githubusercontent.com/${githubId}/${githubId}/main/README.md`;

  return await axios.get<string>(uri);
};

export const deleteUser = async () => {
  const uri = Uri.user.get();

  return await request.delete(uri);
};

interface ModifyGithubId {
  githubId: string;
}

export const modifyGithubId = async (githubId: string) => {
  const uri = Uri.changeGithubId.get();

  return await request.put<any, AxiosResponse<any, any>, ModifyGithubId>(uri, {
    githubId,
  });
};
