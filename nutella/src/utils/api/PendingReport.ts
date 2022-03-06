import LIMIT from "../../constant/Limit";
import Uri from "../../constant/Uri";
import Pagination from "../../interface/Pagination";
import ProjectTypes from "../../interface/ProjectTypes";
import { ReportTypes } from "../../interface/Report";
import request from "../axios";

export interface PendingReport {
  projectName: string;
  projectType: ProjectTypes;
  reportType: ReportTypes;
  submittedAt: string;
  writer: {
    studentNo: number;
    name: string;
  };
}

interface PendingReportList {
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
