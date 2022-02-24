import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import { ReportStatus, ReportTypes } from "../../interface/Report";
import request from "../axios";

interface ReportType {
  uuid: string;
  projectName: string;
  type: ReportTypes;
  status: ReportStatus;
  thumbnailUrl: string;
}

interface ProjectMember {
  uuid: string;
  name: string;
  thumbnailUrl: string;
}

interface ProjectType {
  uuid: string;
  projectName: string;
  projectDescription: string;
  projectType: ProjectTypes;
  fields: string;
  members: ProjectMember[];
}

interface ProfileType {
  studentNo: number;
  name: string;
  email: string;
  githubId?: string;
  pendingCount: number;
  pendingProjects: ReportType[];
  projectCount: number;
  projects: ProjectType[];
}

export const getProfile = async (userUuid: string) => {
  const uri = Uri.userProfile.get({ userUuid });

  try {
    return await request.get<ProfileType>(uri);
  } catch (error) {
    console.log(error);
  }
};

interface UserProjects {
  count: number;
  projects: ProjectType[];
}

export const getUserProjects = async (userUuid: string) => {
  const uri = Uri.userProject.get({ userUuid });

  try {
    return await request.get<UserProjects>(uri);
  } catch (error) {
    console.log(error);
  }
};

interface ReportList {
  uuid: string;
  projectName: string;
  type: ReportTypes;
  thumbnailUrl: string;
}

interface Reports {
  count: number;
  projects: ReportList[];
}

interface UserReports {
  accepted: Reports;
  rejected: Reports;
  pending: Reports;
}

export const getUserReports = async (userUuid: string) => {
  const uri = Uri.userReports.get({ userUuid });

  try {
    return await request.get<UserReports>(uri);
  } catch (error) {
    console.log(error);
  }
};
