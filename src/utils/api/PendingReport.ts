import LIMIT from "../../constant/Limit";
import Uri from "../../constant/Uri";
import { Pagination, ProjectTypes } from "../../interface";
import { ReportTypes } from "../../interface";
import request from "../axios";

export interface PendingReport {
  projectName: string;
  projectType: ProjectTypes;
  reportType: ReportTypes;
  submittedAt: string;
  uuid: string;
  writer: {
    studentNo: number;
    name: string;
  };
  emoji: string;
  thumbnailUrl: string;
}

export interface PendingReportList {
  count: number;
  projects: PendingReport[];
}

export const getPendingReports = async (page: number) => {
  const uri = Uri.pendingReport.get();

  const params: Pagination = {
    limit: LIMIT,
    page,
  };

  return await request.get<PendingReportList>(uri, { params });
};
